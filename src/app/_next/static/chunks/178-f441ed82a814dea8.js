(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [178],
    {
        1037: (e, t, a) => {
            'use strict';
            a.d(t, { c: () => m });
            var i = a(67379),
                l = a(20934),
                s = a(59450),
                n = a(71035),
                o = a(79670),
                r = a(26742),
                d = a(25488),
                c = a(97952),
                u = a(84e3);
            let m = () => {
                let { hash: e } = (0, s.gf)(),
                    t = (0, u.U)(),
                    a = (0, s.st)(),
                    { pageId: m } = (0, c.$)(),
                    { blockId: b, blockType: v, blockPosX: p, blockPosY: h } = (0, r.N)(),
                    { objectType: x, objectId: _, objectPosX: j, objectPosY: g, objectsCount: y, mainObjectId: A, mainObjectType: f } = (0, d.J)();
                return (0, n.c)((s, n) => {
                    if (!a || !m) return;
                    let r = o.W[m];
                    if (!r) return;
                    let d = {
                        to: s,
                        objectType: x,
                        objectId: _,
                        objectPosX: j,
                        objectPosY: g,
                        hash: e,
                        pageId: r,
                        mainObjectType: f,
                        mainObjectId: A,
                        entityType: v,
                        entityId: b,
                        entityPosX: p,
                        entityPosY: h,
                        objectsCount: y,
                        from: r,
                    };
                    n && (d.deepLink = n);
                    let c = (0, i.F)({ params: d, logger: t, context: 'useSendEventOnDonationNavigated' });
                    c && (0, l.QS)(a.evgenInstance, c);
                });
            };
        },
        1361: (e) => {
            e.exports = { plusPaywallButton: 'PageHeaderAlbum_plusPaywallButton__yJWCh', booksLogo: 'PageHeaderAlbum_booksLogo__f4gjV' };
        },
        2710: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => l });
            var i = a(52393);
            let l = (e) => e === i.K.EXPLICIT;
        },
        4805: (e, t, a) => {
            'use strict';
            a.d(t, { F: () => p });
            var i = a(25839),
                l = a(88204),
                s = a(74631),
                n = a(61493),
                o = a(50209),
                r = a(3718),
                d = a(2096),
                c = a(77737),
                u = a(61801),
                m = a(69730),
                b = a(57963),
                v = a.n(b);
            let p = (0, l.PA)((e) => {
                let { track: t, albumArtists: a, position: l, playContextParams: b, withLightning: p } = e,
                    h = (0, o.D)({ playContextParams: b, entityId: t.entityId }),
                    x = (0, s.useCallback)((e) => (0, i.jsx)(u.G, { track: t, position: l, className: v().playButtonCell, ...e }), [t, l]);
                return (0, i.jsx)(m.C, {
                    track: t,
                    withLightning: p,
                    meta: (0, i.jsx)(c.j, { variant: r.X.ALBUM, albumArtists: a, track: t, withSavingQueryParams: !0 }),
                    playButtonCellRender: x,
                    controls: (0, i.jsx)(d.Q, { withLightning: p, track: t, className: v().controlsBarCell, utmLink: b.contextData.utmLink }),
                    ...h,
                    'data-test-id': n.Kq.track.TRACK_ALBUM,
                });
            });
        },
        7784: (e, t, a) => {
            'use strict';
            a.d(t, { I: () => m });
            var i = a(25839),
                l = a(82298),
                s = a(61493),
                n = a(4071),
                o = a(66738),
                r = a(86869),
                d = a(6323),
                c = a(93222),
                u = a.n(c);
            let m = (e) => {
                let { coverVariant: t, coverUri: a, isAvailable: c, className: m, withPlusBadge: b, onClick: v, 'aria-label': p, customCover: h, buttonClassName: x } = e;
                return (0, i.jsxs)(r.t, {
                    radius: 'round' === t ? 'round' : 'm',
                    className: (0, l.$)(u().root, m, { [u().root_hoverable]: !!v }),
                    children: [
                        (0, i.jsx)(n.$, {
                            className: (0, l.$)(u().coverButton, x),
                            onClick: v,
                            'aria-label': p,
                            tabIndex: v ? 0 : -1,
                            disabled: !v,
                            'data-test-id': s.S7.ENTITY_COVER_BUTTON,
                            children: h || (0, i.jsx)(d.B, { fit: 'cover', src: a, size: 300, className: u().coverImage, withAvatarReplace: !0, isAvailable: c }),
                        }),
                        b && (0, i.jsx)(o.I, { variant: 'plusBadge', className: u().plusBadge }),
                    ],
                });
            };
        },
        8266: (e, t, a) => {
            'use strict';
            a.d(t, { b: () => i });
            let i = (e, t) => {
                let a = new URL(window.location.href),
                    i = a.searchParams;
                return (i.set(e, t), (a.search = i.toString()), a.toString());
            };
        },
        10684: (e) => {
            e.exports = {
                meta: 'PageHeaderAlbumMeta_meta__zsMI8',
                artistCover: 'PageHeaderAlbumMeta_artistCover__L3jJ0',
                artistLabel: 'PageHeaderAlbumMeta_artistLabel__2WZSM',
                year: 'PageHeaderAlbumMeta_year__2X3NO',
                artists: 'PageHeaderAlbumMeta_artists__Nfdob',
                artistsSpoiler: 'PageHeaderAlbumMeta_artistsSpoiler__VOkfE',
                artistLink: 'PageHeaderAlbumMeta_artistLink__eTSrZ',
                year_dot: 'PageHeaderAlbumMeta_year_dot__TrSFr',
            };
        },
        10944: (e, t, a) => {
            'use strict';
            a.d(t, { c: () => u });
            var i = a(25839),
                l = a(82298),
                s = a(88204),
                n = a(74631),
                o = a(23976),
                r = a(27954),
                d = a(56918),
                c = a.n(d);
            let u = (0, s.PA)((e) => {
                let { className: t, coverRadius: a = 'm', isActive: s } = e,
                    {
                        settings: { isMobile: d },
                    } = (0, r.g)(),
                    u = (0, n.useMemo)(
                        () =>
                            d
                                ? (0, i.jsxs)('div', {
                                      className: c().controls,
                                      children: [
                                          (0, i.jsx)(o.W, { className: c().button, radius: 'round', isActive: s }),
                                          (0, i.jsx)(o.W, { className: c().button, radius: 'round', isActive: s }),
                                          (0, i.jsx)(o.W, { className: c().button, radius: 'round', isActive: s }),
                                      ],
                                  })
                                : (0, i.jsxs)('div', {
                                      className: c().controls,
                                      children: [
                                          (0, i.jsx)(o.W, { className: c().desktopPlayButton, isActive: s }),
                                          (0, i.jsx)(o.W, { className: c().button, radius: 'round', isActive: s }),
                                          (0, i.jsx)(o.W, { className: c().button, radius: 'round', isActive: s }),
                                          (0, i.jsx)(o.W, { className: c().button, radius: 'round', isActive: s }),
                                      ],
                                  }),
                        [s, d],
                    );
                return (0, i.jsxs)('div', {
                    className: (0, l.$)(c().root, t),
                    children: [
                        (0, i.jsx)(o.W, { className: c().cover, radius: a, isActive: s }),
                        (0, i.jsxs)('div', {
                            className: c().content,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: c().info,
                                    children: [
                                        (0, i.jsx)(o.W, { className: c().entityName, radius: 's', isActive: s }),
                                        (0, i.jsx)(o.W, { className: c().title, radius: 'xl', isActive: s }),
                                        (0, i.jsx)(o.W, { className: c().meta, radius: 's', isActive: s }),
                                    ],
                                }),
                                u,
                            ],
                        }),
                    ],
                });
            });
        },
        11560: (e, t, a) => {
            'use strict';
            a.d(t, { S: () => s });
            var i = a(25839),
                l = a(89288);
            let s = (e) => {
                let { value: t } = e,
                    a = { '@context': 'https://schema.org', ...t };
                return (0, i.jsx)('script', { type: 'application/ld+json', dangerouslySetInnerHTML: { __html: (0, l.Gr)(a) } });
            };
        },
        16978: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => b });
            var i = a(25839),
                l = a(8487),
                s = a(84059),
                n = a(61493),
                o = a(71035),
                r = a(4071),
                d = a(4254),
                c = a(57024),
                u = a(36484),
                m = a(62562);
            let b = (e) => {
                let { size: t = 'm', variant: a = 'default', color: b = 'primary', withRipple: v = !0, buttonText: p, isBlock: h, key: x, className: _ } = e,
                    j = (0, s.useRouter)(),
                    g = (0, m.N)().get(u.QG),
                    y = (0, o.c)(() => {
                        g.authorizationUrl && ((0, c.uV)({ stage: 'attempt-start', trigger: 'user' }), j.push(g.authorizationUrl));
                    });
                return (0, i.jsx)(
                    r.$,
                    {
                        onClick: y,
                        className: _,
                        isBlock: h,
                        color: b,
                        variant: a,
                        size: t,
                        radius: 'xxxl',
                        withRipple: v,
                        'data-test-id': n.S7.UNAUTHORIZED_BUTTON,
                        children: p || (0, i.jsx)(d.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, i.jsx)(l.A, { id: 'authorization.enter-button' }) }),
                    },
                    x,
                );
            };
        },
        18421: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { C: () => s }),
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
                })(i || (i = {})));
            let l = new Set(Object.values(i)),
                s = (e) => 'string' == typeof e && l.has(e);
        },
        21171: (e) => {
            e.exports = { root: 'TextVolume_root__wxSaK' };
        },
        22293: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => m });
            var i = a(74631),
                l = a(67379),
                s = a(44031),
                n = a(87277),
                o = a(59450),
                r = a(71035),
                d = a(84e3),
                c = a(79670),
                u = a(97952);
            let m = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    { autoSend: t = !0 } = e,
                    a = (0, o.st)(),
                    m = (0, d.U)(),
                    { hash: b } = (0, o.gf)(),
                    { pageId: v } = (0, u.$)(),
                    p = (0, r.c)(function () {
                        let { deepLink: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (
                            !a ||
                            !v ||
                            !b ||
                            !(() => {
                                for (let [e, t] of new URLSearchParams(window.location.search))
                                    if ((e.startsWith('utm_') || 'ref_id' === e) && '' !== t.trim()) return !0;
                                return !1;
                            })()
                        )
                            return;
                        let t = c.W[v];
                        if (!t) return;
                        let i = {
                                hash: b,
                                pageId: s.AppScreen.Link,
                                entityType: s.EntityTypes.Deeplink,
                                entityId: s.EntityTypes.Deeplink,
                                from: s.AppScreen.Link,
                                to: t,
                                deepLink: null != e ? e : window.location.href,
                            },
                            o = (0, l.F)({ params: i, logger: m, context: 'useSendDeeplinkNavigationEvent' });
                        o && (0, n.ID)(a.evgenInstance, o);
                    });
                return (
                    (0, i.useEffect)(() => {
                        t && p();
                    }, [t, p]),
                    (0, r.c)(function () {
                        let { deepLink: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        t || p({ deepLink: e });
                    })
                );
            };
        },
        23347: (e) => {
            e.exports = { root: 'Shimmer_root__NvUMY' };
        },
        23430: (e) => {
            e.exports = {
                tabCarousel: 'NonMusicContent_tabCarousel__EBHWC',
                tab: 'NonMusicContent_tab__LIh_U',
                contentAbout: 'NonMusicContent_contentAbout__BMIP5',
                infoBlock: 'NonMusicContent_infoBlock__IyjXA',
                infoTitle: 'NonMusicContent_infoTitle__Wf9EC',
                lastEpisodes: 'NonMusicContent_lastEpisodes__Xa8Xp',
                rewindControl: 'NonMusicContent_rewindControl__7tncY',
                label: 'NonMusicContent_label__9GlIS',
            };
        },
        24323: (e) => {
            e.exports = { popover: 'AlbumDonationMenu_popover__Fswfa' };
        },
        26712: (e, t, a) => {
            'use strict';
            a.d(t, { l: () => aW });
            // for PulseSync WebHost: BEGIN imports for native addon header metadata items
            var pulseSyncHeaderReact = a(74631),
                pulseSyncHeaderJsx = a(25839),
                pulseSyncHeaderText = a(4254),
                pulseSyncHeaderIcon = a(66738),
                pulseSyncHeaderClassNames = a(82298);

            // for PulseSync WebHost: END imports for native addon header metadata items
            var i = a(25839),
                l = a(88204),
                s = a(74631),
                n = a(84059),
                o = a(44031),
                r = a(61493),
                d = a(49656),
                c = a(99430),
                u = a(8487),
                m = a(71035),
                b = a(4071),
                v = a(66738),
                p = a(4254),
                h = a(53712),
                x = a(85686),
                _ = a(27954),
                j = a(42722),
                g = a.n(j);
            let y = (0, l.PA)(() => {
                let { slam: e } = (0, _.g)(),
                    t = (0, x.Z)(h.Z.mymusicDownloadsTracks.href),
                    a = (0, x.Z)(h.Z.settings.href),
                    l = (0, m.c)(() => {
                        window.location.href = h.Z.main.href;
                    }),
                    n = (0, s.useMemo)(
                        () =>
                            e.isOfflineModeEnabled ? (0, i.jsx)(u.A, { id: 'offline.offline-mode-enabled' }) : (0, i.jsx)(u.A, { id: 'offline.no-internet-connection' }),
                        [e.isOfflineModeEnabled],
                    ),
                    o = (0, s.useMemo)(
                        () =>
                            e.isOfflineModeEnabled
                                ? (0, i.jsx)(b.$, {
                                      onClick: a,
                                      className: g().button,
                                      color: 'secondary',
                                      size: 'l',
                                      radius: 'xxxl',
                                      children: (0, i.jsx)(p.HL, {
                                          type: 'controls',
                                          variant: 'span',
                                          size: 'm',
                                          children: (0, i.jsx)(u.A, { id: 'offline.disable-offline-mode' }),
                                      }),
                                  })
                                : (0, i.jsx)(b.$, {
                                      onClick: l,
                                      className: g().button,
                                      color: 'secondary',
                                      size: 'l',
                                      radius: 'xxxl',
                                      children: (0, i.jsx)(p.HL, {
                                          type: 'controls',
                                          variant: 'span',
                                          size: 'm',
                                          children: (0, i.jsx)(u.A, { id: 'page-error.restart-app-button' }),
                                      }),
                                  }),
                        [l, a, e.isOfflineModeEnabled],
                    );
                return (0, i.jsx)('div', {
                    className: g().root,
                    children: (0, i.jsxs)('div', {
                        className: g().container,
                        children: [
                            (0, i.jsx)(v.I, { className: g().icon, variant: 'offline', size: 'xxl' }),
                            (0, i.jsx)(p.DZ, { className: g().title, variant: 'div', size: 'xs', children: n }),
                            (0, i.jsx)(p.HL, {
                                className: g().text,
                                variant: 'span',
                                type: 'text',
                                size: 'l',
                                weight: 'normal',
                                children: (0, i.jsx)(u.A, { id: 'offline.listen-downloaded-content' }),
                            }),
                            (0, i.jsxs)('div', {
                                className: g().buttons,
                                children: [
                                    o,
                                    (0, i.jsx)(b.$, {
                                        color: 'primary',
                                        onClick: t,
                                        role: 'link',
                                        size: 'l',
                                        radius: 'xxxl',
                                        className: g().button,
                                        children: (0, i.jsx)(u.A, { id: 'interface-actions.go-to-collection' }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                });
            });
            var A = a(6969),
                f = a(59911),
                C = a(1407),
                k = a(25895),
                T = a(99835),
                N = a(20258),
                P = a(22293),
                I = a(83243),
                O = a(95858),
                L = a(10322),
                S = a(58509),
                E = a(56480);
            let B = (e) => {
                let { pageAlbumId: t, children: a } = e,
                    l = (0, s.useMemo)(() => ({ pageAlbumId: t }), [t]);
                return (0, i.jsx)(E.H.Provider, { value: l, children: a });
            };
            var w = a(28764),
                D = a(89192),
                M = a(30716),
                R = a(56412),
                U = a(10603),
                H = a(88720),
                z = a(61732),
                X = a(12234),
                F = a(89221),
                V = a(33920),
                K = a(41242),
                Y = a(27935),
                $ = a(41016),
                W = a(80461),
                G = a(95445),
                q = a(56829),
                Z = a(34546);
            function Q(e) {
                let { type: t, genre: a } = e;
                return [q._.AUDIOBOOK, q._.FAIRY_TALE].includes(null != t ? t : '') || ['audiobooksinenglish', 'fiction'].includes(null != a ? a : '');
            }
            function J(e) {
                return { minutes: Math.floor((e / 60) % 60), hours: Math.floor(e / 60 / 60) };
            }
            var ee = a(22403);
            function et(e) {
                let { albumType: t, messageFormatter: a } = e;
                switch (t) {
                    case q._.SINGLE:
                        return a({ id: 'metadata.single' });
                    case q._.PODCAST:
                        return a({ id: 'metadata.podcast' });
                    case q._.AUDIOBOOK:
                        return a({ id: 'metadata.audiobook' });
                    case q._.FAIRY_TALE:
                        return a({ id: 'metadata.fairy-tale' });
                    default:
                        return a({ id: 'metadata.album' });
                }
            }
            async function ea(e, t) {
                var a, i, l, s;
                if (!e) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let n = await (0, F.W)(t.locale),
                    o = (0, K.N)(e.title);
                return {
                    title:
                        null != (a = t.disclaimerTitle)
                            ? a
                            : (function (e) {
                                  let { albumMeta: t, messageFormatter: a } = e,
                                      i = (0, Z.j)(t.artists);
                                  return Q({ type: t.type, genre: t.genre })
                                      ? i
                                          ? a(
                                                { id: 'metadata.audiobook-title-with-artists' },
                                                { albumTitle: t.title, artistsNames: i, artistsNamesCount: t.artists.length },
                                            )
                                          : a({ id: 'metadata.audiobook-title-without-artists' }, { albumTitle: t.title })
                                      : t.type === q._.PODCAST
                                        ? a({ id: 'metadata.podcast-title' }, { albumTitle: t.title })
                                        : i
                                          ? a({ id: 'metadata.album-title-with-artists' }, { albumTitle: t.title, artistsNames: i })
                                          : a({ id: 'metadata.album-title-without-artists' }, { albumTitle: t.title });
                              })({ albumMeta: e, messageFormatter: n }),
                    description: (function (e) {
                        let { albumMeta: t, messageFormatter: a } = e,
                            i = (0, Z.j)(t.artists);
                        return Q({ type: t.type, genre: t.genre })
                            ? i
                                ? a({ id: 'metadata.audiobook-title-with-artists' }, { albumTitle: t.title, artistsNames: i, artistsNamesCount: t.artists.length })
                                : a({ id: 'metadata.audiobook-title-without-artists' }, { albumTitle: t.title })
                            : t.type === q._.PODCAST
                              ? a({ id: 'metadata.podcast-title' }, { albumTitle: t.title })
                              : i
                                ? a({ id: 'metadata.album-title-with-artists' }, { albumTitle: t.title, artistsNames: i })
                                : a({ id: 'metadata.album-title-without-artists' }, { albumTitle: t.title });
                    })({ albumMeta: e, messageFormatter: n }),
                    openGraph: (0, Y.i)({
                        ogTitle: o,
                        ogDescription: (function (e) {
                            var t, a, i;
                            let { albumMeta: l, messageFormatter: s } = e,
                                n = (0, ee.Y)((0, Z.j)(l.artists), 96, !1);
                            if (Q({ type: l.type, genre: l.genre })) {
                                let { hours: e, minutes: a } = J(null != (t = l.durationSec) ? t : 0),
                                    i = s({ id: 'metadata.hours-and-minutes' }, { hours: e, minutes: a });
                                return [n, et({ albumType: l.type, messageFormatter: s }), i].join(' • ');
                            }
                            return l.type === q._.PODCAST
                                ? [
                                      (0, ee.Y)(null != (a = l.description) ? a : '', 96, !1),
                                      et({ albumType: l.type, messageFormatter: s }),
                                      s({ id: 'metadata.subscribers' }, { subscribers: null != (i = l.likesCount) ? i : 0 }),
                                  ].join(' • ')
                                : [n, et({ albumType: l.type, messageFormatter: s }), l.year].join(' • ');
                        })({ albumMeta: e, messageFormatter: n }),
                        fullUrl: null != (i = t.fullUrl) ? i : '',
                        locale: t.locale,
                        ogImage: e.ogImage,
                        siteName: n({ id: 'metadata.yandex-music' }),
                        ogType: 'music.album',
                    }),
                    twitter: (0, $.H)({ cardType: W.W.APP, title: o, url: t.url, appName: n({ id: 'metadata.yandex-music' }) }),
                    appLinks: (0, X.X)({
                        additional: { ...t, url: null != (l = t.url) ? l : '', fullUrl: null != (s = t.fullUrl) ? s : '', host: t.host },
                        appName: n({ id: 'metadata.yandex-music' }),
                    }),
                    other: { 'music:musician': (0, V.x)(e.artists, t.host) },
                    alternates: (0, G.S)('/album/:albumId', t.tld, { params: { albumId: e.id } }),
                };
            }
            var ei = a(39004),
                el = a(91149),
                es = a(92942),
                en = a(57549),
                eo = a(43354),
                er = a(89288),
                ed = a(78159),
                ec = a(11560);
            let eu = (0, l.PA)((e) => {
                var t, a, l, s, n, o, r, d, c, u, m, b, v, p;
                let { user: h, album: x } = e;
                return h.isAuthorized
                    ? null
                    : (0, i.jsx)(ec.S, {
                          value: {
                              '@type': 'MusicAlbum',
                              name: null != (u = null == (t = x.meta) ? void 0 : t.title) ? u : void 0,
                              description: null != (m = x.description) ? m : void 0,
                              url: null != (b = null == (a = x.meta) ? void 0 : a.url) ? b : void 0,
                              image: (null == (l = x.meta) ? void 0 : l.coverUri) ? (0, er.lU)(null == (s = x.meta) ? void 0 : s.coverUri, 'orig') : void 0,
                              genre: null != (v = null == (n = x.meta) ? void 0 : n.genre) ? v : void 0,
                              datePublished: null != (p = null == (r = x.meta) || null == (o = r.year) ? void 0 : o.toString()) ? p : void 0,
                              tracks:
                                  null == (d = x.tracks)
                                      ? void 0
                                      : d
                                            .map((e) => e.data)
                                            .filter((e) => !!(null == e ? void 0 : e.url))
                                            .map((e) => {
                                                var t;
                                                return { '@type': 'MusicRecording', name: e.title, duration: (0, ed.F)(null != (t = e.durationMs) ? t : 0), url: e.url };
                                            }),
                              potentialAction: {
                                  '@type': 'ListenAction',
                                  expectsAcceptanceOf: {
                                      '@type': 'Offer',
                                      category: 'free',
                                      target: { '@type': 'EntryPoint', actionPlatform: null == (c = x.meta) ? void 0 : c.url },
                                  },
                              },
                          },
                      });
            });
            var em = a(31892),
                eb = a.n(em),
                ev = a(82298),
                ep = a(22939),
                eh = a(16886),
                ex = a(49807),
                e_ = a(10944),
                ej = a(73614),
                eg = a(79367),
                ey = a(40110),
                eA = a(61777),
                ef = a(95314),
                eC = a(30290),
                ek = a(29872),
                eT = a(61561),
                eN = a(22101),
                eP = a(50209),
                eI = a(49438),
                eO = a(87148),
                eL = a.n(eO);
            let eS = (e) => {
                let { className: t, albumType: a } = e,
                    {
                        settings: { isMobile: l },
                        paywall: n,
                    } = (0, _.g)(),
                    { formatMessage: o } = (0, ei.A)(),
                    d = (0, s.useCallback)(
                        (e) => {
                            (n.openModal(), e.stopPropagation());
                        },
                        [n],
                    ),
                    c = (0, s.useMemo)(() => {
                        switch (a) {
                            case q._.SINGLE:
                                return o({ id: 'payment.single-offer-button-title' });
                            case q._.PODCAST:
                                return o({ id: 'payment.podcast-offer-button-title' });
                            case q._.AUDIOBOOK:
                                return o({ id: 'payment.books-offer-button-title' });
                            case q._.FAIRY_TALE:
                                return o({ id: 'payment.fairy-tale-offer-button-title' });
                            default:
                                return o({ id: 'payment.album-offer-button-title' });
                        }
                    }, [a, o]);
                return l
                    ? (0, i.jsxs)(b.$, {
                          onClick: d,
                          className: (0, ev.$)(eL().root, t),
                          color: 'plus',
                          size: 'l',
                          radius: 'xxxl',
                          children: [
                              (0, i.jsx)(p.HL, { className: eL().title, weight: 'bold', variant: 'div', size: 'l', children: c }),
                              (0, i.jsx)(p.HL, {
                                  className: eL().subtitle,
                                  weight: 'normal',
                                  variant: 'div',
                                  size: 'xs',
                                  children: (0, i.jsx)(u.A, { id: 'payment.yandex-plus-offer-button' }),
                              }),
                          ],
                      })
                    : (0, i.jsxs)(b.$, {
                          onClick: d,
                          className: (0, ev.$)(eL().root, t),
                          color: 'plus',
                          size: 'l',
                          radius: 'xxxl',
                          'data-test-id': r.S7.PLUS_PAYWALL_BUTTON,
                          children: [
                              (0, i.jsx)(p.HL, { className: eL().title, weight: 'bold', variant: 'div', size: 'm', children: c }),
                              (0, i.jsx)(p.HL, {
                                  className: eL().subtitle,
                                  weight: 'normal',
                                  variant: 'div',
                                  size: 'xs',
                                  children: (0, i.jsx)(u.A, { id: 'payment.yandex-plus-offer-button' }),
                              }),
                          ],
                      });
            };
            var eE = a(49999),
                eB = a(75160),
                ew = a(16573),
                eD = a(71705),
                eM = a(36577),
                eR = a(34159),
                eU = a(21468),
                eH = a(64720),
                ez = a(41580),
                eX = a(71996),
                eF = a(95924),
                eV = a(67716),
                eK = a.n(eV);
            let eY = (0, l.PA)((e) => {
                var t;
                let { album: a, likeButtonAriaLabel: l, withLikeButton: n = !0, donationButton: c, contextMenuChildren: b } = e,
                    {
                        user: h,
                        settings: { isMobile: x },
                        trailer: j,
                        albumCPA: { isPlusCPAEnabled: g, isPlusCPAPlayerBarEnabled: y },
                    } = (0, _.g)(),
                    { shouldShowBuySubscriptionModal: A, showBuySubscriptionModal: f } = (0, ek.q)(),
                    [C, k] = (0, s.useState)(!1),
                    T = (0, eD.K)(a),
                    N = (0, eM.A)(a),
                    { formatNumber: P } = (0, ei.A)(),
                    I = (0, eR.F)(),
                    { utmLink: O } = (0, eC.f)({ contextId: a.id, contextType: ep.K.Album }),
                    L = (0, eg.P)(),
                    { controlSize: S, iconSize: E } = (0, eE.q)(x),
                    { pageAlbumId: B } = (0, eU.T)(),
                    w = g({ pageAlbumId: B, albumId: a.id, isNonMusic: a.isNonMusic }),
                    D = y(a.id, a.isNonMusic),
                    M = !w && !h.isAuthorized,
                    R = (0, m.c)(() => {
                        if (A && !D) return void f();
                        L() || (j.setUtmLink(O), j.openAlbumTrailer(a.id), I(o.DomainObjectType.Album, String(a.id)));
                    }),
                    U = (0, s.useMemo)(() => {
                        var e;
                        return (null == (e = a.trailer) ? void 0 : e.isAvailable) && !x
                            ? (0, i.jsx)(eF.L, {
                                  children: (0, i.jsx)(eX.k, {
                                      size: 's',
                                      radius: 'xxxl',
                                      iconSize: 'xxs',
                                      className: eK().trailerControl,
                                      disabled: !a.isAvailable,
                                      onClick: R,
                                      children: (0, i.jsx)(u.A, { id: 'entity-names.trailer' }),
                                  }),
                              })
                            : null;
                    }, [null == (t = a.trailer) ? void 0 : t.isAvailable, a.isAvailable, R, x]),
                    H = (0, d.L)(() => {
                        if (!x) return (0, s.isValidElement)(c) ? c : (0, i.jsx)(ez.O, { size: S, iconSize: E, onClick: N, isPinned: a.isPinned });
                    }),
                    z = (0, d.L)(() => {
                        if (a.actualLikesCount && 0 !== a.actualLikesCount && !x)
                            return (0, i.jsx)(p.HL, {
                                variant: 'span',
                                type: 'controls',
                                size: 's',
                                weight: 'medium',
                                children: a.actualLikesCount && P(a.actualLikesCount),
                            });
                    }),
                    X = (0, d.L)(() => {
                        if (n)
                            return (0, i.jsx)(ef.B, {
                                objectType: a.mainObjectType,
                                objectId: String(a.id),
                                objectPosX: 1,
                                objectPosY: 1,
                                objectsCount: 1,
                                mainObjectType: a.mainObjectType,
                                mainObjectId: String(a.id),
                                children: (0, i.jsx)(eH.c, {
                                    className: eK().likeControl,
                                    isLiked: a.isLiked,
                                    onClick: T,
                                    variant: 'default',
                                    size: S,
                                    iconSize: E,
                                    withRipple: !x,
                                    disabled: M,
                                    'aria-label': l,
                                    children: z,
                                }),
                            });
                    });
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        U,
                        X,
                        (0, s.isValidElement)(H) && (0, i.jsx)('div', { className: eK().pinOrDonationControl, children: H }),
                        (0, i.jsx)(ew.x, {
                            album: a,
                            open: C,
                            onOpenChange: k,
                            wrapperClassName: eK().menuControl,
                            size: S,
                            icon: (0, i.jsx)(v.I, { size: E, variant: 'more' }),
                            variant: eB.z.PAGE,
                            'data-test-id': r.e8.pageHeader.ALBUM_HEADER_CONTEXT_MENU_BUTTON,
                            children: b,
                        }),
                    ],
                });
            });
            var e$ = a(86869),
                eW = a(56348),
                eG = a(6323);
            let eq = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    t = e.filter((e) => !e.isComposer),
                    a = t.filter((e) => !e.various),
                    i = e.filter((e) => e.isComposer && !e.various),
                    l = [];
                return (a.length > 0 ? (l = a) : t.length > 0 && (l = t), l.concat(i));
            };
            var eZ = a(10684),
                eQ = a.n(eZ);
            let eJ = (0, l.PA)((e) => {
                // for PulseSync WebHost: BEGIN refresh header metadata when native addon slots change
                let [, pulseSyncSetHeaderSlotRevision] = (0, pulseSyncHeaderReact.useState)(0);
                (0, pulseSyncHeaderReact.useEffect)(() => {
                    const onNativeSlotChange = (e) => {
                        if (e.detail === 'headerInfoItems') pulseSyncSetHeaderSlotRevision((e) => e + 1);
                    };
                    document.addEventListener('pulsesync:native-slot-change', onNativeSlotChange);
                    return () => document.removeEventListener('pulsesync:native-slot-change', onNativeSlotChange);
                }, []);

                // for PulseSync WebHost: END refresh header metadata when native addon slots change
                var t, a, l, n;
                let { album: o, withArtistLink: d = !0 } = e,
                    {
                        settings: { isMobile: c },
                    } = (0, _.g)(),
                    u = (0, s.useMemo)(() => eq(o.artists), [o.artists]),
                    m = (null == u ? void 0 : u.length) === 1 && !(null == (t = u[0]) ? void 0 : t.decomposed) && !(null == (a = u[0]) ? void 0 : a.various);
                // for PulseSync WebHost: BEGIN render native addon items in album header metadata
                const pulseSyncInjectHeaderAlbumItems = (items) =>
                    window.pulsesyncApi?.injectNativeSlotItems?.('headerInfoItems', items, {
                        eventDetail: null,
                        renderItem: ({ key, payload, position }) => {
                            const text = String(payload?.text ?? '').trim(),
                                icon = String(payload?.icon ?? '').trim(),
                                label = String(payload?.label ?? text).trim(),
                                variant = 'block' === payload?.display ? 'div' : 'span';
                            if (!text && !icon) return null;
                            return (0, pulseSyncHeaderJsx.jsxs)(
                                pulseSyncHeaderText.HL,
                                {
                                    variant,
                                    type: 'text',
                                    size: 'm',
                                    weight: 'medium',
                                    className: (0, pulseSyncHeaderClassNames.$)(eQ().year, {
                                        [eQ().year_dot]: position > 0,
                                    }),
                                    ...(label
                                        ? {
                                              'aria-label': label,
                                          }
                                        : {}),
                                    'data-pulsesync-addon-header-item': 'meta',
                                    children: [
                                        icon &&
                                            (0, pulseSyncHeaderJsx.jsx)(pulseSyncHeaderIcon.I, {
                                                variant: icon,
                                                size: 'xxxs',
                                            }),
                                        text,
                                    ],
                                },
                                key,
                            );
                        },
                    }) ?? items;
                // for PulseSync WebHost: END render native addon items in album header metadata
                return (0, i.jsx)(ef.B, {
                    objectType: o.mainObjectType,
                    objectId: String(o.id),
                    objectPosX: 1,
                    objectPosY: 1,
                    objectsCount: null == (l = o.artists) ? void 0 : l.length,
                    children: (0, i.jsxs)('div', {
                        className: eQ().meta,
                        // for PulseSync WebHost: BEGIN inject native addon items into album header metadata
                        children: pulseSyncInjectHeaderAlbumItems(
                            // for PulseSync WebHost: BEGIN drop empty header metadata items before addon injection
                            [
                                (0, pulseSyncHeaderJsx.jsxs)(pulseSyncHeaderJsx.Fragment, {
                                    children: [
                                        m &&
                                            (0, i.jsx)(e$.t, {
                                                radius: 'round',
                                                className: eQ().artistCover,
                                                children: (0, i.jsx)(eG.B, { src: null == (n = u[0]) ? void 0 : n.coverUri, size: 30, withAvatarReplace: !0 }),
                                            }),
                                        (0, i.jsx)(eW.i, {
                                            artists: u,
                                            lineClamp: c ? 1 : void 0,
                                            className: eQ().artists,
                                            spoilerClassName: eQ().artistsSpoiler,
                                            visibleArtistsCount: c ? void 0 : 2,
                                            linkClassName: eQ().artistLink,
                                            captionClassName: eQ().artistLabel,
                                            variant: c ? 'breakAll' : 'breakWord',
                                            withLink: d,
                                        }),
                                    ],
                                }),
                                o.year &&
                                    (0, i.jsx)(p.HL, {
                                        variant: 'div',
                                        type: 'text',
                                        size: 'm',
                                        weight: 'medium',
                                        className: (0, ev.$)(eQ().year, { [eQ().year_dot]: u.length > 0 }),
                                        'data-test-id': r.e8.pageHeader.ALBUM_RELEASE_DATE,
                                        children: o.year,
                                    }),
                            ].filter(Boolean),
                            // for PulseSync WebHost: END drop empty header metadata items before addon injection
                        ),
                        // for PulseSync WebHost: END inject native addon items into album header metadata
                    }),
                });
            });
            var e0 = a(92543),
                e1 = a(7784),
                e2 = a(58091),
                e8 = a.n(e2),
                e9 = a(1361),
                e4 = a.n(e9);
            let e7 = (0, l.PA)((e) => {
                    let { album: t, donationButton: a, contextMenuChildren: l, className: n, 'aria-labelledby': r, forwardRef: d, onVersionClick: c } = e,
                        { formatMessage: b } = (0, ei.A)(),
                        { shouldShowBuySubscriptionModal: p, showBuySubscriptionModal: h } = (0, ek.q)(),
                        x = (0, eA.f)(),
                        { from: j, utmLink: g } = (0, eC.f)({ pageId: N._Q.ALBUM, blockId: ey.U.ALBUM, contextType: ep.K.Album, contextId: t.id }),
                        y = (0, eg.P)(),
                        {
                            user: A,
                            settings: { isMobile: f },
                            sonataState: C,
                            track: { isTrackPage: k },
                            modals: { imageSliderModal: T },
                            albumCPA: { isPlusCPAPlayerBarEnabled: P },
                            paywall: { modal: I },
                        } = (0, _.g)(),
                        { iconSize: O, controlSize: L } = (0, eE.q)(f),
                        S = f && !A.isAuthorized && t.isAvailable,
                        E = f && !A.hasPlus && A.isAuthorized && t.isAvailable,
                        B = S || E,
                        w = (0, eT.N)(),
                        D = !A.hasPlus && t.isAvailableOnlyForPlus,
                        M = !!t.coverUri,
                        R = P(t.id, t.isNonMusic),
                        U = (0, ej.r)(t.type),
                        H = (0, eN.j)();
                    (0, s.useEffect)(() => {
                        x();
                    }, [x]);
                    let z = (0, s.useMemo)(() => {
                            if (t.shouldShowBooksBadge) return (0, i.jsx)(v.I, { variant: 'yandexBooks'.concat(H), className: e4().booksLogo });
                        }, [t.shouldShowBooksBadge, H]),
                        { isPlaying: X, togglePlay: F } = (0, eP.D)({
                            playContextParams: {
                                contextData: { type: ep.K.Album, meta: { id: t.id }, from: j, utmLink: g },
                                loadContextMeta: !0,
                                entitiesData: C.unloadedEntitiesDataFromModels,
                            },
                        }),
                        V = (0, m.c)(() => {
                            t.coverUri && T.openImages({ images: [t.coverUri] });
                        }),
                        K = (0, m.c)(() => {
                            if (!y()) {
                                if (p && !R) return void h();
                                if (w && !R) return void I.open();
                                F();
                            }
                        }),
                        Y = (0, s.useMemo)(
                            () =>
                                D
                                    ? (0, i.jsx)(eS, { className: e4().plusPaywallButton, albumType: t.type })
                                    : f
                                      ? (0, i.jsx)(eI.D, {
                                            className: (0, ev.$)(e8().playControl, { [e8().playControl_withLogin]: B }),
                                            buttonVariant: 'default',
                                            iconSize: B ? O : 'xxl',
                                            size: B ? L : void 0,
                                            isPlaying: X,
                                            onClick: K,
                                            variant: B ? 'default' : 'filled',
                                            disabled: !t.isAvailable,
                                            shouldSendAnalyticsOnPlayClick: !0,
                                        })
                                      : (0, i.jsx)(eI.D, {
                                            className: e8().playControl,
                                            withRipple: !0,
                                            buttonVariant: 'default',
                                            radius: 'xxxl',
                                            size: 's',
                                            color: 'primary',
                                            iconSize: 'xxs',
                                            isPlaying: X,
                                            onClick: K,
                                            disabled: !t.isAvailable,
                                            shouldSendAnalyticsOnPlayClick: !0,
                                            children: (0, i.jsx)(u.A, { id: 'player-actions.listen' }),
                                        }),
                            [D, f, X, K, t.isAvailable, t.type, B, O, L],
                        ),
                        $ = (0, s.useMemo)(
                            () =>
                                (0, i.jsx)('div', {
                                    className: e8().controlsContainer,
                                    children: (0, i.jsxs)('div', {
                                        className: e8().controls,
                                        children: [
                                            (0, i.jsx)(ef.B, {
                                                objectType: o.DomainObjectType.Album,
                                                objectId: String(t.id),
                                                objectPosX: 1,
                                                objectPosY: 1,
                                                objectsCount: 1,
                                                mainObjectType: o.DomainObjectType.Album,
                                                mainObjectId: String(t.id),
                                                children: Y,
                                            }),
                                            (0, i.jsx)(eY, { donationButton: a, album: t, withLikeButton: !D, contextMenuChildren: l }),
                                        ],
                                    }),
                                }),
                            [t, a, Y, D, l],
                        );
                    return (0, i.jsx)(e0.k, {
                        ref: d,
                        headingVariant: k ? 'div' : 'h1',
                        className: n,
                        controls: $,
                        meta: (0, i.jsx)(eJ, { album: t }),
                        entityName: U,
                        entityNameIcon: z,
                        title: t.title,
                        cover: (0, i.jsx)(e1.I, {
                            coverVariant: 'square',
                            coverUri: t.coverUri,
                            isAvailable: t.isAvailable,
                            withPlusBadge: t.isAvailableOnlyForPlus,
                            onClick: M ? V : void 0,
                            'aria-label': M ? b({ id: 'slider.view-cover' }) : void 0,
                        }),
                        'aria-labelledby': r,
                        version: t.version,
                        onVersionClick: c,
                        showMobileLoginButton: S,
                        showMobileSubscriptionButton: E,
                    });
                }),
                e3 = (0, s.forwardRef)((e, t) => (0, i.jsx)(e7, { forwardRef: t, ...e }));
            var e6 = a(77635),
                e5 = a(49200),
                te = a(4805),
                tt = a(86358),
                ta = a(57138),
                ti = a(39058),
                tl = a(79422),
                ts = a(44806),
                tn = a(99401),
                to = a(26076),
                tr = a(75501),
                td = a(36159);
            let tc = (e) => {
                let { album: t } = e;
                return (0, s.useCallback)(
                    (e) => {
                        let a = [];
                        for (let i = e.startIndex; i <= e.endIndex; i++) {
                            let e = t.items[i];
                            (null == e ? void 0 : e.type) === tr.S.TRACK && (null == e ? void 0 : e.loadingState) === td.G.IDLE && a.push(e.id);
                        }
                        a.length && t.getTracks({ trackIds: a });
                    },
                    [t],
                );
            };
            var tu = a(3718),
                tm = a(36648),
                tb = a(97805),
                tv = (function (e) {
                    return ((e.TRACK = 'TRACK'), (e.TEXT = 'TEXT'), e);
                })({}),
                tp = a(23347),
                th = a.n(tp);
            let tx = (e) => {
                let { shimmerVariant: t, trackVariant: a = tu.X.ALBUM } = e;
                switch (t) {
                    case tv.TRACK:
                        return (0, i.jsx)(tb.D, { isActive: !0, className: (0, ev.$)({ [th().root]: a === tu.X.ALBUM }), variant: a });
                    case tv.TEXT:
                        return (0, i.jsx)(tm.n, { className: th().root });
                }
            };
            var t_ = a(21171),
                tj = a.n(t_);
            let tg = (e) => {
                    let { text: t } = e;
                    return (0, i.jsx)('div', { className: tj().root, children: (0, i.jsx)(p.DZ, { variant: 'h2', className: eb().text, children: t }) });
                },
                ty = (e) => !!e && 'object' == typeof e && (('type' in e && e.type === tt.r.TEXT) || ('id' in e && 'positionInContext' in e)),
                tA = (e) => {
                    let { element: t, isNonMusic: a, album: l } = e,
                        { formatMessage: s } = (0, ei.A)();
                    return (e) => {
                        var n;
                        let o = null == l || null == (n = l.items) ? void 0 : n[e],
                            r = ((e, t, a) => {
                                let { hasAlbum: i, isAlbumRejected: l, isNonMusic: s } = e;
                                return a && i && !l
                                    ? a.type === tt.r.TEXT
                                        ? a.data || a.loadingState === td.G.REJECT
                                            ? s
                                                ? { kind: 'season', number: a.data, text: t({ id: 'entity-names.season-number' }, { number: a.data }) }
                                                : { kind: 'disk', number: a.data, text: t({ id: 'entity-names.disk-number' }, { number: a.data }) }
                                            : null
                                        : a.data
                                          ? { kind: 'track', track: a.data, withLightning: a.isBest && !a.data.isRemoved }
                                          : null
                                    : null;
                            })({ hasAlbum: !!l.meta, isAlbumRejected: l.isRejected, isNonMusic: !!a }, s, ty(o) ? o : void 0);
                        if (o && (null == r ? void 0 : r.kind) === 'track') return t(o, e, r.withLightning);
                        if ((null == r ? void 0 : r.kind) === 'season' || (null == r ? void 0 : r.kind) === 'disk') return (0, i.jsx)(tg, { text: r.text });
                        if (!o || !l.meta || l.isRejected || !ty(o)) return (0, i.jsx)(tx, { shimmerVariant: tv.TRACK, trackVariant: tu.X.ALBUM });
                        if (!o.data && !o.isRejected)
                            switch (o.type) {
                                case tt.r.TEXT:
                                    return (0, i.jsx)(tx, { shimmerVariant: tv.TEXT });
                                case tr.S.TRACK:
                                    return (0, i.jsx)(tx, { shimmerVariant: tv.TRACK, trackVariant: tu.X.ALBUM });
                                default:
                                    if (a) return (0, i.jsx)(tx, { shimmerVariant: tv.TRACK, trackVariant: tu.X.PLAYLIST });
                            }
                    };
                };
            var tf = a(1037),
                tC = a(95641),
                tk = a(33005),
                tT = a(52512);
            let tN = (0, l.PA)((e) => {
                let { url: t } = e,
                    a = (0, tf.c)(),
                    l = (0, tC.C)(),
                    { ref: s, intersectionPropertyId: n } = (0, tT.n)({ callback: l, withViewUuid: !0 }),
                    r = (0, x.Z)(t),
                    d = (0, m.c)((e) => {
                        (a(o.AppScreen.Link, t), r(e));
                    });
                return (0, i.jsx)(tk.v, { onClick: d, ref: s, 'data-intersection-property-id': n });
            });
            var tP = a(42057),
                tI = a(58301),
                tO = a(91809),
                tL = a(1797);
            let tS = (0, l.PA)((e) => {
                    let { donation: t } = e,
                        a = (0, tf.c)(),
                        l = (0, tC.C)(),
                        s = (0, e5.Q)()(t.url),
                        { ref: n, intersectionPropertyId: r } = (0, tT.n)({ callback: l, withViewUuid: !0 }),
                        d = (0, x.Z)(s),
                        c = (0, x.Z)(t.artist.url),
                        u = (0, m.c)((e) => {
                            (a(o.AppScreen.ArtistScreen), c(e));
                        }),
                        b = (0, m.c)(() => {
                            (a(o.AppScreen.Link, s), d());
                        }),
                        v = (0, tL.S)({ artist: t.artist, callback: u });
                    return (0, i.jsx)(tO.X, {
                        ref: n,
                        'data-intersection-property-id': r,
                        artist: t.artist,
                        goal: t.goal,
                        onNavigateToArtist: v,
                        onNavigateToDonation: b,
                    });
                }),
                tE = (0, l.PA)((e) => {
                    var t, a, l;
                    let { className: n, headerClassName: r, containerClassName: d, headingVariant: c } = e,
                        { formatMessage: u } = (0, ei.A)(),
                        { album: m } = (0, _.g)(),
                        b = (0, s.useMemo)(() => {
                            var e, t;
                            return (null == (e = m.donations) ? void 0 : e.isLoading) || !(null == (t = m.donations) ? void 0 : t.items)
                                ? (0, tI.k)(!0)
                                : m.donations.items.map((e, t) => {
                                      var a, l, s;
                                      return (0, i.jsx)(
                                          ef.B,
                                          {
                                              objectType: o.DomainObjectType.Donation,
                                              objectId: e.artist.id,
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              objectsCount: Number(null == (l = m.donations) || null == (a = l.items) ? void 0 : a.length),
                                              mainObjectId: String(null == (s = m.meta) ? void 0 : s.id),
                                              mainObjectType: o.DomainObjectType.Album,
                                              children: (0, i.jsx)(tS, { donation: e }, e.artist.id),
                                          },
                                          e.artist.id,
                                      );
                                  });
                        }, [null == (t = m.donations) ? void 0 : t.isLoading, null == (a = m.donations) ? void 0 : a.items, null == (l = m.meta) ? void 0 : l.id]);
                    return (0, i.jsx)(tP.x, {
                        className: n,
                        headerClassName: r,
                        containerClassName: d,
                        title: u({ id: 'donation.support-text' }),
                        headingVariant: c,
                        children: b,
                    });
                });
            var tB = a(10820),
                tw = a(59342),
                tD = a(67379),
                tM = a(87277),
                tR = a(59450),
                tU = a(79670),
                tH = a(25488),
                tz = a(97952),
                tX = a(84e3),
                tF = a(24323),
                tV = a.n(tF),
                tK = a(23818),
                tY = a(20934),
                t$ = a(26742),
                tW = a(84252),
                tG = a.n(tW);
            let tq = (0, l.PA)((e) => {
                    let { donation: t } = e,
                        a = (0, e5.Q)()(t.url),
                        l = (0, x.Z)(a),
                        s = (() => {
                            let { hash: e } = (0, tR.gf)(),
                                t = (0, tX.U)(),
                                a = (0, tR.st)(),
                                { pageId: i } = (0, tz.$)(),
                                { blockId: l, blockType: s, blockPosX: n, blockPosY: r } = (0, t$.N)(),
                                { objectType: d, objectId: c, objectPosX: u, objectPosY: b, objectsCount: v, mainObjectId: p, mainObjectType: h } = (0, tH.J)();
                            return (0, m.c)(() => {
                                if (!a || !i) return;
                                let m = tU.W[i];
                                if (!m) return;
                                let x = {
                                        userInteractionType: o.UserInteractionType.Tap,
                                        hash: e,
                                        pageId: m,
                                        pageStyle: o.PageStyles.ContextMenu,
                                        pagePlacement: o.PagePlacements.Hover,
                                        mainObjectType: h,
                                        mainObjectId: p,
                                        objectType: d,
                                        objectId: c,
                                        objectPosX: u,
                                        objectPosY: b,
                                        entityType: s,
                                        entityId: l,
                                        entityPosX: n,
                                        entityPosY: r,
                                        objectsCount: v,
                                        actionType: o.UserInteractionType.Tap,
                                    },
                                    _ = (0, tD.F)({ params: x, logger: t, context: 'useSendEventOnDonationMenuItemActionPerformed' });
                                _ && (0, tY.l6)(a.evgenInstance, _);
                            });
                        })(),
                        n = (0, tC.C)(),
                        { ref: r, intersectionPropertyId: d } = (0, tT.n)({ callback: n, withViewUuid: !0 }),
                        c = (0, m.c)(() => {
                            (s(), l());
                        });
                    return (0, i.jsxs)(
                        tB.Dr,
                        {
                            ref: r,
                            'data-intersection-property-id': d,
                            className: tG().root,
                            isBlock: !0,
                            onClick: c,
                            children: [
                                (0, i.jsx)(e$.t, {
                                    radius: 'round',
                                    className: tG().cover,
                                    children: (0, i.jsx)(tK._V, { withAvatarReplace: !0, src: t.artist.coverUri, size: 100, fit: 'contain', className: tG().image }),
                                }),
                                (0, i.jsx)(p.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.artist.name }),
                            ],
                        },
                        a,
                    );
                }),
                tZ = (0, l.PA)(() => {
                    var e;
                    let {
                            settings: { isMobile: t },
                            album: { donations: a, meta: l },
                        } = (0, _.g)(),
                        { formatMessage: n } = (0, ei.A)(),
                        r = (() => {
                            let e = (0, tR.st)(),
                                t = (0, tX.U)(),
                                { hash: a } = (0, tR.gf)(),
                                { pageId: i } = (0, tz.$)(),
                                { mainObjectId: l, mainObjectType: s } = (0, tH.J)();
                            return (0, m.c)((n) => {
                                if (!e || !i || !tU.W[i]) return;
                                let r = {
                                    pageStyle: o.PageStyles.ContextMenu,
                                    pagePlacement: o.PagePlacements.Hover,
                                    mainObjectType: s,
                                    mainObjectId: l,
                                    hash: a,
                                    pageId: i,
                                };
                                n && (r.viewUuid = String((0, tw.A)()));
                                let d = (0, tD.F)({ params: r, logger: t, context: 'useSendEventOnDonationMenuOpenedOrClosed' });
                                d && (n ? (0, tM.Fn)(null == e ? void 0 : e.evgenInstance, d) : (0, tM.Ig)(null == e ? void 0 : e.evgenInstance, d));
                            });
                        })(),
                        [d, c] = (0, s.useState)(!1),
                        u = (0, s.useRef)(!1);
                    return (
                        (0, s.useEffect)(() => {
                            d && (u.current = !0);
                        }, [d]),
                        (0, s.useEffect)(() => {
                            u.current && r(d);
                        }, [d, r]),
                        (0, i.jsx)(tB.W1, {
                            ariaLabel: n({ id: 'donation.button-text' }),
                            size: 's',
                            variant: 'default',
                            radius: 'round',
                            color: 'secondary',
                            icon: (0, i.jsx)(v.I, { size: 'xxs', variant: 'ruble' }),
                            onOpenChange: c,
                            open: d,
                            isMobile: t,
                            placement: 'bottom',
                            offsetOptions: 8,
                            listClassName: tV().popover,
                            children:
                                null == a || null == (e = a.items)
                                    ? void 0
                                    : e.map((e, t) => {
                                          var s;
                                          return (0, i.jsx)(
                                              ef.B,
                                              {
                                                  objectType: o.DomainObjectType.Donation,
                                                  objectId: e.artist.id,
                                                  objectPosX: 1,
                                                  objectPosY: t + 1,
                                                  objectsCount: Number(null == (s = a.items) ? void 0 : s.length),
                                                  mainObjectId: String(null == l ? void 0 : l.id),
                                                  mainObjectType: o.DomainObjectType.Album,
                                                  children: (0, i.jsx)(tq, { donation: e }),
                                              },
                                              e.artist.id,
                                          );
                                      }),
                        })
                    );
                });
            var tQ = a(68934),
                tJ = a(52312);
            let t0 = (0, l.PA)((e) => {
                    let { item: t, itemContentCallback: a, resizeObserver: l, scrollMargin: n } = e,
                        [o, r] = (0, tQ.d)();
                    (0, s.useEffect)(
                        () => (
                            o && l && l.observe(o),
                            () => {
                                o && l && l.unobserve(o);
                            }
                        ),
                        [o, l],
                    );
                    let d = { transform: 'translate3d(0, '.concat(t.start - n, 'px, 0)') };
                    return (0, i.jsx)('div', { 'data-index': t.index, className: eb().virtualItem, ref: r, style: d, children: a(t.index) }, t.key);
                }),
                t1 = (0, l.PA)((e) => {
                    let { count: t, getDataByRange: a, itemContentCallback: l, role: n = 'region', ariaLabel: o } = e,
                        d = (0, eA.f)(),
                        [c, u] = (0, tQ.d)(),
                        { virtualizer: m, resizeObserver: b } = (0, tJ.r)({ count: t, getEstimateSize: () => 56, containerRef: c });
                    ((0, s.useEffect)(() => {
                        d();
                    }, [d]),
                        (0, s.useEffect)(() => {
                            !m.isScrolling && m.range && a(m.range);
                        }, [a, m.isScrolling, m.range]));
                    let v = m.getTotalSize(),
                        p = m.getVirtualItems();
                    return (0, i.jsx)('div', {
                        className: eb().virtualScroll,
                        style: { height: ''.concat(v, 'px') },
                        ref: u,
                        role: n,
                        'aria-label': o,
                        'data-test-id': r.S7.TRACK_LIST,
                        children: p.map((e) => (0, i.jsx)(t0, { item: e, itemContentCallback: l, resizeObserver: b, scrollMargin: m.options.scrollMargin }, e.key)),
                    });
                }),
                t2 = (e, t) => ({
                    title: e.isPublisher ? t({ id: 'page.album-publisher-title' }, { count: e.count }) : t({ id: 'page.album-label-title' }, { count: e.count }),
                    items: e.items,
                    count: e.count,
                });
            var t8 = a(33458),
                t9 = a(29481),
                t4 = a(97522);
            let t7 = (e) => {
                    let { url: t, name: a } = e,
                        l = (0, t9.N)(),
                        { ref: s, intersectionPropertyId: n } = (0, tT.n)(),
                        d = (0, m.c)(() => {
                            l({ to: o.AppScreen.LabelScreen, deepLink: t });
                        });
                    return (0, i.jsx)('span', {
                        ref: s,
                        'data-intersection-property-id': n,
                        className: eb().labelLinkContainer,
                        children: (0, i.jsx)(t4.N, {
                            role: 'link',
                            'aria-label': a,
                            href: t,
                            className: (0, ev.$)(eb().labelLink, eb().important),
                            onClick: d,
                            'data-test-id': r.Xk.album.ALBUM_LABEL_LINK,
                            children: (0, i.jsx)(p.HL, { variant: 'span', children: a }),
                        }),
                    });
                },
                t3 = (0, l.PA)((e) => {
                    var t;
                    let { album: a, size: l, weight: n, className: r } = e,
                        { formatMessage: d } = (0, ei.A)(),
                        c = (0, eA.f)();
                    (0, s.useEffect)(() => {
                        c();
                    }, [c]);
                    let { items: u, count: m, title: b } = t2((0, t8.p)({ labels: a.labels, type: null == (t = a.meta) ? void 0 : t.type }), d);
                    return (0, i.jsxs)('div', {
                        className: (0, ev.$)(eb().label, r),
                        children: [
                            (0, i.jsx)(p.HL, { variant: 'span', size: l, weight: n, children: b }),
                            '\xa0',
                            (0, i.jsx)(p.HL, {
                                variant: 'span',
                                size: l,
                                weight: n,
                                lineClamp: 1,
                                children:
                                    null == u
                                        ? void 0
                                        : u.map((e, t) => {
                                              var l;
                                              let { id: s, name: n, link: r } = e;
                                              return (0, i.jsx)(
                                                  ef.B,
                                                  {
                                                      objectType: o.DomainObjectType.Link,
                                                      objectId: r.href,
                                                      objectPosX: t + 1,
                                                      objectPosY: 1,
                                                      objectsCount: m,
                                                      mainObjectType: o.DomainObjectType.Link,
                                                      mainObjectId: String(null == (l = a.meta) ? void 0 : l.id),
                                                      children: (0, i.jsx)(t7, { url: r.href, name: n }),
                                                  },
                                                  s,
                                              );
                                          }),
                            }),
                        ],
                    });
                });
            var t6 = a(450),
                t5 = a(93596),
                ae = a(24816),
                at = a(30296),
                aa = a(70825),
                ai = a(35015);
            let al = (0, l.PA)((e) => {
                var t;
                let { albumId: a, albumTitle: l, albumCoverUri: n } = e,
                    {
                        user: o,
                        album: d,
                        sonataState: { entityMeta: c },
                    } = (0, _.g)(),
                    b = (0, at.e)(),
                    p = (0, t6.S)(null == b ? void 0 : b.state.currentContext.value),
                    h = ((e) =>
                        (0, m.c)((t) =>
                            t.data
                                ? !t.data.isRemoved && t.data.isAvailable
                                    ? t.data.entityId
                                    : void 0
                                : 'number' == typeof e
                                  ? ''.concat(t.id, ':').concat(e)
                                  : void 0,
                        ))(null == (t = d.meta) ? void 0 : t.id),
                    x = (0, s.useMemo)(() => (0, aa.t)({ contextType: ep.K.Album, contextId: String(a) }), [a]),
                    j = (0, t5.m)(d.tracks, ae.N.NEXT, x, { entityVariant: ai.c.ALBUM, entityTitle: l, coverUri: n }, h),
                    g = (0, t5.m)(d.tracks, ae.N.LAST, x, { entityVariant: ai.c.ALBUM, entityTitle: l, coverUri: n }, h);
                return c && !p
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(tB.Dr, {
                                  onClick: j,
                                  icon: (0, i.jsx)(v.I, { variant: 'playNext', size: 'xxs' }),
                                  disabled: !o.isAuthorized,
                                  'data-test-id': r.Kq.album.ALBUM_CONTEXT_MENU_PLAY_NEXT_BUTTON,
                                  children: (0, i.jsx)(u.A, { id: 'play-queue.play-next' }),
                              }),
                              (0, i.jsx)(tB.Dr, {
                                  onClick: g,
                                  icon: (0, i.jsx)(v.I, { variant: 'playLast', size: 'xxs' }),
                                  disabled: !o.isAuthorized,
                                  'data-test-id': r.Kq.album.ALBUM_CONTEXT_MENU_PLAY_LAST_BUTTON,
                                  children: (0, i.jsx)(u.A, { id: 'play-queue.play-last' }),
                              }),
                          ],
                      })
                    : null;
            });
            var as = a(98056),
                an = a.n(as);
            let ao = (0, l.PA)(() => {
                var e, t, a, l, n, c, u, m;
                let b = (0, s.useRef)(null),
                    v = (0, s.useRef)(0),
                    p = (0, tl.w)(),
                    { notify: h } = (0, es.l)(),
                    x = (0, e5.Q)(),
                    {
                        album: j,
                        albumCPA: g,
                        experiments: y,
                        sonataState: A,
                        settings: { isMobile: f },
                        track: { isTrackPage: C },
                    } = (0, _.g)(),
                    { from: k, utmLink: T } = (0, eC.f)({ pageId: N._Q.ALBUM, blockId: ey.U.ALBUM, contextType: ep.K.Album, contextId: j.id }),
                    { formatMessage: P } = (0, ei.A)(),
                    [I, O] = (0, s.useState)(!1),
                    L = tc({ album: j }),
                    S = C ? 'div' : 'h2',
                    E = j.items.length || 10,
                    { isCPAEnabled: B } = (0, w.I)(),
                    D = !B || (B && !g.cpa),
                    M = y.checkExperiment(ts.z.WebNextAlbumDonationButton, 'on') && j.hasDonations,
                    R = M && f,
                    { showBuySubscriptionModal: U } = (0, ek.q)(),
                    H = g.isPlusCPAPlayerBarEnabled(j.id, null == (e = j.meta) ? void 0 : e.isNonMusic) && f;
                ((0, s.useEffect)(
                    () => () => {
                        v.current = 0;
                    },
                    [j],
                ),
                    (0, s.useEffect)(() => {
                        H && A.status === eh.MT.ENDED && U();
                    }, [A.status, U, H]),
                    (0, s.useEffect)(() => {
                        var e, t;
                        if ((null == (e = j.otherArtistAlbums) ? void 0 : e.isRejected) || (null == (t = j.latestGenreAlbums) ? void 0 : t.isRejected)) {
                            if (!v || v.current > 0) return;
                            (h((0, i.jsx)(en.h, { error: P({ id: 'album-errors.error-during-loading-similar-albums' }) }), { containerId: el.u.ERROR }), v.current++);
                        }
                    }, [null == (t = j.latestGenreAlbums) ? void 0 : t.isRejected, null == (a = j.otherArtistAlbums) ? void 0 : a.isRejected, P, h]),
                    (0, s.useEffect)(() => {
                        j.isResolved && j.hasOtherAlbumVersions && O(!0);
                    }, [j.hasOtherAlbumVersions, j.isResolved]));
                let z = (0, s.useCallback)(() => {
                        let e = b.current;
                        null == e || e.scrollIntoView({ behavior: 'smooth' });
                    }, []),
                    X = (0, d.L)(() => {
                        var e, t, a, l, s;
                        if (!M || !(null == (e = j.donations) ? void 0 : e.items)) return;
                        if (Number(null == (a = j.meta) || null == (t = a.artists) ? void 0 : t.length) > 1)
                            return (0, i.jsx)(ta.F, {
                                blockType: o.EntityTypes.Donations,
                                blockId: ey.U.DONATY,
                                blockPosX: 1,
                                blockPosY: 1,
                                children: (0, i.jsx)(ef.B, {
                                    mainObjectId: String(null == (s = j.meta) ? void 0 : s.id),
                                    mainObjectType: o.DomainObjectType.Album,
                                    children: (0, i.jsx)(tZ, {}),
                                }),
                            });
                        let [n] = j.donations.items;
                        if (n)
                            return (0, i.jsx)(ta.F, {
                                blockType: o.EntityTypes.Donations,
                                blockId: ey.U.DONATY,
                                blockPosX: 1,
                                blockPosY: 1,
                                children: (0, i.jsx)(ef.B, {
                                    objectType: o.DomainObjectType.Donation,
                                    objectId: n.artist.id,
                                    objectPosX: 0,
                                    objectPosY: 0,
                                    objectsCount: 1,
                                    mainObjectId: String(null == (l = j.meta) ? void 0 : l.id),
                                    mainObjectType: o.DomainObjectType.Album,
                                    children: (0, i.jsx)(tN, { url: x(n.url) }),
                                }),
                            });
                    }),
                    F = (0, s.useMemo)(
                        () =>
                            j.isLoading || !j.meta || j.isRejected
                                ? (0, i.jsx)(e_.c, { className: eb().header, isActive: !0 })
                                : (0, i.jsx)(e3, {
                                      album: j.meta,
                                      donationButton: X,
                                      className: eb().header,
                                      onVersionClick: I ? z : void 0,
                                      contextMenuChildren: (0, i.jsx)(al, { albumId: j.meta.id, albumTitle: j.meta.title, albumCoverUri: j.meta.coverUri }),
                                  }),
                        [j.isLoading, j.meta, j.isRejected, X, I, z],
                    ),
                    V = tA({
                        element: (e, t, a) => {
                            var l;
                            if (e.data && e.type !== tt.r.TEXT)
                                return (0, i.jsx)(ef.B, {
                                    objectType: o.DomainObjectType.Track,
                                    objectId: String(e.data.id),
                                    objectPosX: 1,
                                    objectPosY: t + 1,
                                    objectsCount: E,
                                    children: (0, i.jsx)(te.F, {
                                        withLightning: a,
                                        track: e.data,
                                        position: e.position,
                                        albumArtists: null == j || null == (l = j.meta) ? void 0 : l.artists,
                                        playContextParams: p(t, {
                                            contextData: { type: ep.K.Album, meta: j.contextMeta, from: k, utmLink: T },
                                            queueParams: { index: e.positionInContext, entityId: e.data.id },
                                            loadContextMeta: !0,
                                            entitiesData: A.unloadedEntitiesDataFromModels,
                                        }),
                                    }),
                                });
                        },
                        album: j,
                    }),
                    K = (0, d.L)(() => {
                        var e, t, a, l, s, n, d, c, u, m, v, p;
                        let h = [],
                            x = 4;
                        return (
                            R &&
                                (null == (e = j.donations) ? void 0 : e.items) &&
                                (h.push(
                                    (0, i.jsx)(
                                        ta.F,
                                        {
                                            blockType: o.EntityTypes.Donations,
                                            blockId: ey.U.DONATY,
                                            blockPosX: 1,
                                            blockPosY: x,
                                            children: (0, i.jsx)(tE, {
                                                headingVariant: S,
                                                className: an().carouselContainer,
                                                headerClassName: (0, ev.$)(an().carouselBlock, an().carouselBlockHeader),
                                                containerClassName: an().carouselBlock,
                                            }),
                                        },
                                        o.EntityTypes.Donations,
                                    ),
                                ),
                                x++),
                            j.hasSimilarEntities &&
                                (h.push(
                                    (0, i.jsx)(
                                        ta.F,
                                        {
                                            blockType: o.EntityTypes.SimilarEntities,
                                            blockId: o.EntityTypes.SimilarEntities,
                                            blockPosX: 1,
                                            blockPosY: x,
                                            objectsCount: null == (a = j.similarEntities.data) ? void 0 : a.items.length,
                                            mainObjectId: String(null == (l = j.meta) ? void 0 : l.id),
                                            mainObjectType: o.DomainObjectType.Album,
                                            children: (0, i.jsx)(ex.Q, {
                                                ...j.similarEntities,
                                                meta: { title: P({ id: 'page.similar-entities-block-title' }) },
                                                headingVariant: S,
                                                className: an().carouselContainer,
                                                headerClassName: (0, ev.$)(an().carouselBlock, an().carouselBlockHeader),
                                                containerClassName: an().carouselBlock,
                                                shouldSendAnalyticsOnLoaded: !0,
                                                setHasSentAnalyticsOnLoaded: j.similarEntities.setHasSentAnalyticsOnLoaded,
                                            }),
                                        },
                                        o.EntityTypes.SimilarEntities,
                                    ),
                                ),
                                x++),
                            j.hasOtherAlbumVersions &&
                                (null == (t = j.otherAlbumVersions) ? void 0 : t.length) &&
                                (h.push(
                                    (0, i.jsx)(
                                        ta.F,
                                        {
                                            blockType: o.EntityTypes.OtherAlbumVersions,
                                            blockId: o.EntityTypes.OtherAlbumVersions,
                                            blockPosX: 1,
                                            blockPosY: x,
                                            objectsCount: null == (s = j.otherAlbumVersions) ? void 0 : s.length,
                                            mainObjectId: String(null == (n = j.meta) ? void 0 : n.id),
                                            mainObjectType: o.DomainObjectType.Album,
                                            children: (0, i.jsx)(e6.p, {
                                                isShimmerVisible: j.isLoading,
                                                isShimmerActive: !0,
                                                className: an().carouselContainer,
                                                headerClassName: (0, ev.$)(an().carouselBlock, an().carouselBlockHeader),
                                                containerClassName: an().carouselBlock,
                                                title: P({ id: 'entity-names.other-album-versions' }),
                                                albums: j.otherAlbumVersions,
                                                headingRef: b,
                                                headingVariant: S,
                                                shouldSendAnalyticsOnLoaded: !0,
                                                'data-test-id': r.Xk.album.OTHER_VERSIONS_CAROUSEL,
                                            }),
                                        },
                                        o.EntityTypes.OtherAlbumVersions,
                                    ),
                                ),
                                x++),
                            j.hasLatestGenreAlbums &&
                                D &&
                                (h.push(
                                    (0, i.jsx)(
                                        ta.F,
                                        {
                                            blockType: o.EntityTypes.GenreAlbums,
                                            blockId: o.EntityTypes.GenreAlbums,
                                            blockPosX: 1,
                                            blockPosY: x,
                                            objectsCount: null == (d = j.latestGenreAlbums) ? void 0 : d.items.length,
                                            mainObjectId: String(null == (c = j.meta) ? void 0 : c.id),
                                            mainObjectType: o.DomainObjectType.Album,
                                            children: (0, i.jsx)(e6.p, {
                                                isShimmerVisible: j.isLatestGenreAlbumsLoading,
                                                isShimmerActive: !0,
                                                className: an().carouselContainer,
                                                headerClassName: (0, ev.$)(an().carouselBlock, an().carouselBlockHeader),
                                                containerClassName: an().carouselBlock,
                                                title: P({ id: 'entity-names.new-albums-in-genre' }),
                                                albums: null == (u = j.latestGenreAlbums) ? void 0 : u.items,
                                                headingVariant: S,
                                                shouldSendAnalyticsOnLoaded: !0,
                                                'data-test-id': r.Xk.album.GENRE_ALBUMS_CAROUSEL,
                                            }),
                                        },
                                        o.EntityTypes.GenreAlbums,
                                    ),
                                ),
                                x++),
                            j.hasOtherArtistAlbums &&
                                (h.push(
                                    (0, i.jsx)(
                                        ta.F,
                                        {
                                            blockType: o.EntityTypes.OtherAlbums,
                                            blockId: o.EntityTypes.OtherAlbums,
                                            blockPosX: 1,
                                            blockPosY: x,
                                            objectsCount: null == (m = j.otherArtistAlbums) ? void 0 : m.items.length,
                                            mainObjectId: String(null == (v = j.meta) ? void 0 : v.id),
                                            mainObjectType: o.DomainObjectType.Album,
                                            children: (0, i.jsx)(e6.p, {
                                                isShimmerVisible: j.isOtherArtistAlbumsLoading,
                                                isShimmerActive: !0,
                                                className: an().carouselContainer,
                                                headerClassName: (0, ev.$)(an().carouselBlock, an().carouselBlockHeader),
                                                containerClassName: an().carouselBlock,
                                                title: P({ id: 'entity-names.other-albums-of-artist' }),
                                                albums: null == (p = j.otherArtistAlbums) ? void 0 : p.items,
                                                headingVariant: S,
                                                shouldSendAnalyticsOnLoaded: !0,
                                                'data-test-id': r.Xk.album.OTHER_ARTIST_ALBUMS_CAROUSEL,
                                            }),
                                        },
                                        o.EntityTypes.OtherAlbums,
                                    ),
                                ),
                                x++),
                            h
                        );
                    });
                return (
                    j.id && j.isResolved && j.similarEntities.isNeededToLoad && j.isSimilarEntitiesEnabled && (0, s.use)(j.getSimilarEntities({ albumId: j.id })),
                    (0, i.jsxs)(ti.h, {
                        tabId: '',
                        tabPos: 0,
                        isTabSelectedByDefault: !1,
                        children: [
                            (0, i.jsx)(ta.F, {
                                blockType: o.EntityTypes.Header,
                                blockId: o.EntityTypes.Header,
                                blockPosX: 1,
                                blockPosY: 1,
                                mainObjectId: String(null == (l = j.meta) ? void 0 : l.id),
                                mainObjectType: o.DomainObjectType.Album,
                                objectsCount: 1,
                                children: F,
                            }),
                            (0, i.jsx)(ta.F, {
                                blockType: o.EntityTypes.Tracks,
                                blockId: o.EntityTypes.Tracks,
                                blockPosX: 1,
                                blockPosY: 2,
                                objectsCount: E,
                                mainObjectId: String(null == (n = j.meta) ? void 0 : n.id),
                                mainObjectType: o.DomainObjectType.Album,
                                children: (0, i.jsx)(t1, {
                                    count: E,
                                    itemContentCallback: V,
                                    getDataByRange: L,
                                    ariaLabel: P({ id: 'entity-names.albums-tracks-list' }, { albumName: (null == (c = j.meta) ? void 0 : c.title) || '' }),
                                }),
                            }),
                            (0, i.jsxs)('div', {
                                className: eb().footerContainer,
                                children: [
                                    j.hasLabel &&
                                        (0, i.jsx)(ta.F, {
                                            blockType: o.EntityTypes.Labels,
                                            blockId: o.EntityTypes.Labels,
                                            blockPosX: 1,
                                            blockPosY: 3,
                                            objectsCount: null == (u = j.labels) ? void 0 : u.length,
                                            mainObjectId: String(null == (m = j.meta) ? void 0 : m.id),
                                            mainObjectType: o.DomainObjectType.Album,
                                            children: (0, i.jsx)(t3, { album: j, size: 's', weight: 'normal', className: an().label }),
                                        }),
                                    (0, i.jsxs)('div', { className: an().carouselBlocks, children: [K, ' '] }),
                                    (0, i.jsx)(to.A, { children: (0, i.jsx)(tn.w, { className: eb().footer }) }),
                                ],
                            }),
                        ],
                    })
                );
            });
            var ar = a(5867),
                ad = a(66881),
                ac = a(74245),
                au = a(2710),
                am = a(48127);
            let ab = (e) => {
                var t;
                let a = null != (t = ad.nd.find((t) => t === e)) ? t : am.O.ABOUT;
                return { tab: a, index: ad.nd.indexOf(a) };
            };
            var av = a(60379),
                ap = a(8266),
                ah = a(83918),
                ax = a(23430),
                a_ = a.n(ax);
            let aj = (e) => {
                    let { title: t, description: a } = e;
                    return (0, i.jsxs)('div', {
                        className: a_().infoBlock,
                        children: [
                            (0, i.jsx)(p.HL, { variant: 'span', type: 'entity', size: 'm', className: a_().infoTitle, children: t }),
                            (0, i.jsx)(p.HL, { variant: 'span', type: 'entity', size: 'm', children: a }),
                        ],
                    });
                },
                ag = (e) => {
                    let { album: t, content: a } = e;
                    if (!a) return null;
                    switch (a.kind) {
                        case 'labels':
                            return (0, i.jsx)(t3, { album: t, size: 'm', weight: 'medium', className: a_().label });
                        case 'text':
                            return (0, i.jsx)(aj, { title: a.title, description: a.names });
                    }
                },
                ay = (e) => {
                    let { album: t, about: a, tabValue: l, tabElementId: s } = e,
                        { index: n } = ab(am.O.ABOUT);
                    return (0, i.jsx)(ar.Kp, {
                        name: n,
                        value: l,
                        elementId: s,
                        children: (0, i.jsxs)('div', {
                            className: a_().contentAbout,
                            children: [
                                null !== a.description &&
                                    (0, i.jsx)(p.HL, {
                                        variant: 'div',
                                        type: 'entity',
                                        size: 'm',
                                        className: eb().text,
                                        children: (0, i.jsx)('span', { dangerouslySetInnerHTML: { __html: a.description } }),
                                    }),
                                a.hasInfo &&
                                    (0, i.jsxs)('div', {
                                        className: eb().text,
                                        children: [
                                            a.readers && (0, i.jsx)(aj, { title: a.readersTitle, description: a.readers }),
                                            a.withDuration && (0, i.jsx)(aj, { title: a.durationTitle, description: a.durationText }),
                                            (0, i.jsx)(ag, { album: t, content: a.publisher }),
                                            a.isExplicit && (0, i.jsx)(aj, { title: a.ageLimitTitle, description: a.ageLimit }),
                                        ],
                                    }),
                            ],
                        }),
                    });
                };
            var aA = a(51549),
                af = a(18412),
                aC = a(40496),
                ak = a.n(aC);
            let aT = (0, l.PA)((e) => {
                let { className: t, headingVariant: a = 'h2', title: l, ariaLabel: n } = e,
                    r = (0, eA.f)(),
                    { album: d, sonataState: c } = (0, _.g)();
                (0, s.useEffect)(() => {
                    r();
                }, [r]);
                let { from: u, utmLink: m } = (0, eC.f)({ pageId: N._Q.PODCAST, blockId: ey.U.PODCAST, contextId: d.id, contextType: ep.K.Album }),
                    b = (0, s.useMemo)(
                        () =>
                            d.lastEpisodes.map((e, t) => {
                                let a = ((e, t) => (t && e.data ? e.data : null))(e, d.isResolved);
                                return a
                                    ? (0, i.jsx)(
                                          ef.B,
                                          {
                                              objectType: o.DomainObjectType.PodcastEpisode,
                                              objectId: String(a.id),
                                              objectPosX: 1,
                                              objectPosY: t + 1,
                                              objectsCount: d.lastEpisodes.length,
                                              children: (0, i.jsx)(aA.K, {
                                                  track: a,
                                                  playContextParams: {
                                                      contextData: { type: ep.K.Album, meta: d.contextMeta, from: u, utmLink: m },
                                                      queueParams: { index: e.positionInContext, entityId: a.id },
                                                      loadContextMeta: !0,
                                                      entitiesData: c.unloadedEntitiesDataFromModels,
                                                  },
                                              }),
                                          },
                                          a.id,
                                      )
                                    : (0, i.jsx)(tb.D, { isActive: !0, className: ak().shimmerItem, variant: tu.X.ALBUM }, t);
                            }),
                        [d.lastEpisodes, d.isResolved, d.contextMeta, u, m, c.unloadedEntitiesDataFromModels],
                    );
                return (0, i.jsxs)('div', {
                    className: (0, ev.$)(t, ak().root),
                    children: [
                        (0, i.jsx)(af.T, { headingVariant: a, className: ak().blockHeader, title: l }),
                        (0, i.jsx)('div', { role: 'list', 'aria-label': n, tabIndex: 0, children: b }),
                    ],
                });
            });
            var aN = a(76939),
                aP = a(66284),
                aI = a(30012),
                aO = a.n(aI);
            let aL = {
                    'authors-books': r.e8.album.AUTHORS_BOOKS,
                    'category-albums': r.e8.album.CATEGORY_ALBUMS,
                    'labels-albums': r.e8.album.LABELS_ALBUMS,
                    'similar-albums': r.e8.album.SIMILAR_ALBUMS,
                },
                aS = (0, l.PA)((e) => {
                    var t, a;
                    let { isShimmerVisible: l, isShimmerActive: n, className: r, headingVariant: d = 'h2' } = e,
                        { album: c } = (0, _.g)(),
                        u = (0, eA.f)();
                    return (
                        (0, s.useEffect)(() => {
                            u();
                        }, [u]),
                        (0, i.jsx)('div', {
                            className: (0, ev.$)(r, aO().root),
                            children:
                                null == (a = c.relatedContent) || null == (t = a.items)
                                    ? void 0
                                    : t.map((e, t) => {
                                          let a = aL[e.type] || '';
                                          return (0, i.jsx)(
                                              aP.O,
                                              {
                                                  headingVariant: d,
                                                  title: e.title,
                                                  isShimmerVisible: l,
                                                  isShimmerActive: n,
                                                  className: (0, ev.$)(aO().root, r),
                                                  containerClassName: aO().carousel,
                                                  headerClassName: aO().header,
                                                  'data-test-id': a,
                                                  children: e.albums.map((t, a) =>
                                                      (0, i.jsx)(
                                                          ef.B,
                                                          {
                                                              objectType: o.DomainObjectType.Podcast,
                                                              objectId: String(t.id),
                                                              objectPosX: a + 1,
                                                              objectPosY: 1,
                                                              objectsCount: e.albums.length,
                                                              children: (0, i.jsx)(aN.a, { album: t, contentLinesCount: 3, withLikesCount: !0, withAddition: !1 }),
                                                          },
                                                          t.id,
                                                      ),
                                                  ),
                                              },
                                              ''.concat(e.type).concat(t),
                                          );
                                      }),
                        })
                    );
                }),
                aE = (0, l.PA)((e) => {
                    var t, a, l, s, n, r;
                    let { content: d } = e,
                        { album: c } = (0, _.g)(),
                        u = d.isAbout && c.relatedContent && c.relatedContent.items && c.relatedContent.items.length > 0;
                    return (0, i.jsxs)('div', {
                        className: eb().footerContainer,
                        children: [
                            d.withLastEpisodes &&
                                (0, i.jsx)(ta.F, {
                                    blockType: o.EntityTypes.LatestEpisodes,
                                    blockId: o.EntityTypes.LatestEpisodes,
                                    blockPosX: 1,
                                    blockPosY: 2,
                                    objectsCount: c.lastEpisodes.length,
                                    mainObjectId: String(null == (t = c.meta) ? void 0 : t.id),
                                    mainObjectType: null == (a = c.meta) ? void 0 : a.mainObjectType,
                                    children: (0, i.jsx)(aT, { className: a_().lastEpisodes, title: d.lastEpisodesTitle, ariaLabel: d.lastEpisodesListLabel }),
                                }),
                            u &&
                                (0, i.jsx)(ta.F, {
                                    blockType: o.EntityTypes.Podcasts,
                                    blockId: o.EntityTypes.Podcasts,
                                    blockPosX: 1,
                                    blockPosY: 3,
                                    objectsCount: null == (s = c.relatedContent) || null == (l = s.items) ? void 0 : l.length,
                                    mainObjectId: String(null == (n = c.meta) ? void 0 : n.id),
                                    mainObjectType: null == (r = c.meta) ? void 0 : r.mainObjectType,
                                    children: (0, i.jsx)(aS, { isShimmerVisible: c.isRelatedContentLoading, isShimmerActive: !0 }),
                                }),
                            (0, i.jsx)(to.A, { children: (0, i.jsx)(tn.w, { className: eb().footer }) }),
                        ],
                    });
                });
            var aB = a(47009),
                aw = a(72378),
                aD = a(77174),
                aM = a(89179),
                aR = a.n(aM);
            let aU = (0, l.PA)((e) => {
                    let { album: t, actionButton: a, contextMenuChildren: l, className: n, 'aria-labelledby': o, forwardRef: d, onVersionClick: c } = e,
                        { formatMessage: b } = (0, ei.A)(),
                        { shouldShowBuySubscriptionModal: p, showBuySubscriptionModal: h } = (0, ek.q)(),
                        x = (0, eA.f)(),
                        { from: j, utmLink: g } = (0, eC.f)({ pageId: N._Q.ALBUM, blockId: ey.U.ALBUM, contextType: ep.K.Album, contextId: t.id }),
                        {
                            user: y,
                            settings: { isMobile: A },
                            sonataState: f,
                            modals: { imageSliderModal: C },
                            paywall: { modal: k },
                        } = (0, _.g)(),
                        T = (0, aB.b)(),
                        P = (0, eg.P)(),
                        { iconSize: I, controlSize: O } = (0, eE.q)(A),
                        L = A && !y.isAuthorized && t.isAvailable,
                        S = A && !y.hasPlus && y.isAuthorized && t.isAvailable,
                        E = L || S,
                        B = (0, eT.N)(),
                        w = (0, aD.$)(t.isLiked, t.type),
                        D = (0, ej.r)(t.type),
                        M = (0, eN.j)(),
                        R = t.isAvailable || t.isAudiobook,
                        U = !!t.coverUri;
                    (0, s.useEffect)(() => {
                        x();
                    }, [x]);
                    let H = (0, s.useMemo)(() => {
                            if (t.shouldShowBooksBadge) return (0, i.jsx)(v.I, { variant: 'yandexBooks'.concat(M), className: aR().booksLogo });
                        }, [t.shouldShowBooksBadge, M]),
                        z = !y.hasPlus && t.isAvailableOnlyForPlus,
                        X = (0, aw.c)(t.isPodcast ? t : null),
                        { isPlaying: F, togglePlay: V } = (0, eP.D)({
                            playContextParams: {
                                contextData: { type: ep.K.Album, meta: { id: t.id }, from: j, utmLink: g },
                                loadContextMeta: !0,
                                entitiesData: f.unloadedEntitiesDataFromModels,
                            },
                        }),
                        K = (0, m.c)(() => {
                            t.coverUri && C.openImages({ images: [t.coverUri] });
                        }),
                        Y = (0, m.c)(() => {
                            if (!P()) {
                                if (p) return void h();
                                if (B) return void k.open();
                                (V(), T(!F));
                            }
                        }),
                        $ = (0, s.useMemo)(
                            () =>
                                z
                                    ? (0, i.jsx)(eS, { className: aR().plusPaywallButton, albumType: t.type })
                                    : A
                                      ? (0, i.jsx)(eI.D, {
                                            className: (0, ev.$)(e8().playControl, { [e8().playControl_withLogin]: E }),
                                            buttonVariant: 'default',
                                            iconSize: E ? I : 'xxl',
                                            size: E ? O : void 0,
                                            isPlaying: F,
                                            onClick: Y,
                                            variant: E ? 'default' : 'filled',
                                            disabled: !t.isAvailable,
                                            shouldSendAnalyticsOnPlayClick: !0,
                                        })
                                      : (0, i.jsx)(eI.D, {
                                            className: e8().playControl,
                                            withRipple: !0,
                                            buttonVariant: 'default',
                                            radius: 'xxxl',
                                            size: 's',
                                            color: 'primary',
                                            iconSize: 'xxs',
                                            isPlaying: F,
                                            onClick: Y,
                                            disabled: !t.isAvailable,
                                            shouldSendAnalyticsOnPlayClick: !0,
                                            children: (0, i.jsx)(u.A, { id: 'player-actions.listen' }),
                                        }),
                            [z, A, F, Y, t.isAvailable, t.type, E, I, O],
                        ),
                        W = (0, s.useMemo)(
                            () =>
                                (0, i.jsx)('div', {
                                    className: (0, ev.$)(aR().controlsBlock, { [aR().controlsBlock_withPaywallButton]: z }),
                                    children: (0, i.jsxs)('div', {
                                        className: e8().controlsContainer,
                                        children: [
                                            (0, i.jsxs)('div', {
                                                className: (0, ev.$)(e8().controls, { [aR().controls_withPaywallButton]: z }),
                                                'data-test-id': r.e8.pageHeader.NON_MUSIC_PAGE_HEADER_CONTROLS,
                                                children: [
                                                    (0, i.jsx)(ef.B, {
                                                        objectType: t.mainObjectType,
                                                        objectId: String(t.id),
                                                        objectPosX: 1,
                                                        objectPosY: 1,
                                                        objectsCount: 1,
                                                        mainObjectType: t.mainObjectType,
                                                        mainObjectId: String(t.id),
                                                        children: $,
                                                    }),
                                                    (0, i.jsx)(eY, { album: t, likeButtonAriaLabel: w, withLikeButton: !z, contextMenuChildren: l }),
                                                ],
                                            }),
                                            a && (0, i.jsx)('div', { className: e8().controls, children: a }),
                                        ],
                                    }),
                                }),
                            [$, t, w, z, a, l],
                        ),
                        G = (0, s.useMemo)(() => (0, i.jsx)('div', { className: aR().meta, children: (0, i.jsx)(eJ, { album: t }) }), [t]);
                    return (0, i.jsx)(e0.k, {
                        ref: d,
                        headingVariant: 'h1',
                        className: n,
                        controls: W,
                        meta: G,
                        entityName: D,
                        entityNameIcon: H,
                        title: t.title,
                        cover: (0, i.jsx)(e1.I, {
                            coverVariant: 'square',
                            coverUri: t.coverUri,
                            isAvailable: R,
                            withPlusBadge: t.isAvailableOnlyForPlus,
                            onClick: U ? K : void 0,
                            'aria-label': U ? b({ id: 'slider.view-cover' }) : void 0,
                        }),
                        'aria-labelledby': o,
                        version: t.version,
                        onVersionClick: c,
                        disclaimerLabel: X,
                        showMobileLoginButton: L,
                        showMobileSubscriptionButton: S,
                    });
                }),
                aH = (0, s.forwardRef)((e, t) => (0, i.jsx)(aU, { forwardRef: t, ...e }));
            var az = a(79396),
                aX = a(9931);
            let aF = (0, l.PA)((e) => {
                let { tabsState: t, tabsTexts: a, onTabChange: l, actionButton: n, children: o } = e,
                    { album: r } = (0, _.g)(),
                    d = (0, s.useRef)(null);
                return r.isLoading || !r.meta || r.isRejected
                    ? (0, i.jsx)(e_.c, { className: eb().header, isActive: !0 })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(aH, {
                                  album: r.meta,
                                  actionButton: n,
                                  className: eb().header,
                                  contextMenuChildren: (0, i.jsx)(al, { albumId: r.meta.id, albumTitle: r.meta.title, albumCoverUri: r.meta.coverUri }),
                              }),
                              (0, i.jsx)(aX.wI, {
                                  className: a_().tabCarousel,
                                  ...t,
                                  onTabChange: l,
                                  ref: d,
                                  children: ad.nd.map((e, t) => (0, i.jsx)(az.o, { className: a_().tab, title: a[e], value: t }, e)),
                              }),
                              o,
                          ],
                      });
            });
            var aV = a(17742);
            let aK = (0, l.PA)((e) => {
                    var t, a;
                    let { content: l, from: s, utmLink: n, getStorePlayContextParams: r } = e,
                        { album: d, sonataState: c } = (0, _.g)(),
                        { formatMessage: u } = (0, ei.A)(),
                        m = tc({ album: d }),
                        b = tA({
                            element: (e, t) => {
                                if (e.data && e.type !== tt.r.TEXT)
                                    return (0, i.jsx)(ef.B, {
                                        objectType: o.DomainObjectType.Track,
                                        objectId: String(e.data.id),
                                        objectPosX: 1,
                                        objectPosY: t + 1,
                                        objectsCount: d.items.length,
                                        children: (0, i.jsx)(aA.K, {
                                            track: e.data,
                                            viewType: aV.D.ALBUM,
                                            position: e.position,
                                            playContextParams: r(t, {
                                                contextData: { type: ep.K.Album, meta: d.contextMeta, from: s, utmLink: n },
                                                queueParams: { index: e.positionInContext, entityId: e.data.id },
                                                loadContextMeta: !0,
                                                entitiesData: c.unloadedEntitiesDataFromModels,
                                            }),
                                        }),
                                    });
                            },
                            isNonMusic: !0,
                            album: d,
                        }),
                        v = l.isAbout ? 0 : d.items.length || 10,
                        p = ((e) => {
                            let { content: t, title: a, formatMessage: i } = e;
                            if (t.withTrackList)
                                return i('audiobook' === t.listType ? { id: 'non-music.audiobook-list' } : { id: 'podcast.episodes-list' }, { albumName: a || '' });
                        })({ content: l, title: null == (t = d.meta) ? void 0 : t.title, formatMessage: u });
                    return l.withTrackList
                        ? (0, i.jsx)(ta.F, {
                              blockType: o.EntityTypes.Episodes,
                              blockId: o.EntityTypes.Episodes,
                              blockPosX: 1,
                              blockPosY: 2,
                              objectsCount: v,
                              mainObjectId: String(null == (a = d.meta) ? void 0 : a.id),
                              mainObjectType: o.DomainObjectType.Album,
                              children: (0, i.jsx)(t1, { count: v, getDataByRange: m, itemContentCallback: b, role: 'tabpanel', ariaLabel: p }),
                          })
                        : null;
                }),
                aY = (0, l.PA)(() => {
                    var e, t, a, l, r, d, c, m, v, h, j;
                    let g = (0, s.useRef)(0),
                        y = (0, tl.w)(),
                        { album: f, experiments: C, slides: T } = (0, _.g)(),
                        P = (null == (e = f.meta) ? void 0 : e.isAudiobook) ? N._Q.AUDIOBOOK : N._Q.PODCAST,
                        I = (null == (t = f.meta) ? void 0 : t.isAudiobook) ? ey.U.AUDIOBOOK : ey.U.PODCAST,
                        { from: O, utmLink: L } = (0, eC.f)({ pageId: P, blockId: I, contextType: ep.K.Album, contextId: f.id }),
                        { href: S } = (0, k.u)('/slides/podcast/:podcastId', { params: { podcastId: null != (j = f.id) ? j : '' } }),
                        E = (0, x.Z)(S),
                        B = (0, s.useId)(),
                        { formatMessage: w } = (0, ei.A)(),
                        D = (0, n.useSearchParams)(),
                        M = (0, ah.X)(),
                        R = C.checkExperiment(ts.z.WebNextRewind2024, 'on') && (null == (a = f.meta) ? void 0 : a.isPodcast),
                        U = (0, s.useMemo)(() => {
                            let { index: e } = ab(D.get(A.K.ACTIVE_TAB));
                            return e;
                        }, [D]),
                        H = (0, ar.zb)(U),
                        [z, X] = (0, s.useState)(ad.nd[H.value]);
                    (0, s.useEffect)(
                        () => () => {
                            ((g.current = 0), T.resetPodcast());
                        },
                        [f, T],
                    );
                    let F = (0, s.useMemo)(() => {
                            var e, t;
                            let a = R && T.podcastSlidesLoadingState === td.G.RESOLVE && !!(null == (e = T.podcastItems) ? void 0 : e.length),
                                l = { '--action-button-color-background': (0, av.W)(null == (t = f.meta) ? void 0 : t.averageColor) };
                            return a
                                ? (0, i.jsx)(b.$, {
                                      className: a_().rewindControl,
                                      style: l,
                                      withRipple: !1,
                                      withHover: !1,
                                      radius: 'xxxl',
                                      size: 's',
                                      color: 'primary',
                                      onClick: E,
                                      variant: 'default',
                                      role: 'link',
                                      children: (0, i.jsx)(p.HL, { variant: 'span', lineClamp: 1, children: (0, i.jsx)(u.A, { id: 'rewind.button-title' }) }),
                                  })
                                : null;
                        }, [null == (l = f.meta) ? void 0 : l.averageColor, R, E, null == (r = T.podcastItems) ? void 0 : r.length, T.podcastSlidesLoadingState]),
                        V = (0, s.useMemo)(() => {
                            var e, t;
                            return ((e) => {
                                let { isFairyTale: t, isAudiobook: a, tracksCount: i, formatMessage: l } = e;
                                return t
                                    ? { about: l({ id: 'non-music.fairytale-tab-about' }), 'track-list': l({ id: 'non-music.audiobook-tab-tracks' }) }
                                    : a
                                      ? { about: l({ id: 'non-music.audiobook-tab-about' }), 'track-list': l({ id: 'non-music.audiobook-tab-tracks' }) }
                                      : { about: l({ id: 'podcast.tab-about' }), 'track-list': l({ id: 'podcast.tab-tracks' }, { value: i }) };
                            })({
                                isFairyTale: null == (e = f.meta) ? void 0 : e.isFairyTale,
                                isAudiobook: null == (t = f.meta) ? void 0 : t.isAudiobook,
                                tracksCount: f.tracks.length,
                                formatMessage: w,
                            });
                        }, [null == (d = f.meta) ? void 0 : d.isAudiobook, null == (c = f.meta) ? void 0 : c.isFairyTale, f.tracks.length, w]),
                        K = (0, s.useMemo)(
                            () => (e) => {
                                var t;
                                if (!H.onTabChange || e === H.value) return;
                                H.onTabChange(e);
                                let a = null != (t = ad.nd[e]) ? t : am.O.ABOUT;
                                X(a);
                                let i = (0, ap.b)(A.K.ACTIVE_TAB, a);
                                i && M(i);
                            },
                            [H, M],
                        ),
                        Y = ((e) => {
                            let { formatMessage: t } = (0, ei.A)();
                            return ((e, t) => {
                                let { minutes: a, hours: i } = J(e),
                                    l = '';
                                return (
                                    i > 0 && (l += t({ id: 'time.hours' }, { hours: i })),
                                    a > 0 && ((l += l.length > 0 ? ' ' : ''), (l += t({ id: 'time.minutes-left' }, { minutes: a }))),
                                    l
                                );
                            })(e, t);
                        })((null == (m = f.meta) ? void 0 : m.durationSec) || 0),
                        $ = (0, s.useMemo)(() => {
                            let e = ((e, t) => {
                                var a, i, l;
                                let { album: s, description: n, labels: o, contentWarning: r, durationText: d } = e,
                                    c = (0, t8.p)({ labels: o, type: null == s ? void 0 : s.type }),
                                    u = (0, au.A)(r),
                                    m = !!(null == s ? void 0 : s.durationSec),
                                    b = ''.concat(t(Number(c.count) > 1 ? { id: 'podcast.publishers-title' } : { id: 'podcast.publisher-title' }), ':');
                                return {
                                    description: n ? (0, er.ky)(n) : null,
                                    hasInfo: !!((null == s || null == (a = s.artists) ? void 0 : a.length) || m || (null == o ? void 0 : o.length) || u),
                                    readers: null == s || null == (i = s.artists) ? void 0 : i.map((e) => e.name).join(', '),
                                    withDuration: m,
                                    isExplicit: u,
                                    readersTitle: ''.concat(
                                        t(
                                            Number(null == s || null == (l = s.artists) ? void 0 : l.length) > 1
                                                ? { id: 'non-music.audiobook-artists' }
                                                : { id: 'non-music.audiobook-artist' },
                                        ),
                                        ':',
                                    ),
                                    durationTitle: ''.concat(t({ id: 'time.duration' }), ':'),
                                    ageLimitTitle: ''.concat(t({ id: 'podcast.age-limit' }), ':'),
                                    ageLimit: ac.JU.AGE_18,
                                    durationText: d,
                                    publisher: ((e, t) => {
                                        let { labels: a, title: i } = e;
                                        return a.hasLabels ? { kind: 'labels', labels: t2(a, t) } : a.names ? { kind: 'text', title: i, names: a.names } : null;
                                    })({ labels: c, title: b }, t),
                                };
                            })({ album: f.meta, description: f.description, labels: f.labels, contentWarning: f.contentWarning, durationText: Y }, w);
                            return (0, i.jsx)(ay, { album: f, about: e, tabValue: H.value, tabElementId: B });
                        }, [f, w, Y, H.value, B]);
                    (0, s.useEffect)(() => {
                        f.isResolved && (f.loadLastEpisodes(), f.getRelatedContent());
                    }, [f, f.isResolved, f.loadLastEpisodes, f.getRelatedContent]);
                    let W = ((e, t) => {
                            let { type: a, activeTab: i, lastEpisodesCount: l } = e,
                                s = i === am.O.ABOUT,
                                n = i === am.O.TRACKS,
                                o = a === q._.AUDIOBOOK ? 'audiobook' : 'podcast';
                            return {
                                isAbout: s,
                                withTrackList: n,
                                withLastEpisodes: s && a === q._.PODCAST && l > 0,
                                listType: n ? o : null,
                                lastEpisodesTitle: t({ id: 'entity-names.podcast-last-episodes' }),
                                lastEpisodesListLabel: t({ id: 'podcast.last-episodes-list' }),
                            };
                        })({ type: null == (v = f.meta) ? void 0 : v.type, activeTab: z, lastEpisodesCount: f.lastEpisodes.length }, w),
                        G = R && T.podcastSlidesLoadingState === td.G.IDLE;
                    return (
                        'number' == typeof f.id && G && (0, s.use)(T.getPodcastSlides({ podcastId: f.id })),
                        (0, i.jsxs)(ti.h, {
                            tabId: null != z ? z : am.O.ABOUT,
                            tabPos: H.value + 1,
                            isTabSelectedByDefault: !1,
                            children: [
                                (0, i.jsx)(ta.F, {
                                    blockType: o.EntityTypes.Header,
                                    blockId: o.EntityTypes.Header,
                                    blockPosX: 1,
                                    blockPosY: 1,
                                    mainObjectId: String(null == (h = f.meta) ? void 0 : h.id),
                                    mainObjectType: o.DomainObjectType.Podcast,
                                    objectsCount: 1,
                                    children: (0, i.jsx)(aF, { tabsState: H, tabsTexts: V, onTabChange: K, actionButton: F, children: $ }),
                                }),
                                (0, i.jsx)(aK, { content: W, from: O, utmLink: L, getStorePlayContextParams: y }),
                                (0, i.jsx)(aE, { content: W }),
                            ],
                        })
                    );
                }),
                a$ = (0, l.PA)((e) => {
                    var t, a, l, u, m, b, v, p, h, x, j, g;
                    let { albumId: N, trackId: L, preloadedAlbum: E, preloadedCpa: X, isTrackLegalRejected: F } = e,
                        { contentScrollRef: V, setContentScrollRef: K } = (0, D.g)(),
                        Y = (0, n.useSearchParams)(),
                        $ = ((e) => {
                            let { searchParams: t = {} } = e;
                            return 'bandlink' === t[A.K.UTM_SOURCE] || !!t[A.K.CLID] || !!t[A.K.REF_ID];
                        })({ searchParams: Object.fromEntries(Y.entries()) }),
                        { user: W, album: G, disclaimerModalState: q, track: Z, sonataState: Q, albumCPA: J } = (0, _.g)(),
                        { checkIsValidClid: ee, setClidToQuery: et, deleteClidFromQuery: er } = (0, w.I)(),
                        ed = (0, S.y)(null == (t = G.meta) ? void 0 : t.averageColor),
                        { headerStyle: ec } = (0, f.Q)(ed),
                        em = (0, I.l)({ mainObjectType: null != (x = null == (a = G.meta) ? void 0 : a.mainObjectType) ? x : o.DomainObjectType.Album }),
                        { deprecationUrl: ev, shouldRedirect: ep } = ((e) => {
                            let { albumId: t, deprecationTargetAlbumId: a, trackId: i, realId: l, searchParams: s } = e,
                                n = Number(t),
                                o = new URLSearchParams(s);
                            (o.delete('albumId'), o.delete('trackId'));
                            let r = Object.fromEntries(o);
                            if ('number' == typeof a && a !== n) {
                                if (i) {
                                    let { href: e } = (0, k.u)('/album/:albumId/track/:trackId', { params: { albumId: a, trackId: i }, query: r });
                                    return { deprecationUrl: e, shouldRedirect: !0 };
                                }
                                let { href: e } = (0, k.u)('/album/:albumId', { params: { albumId: a }, query: r });
                                return { deprecationUrl: e, shouldRedirect: !0 };
                            }
                            if (i && l && l !== i) {
                                let { href: e } = (0, k.u)('/album/:albumId/track/:trackId', { params: { albumId: t, trackId: l }, query: r });
                                return { deprecationUrl: e, shouldRedirect: !0 };
                            }
                            return { deprecationUrl: '', shouldRedirect: !1 };
                        })({
                            albumId: N,
                            deprecationTargetAlbumId: G.deprecationTargetAlbumId,
                            trackId: L,
                            realId: (null == (l = Z.meta) ? void 0 : l.id) === L ? (null == (u = Z.meta) ? void 0 : u.realId) : void 0,
                            searchParams: Y,
                        }),
                        eh = (0, T.c)({ album: G.meta, shouldHistoryBack: !0 }),
                        ex = !!(null == (m = G.meta) ? void 0 : m.isNonMusic),
                        e_ = !!(L && F);
                    ((0, P.A)(),
                        ((e) => {
                            var t;
                            let { albumId: a, trackId: i, isNonMusic: l } = e,
                                { setDeeplink: n } = null != (t = (0, eo.P)()) ? t : {};
                            (0, s.useEffect)(() => {
                                if (i) {
                                    let e = l ? void 0 : { playTrack: i, openPlayer: !0, lyricsMode: !0 },
                                        { href: t } = (0, k.u)('/album/:albumId/track/:trackId', { params: { albumId: a, trackId: i }, query: e });
                                    null == n || n(t);
                                } else {
                                    let { href: e } = (0, k.u)('/album/:albumId', { params: { albumId: a } });
                                    null == n || n(e);
                                }
                                return () => {
                                    null == n || n(null);
                                };
                            }, [a, l, n, i]);
                        })({ albumId: N, trackId: L, isNonMusic: ex }),
                        (0, s.useEffect)(() => {
                            var e;
                            (null == (e = G.meta) ? void 0 : e.isUnsafeLegal) && eh();
                        }, [null == (b = G.meta) ? void 0 : b.isUnsafeLegal, eh]),
                        (0, s.useLayoutEffect)(
                            () => (
                                L && N && !e_ && Z.open({ trackId: L, albumId: Number(N) }),
                                () => {
                                    Z.reset();
                                }
                            ),
                            [N, e_, L, Z],
                        ),
                        (0, s.useEffect)(() => {
                            var e;
                            e_ && (null == (e = Z.meta) ? void 0 : e.resolveAllDisclaimers) && Z.meta.resolveAllDisclaimers();
                        }, [e_, Z.meta]),
                        (0, s.useEffect)(() => {
                            ee(J.cpa, Number(N)) || er();
                        }, [ee, N, J.cpa, er]),
                        (0, s.useEffect)(
                            () => (
                                G.id && G.id !== Number(N) && (G.reset(Q), er()),
                                () => {
                                    (G.reset(Q), er());
                                }
                            ),
                            [G, N, Q, er, J],
                        ),
                        (0, M.J)(G.isResolved),
                        ((e, t, a, i, l) => {
                            var n, o, r, d;
                            (0, s.useEffect)(() => {
                                var s, n, o, r;
                                let d = t && a,
                                    c = null == i || null == (s = i.resolvedModalData) ? void 0 : s.title,
                                    u = null == e || null == (o = e.meta) || null == (n = o.resolvedModalData) ? void 0 : n.title;
                                if (a && (l || (null == i ? void 0 : i.isLegalRejected))) {
                                    if (!c) return;
                                    (0, z.j)({ title: c });
                                    return;
                                }
                                if (null == e || null == (r = e.meta) ? void 0 : r.isLegalRejected) {
                                    if (!u) return;
                                    (0, z.j)({ title: u });
                                    return;
                                }
                                if (!(null == e ? void 0 : e.meta) || e.isLoading || d) return;
                                let m = (0, H.f)(e.meta);
                                t ||
                                    ea(m, { fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((e) => {
                                        (0, z.j)(e);
                                    });
                            }, [
                                null == e ? void 0 : e.meta,
                                null == e ? void 0 : e.isLoading,
                                null == e || null == (n = e.meta) ? void 0 : n.isLegalRejected,
                                null == e || null == (r = e.meta) || null == (o = r.resolvedModalData) ? void 0 : o.title,
                                l,
                                a,
                                null == i ? void 0 : i.isLegalRejected,
                                null == i || null == (d = i.resolvedModalData) ? void 0 : d.title,
                                t,
                            ]);
                        })(G, Z.isOpened, L, Z.meta, e_),
                        (0, s.useEffect)(
                            () => (
                                em(!0),
                                () => {
                                    em(!1);
                                }
                            ),
                            [N, em],
                        ));
                    let ej = (0, d.L)(() => (ex ? (0, i.jsx)(aY, {}) : (0, i.jsx)(ao, {}))),
                        eg = [];
                    (N &&
                        G.isNeededToLoad &&
                        (eg.push(G.getData({ albumId: Number(N), resumeStream: !1, preloadedAlbum: E, sonataState: Q }), G.getDonations({ albumId: Number(N) })),
                        ($ || X) && eg.push(J.getCpa({ albumId: Number(N), preloadedCpa: X }))),
                        eg.length && (0, s.use)(Promise.allSettled(eg)),
                        (0, s.useEffect)(() => {
                            J.cpa && G.id && et(J.cpa, G.id);
                        }, [J.cpa, G.id, et]),
                        G.isNotFound && (0, n.notFound)(),
                        ep && (0, n.redirect)(ev),
                        ((e) => {
                            let { album: t } = e,
                                a = (0, s.useRef)(0),
                                { notify: l } = (0, es.l)(),
                                { formatMessage: n } = (0, ei.A)();
                            (0, s.useMemo)(
                                () => () => {
                                    if (!t.isNotFound && (t.isRejected || (!t.meta && !t.isLoading))) {
                                        var e;
                                        if (!a || a.current > 0) return;
                                        let s = (null == (e = t.meta) ? void 0 : e.isPodcast)
                                            ? n({ id: 'podcast-errors.error-during-loading-podcast' })
                                            : n({ id: 'album-errors.error-during-loading-album' });
                                        (l((0, i.jsx)(en.h, { error: s }), { containerId: el.u.ERROR }), a.current++);
                                    }
                                },
                                [t.isLoading, t.isNotFound, t.isRejected, t.meta, n, l],
                            )();
                        })({ album: G }));
                    let ey = e_
                        ? null != (j = null == (v = Z.meta) ? void 0 : v.resolvedModalData)
                            ? j
                            : null
                        : null != (g = null == (p = G.meta) ? void 0 : p.resolvedModalData)
                          ? g
                          : null;
                    if (G.isCacheNotFound) return (0, i.jsx)(y, {});
                    if ((null == (h = G.meta) ? void 0 : h.isLegalRejected) || e_) return (0, i.jsx)(R.M, { modalState: q, data: ey });
                    let eA = ex ? r.Xk.album.NON_MUSIC_ALBUM_PAGE : r.Xk.album.ALBUM_PAGE;
                    return (0, i.jsx)(B, {
                        pageAlbumId: Number(N),
                        children: (0, i.jsx)(O.j, {
                            children: (0, i.jsxs)(C.h, {
                                scrollElement: V,
                                children: [
                                    (0, i.jsx)(U.Y, {}),
                                    (0, i.jsxs)(c.C, {
                                        scrollableContainerRef: K,
                                        className: eb().root,
                                        containerClassName: eb().content,
                                        scrollContentClassName: eb().scrollContent,
                                        'data-test-id': eA,
                                        children: [(0, i.jsx)('div', { className: eb().averageColorBackground, style: ec }), ej, (0, i.jsx)(eu, { user: W, album: G })],
                                    }),
                                ],
                            }),
                        }),
                    });
                }),
                aW = (0, l.PA)((e) => (0, i.jsx)(L.n, { pageId: N._Q.ALBUM, pageEntityId: e.albumId, children: (0, i.jsx)(a$, { ...e }) }));
        },
        28087: (e, t, a) => {
            'use strict';
            a.d(t, { q: () => l });
            var i = a(38832);
            let l = (e) => {
                var t, a;
                return null != (a = null == (t = (0, i.j)()) ? void 0 : t.get(e)) ? a : null;
            };
        },
        28764: (e, t, a) => {
            'use strict';
            a.d(t, { I: () => c });
            var i = a(74631),
                l = a(71035),
                s = a(27954);
            a(44806);
            var n = a(6969),
                o = a(25895),
                r = (a(28087), a(38832)),
                d = (a(8266), a(83918));
            let c = () => {
                let {
                        experiments: e,
                        user: {
                            account: {
                                data: { hasPlus: t },
                            },
                        },
                    } = (0, s.g)(),
                    a = (0, d.X)(),
                    c = (0, i.useCallback)(() => {}, [!1]),
                    u = (0, l.c)((e, t) => {}),
                    m = (0, l.c)(() => {
                        let e = (0, r.j)();
                        if (null === e) return;
                        e.delete(n.K.CLID);
                        let t = new URL(window.location.href);
                        ((t.search = e.toString()), a(t.toString()));
                    }),
                    b = (0, l.c)((e, t) => {
                        if (!e || !t) return;
                        let a = c();
                        if (!a) return;
                        let { parsedClid: i } = a;
                        return t === i.albumId && e.clid === i.cpa.clid && e.artistId === i.cpa.artistId;
                    }),
                    v = (0, l.c)((e) => {
                        let t = c();
                        return (null == t ? void 0 : t.parsedClid.albumId) === e;
                    }),
                    p = (0, l.c)((e, t) => {
                        let a = c();
                        if (!a || a.parsedClid.albumId !== e) return t;
                        let { href: i } = (0, o.u)(t, { query: { [n.K.CLID]: a.queryClid } });
                        return i;
                    });
                return {
                    isCPAEnabled: !1,
                    getClidFromQuery: c,
                    setClidToQuery: u,
                    deleteClidFromQuery: m,
                    checkIsValidClid: b,
                    getAlbumUrlWithSavedClid: p,
                    checkIsCurrentAlbumPage: v,
                };
            };
        },
        30012: (e) => {
            e.exports = { root: 'RelatedContent_root__Dl1Nr', carousel: 'RelatedContent_carousel__pmv5c', header: 'RelatedContent_header__527S3' };
        },
        30787: (e, t, a) => {
            'use strict';
            a.d(t, { C: () => i });
            let i = (e, t) => {
                let [a, i] = e.split('?'),
                    l = new URLSearchParams(i || '');
                for (let [e, a] of new URLSearchParams(t).entries()) l.set(e, a);
                let s = l.toString();
                return ''.concat(a).concat(s ? '?'.concat(s) : '');
            };
        },
        31892: (e) => {
            e.exports = {
                root: 'CommonAlbumPage_root__E8c_3',
                content: 'CommonAlbumPage_content__vRSnu',
                scrollContent: 'CommonAlbumPage_scrollContent__0XS83',
                header: 'CommonAlbumPage_header__jS_be',
                text: 'CommonAlbumPage_text__kqBSb',
                footerContainer: 'CommonAlbumPage_footerContainer__JvjKN',
                footer: 'CommonAlbumPage_footer__dBXP4',
                averageColorBackground: 'CommonAlbumPage_averageColorBackground__hs1_3',
                virtualScroll: 'CommonAlbumPage_virtualScroll__Sc_gs',
                virtualItem: 'CommonAlbumPage_virtualItem__yhvPB',
                label: 'CommonAlbumPage_label__TErtx',
                labelLinkContainer: 'CommonAlbumPage_labelLinkContainer__fk6OB',
                labelLink: 'CommonAlbumPage_labelLink__v4EnM',
                important: 'CommonAlbumPage_important__GXaZH',
            };
        },
        33005: (e, t, a) => {
            'use strict';
            a.d(t, { v: () => m });
            var i = a(25839),
                l = a(88204),
                s = a(74631),
                n = a(39004),
                o = a(89288),
                r = a(61493),
                d = a(4071),
                c = a(66738);
            let u = (0, l.PA)((e) => {
                    let { onClick: t, className: a, size: l = 's', iconSize: s = 'xxs', forwardRef: u, ...m } = e,
                        { formatMessage: b } = (0, n.A)();
                    return (0, i.jsx)(d.$, {
                        ref: u,
                        size: l,
                        variant: 'default',
                        radius: 'round',
                        color: 'secondary',
                        onClick: t,
                        className: a,
                        'aria-label': b({ id: 'donation.button-text' }),
                        icon: (0, i.jsx)(c.I, { size: s, variant: 'ruble' }),
                        ...(0, o.OZ)(m),
                        'data-test-id': r.S7.DONATION_BUTTON,
                    });
                }),
                m = (0, s.forwardRef)((e, t) => (0, i.jsx)(u, { forwardRef: t, ...e }));
        },
        33458: (e, t, a) => {
            'use strict';
            a.d(t, { p: () => s });
            var i = a(56829),
                l = a(86584);
            let s = (e) => {
                let { labels: t, type: a } = e;
                return {
                    items: null == t ? void 0 : t.map((e) => ({ ...e, link: (0, l.r)(e.id) })),
                    count: null == t ? void 0 : t.length,
                    hasLabels: !!(null == t ? void 0 : t.length),
                    isPublisher: a === i._.PODCAST,
                    names: null == t ? void 0 : t.map((e) => e.name).join(', '),
                };
            };
        },
        33920: (e, t, a) => {
            'use strict';
            function i(e, t) {
                return e.map((e) => 'https://'.concat(t, '/artist/').concat(e.id));
            }
            a.d(t, { x: () => i });
        },
        40496: (e) => {
            e.exports = { root: 'LastEpisodes_root__4JPKj', blockHeader: 'LastEpisodes_blockHeader__se7bd', shimmerItem: 'LastEpisodes_shimmerItem__Iirx5' };
        },
        41242: (e, t, a) => {
            'use strict';
            a.d(t, { N: () => l });
            var i = a(22403);
            function l(e, t) {
                var a;
                return (0, i.Y)(e, null != (a = null == t ? void 0 : t.maxLength) ? a : 48, !!(null == t ? void 0 : t.truncateByLastSpace));
            }
        },
        42057: (e, t, a) => {
            'use strict';
            a.d(t, { x: () => b });
            var i = a(25839),
                l = a(82298),
                s = a(74631),
                n = a(89288),
                o = a(5365),
                r = a(18412),
                d = a(80986),
                c = a(98547),
                u = a.n(c);
            let m = (e) => {
                    let {
                            className: t,
                            forwardRef: a,
                            headerClassName: c,
                            containerClassName: m,
                            headingVariant: b,
                            title: v,
                            viewAllActionLink: p,
                            description: h,
                            children: x,
                            ..._
                        } = e,
                        j = (0, s.useId)(),
                        g = (0, s.useRef)(null);
                    return (0, i.jsxs)('section', {
                        ref: a,
                        className: (0, l.$)(u().root, t),
                        ...(0, n.OZ)(_),
                        children: [
                            (0, i.jsx)(r.T, {
                                className: c,
                                labeledForId: j,
                                title: v,
                                description: h,
                                viewAllActionLink: p,
                                controls: (0, i.jsx)(d.X, { className: u().controls, carouselRef: g }),
                                headingVariant: b,
                                withDescription: !!h,
                            }),
                            (0, i.jsx)(o.F, { ref: g, itemClassName: (0, l.$)(u().item, u().important), className: m, 'aria-labelledby': j, children: x }),
                        ],
                    });
                },
                b = (0, s.forwardRef)((e, t) => (0, i.jsx)(m, { forwardRef: t, ...e }));
        },
        42722: (e) => {
            e.exports = {
                root: 'Offline_root__IxjsY',
                container: 'Offline_container__2V5Vo',
                icon: 'Offline_icon__jDmpJ',
                title: 'Offline_title__Y2CtW',
                text: 'Offline_text__Nhult',
                buttons: 'Offline_buttons__ZOFI7',
                button: 'Offline_button__QSA_j',
            };
        },
        47127: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { Q: () => i }),
                (function (e) {
                    ((e.FROM_ALBUM_COVER = 'from-album-cover'), (e.FROM_ARTIST_PHOTOS = 'from-artist-photos'), (e.PIC = 'pic'), (e.MOSAIC = 'mosaic'));
                })(i || (i = {})));
        },
        48127: (e, t, a) => {
            'use strict';
            a.d(t, { O: () => i });
            let i = { ABOUT: 'about', TRACKS: 'track-list' };
        },
        49200: (e, t, a) => {
            'use strict';
            a.d(t, { Q: () => c });
            var i = a(74631),
                l = a(84059),
                s = a(49337),
                n = a(96618),
                o = a(30787),
                r = a(6969);
            let d = { [s.S.Light]: 'yandex_music', [s.S.Dark]: 'yandex_music_dark' },
                c = () => {
                    let e = (0, l.useSearchParams)(),
                        { theme: t } = (0, n.W)();
                    return (0, i.useCallback)(
                        (a) => {
                            if (!t) return a;
                            let i = new URLSearchParams(e);
                            i.set('wl', d[t]);
                            let l = e.get(r.K.UTM_CAMPAIGN);
                            return (l && i.set('meta', 'campaignid_'.concat(l)), (0, o.C)(a, i));
                        },
                        [t, e],
                    );
                };
        },
        52312: (e, t, a) => {
            'use strict';
            a.d(t, { r: () => d });
            var i = a(84361),
                l = a(74631),
                s = a(71035),
                n = a(89192),
                o = a(27954);
            let r = { width: 400, height: 400 },
                d = (e) => {
                    let { count: t, getEstimateSize: a, gap: d, containerRef: c, overscan: u = 2 } = e,
                        {
                            settings: { isMobile: m },
                        } = (0, o.g)(),
                        { contentScrollRef: b } = (0, n.g)(),
                        v = (0, l.useRef)(new Map()),
                        p = (0, l.useRef)(void 0),
                        h = {
                            count: t,
                            gap: d,
                            estimateSize: (e) => {
                                let t = v.current.get(String(e));
                                return null != t ? t : a(e);
                            },
                            overscan: u,
                            initialRect: r,
                            isScrollingResetDelay: 50,
                            scrollMargin: ((e, t, a) => {
                                if (!t) return 0;
                                let i = t.getBoundingClientRect().top;
                                return e && 1 ? i + window.scrollY : !e && a ? i + a.scrollTop : 0;
                            })(m, c, b),
                        },
                        x = (0, i.XW)(h),
                        _ = (0, i.Te)({ ...h, getScrollElement: () => b, initialOffset: null == b ? void 0 : b.scrollTop }),
                        j = m ? x : _,
                        g = (0, s.c)(() => {
                            j.measure();
                        });
                    return (
                        (0, l.useEffect)(() => {
                            p.current ||
                                (p.current = new ResizeObserver((e) => {
                                    let t = !1;
                                    (e.forEach((e) => {
                                        let a = e.target.getAttribute('data-index');
                                        if (e.target && a) {
                                            let i = e.contentRect.height;
                                            i && i !== v.current.get(a) && (v.current.set(a, e.contentRect.height), (t = !0));
                                        }
                                    }),
                                        t && g());
                                }));
                        }, [g]),
                        { virtualizer: j, resizeObserver: p.current }
                    );
                };
        },
        52393: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { K: () => i }),
                (function (e) {
                    ((e.EXPLICIT = 'explicit'), (e.CLEAN = 'clean'));
                })(i || (i = {})));
        },
        56412: (e, t, a) => {
            'use strict';
            a.d(t, { M: () => f });
            var i = a(25839),
                l = a(82298),
                s = a(88204),
                n = a(74631),
                o = a(8487),
                r = a(61493),
                d = a(71035),
                c = a(4071),
                u = a(4254),
                m = a(36484),
                b = a(62562),
                v = a(21784),
                p = a(53712),
                h = a(85686),
                x = a(12929),
                _ = a(95067),
                j = a(97522),
                g = a(71472),
                y = a.n(g);
            let A = {
                    [x.n.ALBUM]: (0, i.jsx)(o.A, { id: 'extra-explicit.confirm-unsafe-album' }),
                    [x.n.PODCAST]: (0, i.jsx)(o.A, { id: 'extra-explicit.confirm-unsafe-podcast' }),
                    [x.n.ARTIST]: (0, i.jsx)(o.A, { id: 'extra-explicit.confirm-unsafe-artist' }),
                    [x.n.TRACK]: (0, i.jsx)(o.A, { id: 'extra-explicit.confirm-unsafe-track' }),
                    [x.n.AUDIOBOOK]: (0, i.jsx)(o.A, { id: 'extra-explicit.confirm-unsafe-audiobook' }),
                    [x.n.CLIP]: (0, i.jsx)(o.A, { id: 'extra-explicit.confirm-unsafe-clip' }),
                },
                f = (0, s.PA)((e) => {
                    var t;
                    let { modalState: a, data: s, onClose: g, className: f } = e,
                        C = null != s ? s : null == a ? void 0 : a.modalData,
                        k = (0, v.W)(),
                        T = (0, h.Z)(p.Z.main.href),
                        N = (0, b.N)().get(m.U2),
                        P = (0, d.c)(() => {
                            if (g) return g();
                            (k.canBack && k.back(), T());
                        }),
                        I = (null == C || null == (t = C.details) ? void 0 : t.url) && C.details.text,
                        O = (0, d.c)(() => {
                            var e;
                            null == a || a.setConfirmUnsafeDisclaimer(!0);
                            let t = N.get(_.c.ExEx),
                                i = new Date(),
                                l = i.setMinutes(i.getMinutes() + 15),
                                s =
                                    null != (e = null == a ? void 0 : a.entityKey)
                                        ? e
                                        : ''.concat(null == a ? void 0 : a.entityType, '_').concat(null == a ? void 0 : a.entityId);
                            (t ? N.set(_.c.ExEx, [...t, s], { expires: new Date(l) }) : N.set(_.c.ExEx, [s], { expires: new Date(l) }),
                                null == g || g(),
                                (null == a ? void 0 : a.onDisclaimerConfirmHandler) && a.onDisclaimerConfirmHandler());
                        }),
                        L = (0, d.c)(() => {
                            ((null == a ? void 0 : a.shouldHistoryBack) ? (null == g || g(), k.canBack && k.back(), T()) : null == g || g(),
                                (null == a ? void 0 : a.onDisclaimerRejectHandler) && a.onDisclaimerRejectHandler());
                        });
                    (0, n.useEffect)(
                        () => () => {
                            null == a || a.reset();
                        },
                        [a],
                    );
                    let S = (0, n.useMemo)(() => {
                            if (C) {
                                var e, t;
                                return (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(u.DZ, {
                                            variant: 'h4',
                                            size: 'l',
                                            className: (0, l.$)(y().title, y().text),
                                            'data-test-id': r.OA.disclaimer.DISCLAIMER_TITLE,
                                            children: C.title,
                                        }),
                                        (0, i.jsx)(u.HL, {
                                            variant: 'div',
                                            size: 'l',
                                            weight: 'normal',
                                            className: y().text,
                                            'data-test-id': r.OA.disclaimer.DISCLAIMER_DESCRIPTION,
                                            children: C.description,
                                        }),
                                        I &&
                                            (0, i.jsx)(j.N, {
                                                href: null == (e = C.details) ? void 0 : e.url,
                                                className: y().link,
                                                children: (0, i.jsx)(u.HL, {
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
                        }, [C, I]),
                        E = (0, n.useMemo)(
                            () =>
                                (null == a ? void 0 : a.type) === x.Z.UNSAFE
                                    ? (0, i.jsxs)('div', {
                                          className: y().buttons,
                                          children: [
                                              (0, i.jsx)(c.$, {
                                                  color: 'primary',
                                                  onClick: L,
                                                  size: 'l',
                                                  radius: 'xxxl',
                                                  className: y().button,
                                                  'data-test-id': r.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                                  children: (0, i.jsx)(o.A, { id: 'extra-explicit.reject-unsafe-entity' }),
                                              }),
                                              (0, i.jsx)(c.$, {
                                                  color: 'secondary',
                                                  onClick: O,
                                                  size: 'l',
                                                  radius: 'xxxl',
                                                  className: y().button,
                                                  'data-test-id': r.OA.disclaimer.DISCLAIMER_CONFIRM_BUTTON,
                                                  children: a.entityType && A[a.entityType],
                                              }),
                                          ],
                                      })
                                    : (0, i.jsx)('div', {
                                          className: y().buttons,
                                          children: (0, i.jsx)(c.$, {
                                              color: 'primary',
                                              onClick: P,
                                              size: 'l',
                                              radius: 'xxxl',
                                              className: y().button,
                                              'data-test-id': r.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                              children: (0, i.jsx)(o.A, { id: 'interface-actions.confirm' }),
                                          }),
                                      }),
                            [O, null == a ? void 0 : a.entityType, null == a ? void 0 : a.type, P, L],
                        );
                    return (0, i.jsx)('div', {
                        className: (0, l.$)(y().root, f),
                        'data-test-id': r.OA.disclaimer.DISCLAIMER_CONTENT,
                        children: (0, i.jsxs)('div', { className: y().container, children: [S, E] }),
                    });
                });
        },
        56918: (e) => {
            e.exports = {
                root: 'PageHeaderShimmer_root__kqSwa',
                cover: 'PageHeaderShimmer_cover__ay2cr',
                content: 'PageHeaderShimmer_content__SdBKK',
                info: 'PageHeaderShimmer_info__cZkS2',
                entityName: 'PageHeaderShimmer_entityName__tlWnA',
                title: 'PageHeaderShimmer_title__xKG4e',
                meta: 'PageHeaderShimmer_meta__YWx0m',
                controls: 'PageHeaderShimmer_controls__gPErM',
                desktopPlayButton: 'PageHeaderShimmer_desktopPlayButton__R7EmH',
                button: 'PageHeaderShimmer_button__13qrG',
            };
        },
        57963: (e) => {
            e.exports = { playButtonCell: 'TrackAlbum_playButtonCell__pLJte', controlsBarCell: 'TrackAlbum_controlsBarCell__XUUCc' };
        },
        58091: (e) => {
            e.exports = {
                controlsContainer: 'CommonPageHeader_controlsContainer__4_h22',
                controls: 'CommonPageHeader_controls__c27E_',
                playControl: 'CommonPageHeader_playControl__gYOuR',
                playControl_withLogin: 'CommonPageHeader_playControl_withLogin__FL_L6',
            };
        },
        58301: (e, t, a) => {
            'use strict';
            a.d(t, { k: () => d });
            var i = a(25839),
                l = a(82298),
                s = a(23976),
                n = a(90923),
                o = a.n(n);
            let r = (e) => {
                    let { isActive: t } = e;
                    return (0, i.jsxs)('div', {
                        className: (0, l.$)(o().shimmer, o().donation),
                        children: [
                            (0, i.jsx)(s.W, { isActive: t, radius: 'round', className: o().shimmerCover }),
                            (0, i.jsxs)('div', {
                                className: o().shimmerContainer,
                                children: [
                                    (0, i.jsxs)('div', {
                                        className: o().shimmerText,
                                        children: [
                                            (0, i.jsx)(s.W, { isActive: t, radius: 'xxxl', className: o().shimmerArtist }),
                                            (0, i.jsx)(s.W, { isActive: t, radius: 'xxxl', className: o().shimmerGoal }),
                                        ],
                                    }),
                                    (0, i.jsx)(s.W, { isActive: t, radius: 'xxxl', className: o().shimmerButton }),
                                ],
                            }),
                        ],
                    });
                },
                d = (e) => Array.from({ length: 10 }, (t, a) => (0, i.jsx)(r, { isActive: e }, a));
        },
        58509: (e, t, a) => {
            'use strict';
            a.d(t, { y: () => n });
            var i = a(89288),
                l = a(49337),
                s = a(96618);
            let n = (e) => {
                let { theme: t } = (0, s.W)();
                if (e) {
                    let { r: a, g: s, b: n } = (0, i.E2)(e),
                        o = t === l.S.Light ? 0.15 : 0.7;
                    return 'rgba('.concat(a, ', ').concat(s, ', ').concat(n, ', ').concat(o, ')');
                }
            };
        },
        59911: (e, t, a) => {
            'use strict';
            a.d(t, { Q: () => l });
            var i = a(74631);
            let l = (e, t) => ({
                topColorStyle: (0, i.useMemo)(() => {
                    if (void 0 === t) return;
                    let a = t - 17;
                    return { '--average-color-background': e, transform: 'translateY('.concat(t >= 17 ? 0 : a, 'px)'), opacity: 1 };
                }, [t, e]),
                headerStyle: (0, i.useMemo)(() => ({ '--average-color-background': e }), [e]),
            });
        },
        60379: (e, t, a) => {
            'use strict';
            a.d(t, { W: () => l });
            var i = a(89288);
            let l = (e) => {
                if (!e) return null;
                let { h: t, s: a, l } = (0, i.g8)(e),
                    s = Math.min(70, Math.max(10, l + 10));
                return 'hsl('.concat(t, 'deg, ').concat(a, '%, ').concat(s, '%)');
            };
        },
        61288: (e, t, a) => {
            'use strict';
            a.d(t, { L: () => l });
            let i = /^(0|[1-9]\d*)$/;
            function l(e) {
                return void 0 !== e && !(e.length > 40) && i.test(e);
            }
        },
        61399: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => l });
            var i = a(18421);
            let l = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return e.map((e) => ((0, i.C)(e) ? e : void 0)).filter((e) => void 0 !== e);
            };
        },
        66881: (e, t, a) => {
            'use strict';
            a.d(t, { Rk: () => o, VN: () => s, nd: () => n, vY: () => l });
            var i = a(48127);
            let l = 10,
                s = 1,
                n = [i.O.ABOUT, i.O.TRACKS],
                o = 5;
        },
        67716: (e) => {
            e.exports = {
                menuControl: 'PageHeaderAlbumControls_menuControl__wlqyr',
                likeControl: 'PageHeaderAlbumControls_likeControl__eohAO',
                pinOrDonationControl: 'PageHeaderAlbumControls_pinOrDonationControl__3aFUW',
                trailerControl: 'PageHeaderAlbumControls_trailerControl___HcW0',
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
        72378: (e, t, a) => {
            'use strict';
            a.d(t, { c: () => i });
            let i = (e) => {
                var t;
                if (null == e ? void 0 : e.isForeignAgent) return null == (t = e.resolvedForeignAgentData) ? void 0 : t.title;
            };
        },
        75568: (e, t, a) => {
            'use strict';
            a.d(t, { N: () => s });
            var i = a(47127),
                l = a(61399);
            let s = (e) => {
                var t, a, s, n, o;
                return e
                    ? {
                          id: e.id,
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
                                            disclaimers: (0, l.H)(e.disclaimers),
                                        };
                                    })) || [],
                          name: e.name,
                          cover: { uri: e.coverUri || '', type: i.Q.PIC, prefix: '', custom: !1 },
                          ogImage: '',
                          derivedColors: { accent: '', average: e.averageColor || '', miniPlayer: '', waveText: '' },
                          available: e.isAvailable,
                          disclaimers: (0, l.H)(e.disclaimers),
                          counts: {
                              directAlbums: (null == (a = e.counts) ? void 0 : a.albums) || 0,
                              alsoAlbums: (null == (s = e.counts) ? void 0 : s.compilations) || 0,
                              tracks: (null == (n = e.counts) ? void 0 : n.tracks) || 0,
                              alsoTracks: 0,
                          },
                          trailer: { available: !!(null == (o = e.trailer) ? void 0 : o.isAvailable) },
                          hasPromotions: !1,
                          genres: [],
                          links: [],
                          ticketsAvailable: !1,
                          ratings: { week: 0, month: 0, day: 0 },
                          composer: e.isComposer || !1,
                          various: e.various || !1,
                      }
                    : {
                          id: '',
                          name: '',
                          various: !1,
                          composer: !1,
                          decomposed: [],
                          ogImage: '',
                          hasPromotions: !1,
                          genres: [],
                          ticketsAvailable: !1,
                          links: [],
                          ratings: { week: 0, month: 0, day: 0 },
                          counts: { directAlbums: 0, alsoAlbums: 0, tracks: 0, alsoTracks: 0 },
                          available: !1,
                          disclaimers: [],
                      };
            };
        },
        77635: (e, t, a) => {
            'use strict';
            a.d(t, { p: () => u });
            var i = a(25839),
                l = a(74631),
                s = a(44031),
                n = a(61777),
                o = a(95314),
                r = a(66284),
                d = a(76939);
            let c = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: a,
                            isShimmerActive: c,
                            title: u,
                            description: m,
                            albums: b,
                            className: v,
                            containerClassName: p,
                            headerClassName: h,
                            viewAllActionLink: x,
                            headingRef: _,
                            headingVariant: j,
                            shouldSendAnalyticsOnLoaded: g,
                            ...y
                        } = e,
                        A = (0, n.f)();
                    return (
                        (0, l.useEffect)(() => {
                            g && A();
                        }, [A, g]),
                        (0, i.jsx)(r.O, {
                            isShimmerVisible: a,
                            isShimmerActive: c,
                            className: v,
                            headerClassName: h,
                            containerClassName: p,
                            ref: t,
                            title: u,
                            description: m,
                            viewAllActionLink: x,
                            headingRef: _,
                            headingVariant: j,
                            ...y,
                            children:
                                null == b
                                    ? void 0
                                    : b.map((e, t) =>
                                          (0, i.jsx)(
                                              o.B,
                                              {
                                                  objectType: s.DomainObjectType.Album,
                                                  objectId: String(e.id),
                                                  objectPosX: t + 1,
                                                  objectPosY: 1,
                                                  objectsCount: b.length,
                                                  children: (0, i.jsx)(d.a, {
                                                      album: e,
                                                      contentLinesCount: 3,
                                                      withAddition: !e.isNonMusic,
                                                      withLikesCount: e.isNonMusic,
                                                  }),
                                              },
                                              e.id,
                                          ),
                                      ),
                        })
                    );
                },
                u = (0, l.forwardRef)((e, t) => (0, i.jsx)(c, { forwardRef: t, ...e }));
        },
        78159: (e, t, a) => {
            'use strict';
            a.d(t, { F: () => i });
            let i = (e) => {
                let t = Math.floor(e / 1e3),
                    a = Math.floor(t / 3600),
                    i = Math.floor((t % 3600) / 60),
                    l = t % 60,
                    s = 'PT';
                return (a > 0 && (s += ''.concat(a, 'H')), i > 0 && (s += ''.concat(i, 'M')), (l > 0 || 'PT' === s) && (s += ''.concat(l, 'S')), s);
            };
        },
        79422: (e, t, a) => {
            'use strict';
            a.d(t, { w: () => s });
            var i = a(74631),
                l = a(71035);
            let s = () => {
                let e = (0, i.useRef)(new Map());
                return (
                    (0, i.useLayoutEffect)(
                        () => (
                            e.current.size > 0 && e.current.clear(),
                            () => {
                                e.current.clear();
                            }
                        ),
                        [],
                    ),
                    (0, l.c)((t, a) => (e.current.has(t) ? e.current.get(t) : (e.current.set(t, a), a)))
                );
            };
        },
        83918: (e, t, a) => {
            'use strict';
            a.d(t, { X: () => l });
            var i = a(74631);
            let l = () =>
                (0, i.useCallback)((e) => {
                    {
                        let t = window.history.state;
                        window.history.replaceState(t, '', e);
                    }
                }, []);
        },
        84e3: (e, t, a) => {
            'use strict';
            a.d(t, { U: () => s });
            var i = a(36484),
                l = a(62562);
            let s = () => (0, l.N)().get(i.Zf);
        },
        84252: (e) => {
            e.exports = { root: 'AlbumDonationMenuItem_root__Ajw_w', cover: 'AlbumDonationMenuItem_cover__Gg8_a', image: 'AlbumDonationMenuItem_image__AI5zU' };
        },
        86358: (e, t, a) => {
            'use strict';
            a.d(t, { r: () => i });
            var i = (function (e) {
                return ((e.TRACK = 'track'), (e.TEXT = 'text'), e);
            })({});
        },
        86584: (e, t, a) => {
            'use strict';
            a.d(t, { r: () => l });
            var i = a(25895);
            let l = (e) => (0, i.u)('/label/:labelId', { params: { labelId: e } });
        },
        87148: (e) => {
            e.exports = { root: 'PlusPaywallButton_root__ftsxl', title: 'PlusPaywallButton_title__8PpX0', subtitle: 'PlusPaywallButton_subtitle__brC59' };
        },
        88720: (e, t, a) => {
            'use strict';
            a.d(t, { f: () => l });
            var i = a(75568);
            let l = (e) => {
                var t;
                if (!e)
                    return {
                        id: 0,
                        title: '',
                        availableForOptions: [],
                        availableForPremiumUsers: !0,
                        artists: [],
                        volumes: [],
                        ogImage: '',
                        availablePartially: !1,
                        trackCount: 0,
                        recent: !1,
                        veryImportant: !1,
                        labels: [],
                        metaType: '',
                        availableForMobile: !0,
                    };
                let a = (null == (t = e.artists) ? void 0 : t.map((e) => (0, i.N)(e))) || [];
                return {
                    id: e.id,
                    title: e.title,
                    type: e.type,
                    coverUri: e.coverUri,
                    year: e.year,
                    version: e.version,
                    availableForOptions: e.availableForOptions || [],
                    availableForPremiumUsers: e.availableForPremiumUsers || !0,
                    artists: a,
                    volumes: [],
                    ogImage: e.coverUri || '',
                    availablePartially: !1,
                    trackCount: e.trackCount || 0,
                    recent: !1,
                    veryImportant: !1,
                    labels: [],
                    metaType: '',
                    availableForMobile: !0,
                };
            };
        },
        89179: (e) => {
            e.exports = {
                meta: 'PageHeaderNonMusic_meta__9DQPy',
                infoNote: 'PageHeaderNonMusic_infoNote__7xbV5',
                infoNoteIcon: 'PageHeaderNonMusic_infoNoteIcon__VDK7_',
                infoNoteText: 'PageHeaderNonMusic_infoNoteText__DCQq8',
                plusPaywallButton: 'PageHeaderNonMusic_plusPaywallButton__O7Tx_',
                controls_withPaywallButton: 'PageHeaderNonMusic_controls_withPaywallButton__Csp5U',
                booksLogo: 'PageHeaderNonMusic_booksLogo__4_TgU',
                controlsBlock: 'PageHeaderNonMusic_controlsBlock__jta99',
                controlsBlock_withPaywallButton: 'PageHeaderNonMusic_controlsBlock_withPaywallButton__vngBY',
            };
        },
        90923: (e) => {
            e.exports = {
                root: 'DonationCard_root__81nc5',
                donation: 'DonationCard_donation__SlArJ',
                cover: 'DonationCard_cover__Mqb3g',
                image: 'DonationCard_image__xABTn',
                container: 'DonationCard_container__1xkqs',
                text: 'DonationCard_text__mdeXx',
                artist: 'DonationCard_artist__xq4Jw',
                goal: 'DonationCard_goal__6BdcG',
                label: 'DonationCard_label__T_hDw',
                shimmer: 'DonationCard_shimmer__cMO7r',
                shimmerContainer: 'DonationCard_shimmerContainer__9ZH20',
                shimmerText: 'DonationCard_shimmerText__TrtjR',
                shimmerCover: 'DonationCard_shimmerCover__U6Rwp',
                shimmerArtist: 'DonationCard_shimmerArtist__jRQCV',
                shimmerGoal: 'DonationCard_shimmerGoal__UGSTd',
                shimmerButton: 'DonationCard_shimmerButton__LYfOm',
            };
        },
        91809: (e, t, a) => {
            'use strict';
            a.d(t, { X: () => _ });
            var i = a(25839),
                l = a(82298),
                s = a(74631),
                n = a(39004),
                o = a(8487),
                r = a(89288),
                d = a(4071),
                c = a(66738),
                u = a(86869),
                m = a(4254),
                b = a(6323),
                v = a(97522),
                p = a(90923),
                h = a.n(p);
            let x = (e) => {
                    let { artist: t, goal: a, onNavigateToArtist: s, onNavigateToDonation: p, forwardRef: x, ..._ } = e,
                        { formatMessage: j } = (0, n.A)();
                    return (0, i.jsxs)('div', {
                        ref: x,
                        className: (0, l.$)(h().root, h().donation),
                        ...(0, r.OZ)(_),
                        children: [
                            (0, i.jsx)(u.t, {
                                radius: 'round',
                                className: h().cover,
                                children: (0, i.jsx)(v.N, {
                                    href: t.url,
                                    onClick: s,
                                    'aria-label': j({ id: 'entity-names.artist-name' }, { artistName: t.name }),
                                    children: (0, i.jsx)(b.B, {
                                        className: h().image,
                                        src: t.coverUri,
                                        isAvailable: t.isAvailable,
                                        size: 200,
                                        fit: 'cover',
                                        withAvatarReplace: !0,
                                        'aria-hidden': !0,
                                    }),
                                }),
                            }),
                            (0, i.jsxs)('div', {
                                className: h().container,
                                children: [
                                    (0, i.jsxs)('div', {
                                        className: h().text,
                                        children: [
                                            (0, i.jsx)(m.DZ, { variant: 'span', size: 'xs', weight: 'bold', lineClamp: 2, className: h().artist, children: t.name }),
                                            (0, i.jsx)(m.HL, {
                                                variant: 'span',
                                                type: 'text',
                                                size: 'l',
                                                weight: 'medium',
                                                lineClamp: 2,
                                                className: h().goal,
                                                children: a,
                                            }),
                                        ],
                                    }),
                                    (0, i.jsxs)(d.$, {
                                        role: 'link',
                                        size: 's',
                                        color: 'secondary',
                                        onClick: p,
                                        className: h().label,
                                        withRipple: !1,
                                        children: [
                                            (0, i.jsx)(c.I, { variant: 'ruble', size: 'xxxs' }),
                                            (0, i.jsx)(m.HL, {
                                                type: 'text',
                                                size: 'm',
                                                weight: 'medium',
                                                variant: 'span',
                                                children: (0, i.jsx)(o.A, { id: 'donation.support-button' }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                _ = (0, s.forwardRef)((e, t) => (0, i.jsx)(x, { forwardRef: t, ...e }));
        },
        93222: (e) => {
            e.exports = {
                root_hoverable: 'PageHeaderCover_root_hoverable__WF_BH',
                coverImage: 'PageHeaderCover_coverImage__i0wBv',
                coverImage_hoverable: 'PageHeaderCover_coverImage_hoverable__9XZK7',
                coverButton: 'PageHeaderCover_coverButton__3zeub',
                coverButton_hoverable: 'PageHeaderCover_coverButton_hoverable__hS1Gq',
                plusBadge: 'PageHeaderCover_plusBadge__O09t4',
            };
        },
        93596: (e, t, a) => {
            'use strict';
            a.d(t, { m: () => b });
            var i = a(25839),
                l = a(71035),
                s = a(16886),
                n = a(24816),
                o = a(25982),
                r = a(91149),
                d = a(92942),
                c = a(30296),
                u = a(27954);
            let m = (e) => {
                var t;
                return null == (t = e.data) ? void 0 : t.entityId;
            };
            function b(e, t, a, b) {
                let v = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : m,
                    { notify: p } = (0, d.l)(),
                    { fullscreenPlayer: h } = (0, u.g)(),
                    x = (0, c.e)();
                return (0, l.c)(() => {
                    let l = e.reduce((e, t) => {
                        let a = v(t);
                        return (a && e.push({ type: s.z4.Unloaded, meta: { id: a } }), e);
                    }, []);
                    if (!l.length) return;
                    switch (t) {
                        case n.N.LAST:
                            null == x || x.injectLast({ entitiesData: l, sourceContextData: null != a ? a : void 0 });
                            break;
                        case n.N.NEXT:
                            null == x || x.injectNext({ entitiesData: l, sourceContextData: null != a ? a : void 0 });
                    }
                    let d = h.modal.isOpened ? r.u.FULLSCREEN_INFO : r.u.INFO;
                    p((0, i.jsx)(o.l, { entityVariant: b.entityVariant, variant: t, entityTitle: b.entityTitle, coverUri: b.coverUri }), { containerId: d });
                });
            }
        },
        95641: (e, t, a) => {
            'use strict';
            a.d(t, { C: () => m });
            var i = a(67379),
                l = a(20934),
                s = a(59450),
                n = a(71035),
                o = a(79670),
                r = a(26742),
                d = a(25488),
                c = a(97952),
                u = a(84e3);
            let m = () => {
                let { hash: e } = (0, s.gf)(),
                    t = (0, u.U)(),
                    a = (0, s.st)(),
                    { pageId: m } = (0, c.$)(),
                    { blockId: b, blockType: v, blockPosX: p, blockPosY: h } = (0, r.N)(),
                    { objectType: x, objectId: _, objectPosX: j, objectPosY: g, objectsCount: y, mainObjectId: A, mainObjectType: f } = (0, d.J)();
                return (0, n.c)((s, n) => {
                    if (!a || !m) return;
                    let r = o.W[m];
                    if (!r) return;
                    let d = (0, i.F)({
                        params: {
                            objectType: x,
                            objectId: _,
                            objectPosX: j,
                            objectPosY: g,
                            hash: e,
                            pageId: r,
                            mainObjectType: f,
                            mainObjectId: A,
                            entityType: v,
                            entityId: b,
                            entityPosX: p,
                            entityPosY: h,
                            objectsCount: y,
                            viewUuid: n,
                        },
                        logger: t,
                        context: 'useSendEventOnDonationShowedOrHidden',
                    });
                    d && (s ? (0, l.Pf)(a.evgenInstance, d) : (0, l.nv)(a.evgenInstance, d));
                });
            };
        },
        98056: (e) => {
            e.exports = {
                carouselBlocks: 'AlbumContent_carouselBlocks__bOsTV',
                carouselBlock: 'AlbumContent_carouselBlock__QhSlm',
                carouselBlockHeader: 'AlbumContent_carouselBlockHeader__Liibv',
                carouselContainer: 'AlbumContent_carouselContainer__Y1M_e',
                label: 'AlbumContent_label__2jz4j',
            };
        },
        98547: (e) => {
            e.exports = {
                root: 'DonationCarousel_root__Uejjw',
                controls: 'DonationCarousel_controls__anVvP',
                item: 'DonationCarousel_item__89_B6',
                important: 'DonationCarousel_important__Y52Es',
            };
        },
    },
]);
