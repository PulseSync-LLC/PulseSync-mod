(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2994],
    {
        2930: (e, t, a) => {
            'use strict';
            a.d(t, { M: () => h, v: () => o });
            var i = a(60754),
                n = a(96527),
                r = a(50311),
                l = a(49574),
                s = a(95428);
            let o = i.gK
                .compose(i.gK.model('BrandedPlayerBanner', { payload: i.gK.maybeNull(i.gK.model({ thumb: n.KB, modal: i.gK.maybeNull(r.i_) })), modal: s.qt }), s.JE)
                .views((e) => ({
                    get isVisible() {
                        let { advert: t, experiments: a, settings: n, user: r } = (0, i.Zn)(e);
                        if (e.noAds || e.hasError || t.isAdvertDisabled(l.fDi.PLAYER_BRANDING) || !a.checkExperiment(l.zal.WebNextPlayerBranding, 'on')) return !1;
                        return !r.hasPlus && !n.isMobile;
                    },
                }))
                .actions((e) => ({
                    setPayload: (t) => {
                        let { settings: a } = (0, i.Zn)(e);
                        a.setCustomPlayerThumb(l.TZj.BRANDED), (e.payload = (0, i.wg)(t));
                    },
                }));
            var c = a(32290),
                d = a(96103),
                u = a(55178),
                _ = a(91027),
                m = a(44574);
            let p = { pp: 'g', ps: 'clni', p2: 'joqc', puid1: '', puid2: '', puid3: '' };
            var v = a(7050),
                y = (function (e) {
                    return (e.PLAYER = 'branded_player'), e;
                })({});
            let h = (0, d.PA)(() => {
                let {
                        advertBanners: {
                            banners: { brandedPlayerBanner: e },
                        },
                    } = (0, l.Pjs)(),
                    t = (0, _.c)(() => {
                        e.setType(l.h8o.BRANDING);
                    }),
                    a = (0, _.c)((t) => {
                        ((e) =>
                            (0, v.m)(e) &&
                            e.type === y.PLAYER &&
                            'object' == typeof e.payload &&
                            null !== e.payload &&
                            !Array.isArray(e.payload) &&
                            'thumb' in e.payload &&
                            (0, n.ls)(e.payload.thumb) &&
                            'modal' in e.payload &&
                            (0, r.h9)(e.payload.modal))(t.data) && e.setPayload(t.data.payload);
                    });
                return ((0, u.useEffect)(
                    () => () => {
                        e.reset();
                    },
                    [e],
                ),
                (0, u.useEffect)(
                    () => (
                        window.addEventListener('message', a),
                        () => {
                            window.removeEventListener('message', a);
                        }
                    ),
                    [a],
                ),
                e.isVisible)
                    ? (0, c.jsx)(m.NX, {
                          ownerId: l.PVv,
                          containerId: 'adfox_175861261312993498',
                          params: p,
                          onLoad: t,
                          onError: e.toggleHasErrorTrue,
                          onNoAds: e.toggleNoAdsTrue,
                      })
                    : null;
            });
        },
        2994: (e, t, a) => {
            'use strict';
            a.d(t, { MainPage: () => $ });
            var i = a(32290),
                n = a(63618),
                r = a(96103),
                l = a(21916),
                s = a(55178),
                o = a(60900),
                c = a(39407),
                d = a(59824),
                u = a(73474),
                _ = a(54862),
                m = a(6752),
                p = a(63423),
                v = a(50162),
                y = a(63887),
                h = a(46049),
                g = a(70280),
                b = a(71926),
                x = a(43557),
                A = a(32381),
                f = a(81020),
                C = a(11135),
                k = a(75645),
                P = a(72480),
                N = a(22127),
                j = a(49574),
                S = a(44574),
                E = a(23028),
                T = a.n(E),
                I = a(16172),
                w = a(91027),
                L = a(50444),
                M = a(64696),
                B = a(51947),
                O = a(41854),
                R = a(85303),
                D = a(33797),
                F = a(57318),
                V = a(83778),
                K = a(71483),
                z = a(47713),
                U = a.n(z);
            let W = (0, r.PA)((e) => {
                let {
                        lineClamp: t,
                        isVibePaused: a,
                        isNonMusic: r,
                        isGenerative: l,
                        withLink: s,
                        hasMultipleArtists: c,
                        mainAlbum: u,
                        entityTitle: _,
                        artists: m,
                        artistsRef: v,
                        isArtistsMenuOpen: y,
                        onArtistsMenuClick: h,
                    } = e,
                    { formatMessage: g } = (0, o.A)();
                if (a)
                    return (0, i.jsx)(b.Caption, {
                        variant: 'span',
                        className: (0, n.$)(U().text, U().important),
                        lineClamp: 1,
                        ...(0, d.Am)(d.Xk.vibe.VIBE_DYNAMIC_TITLE_VIBE),
                        children: g({ id: 'entity-names.my-vibe' }),
                    });
                if (r && u)
                    return (0, i.jsx)(S.N_, {
                        href: u.url,
                        className: (0, n.$)(U().text, U().important),
                        ...(0, d.Am)(d.Xk.vibe.VIBE_DYNAMIC_TITLE_NON_MUSIC_ENTITY_TITLE),
                        children: (0, i.jsx)(b.Caption, { variant: 'span', className: (0, n.$)(U().text, U().important), lineClamp: t, children: u.title }),
                    });
                if (l && _)
                    return (0, i.jsx)(b.Caption, {
                        variant: 'span',
                        className: (0, n.$)(U().text, U().important),
                        lineClamp: t,
                        ...(0, d.Am)(d.Xk.vibe.VIBE_DYNAMIC_TITLE_GENERATIVE),
                        children: _,
                    });
                if (m) {
                    let e = (0, i.jsx)(D.iQ, {
                        artists: m,
                        captionClassName: (0, n.$)(U().text, U().important),
                        linkClassName: (0, n.$)(U().text, U().important),
                        className: (0, n.$)(U().text, U().important),
                        lineClamp: t,
                        withLink: s,
                        withCustomTooltip: !1,
                        variant: 'breakWord',
                    });
                    return c
                        ? (0, i.jsx)(p.$, {
                              variant: 'text',
                              'aria-label': g({ id: 'interface-actions.context-menu-artists' }),
                              'aria-haspopup': 'menu',
                              'aria-expanded': y,
                              withRipple: !1,
                              onClick: h,
                              ref: v,
                              children: e,
                          })
                        : e;
                }
                return null;
            });
            var G = a(91311),
                q = a.n(G);
            let Q = 'vibe-freemium-block',
                Y = (0, r.PA)((e) => {
                    let { className: t } = e,
                        { user: a } = (0, j.Pjs)(),
                        [r, l] = (0, _.d)(),
                        {
                            openPaymentWidgetModal: s,
                            isShimmerActive: o,
                            isShimmerVisible: d,
                            mainText: u,
                            mainTextA11y: p,
                            additionText: v,
                        } = (0, j.DpZ)({ storeName: 'music', isEnabled: a.isAuthorized && !a.hasPlus, offerElement: { element: r, intersectionPropertyId: Q } }),
                        y = (0, m.L)(() =>
                            a.isAuthorized
                                ? (0, i.jsx)(S.b4, {
                                      ref: l,
                                      'data-intersection-property-id': Q,
                                      mainText: u,
                                      ariaLabel: p,
                                      additionText: v,
                                      isShimmerActive: o,
                                      isShimmerVisible: d,
                                      onClick: s,
                                      className: q().button,
                                      mainTextClassName: q().buttonMainText,
                                      additionTextClassName: q().buttonAdditionText,
                                  })
                                : (0, i.jsx)(S.Hi, {
                                      size: 'l',
                                      variant: 'default',
                                      buttonText: (0, i.jsx)(b.Caption, {
                                          variant: 'span',
                                          size: 'l',
                                          children: (0, i.jsx)(c.A, { id: 'authorization.enter-and-listen-button' }),
                                      }),
                                      className: q().button,
                                  }),
                        );
                    return (0, i.jsxs)('div', {
                        className: (0, n.$)(q().root, t),
                        children: [
                            y,
                            (0, i.jsx)(b.Caption, {
                                variant: 'span',
                                size: 'l',
                                className: q().description,
                                children: (0, i.jsx)(c.A, { id: 'buy-subscription.new-vibe-description', values: { nbsp: ' ' } }),
                            }),
                        ],
                    });
                }),
                H = (0, r.PA)(() => {
                    var e, t, a, r, l, c, d, u, _, p, v, y;
                    let {
                            sonataState: h,
                            experiments: g,
                            user: b,
                            paywall: { modal: x },
                            vibe: A,
                        } = (0, j.Pjs)(),
                        { pageId: C, pageEntityId: k } = (0, j.$au)(),
                        { blockIdForFrom: P } = (0, j.N8n)(),
                        N = (0, j.l$t)({ mainObjectType: I.ky.Track }),
                        { resetSettings: S } = (0, j.B0S)({ seeds: [j.M19], pageIdForFrom: C, blockIdForFrom: P }),
                        { isEnabled: E } = (0, j.e8U)(),
                        [swapVibeAnimationAndWheel, setSwapVibeAnimationAndWheel] = (0, s.useState)(
                            window?.nativeSettings?.get('modSettings.vibeAnimationEnhancement.swapVibeAnimationAndWheel') ?? false,
                        ),
                        T = (() => {
                            var e, t, a, i, n, r;
                            let { sonataState: l } = (0, j.Pjs)(),
                                s = (0, j.eGp)(),
                                { formatMessage: c } = (0, o.A)(),
                                d = null == s ? void 0 : s.state.currentContext.value,
                                u = null == s ? void 0 : s.state.queueState.currentEntity.value,
                                _ = null == u ? void 0 : u.sourceContext;
                            if (!(null == d ? void 0 : d.data.type)) return;
                            let m = (function (e, t) {
                                switch (t) {
                                    case V.h.SEARCH:
                                        return e({ id: 'entity-names.search' });
                                    case V.h.MUSIC_HISTORY:
                                    case V.h.MUSIC_HISTORY_SEARCH:
                                        return e({ id: 'entity-names.music-history' });
                                    case V.h.DOWNLOADED_TRACKS:
                                    case V.h.USER_TRACKS:
                                        return e({ id: 'entity-names.collection' });
                                    case V.h.ARTIST_FAMILIAR_FROM_WAVE:
                                        return e({ id: 'page.familiar-vibe' });
                                    case V.h.ARTIST_MY_COLLECTION:
                                        return e({ id: 'page.familiar-collection' });
                                    default:
                                        return;
                                }
                            })(c, null == _ ? void 0 : _.data.sourceContextType);
                            if (m) return m;
                            switch (d.data.type) {
                                case K.K.Album:
                                    if (null == (e = l.entityMeta) ? void 0 : e.isPodcast) return c({ id: 'entity-names.podcast' });
                                    if (null == (t = l.entityMeta) ? void 0 : t.isAudiobook) return c({ id: 'entity-names.book' });
                                    if (null == (a = l.entityMeta) ? void 0 : a.isFairyTale) return c({ id: 'entity-names.fairytale' });
                                    return d.data.meta.title;
                                case K.K.Playlist:
                                    return d.data.meta.title;
                                case K.K.Vibe: {
                                    let e = null == (i = d.data.meta.session) ? void 0 : i.wave;
                                    if ((null == e ? void 0 : e.seeds.length) === 1 && (null == e ? void 0 : e.seeds[0]) === j.M19)
                                        return c({ id: 'entity-names.my-vibe' });
                                    return c({ id: 'vibe-actions.vibe-context' }, { type: null == e ? void 0 : e.type, name: null == e ? void 0 : e.name });
                                }
                                case K.K.Artist:
                                    return c({ id: 'entity-names.artist-popular-tracks' });
                                case K.K.Various:
                                    return null == (r = l.entityMeta) || null == (n = r.mainAlbum) ? void 0 : n.title;
                                case K.K.Generative:
                                    return c({ id: 'entity-names.generative' });
                                default:
                                    return;
                            }
                        })(),
                        z = (() => {
                            let e = (0, j.eGp)(),
                                t = null == e ? void 0 : e.state.currentContext.value;
                            if ((null == t ? void 0 : t.data.type) === K.K.Vibe) {
                                var a, i;
                                let e = null == (a = t.data.meta.session) ? void 0 : a.wave;
                                if (
                                    ((null == e ? void 0 : e.seeds.length) === 1 && (null == e ? void 0 : e.seeds[0]) === j.M19) ||
                                    ((null == e ? void 0 : e.seeds.length) === 1 && (null == e || null == (i = e.seeds[0]) ? void 0 : i.includes(j.yxZ)))
                                )
                                    return !1;
                            }
                            return !0;
                        })(),
                        G = !h.isPlaying && (h.isVibeContext || !h.entityMeta),
                        q = !h.isPlaying && !z,
                        Q = null == (e = h.entityMeta) ? void 0 : e.mainArtist,
                        H = null == (t = h.entityMeta) ? void 0 : t.mainAlbum,
                        $ = null == (a = h.entityMeta) ? void 0 : a.artists,
                        X = !!(null == (r = h.entityMeta) ? void 0 : r.isNonUserGenerated),
                        Z = !!(null == (l = h.entityMeta) ? void 0 : l.isNonMusic),
                        J = h.isGenerativeContext,
                        ee = !!(null == Q || null == (c = Q.cutoutCover) ? void 0 : c.uri) && !G,
                        et = ee && Q,
                        ea = (0, D.AX)(null != $ ? $ : []) > 1,
                        ei = X && !ea,
                        en = (0, s.useRef)(null),
                        { isArtistsMenuOpen: er, artistsMenuPosition: el, handleArtistsMenuClick: es, handleArtistsMenuOpenChange: eo } = (0, D.Bn)({ ref: en }),
                        ec = !b.hasPlus || !b.isAuthorized,
                        ed = (0, m.L)(() => (G ? f.rM : ee ? f.sr : f.S0)),
                        eu = (0, m.L)(() => (ec ? { ...ed, maxFontSize: Math.min(ed.maxFontSize, 72), fallbackMaxLines: 2 } : ed)),
                        e_ =
                            b.hasPlus &&
                            (g.checkExperiment(j.zal.WebNextWaveScreenWordsInWave, 'on') || g.checkExperiment(j.zal.WebNextWaveScreenWordsInWave, 'on_with_onyx')),
                        em = A.isShuffleVibe && h.isVibeContext,
                        ep = (0, F.OH)(em || null == (d = h.entityMeta) ? void 0 : d.averageColor);
                    ((0, s.useEffect)(() => {
                        ea || eo(!1);
                    }, [eo, ea]),
                        (0, s.useEffect)(() => {
                            k && N(!0);
                        }, [N, k]),
                        (0, s.useEffect)(() => {
                            const e = (event, key, value) => {
                                'modSettings.vibeAnimationEnhancement.swapVibeAnimationAndWheel' === key && setSwapVibeAnimationAndWheel(value);
                            };

                            const unsub = window.desktopEvents?.on('NATIVE_STORE_UPDATE', e);

                            return () => {
                                unsub();
                            };
                        }, []),
                        (0, s.useEffect)(
                            () => () => {
                                N(!1);
                            },
                            [N],
                        ));
                    let ev = (0, m.L)(() =>
                            g.checkExperiment(j.zal.WebNextShaderFallbackEnabled, 'on')
                                ? (0, i.jsx)(O.LW, { className: U().vibeAnimation })
                                : (0, i.jsx)(O.pA, { className: U().vibeAnimation, averageColor: ep.primary }),
                        ),
                        ey = (0, w.c)(() => {
                            b.hasPlus, S();
                        }),
                        eh = (0, m.L)(() => {
                            let e = h.entityMeta,
                                t = (0, i.jsx)('div', {
                                    className: (0, n.$)(U().textContainer, { [U().textContainer_withCover]: ee && e }),
                                    children: (0, i.jsx)(f.mx, {
                                        textOptions: eu,
                                        children: (0, i.jsx)(W, {
                                            isVibePaused: G,
                                            isNonMusic: Z,
                                            isGenerative: J,
                                            withLink: ei,
                                            hasMultipleArtists: ea,
                                            mainAlbum: H,
                                            entityTitle: null == e ? void 0 : e.title,
                                            artists: $,
                                            artistsRef: en,
                                            isArtistsMenuOpen: er,
                                            onArtistsMenuClick: es,
                                        }),
                                    }),
                                });
                            return e
                                ? (0, i.jsx)(j.FoH, {
                                      blockId: I.LA.MyWave,
                                      blockType: I.LA.MyWave,
                                      blockPosX: 1,
                                      blockPosY: 1,
                                      objectsCount: 1,
                                      mainObjectType: I.ky.Track,
                                      mainObjectId: e.id,
                                      children: (0, i.jsxs)(j.Bki, {
                                          objectType: I.ky.Artist,
                                          objectId: e.id,
                                          objectPosX: 1,
                                          objectPosY: 1,
                                          objectsCount: 1,
                                          children: [
                                              t,
                                              et &&
                                                  (0, i.jsx)('div', { className: U().artistCover, children: (0, i.jsx)(f.hY, { artist: Q, withLink: ei, onClick: es }) }),
                                              $ && ea && (0, i.jsx)(D.MJ, { artists: $, open: er, onOpenChange: eo, positionElement: el }),
                                          ],
                                      }),
                                  })
                                : t;
                        });
                    return (0, i.jsxs)(j.rtM, {
                        page: j.l7W.HOME_SCREEN,
                        places: [j.RBW.MY_WAVE],
                        children: [
                            E && (0, i.jsx)(B.Td, {}),
                            (0, i.jsxs)('div', {
                                className: (0, n.$)(U().root, { [U().root_reshuffle]: em, [U().root_withoutPlus]: !b.hasPlus }),
                                style: {
                                    flexDirection: swapVibeAnimationAndWheel ? 'row-reverse' : 'row',
                                },
                                children: [
                                    (0, i.jsx)(M.Q, { className: U().wheel }),
                                    (0, i.jsxs)('div', {
                                        className: (0, n.$)(U().meta, { [U().meta_noPlus]: !b.hasPlus }),
                                        children: [
                                            (0, i.jsx)(j.FoH, {
                                                blockId: I.LA.Toolbar,
                                                blockType: I.LA.Toolbar,
                                                blockPosX: 1,
                                                blockPosY: 1,
                                                objectsCount: 1,
                                                children: (0, i.jsx)(j.Bki, {
                                                    objectType: I.ky.Wave,
                                                    objectId: j.M19,
                                                    objectPosX: 1,
                                                    objectPosY: 1,
                                                    objectsCount: 1,
                                                    children: (0, i.jsx)(f.KA, { className: U().context, context: T, isResetAvailable: z, isHidden: q, onClick: ey }),
                                                }),
                                            }),
                                            (0, i.jsxs)('div', {
                                                className: U().entityMeta,
                                                children: [
                                                    ev,
                                                    (0, i.jsx)(
                                                        'div',
                                                        { className: U().entityMetaBody, children: eh },
                                                        ''.concat(null != (y = null == (u = h.entityMeta) ? void 0 : u.idWithContext) ? y : 'default', '-').concat(G),
                                                    ),
                                                ],
                                            }),
                                            (0, i.jsxs)('div', {
                                                className: (0, n.$)(U().playerBlock, { [U().playerBlock_withFreemium]: !b.hasPlus }),
                                                children: [
                                                    (0, i.jsx)(j.FoH, {
                                                        blockId: I.LA.MyWave,
                                                        blockType: I.LA.MyWave,
                                                        blockPosX: 1,
                                                        blockPosY: 1,
                                                        objectsCount: 1,
                                                        mainObjectType: I.ky.Track,
                                                        mainObjectId: null == (_ = h.entityMeta) ? void 0 : _.id,
                                                        children: (0, i.jsx)(j.Bki, {
                                                            objectType: I.ky.Track,
                                                            objectId: null == (p = h.entityMeta) ? void 0 : p.id,
                                                            objectPosX: 1,
                                                            objectPosY: 1,
                                                            objectsCount: 1,
                                                            children: (0, i.jsx)(L.j3, { hoveredButtonClassName: U().hoveredButton }),
                                                        }),
                                                    }),
                                                    e_ &&
                                                        (0, i.jsx)('div', {
                                                            className: U().words,
                                                            children: (0, i.jsx)(R.UG, { trackId: null == (v = h.entityMeta) ? void 0 : v.id }),
                                                        }),
                                                    !b.hasPlus && (0, i.jsx)(Y, { className: U().freemiumBlock }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                }),
                $ = (0, r.PA)((e) => {
                    var t, a;
                    let { withVideoModal: r } = e,
                        {
                            main: E,
                            user: I,
                            experiments: w,
                            releaseNotes: L,
                            fullscreenVideoPlayer: M,
                            sonataState: { entityMeta: B },
                            settings: { isMobile: O },
                        } = (0, j.Pjs)(),
                        { formatMessage: R } = (0, o.A)(),
                        D = (0, j.HFS)(),
                        { contentScrollRef: F, setContentScrollRef: V } = (0, j.gKY)(),
                        [K, z] = (0, _.d)(),
                        U = (0, P.df)(),
                        W = (0, P.Cc)(),
                        { theme: G } = (0, j.DPo)(),
                        q = w.checkExperiment(j.zal.WebNextNewWaveTab, 'on') || w.checkExperiment(j.zal.WebNextNewWaveTab, 'on1'),
                        Q = (0, j.ZpR)(null != (a = null == (t = E.specialHeader) ? void 0 : t.url) ? a : ''),
                        Y = w.checkExperiment(j.zal.WebNextNewWaveTabFeedbackForm, 'on'),
                        $ = (0, j.ZpR)('/slides/special/my_vibe_onboarding');
                    (0, s.useEffect)(() => {
                        var e, t;
                        if (!r || !U) return;
                        let a = (0, j.jrm)(),
                            i = null != (e = null == a ? void 0 : a.get(j.K3F.IDS)) ? e : null,
                            n = null != (t = null == a ? void 0 : a.get(j.K3F.ACTIVE_INDEX)) ? t : null,
                            { clipIds: l, activeClipIndex: s } = (0, C.V1)(i, n);
                        W(l, s), M.setOpenedFromMain();
                    }, [r, U, M, W]),
                        (0, s.useEffect)(
                            () => () => {
                                E.reset(), q || E.landing.reset();
                            },
                            [E, E.landing, q],
                        ),
                        (0, j.Jzs)(E.landing.isResolved);
                    let X = w.checkExperiment(j.zal.WebNextDisableVibe, 'on'),
                        Z = (0, s.useCallback)(() => {
                            L.isReady && L.modal.open();
                        }, [L.isReady, L.modal]),
                        J = (0, s.useMemo)(() => (X ? { 'margin-block-start': '1vh' } : {}), [X]),
                        ee = (0, s.useMemo)(() => {
                            if (w.checkExperiment(j.zal.WebNextBetaLabel, 'off')) return null;
                            {
                                let e = w.checkExperiment(j.zal.WebNextBetaLabel, 'version'),
                                    t = R({ id: 'desktop.app-version' }, { version: D }),
                                    a = e ? D : 'Beta';
                                return (0, i.jsxs)(g.m_, {
                                    placement: 'left',
                                    offsetOptions: 4,
                                    children: [
                                        (0, i.jsx)(p.$, {
                                            color: 'secondary',
                                            radius: 'xl',
                                            'aria-label': e ? t : 'Beta '.concat(t),
                                            className: (0, n.$)(T().beta, { [T().beta_withReleaseNotes]: L.isReady }),
                                            onClick: Z,
                                            children: (0, i.jsx)(b.Caption, { variant: 'div', type: 'text', size: 's', weight: 'medium', children: a }),
                                        }),
                                        (0, i.jsx)(g.ZI, { children: D }),
                                    ],
                                });
                            }
                        }, [w, R, Z, L.isReady, D]),
                        et = (0, s.useMemo)(
                            () =>
                                Y
                                    ? (0, i.jsxs)(y.N, {
                                          onClick: $,
                                          className: T().feedbackForm,
                                          children: [
                                              (0, i.jsx)(b.Caption, {
                                                  className: T().feedbackFormCaption,
                                                  lineClamp: 3,
                                                  size: 'm',
                                                  variant: 'span',
                                                  weight: 'bold',
                                                  children: (0, i.jsx)(c.A, { id: 'page.new-wave-feedback-form-title' }),
                                              }),
                                              (0, i.jsx)('div', {
                                                  className: T().feedbackFormImageContainer,
                                                  children: (0, i.jsx)(v.Image, {
                                                      className: T().feedbackFormImage,
                                                      fit: 'cover',
                                                      src: 'avatars.mds.yandex.net/get-music-misc/28052/img.69e0ffdc6159081b722c77ef/orig',
                                                      withAvatarReplace: !0,
                                                  }),
                                              }),
                                          ],
                                      })
                                    : null,
                            [$, Y],
                        ),
                        ea = (0, n.$)(T().betaSlot, { [T().betaSlot_newVibe]: q, [T().betaSlot_bottom]: q && Y }),
                        ei = (0, s.useMemo)(() => {
                            if (!E.specialHeader) return {};
                            let e = G === j.Sxu.Light ? E.specialHeader.lightTheme : E.specialHeader.darkTheme;
                            return { '--special-button-background': e.backgroundColor, '--special-button-color': e.textColor };
                        }, [E.specialHeader, G]),
                        en = (0, m.L)(() => {
                            let e = w.checkExperiment(j.zal.WebNextRewind2024, 'on');
                            return E.specialHeader
                                ? (0, i.jsxs)('div', {
                                      className: T().specialHeaderContainer,
                                      children: [
                                          e &&
                                              (0, i.jsx)(v.Image, {
                                                  src: 'avatars.mds.yandex.net/get-music-misc/28052/img.69203c15cffc41172f18a125/orig',
                                                  withAvatarReplace: !0,
                                                  className: T().specialHeaderImage,
                                                  fit: 'contain',
                                              }),
                                          (0, i.jsx)(p.$, {
                                              color: 'secondary',
                                              size: 'default',
                                              radius: 'xxxl',
                                              role: 'link',
                                              className: T().specialHeader,
                                              withHover: !1,
                                              style: ei,
                                              onClick: Q,
                                              children: E.specialHeader.title,
                                          }),
                                      ],
                                  })
                                : null;
                        }),
                        er = (0, m.L)(() =>
                            q
                                ? null
                                : w.checkExperiment(j.zal.WebNextFooterDisclaimer, 'on')
                                  ? (0, i.jsx)(S.wi, { className: T().footer })
                                  : (0, i.jsx)(S.A, { children: (0, i.jsx)(S.wi, { className: T().footer }) }),
                        );
                    if (E.landing.isNeededToLoad && !q) {
                        let e = I.isAuthorized ? u.p.MAIN : u.p.MAIN_NOLOGIN,
                            t = [E.landing.getSkeleton({ id: e, showWizard: I.settings.showWizard }, { preloadBlocksCount: 2 }), E.getSpecialHeader()];
                        (0, s.use)(Promise.allSettled(t));
                    }
                    r && !U && (0, l.notFound)();
                    let el = (0, m.L)(() =>
                        q
                            ? (0, i.jsx)(j.nVz, {
                                  pageId: j._Q$.WAVE_LANDING_SCREEN,
                                  pageEntityId: null == B ? void 0 : B.id,
                                  children: (0, i.jsx)(j.jPc, {
                                      children: (0, i.jsxs)('div', {
                                          className: T().vibeWidgetContainer,
                                          ...(0, d.Am)(d.Xk.main.MAIN_PAGE),
                                          children: [
                                              (0, i.jsxs)('div', {
                                                  className: T().actionsBar,
                                                  children: [O && (0, i.jsx)(N.YS, { withMeta: !1, variant: 'mobile', className: T().userProfile }), et],
                                              }),
                                              (0, i.jsx)(H, {}),
                                              (0, i.jsx)('div', { className: ea, children: ee }),
                                          ],
                                      }),
                                  }),
                              })
                            : (0, i.jsx)(j.nVz, {
                                  pageId: j._Q$.HOME,
                                  children: (0, i.jsx)(k.hO, {
                                      scrollElement: F,
                                      headerElement: K,
                                      children: (0, i.jsxs)(h.N, {
                                          className: T().root,
                                          containerClassName: T().content,
                                          ref: V,
                                          ...(0, d.Am)(d.Xk.main.MAIN_PAGE),
                                          children: [
                                              en,
                                              (0, i.jsx)('div', { className: ea, children: ee }),
                                              !X &&
                                                  (0, i.jsx)(j.FoH, {
                                                      blockIdForFrom: j.hf$.RUP_MAIN_RADIO,
                                                      blockId: j.UfI.RUP,
                                                      blockType: j.UfI.RUP,
                                                      blockPosX: 0,
                                                      blockPosY: 0,
                                                      objectsCount: 0,
                                                      children: (0, i.jsx)(f.CT, { className: T().vibe }),
                                                  }),
                                              (0, i.jsx)(x.EA, {
                                                  landing: E.landing,
                                                  headerConcealerComponent: (0, i.jsx)('div', { ref: z }),
                                                  errorComponent: (0, i.jsx)(A.w, { className: T().error, withBackwardControl: !1 }),
                                                  containerClassName: T().landing,
                                                  containerStyle: J,
                                                  tabWithHeadingTitle: !0,
                                                  tabWithCovers: !0,
                                                  tabWithSubtitle: !0,
                                              }),
                                              er,
                                          ],
                                      }),
                                  }),
                              }),
                    );
                    return (0, i.jsx)(j.rtM, { page: j.l7W.HOME_SCREEN, places: [j.RBW.MY_WAVE], children: el });
                });
        },
        3992: (e) => {
            e.exports = {
                icon: 'PlayQueueButton_icon__7fc0G',
                icon_active: 'PlayQueueButton_icon_active__4A8H2',
                animation_scaled: 'PlayQueueButton_animation_scaled__w_Wir',
                scale: 'PlayQueueButton_scale__dXShR',
                animation_unscaled: 'PlayQueueButton_animation_unscaled__Lt_j9',
                unscale: 'PlayQueueButton_unscale__BlmKQ',
            };
        },
        4529: (e) => {
            e.exports = {
                root: 'WordsCardPopoverDesktop_root__vm3hv',
                item: 'WordsCardPopoverDesktop_item__eZPj9',
                actionItem: 'WordsCardPopoverDesktop_actionItem__l25qD',
                actionItem_active: 'WordsCardPopoverDesktop_actionItem_active__BORi3',
                divider: 'WordsCardPopoverDesktop_divider__Vy2GN',
                sourceItem: 'WordsCardPopoverDesktop_sourceItem__fUPoo',
                sourceIcon: 'WordsCardPopoverDesktop_sourceIcon__QSr8h',
            };
        },
        5619: (e) => {
            e.exports = {
                root: 'VibeSettingsModal_root__oX6Av',
                modalContent: 'VibeSettingsModal_modalContent__KObkt',
                overlay: 'VibeSettingsModal_overlay__qKFx_',
                content: 'VibeSettingsModal_content__Uchn7',
                header: 'VibeSettingsModal_header__J4FUk',
                actions: 'VibeSettingsModal_actions__hCGT7',
                ripple: 'VibeSettingsModal_ripple__zQXGo',
            };
        },
        6054: (e) => {
            e.exports = {
                root: 'VideoAd_root__e7gla',
                root_hidden: 'VideoAd_root_hidden__78CPl',
                videoBlock: 'VideoAd_videoBlock__bqNRq',
                video: 'VideoAd_video__j1f_y',
                content: 'VideoAd_content__QroDp',
                close: 'VideoAd_close__sMGlV',
                notifyClose: 'VideoAd_notifyClose__w82mE',
                cover: 'VideoAd_cover__kQwxh',
                important: 'VideoAd_important__VZkA_',
                icon: 'VideoAd_icon__o_Hzn',
                text: 'VideoAd_text__rjKqZ',
            };
        },
        6680: (e) => {
            e.exports = {
                content: 'WizardModal_content__mLcxg',
                modalHeader: 'WizardModal_modalHeader__BbNjx',
                root: 'WizardModal_root__mrF2y',
                root_withCustomControls: 'WizardModal_root_withCustomControls__t7Kjv',
                modalContent: 'WizardModal_modalContent__OifZs',
                wrapper: 'WizardModal_wrapper__2_8ft',
                title: 'WizardModal_title__fPGJr',
                text: 'WizardModal_text__ntEON',
                button: 'WizardModal_button__e8bCS',
                mainContainer: 'WizardModal_mainContainer__fbjpt',
                carousel: 'WizardModal_carousel__uVcYS',
                scrollContainer: 'WizardModal_scrollContainer__tDrP6',
                important: 'WizardModal_important__7uymQ',
                tabCarousel: 'WizardModal_tabCarousel__AclIV',
                tabShimmer: 'WizardModal_tabShimmer__36Qc7',
                tabTitle: 'WizardModal_tabTitle__7ZAaF',
                filter: 'WizardModal_filter__o2wpn',
                filter_selected: 'WizardModal_filter_selected__qdlMf',
                item: 'WizardModal_item__wUHVg',
            };
        },
        10598: (e) => {
            e.exports = {
                root: 'WizardIntroModal_root__P1uIH',
                root_mobile: 'WizardIntroModal_root_mobile__Ax8HO',
                header: 'WizardIntroModal_header__qtpcO',
                content: 'WizardIntroModal_content__0A1Ox',
                image: 'WizardIntroModal_image__SOJa7',
                text: 'WizardIntroModal_text___yvOo',
                title: 'WizardIntroModal_title__NWQaj',
                description: 'WizardIntroModal_description__rDfHs',
                button: 'WizardIntroModal_button__b9jJT',
            };
        },
        11715: (e, t, a) => {
            'use strict';
            a.d(t, { v: () => b, J: () => T });
            var i = a(32290),
                n = a(63618),
                r = a(55178),
                l = a(60900),
                s = a(59824),
                o = a(91027),
                c = a(6752),
                d = a(378),
                u = a(49574),
                _ = a(20136),
                m = a.n(_),
                p = a(71926),
                v = a(38125),
                y = a.n(v);
            let h = (e) => {
                    let { value: t, variant: a, className: r, forwardRef: l, ...o } = e,
                        c = 'start' === a ? s.Kq.changeTimecode.TIMECODE_TIME_START : s.Kq.changeTimecode.TIMECODE_TIME_END;
                    return (0, i.jsx)(p.Caption, {
                        style: window.ALWAYS_SHOW_PLAYER_TIMESTAMPS?.() ? { opacity: 1 } : undefined,
                        ref: l,
                        tabIndex: 0,
                        className: (0, n.$)(y().root, y()['root_'.concat(a)], r),
                        variant: 'span',
                        size: 's',
                        type: 'entity',
                        weight: 'medium',
                        ...(0, s.Am)(c),
                        ...o,
                        children: (0, i.jsx)('span', { 'aria-hidden': 'true', children: t }),
                    });
                },
                g = (0, r.forwardRef)((e, t) => (0, i.jsx)(h, { forwardRef: t, ...e })),
                b = (e) => {
                    var t, a, _, p;
                    let {
                            className: v,
                            sliderClassName: y,
                            disabled: h,
                            isFullscreen: b,
                            isMobile: x,
                            showThumbVariant: A,
                            withTimecode: f = !0,
                            sonataPlaybackId: C,
                            customDuration: k,
                            canMoveForward: P,
                        } = e,
                        N = (0, u.eGp)(),
                        j = (b || !x) && f,
                        S = (0, r.useRef)(!1),
                        { sonataState: E } = (0, u.Pjs)(),
                        [T, I] = (0, r.useState)(null != (_ = E.position) ? _ : 0),
                        [w, L] = (0, r.useState)(null != (p = E.duration) ? p : 0),
                        [M, B] = (0, r.useState)(0),
                        { formatMessage: O } = (0, l.A)(),
                        { advert: R } = (0, u.Pjs)(),
                        D = (0, u.rs2)(),
                        F = T && w ? (100 * Math.min(T, w)) / w : 0,
                        V = null == N ? void 0 : N.getState(C),
                        K = (0, u.PMf)(T),
                        z = (0, u.E4p)(Math.round(T), Math.round(w)),
                        U = (0, u.PMf)(w),
                        W = k && T > k,
                        G = (0, o.c)((e, t) => {
                            R.isAdvertShown || ((S.current = !t), t ? null == N || N.setProgress(e, C) : I(e));
                        });
                    (0, r.useEffect)(() => {
                        W && (P ? null == N || N.moveForward(C) : (null == N || N.moveBackward(C), null == N || N.pause(C)));
                    }, [P, W, N, C]);
                    let q = (0, r.useCallback)(
                        (e) => {
                            e &&
                                (e.duration === 1 / 0
                                    ? (L(0), I(0), B(0))
                                    : (L(k && !R.isAdvertShown ? k : e.duration), I((t) => (S.current ? t : e.position)), B(e.loaded)));
                        },
                        [k, R.isAdvertShown],
                    );
                    (0, r.useEffect)(() => {
                        var e, t;
                        let a = null == D || null == (e = D.audioAdvertPlayback) ? void 0 : e.state.playerState.progress.onChange(q),
                            i = null == V || null == (t = V.playerState) ? void 0 : t.progress.onChange(q);
                        return () => {
                            null == i || i(), null == a || a();
                        };
                    }, [
                        null == D || null == (t = D.audioAdvertPlayback) ? void 0 : t.state.playerState.progress,
                        q,
                        null == V || null == (a = V.playerState) ? void 0 : a.progress,
                    ]);
                    let Q = (0, c.L)(() => {
                        if (0 !== w) return k && k <= w ? Math.round(k) : Math.round(w);
                    });
                    return (0, i.jsxs)('div', {
                        className: (0, n.$)(m().root, { [m().root_fullscreen]: b, [m().root_mobile]: x, [m().root_withTimecode]: f }, v),
                        style: { '--track-progress': ''.concat(F, '%') },
                        ...(0, s.Am)(s.Kq.changeTimecode.TIMECODE_WRAPPER),
                        children: [
                            j && (0, i.jsx)(g, { role: 'text', 'aria-label': K, value: z, variant: 'start', className: m().timecode }),
                            (0, i.jsx)(d.A, {
                                'aria-valuetext': K,
                                className: (0, n.$)(m().slider, { [m()['slider_thumbSize_'.concat(x ? 'xs' : 'm')]]: !0 }, y),
                                disabled: h,
                                thumbSize: x ? 'xs' : 's',
                                trackSize: x ? 'xs' : 's',
                                value: Math.round(T),
                                mode: 'deferred',
                                secondaryValue: Math.round(M),
                                maxValue: Q,
                                onChange: G,
                                'aria-label': O({ id: 'player-actions.timecode-control' }),
                                showThumbVariant: A,
                                ...(0, s.Am)(s.Kq.changeTimecode.TIMECODE_SLIDER),
                            }),
                            j &&
                                (0, i.jsx)(g, {
                                    role: 'text',
                                    'aria-label': U,
                                    value: (0, u.E4p)(Math.round(w), Math.round(w)),
                                    variant: 'end',
                                    className: m().timecode,
                                }),
                        ],
                    });
                };
            var x = a(96103),
                A = a(44989),
                f = a(72676),
                C = a(96527),
                k = a(50311),
                P = a(64308),
                N = a.n(P),
                j = a(95731),
                S = a.n(j);
            let E = (e) => {
                    let { progress: t, position: a, duration: l, timecodeClassName: s, currentTimecodeClassName: o, progressElementWidth: d, shouldHoldTimecode: _ } = e,
                        m = (0, u.PMf)(a),
                        p = (0, u.PMf)(l),
                        v = (0, r.useRef)(null),
                        [y, h] = (0, r.useState)(0),
                        b = (0, u.E4p)(Math.round(l), Math.round(l));
                    (0, r.useEffect)(() => {
                        v.current && h(Math.round(v.current.getBoundingClientRect().width));
                    }, [b.length, d]);
                    let x = Math.round((t / 100) * d),
                        A = 0 !== d ? d - y : 0,
                        f = Math.min(Math.max(x - y / 2, 0), A),
                        C = (0, c.L)(() => {
                            if (!_)
                                return {
                                    '--timecode-position': ''.concat(f, 'px'),
                                    ...(window.ALWAYS_SHOW_PLAYER_TIMESTAMPS?.() ? { opacity: 1 } : {}),
                                };
                        });
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(g, {
                                style: window.ALWAYS_SHOW_PLAYER_TIMESTAMPS?.() ? { opacity: 1 } : undefined,
                                role: 'text',
                                'aria-label': p,
                                value: b,
                                variant: 'end',
                                className: (0, n.$)(S().timecode, s, S().timecode_end, { [S().timecode_end_hidden]: !(x < A - y / 2) }),
                            }),
                            (0, i.jsx)(g, {
                                role: 'text',
                                'aria-label': m,
                                style: C,
                                ref: v,
                                value: (0, u.E4p)(Math.round(a), Math.round(l)),
                                variant: 'start',
                                className: (0, n.$)(S().timecode, S().timecode_current, s, o, {
                                    [S().timecode_current_animation]: y > 0,
                                    [S().timecode_current_hidden]: _ && !(x > 2 * y),
                                }),
                            }),
                        ],
                    });
                },
                T = (0, x.PA)((e) => {
                    var t, a;
                    let { sliderClassName: _, disabled: m, isMobile: p, progressbarClassName: v, showThumbVariant: y, withTimecode: h = !0 } = e,
                        g = (0, u.eGp)(),
                        b = (0, r.useRef)(!1),
                        {
                            advert: x,
                            sonataState: P,
                            settings: j,
                            advertBanners: {
                                banners: { brandedPlayerBanner: S },
                            },
                        } = (0, u.Pjs)(),
                        { formatMessage: T } = (0, l.A)(),
                        I = (0, u.rs2)(),
                        [w, L] = (0, r.useState)(P.position),
                        [M, B] = (0, r.useState)(P.duration),
                        O = (0, u.PMf)(Math.round(null != w ? w : 0)),
                        R = w && M ? (100 * Math.min(w, M)) / M : 0,
                        D = (0, r.useRef)(null),
                        [F, V] = (0, r.useState)(0),
                        K = F > 0,
                        { state: z, toggleTrue: U, toggleFalse: W } = (0, A.e)(!1),
                        { state: G, toggleTrue: q, toggleFalse: Q } = (0, A.e)(!1),
                        Y = (0, c.L)(() => {
                            var e, t;
                            return S.isVisible && (null == (e = S.payload) ? void 0 : e.thumb)
                                ? { thumb: S.payload.thumb, onThumbAction: S.modal.open }
                                : j.selectedThumbId && j.selectedThumbId !== u.TZj.DEFAULT
                                  ? { thumb: null == (t = (0, C.rI)(T).get(j.selectedThumbId)) ? void 0 : t.thumb }
                                  : void 0;
                        });
                    (0, r.useEffect)(() => {
                        (null == g ? void 0 : g.state.playerState.status.value) === f.MT.PLAYING && Q();
                    }, [Q, null == g ? void 0 : g.state.playerState.status.value]),
                        (0, r.useEffect)(() => {
                            let e = null == g ? void 0 : g.state.queueState.currentEntity.onChange(q);
                            return (
                                Q(),
                                () => {
                                    null == e || e();
                                }
                            );
                        }, [q, Q, null == g ? void 0 : g.state.queueState.currentEntity]);
                    let H = (0, o.c)((e, t) => {
                            x.isAdvertShown || ((b.current = !t), t ? null == g || g.setProgress(e) : L(e));
                        }),
                        $ = (0, o.c)((e, t) => {
                            null !== e && null !== t && (e === 1 / 0 ? (B(0), L(0)) : (B(e), b.current || L(t)));
                        });
                    (0, r.useEffect)(() => {
                        $(P.duration, P.position);
                    }, [P.duration, P.position, $]),
                        (0, r.useEffect)(() => {
                            var e;
                            let t =
                                null == I || null == (e = I.audioAdvertPlayback)
                                    ? void 0
                                    : e.state.playerState.progress.onChange((e) => {
                                          e && x.isAdvertShown && $(e.duration, e.position);
                                      });
                            return () => {
                                null == t || t();
                            };
                        }, [null == I || null == (t = I.audioAdvertPlayback) ? void 0 : t.state.playerState.progress, $, x.isAdvertShown]);
                    let X = (R / 100) * F - 6;
                    (0, r.useEffect)(() => {
                        let e = new ResizeObserver(() => {
                            var e, t;
                            V(Math.round(null != (t = null == (e = D.current) ? void 0 : e.clientWidth) ? t : 0));
                        });
                        return (
                            D.current && e.observe(D.current),
                            () => {
                                e.disconnect();
                            }
                        );
                    }, []);
                    let Z = {
                        '--size-thumb': ''.concat(12, 'px'),
                        '--track-progress': ''.concat(R, '%'),
                        '--thumb-position': ''.concat(X, 'px'),
                        ...(G && { '--transition-disabled': 'none' }),
                    };
                    return (0, i.jsxs)('div', {
                        className: (0, n.$)(N().root, { [N().root_focusVisible]: z, [N().root_isPlayingTrack]: !x.isAdvertShown }),
                        style: Z,
                        ...(0, s.Am)(s.Kq.changeTimecode.TIMECODE_WRAPPER),
                        children: [
                            !p &&
                                h &&
                                K &&
                                (0, i.jsx)(E, {
                                    currentTimecodeClassName: Y ? void 0 : (0, n.$)(N().timecodeGroupCurrent, N().important),
                                    timecodeClassName: N().timecodeGroup,
                                    progress: R,
                                    position: null != w ? w : 0,
                                    duration: null != M ? M : 0,
                                    progressElementWidth: F,
                                    shouldHoldTimecode: !!Y,
                                }),
                            (0, i.jsx)('div', { ref: D, className: (0, n.$)(N().progressbar, v) }),
                            K && !Y && (0, i.jsx)('div', { className: N().thumb }),
                            Y &&
                                (0, i.jsx)(C.Th, {
                                    className: N().brandedThumb,
                                    thumbData: null == Y ? void 0 : Y.thumb,
                                    onThumbAction: null == Y ? void 0 : Y.onThumbAction,
                                }),
                            (null == (a = S.payload) ? void 0 : a.modal) && (0, i.jsx)(k.N1, { modal: S.payload.modal }),
                            (0, i.jsx)(d.A, {
                                'aria-valuetext': O,
                                onClick: W,
                                onBlur: W,
                                onFocus: U,
                                className: (0, n.$)(N().slider, N().important, _),
                                disabled: m || x.isAdvertShown,
                                'aria-label': T({ id: 'player-actions.timecode-control' }),
                                showThumbVariant: y,
                                onChange: H,
                                maxValue: M ? Math.round(M) : 0,
                                mode: 'deferred',
                                value: Math.round(null != w ? w : 0),
                                trackSize: 's',
                                thumbSize: 's',
                                ...(0, s.Am)(s.Kq.changeTimecode.TIMECODE_SLIDER),
                            }),
                            (0, i.jsx)('div', { className: N().backgroundProgressbar }),
                        ],
                    });
                });
        },
        12699: (e) => {
            e.exports = {
                root: 'PlayerBarDesktop_root__d2Hwi',
                info: 'PlayerBarDesktop_info__56v53',
                infoCard: 'PlayerBarDesktop_infoCard__tnLS6',
                coverContainer: 'PlayerBarDesktop_coverContainer__2Z5nQ',
                cover: 'PlayerBarDesktop_cover__IYLwR',
                description: 'PlayerBarDesktop_description__eQ_tA',
                artists: 'PlayerBarDesktop_artists__N5vpf',
                artistLink: 'PlayerBarDesktop_artistLink__Btgdq',
                infoButtons: 'PlayerBarDesktop_infoButtons__iSpa_',
                sonata: 'PlayerBarDesktop_sonata__sJHY_',
                meta: 'PlayerBarDesktop_meta__6sm58',
                settingsButton: 'PlayerBarDesktop_settingsButton__jLkVn',
            };
        },
        13591: (e) => {
            e.exports = {
                root: 'WordsCardPopoverMobile_root__iHBbJ',
                container: 'WordsCardPopoverMobile_container___Eq_i',
                text: 'WordsCardPopoverMobile_text__j52Bl',
                sources: 'WordsCardPopoverMobile_sources__fKNrx',
                sourceItem: 'WordsCardPopoverMobile_sourceItem__XBH1a',
                action: 'WordsCardPopoverMobile_action__c_FPQ',
                sourceIcon: 'WordsCardPopoverMobile_sourceIcon__aWdrm',
                feedbackSection: 'WordsCardPopoverMobile_feedbackSection__25RsC',
                feedbackQuestion: 'WordsCardPopoverMobile_feedbackQuestion__NKSto',
                feedbackButtons: 'WordsCardPopoverMobile_feedbackButtons__Cd9Yf',
                feedbackButton: 'WordsCardPopoverMobile_feedbackButton__tejta',
                feedbackButton_active: 'WordsCardPopoverMobile_feedbackButton_active__XJl7S',
            };
        },
        15248: (e) => {
            e.exports = { root: 'LoadingPhrase_root__0ML0A', 'gradient-sweep': 'LoadingPhrase_gradient-sweep__SncsP', text: 'LoadingPhrase_text__Ne1FD' };
        },
        17416: (e) => {
            e.exports = { root: 'SyncLyricsFooter_root__STCKQ', major: 'SyncLyricsFooter_major__QMZmT', writers: 'SyncLyricsFooter_writers__c7zhj' };
        },
        18238: (e) => {
            e.exports = {
                root: 'PlayQueueDnDTrackWrapper_root__CithE',
                inner: 'PlayQueueDnDTrackWrapper_inner__xq3xM',
                dragging: 'PlayQueueDnDTrackWrapper_dragging__Tk9uP',
                dragOverlay: 'PlayQueueDnDTrackWrapper_dragOverlay__ulF2W',
            };
        },
        19267: (e) => {
            e.exports = {
                root: 'QualitySettingsModal_root__f3gE2',
                modalContent: 'QualitySettingsModal_modalContent__R_JNT',
                overlay: 'QualitySettingsModal_overlay__8pjOO',
                button: 'QualitySettingsModal_button__BCHBi',
            };
        },
        19953: (e) => {
            e.exports = {
                root: 'VibePlayerbarMeta_root___dH5G',
                timecodeOverlay: 'VibePlayerbarMeta_timecodeOverlay__JhnCy',
                trackName: 'VibePlayerbarMeta_trackName__eyhTE',
                'fade-in': 'VibePlayerbarMeta_fade-in__rycjr',
                center: 'VibePlayerbarMeta_center__6kbMi',
                center_active: 'VibePlayerbarMeta_center_active__a1rFN',
                center_withTimecode: 'VibePlayerbarMeta_center_withTimecode__hoQVg',
                center_withExplicitMark: 'VibePlayerbarMeta_center_withExplicitMark__emag_',
                center_withExplicitMark_playing: 'VibePlayerbarMeta_center_withExplicitMark_playing__SCPvO',
                explicitMarkContainer: 'VibePlayerbarMeta_explicitMarkContainer__d0pfO',
                center_withoutExplicitMark: 'VibePlayerbarMeta_center_withoutExplicitMark__OrzGP',
                center_withoutExplicitMark_playing: 'VibePlayerbarMeta_center_withoutExplicitMark_playing__KnEhn',
                scrollingTrackName: 'VibePlayerbarMeta_scrollingTrackName__gl_Cl',
                trackNameText: 'VibePlayerbarMeta_trackNameText__9IgY2',
                slider: 'VibePlayerbarMeta_slider__pyonb',
                slider_active: 'VibePlayerbarMeta_slider_active__H1uGz',
                explicitMark: 'VibePlayerbarMeta_explicitMark__G8dYl',
            };
        },
        20136: (e) => {
            e.exports = {
                timecode: 'ChangeTimecode_timecode__UScFt',
                root: 'ChangeTimecode_root__QxEw_',
                root_withTimecode: 'ChangeTimecode_root_withTimecode__eJhYI',
                root_mobile: 'ChangeTimecode_root_mobile__SzOdx',
                root_fullscreen: 'ChangeTimecode_root_fullscreen__FA6r0',
                slider: 'ChangeTimecode_slider__P4qmT',
            };
        },
        20142: (e) => {
            e.exports = {
                bottomRightButtonsWrapper: 'FullscreenPlayerDesktopControls_bottomRightButtonsWrapper__EvGiZ',
                root: 'FullscreenPlayerDesktopControls_root__tviu4',
                root_visible: 'FullscreenPlayerDesktopControls_root_visible__1b9xD',
                sonataControls: 'FullscreenPlayerDesktopControls_sonataControls__9AIki',
                menuWrapper: 'FullscreenPlayerDesktopControls_menuWrapper__ifxNx',
                syncLyricsButton: 'FullscreenPlayerDesktopControls_syncLyricsButton__g6E6g',
                playQueueButton: 'FullscreenPlayerDesktopControls_playQueueButton__reNOW',
                speedButton: 'FullscreenPlayerDesktopControls_speedButton__uTbyy',
                likeButton: 'FullscreenPlayerDesktopControls_likeButton__vpJ7S',
                menuButton: 'FullscreenPlayerDesktopControls_menuButton__R4cXl',
                likeButton_active: 'FullscreenPlayerDesktopControls_likeButton_active__XltBK',
                menuButton_active: 'FullscreenPlayerDesktopControls_menuButton_active__YZ8M8',
                playQueueButton_active: 'FullscreenPlayerDesktopControls_playQueueButton_active___SA85',
                speedButton_active: 'FullscreenPlayerDesktopControls_speedButton_active__H_EXl',
                syncLyricsButton_active: 'FullscreenPlayerDesktopControls_syncLyricsButton_active__VMvEH',
                fullscreenPlayerButton: 'FullscreenPlayerDesktopControls_fullscreenPlayerButton__0UjpS',
                fullscreenPlayerButton_visible: 'FullscreenPlayerDesktopControls_fullscreenPlayerButton_visible__qjQ0X',
            };
        },
        20418: (e) => {
            e.exports = {
                line: 'SyncLyricsScroller_line__Vh6WN',
                counter: 'SyncLyricsScroller_counter__B2E7K',
                counterLine: 'SyncLyricsScroller_counterLine__NpBT4',
                root: 'SyncLyricsScroller_root__amiLm',
                root_withVisibleUpperLyrics: 'SyncLyricsScroller_root_withVisibleUpperLyrics__d7noO',
                root_withVisibleScrolledLyrics: 'SyncLyricsScroller_root_withVisibleScrolledLyrics__lowGE',
                root_intro: 'SyncLyricsScroller_root_intro__13gls',
                root_outro: 'SyncLyricsScroller_root_outro__XlDH5',
                line_last: 'SyncLyricsScroller_line_last__liS_1',
                root_prepare: 'SyncLyricsScroller_root_prepare__h0Gf1',
                line_active: 'SyncLyricsScroller_line_active__6lLvH',
            };
        },
        20669: (e) => {
            e.exports = {
                root: 'AdContainer_root__ti4rk',
                container: 'AdContainer_container__DLRij',
                title: 'AdContainer_title__AsPky',
                subtitle: 'AdContainer_subtitle__LIOif',
                info: 'AdContainer_info__EKKWS',
                favicon: 'AdContainer_favicon__ry_3I',
                buttonContainer: 'AdContainer_buttonContainer__SvDt3',
                button: 'AdContainer_button__nQcMg',
                linkButton: 'AdContainer_linkButton__rabLN',
            };
        },
        20959: (e) => {
            e.exports = {
                root: 'FullscreenPlayerDesktop_root___8vo1',
                important: 'FullscreenPlayerDesktop_important__dGfiL',
                header: 'FullscreenPlayerDesktop_header__OBhzq',
                modalContent: 'FullscreenPlayerDesktop_modalContent__Zs_LC',
                notification: 'FullscreenPlayerDesktop_notification__luD_J',
                closeButton: 'FullscreenPlayerDesktop_closeButton__MQ64s',
            };
        },
        21325: (e) => {
            e.exports = {
                root: 'PlayQueueVibeBlock_root__cVjcM',
                ripple: 'PlayQueueVibeBlock_ripple__Ig_pb',
                vibeCover: 'PlayQueueVibeBlock_vibeCover__THxKz',
                title: 'PlayQueueVibeBlock_title__G3kir',
                vibeTitle: 'PlayQueueVibeBlock_vibeTitle__C5fWp',
            };
        },
        22333: (e) => {
            e.exports = {
                root: 'FullscreenPlayerMobile_root__Sqyh0',
                important: 'FullscreenPlayerMobile_important__1lAN3',
                header: 'FullscreenPlayerMobile_header__8KH28',
                headerCenter: 'FullscreenPlayerMobile_headerCenter___EqSP',
                modalContent: 'FullscreenPlayerMobile_modalContent__m2cbB',
                castButton: 'FullscreenPlayerMobile_castButton__3ZgER',
                footer: 'FullscreenPlayerMobile_footer__LRvhK',
                footerContainer: 'FullscreenPlayerMobile_footerContainer__aupK1',
                playQueueButton_active: 'FullscreenPlayerMobile_playQueueButton_active__CG2s8',
                syncLyricsButton_active: 'FullscreenPlayerMobile_syncLyricsButton_active__6L4YF',
                notification: 'FullscreenPlayerMobile_notification__V1cxP',
            };
        },
        22800: (e) => {
            e.exports = {
                coverBlock: 'ArtistCard_coverBlock__YCSus',
                like: 'ArtistCard_like__jmlKc',
                root: 'ArtistCard_root__F4RfA',
                root_selected: 'ArtistCard_root_selected__9Djbq',
                cover: 'ArtistCard_cover__RSTvK',
                image: 'ArtistCard_image__Uab5w',
                name: 'ArtistCard_name__IF9yZ',
                icon: 'ArtistCard_icon__PjbJI',
            };
        },
        23028: (e) => {
            e.exports = {
                content: 'MainPage_content__kskSM',
                root: 'MainPage_root__STXqc',
                container: 'MainPage_container__CB86l',
                vibe: 'MainPage_vibe__XEBbh',
                landing: 'MainPage_landing___FGNm',
                feedbackForm: 'MainPage_feedbackForm__fdo2L',
                feedbackFormCaption: 'MainPage_feedbackFormCaption__w4oAv',
                feedbackFormImageContainer: 'MainPage_feedbackFormImageContainer__kln7G',
                feedbackFormImage: 'MainPage_feedbackFormImage__Fzfsc',
                actionsBar: 'MainPage_actionsBar__agoxp',
                userProfile: 'MainPage_userProfile__8JzS3',
                vibeWidgetContainer: 'MainPage_vibeWidgetContainer__i5T4X',
                beta: 'MainPage_beta__y32vb',
                beta_withReleaseNotes: 'MainPage_beta_withReleaseNotes__WOjUk',
                betaSlot: 'MainPage_betaSlot__JwbmM',
                betaSlot_newVibe: 'MainPage_betaSlot_newVibe__DGtXm',
                betaSlot_bottom: 'MainPage_betaSlot_bottom__2h4kk',
                specialHeaderContainer: 'MainPage_specialHeaderContainer__L3C6E',
                specialHeader: 'MainPage_specialHeader__aqdvj',
                specialHeaderImage: 'MainPage_specialHeaderImage__4GlXq',
                footer: 'MainPage_footer__2rGy2',
                error: 'MainPage_error__u_UCm',
            };
        },
        24372: (e) => {
            e.exports = {
                root: 'AiBadge_root__EfKG1',
                root_dimmed: 'AiBadge_root_dimmed__XLGvP',
                glow: 'AiBadge_glow__R6cQa',
                icon: 'AiBadge_icon__dhZpE',
                icon_okniks: 'AiBadge_icon_okniks__HM5CC',
                icon_sparkles: 'AiBadge_icon_sparkles__cS_kL',
                sparkles: 'AiBadge_sparkles__Yua7j',
                sparkle: 'AiBadge_sparkle__5EMmQ',
                'sparkle-carousel': 'AiBadge_sparkle-carousel__fMVfW',
            };
        },
        24554: (e) => {
            e.exports = {
                icon: 'SyncLyricsButton_icon__m0Gdk',
                icon_active: 'SyncLyricsButton_icon_active__6WcWG',
                animation_scaled: 'SyncLyricsButton_animation_scaled__vwsc_',
                scale: 'SyncLyricsButton_scale__FGAYV',
                animation_unscaled: 'SyncLyricsButton_animation_unscaled__eM1Wb',
                unscale: 'SyncLyricsButton_unscale__ceLQu',
            };
        },
        24991: (e, t, a) => {
            'use strict';
            var i;
            a.d(t, { D: () => i }),
                (function (e) {
                    (e.ALBUM = 'ALBUM'), (e.WAVE = 'WAVE'), (e.PROMO_LINK = 'PROMO_LINK'), (e.SETTING = 'SETTING');
                })(i || (i = {}));
        },
        27202: (e) => {
            e.exports = { root: 'PlayQueue_root__ponhw', content: 'PlayQueue_content__zIUvd', scrollContent: 'PlayQueue_scrollContent__2dI0v' };
        },
        29025: (e) => {
            e.exports = { root: 'WordsCardPopoverDisclaimer_root__yyXMs', description: 'WordsCardPopoverDisclaimer_description__0RhrR' };
        },
        29207: (e) => {
            e.exports = {
                root: 'VibeResetButton_root__ju8pE',
                root_visible: 'VibeResetButton_root_visible__OHA1w',
                'fade-in': 'VibeResetButton_fade-in__4Dgxq',
                root_q2v: 'VibeResetButton_root_q2v__K9GdD',
                container: 'VibeResetButton_container__JO2j1',
                icon: 'VibeResetButton_icon__2FkgG',
                button: 'VibeResetButton_button__i8Cvy',
                button_q2v: 'VibeResetButton_button_q2v__NX6iG',
                context: 'VibeResetButton_context__hsTlv',
                context_q2v: 'VibeResetButton_context_q2v__OVhK6',
            };
        },
        36751: (e, t, a) => {
            'use strict';
            var i;
            a.d(t, { b: () => i }),
                (function (e) {
                    (e.ALBUM = 'ALBUM'),
                        (e.ARTIST = 'ARTIST'),
                        (e.PLAYLIST = 'PLAYLIST'),
                        (e.WAVE = 'WAVE'),
                        (e.CLIP = 'CLIP'),
                        (e.GENERATIVE = 'GENERATIVE'),
                        (e.OTHER = 'OTHER');
                })(i || (i = {}));
        },
        36894: (e) => {
            e.exports = {
                root: 'PlayQueueAfterPlayingBlock_root__A7_wI',
                title: 'PlayQueueAfterPlayingBlock_title__nS_nG',
                title_withDnD: 'PlayQueueAfterPlayingBlock_title_withDnD__jsVTk',
                prevTrack: 'PlayQueueAfterPlayingBlock_prevTrack__wDAPP',
                animatedContent: 'PlayQueueAfterPlayingBlock_animatedContent__6rvOT',
                animatedContent_moveToTop: 'PlayQueueAfterPlayingBlock_animatedContent_moveToTop__bW549',
                'move-to-top': 'PlayQueueAfterPlayingBlock_move-to-top__c_AzJ',
                animatedContent_moveFromTop: 'PlayQueueAfterPlayingBlock_animatedContent_moveFromTop__ZLgMV',
                'move-from-top': 'PlayQueueAfterPlayingBlock_move-from-top___8bwu',
                'move-prev-track-from-top': 'PlayQueueAfterPlayingBlock_move-prev-track-from-top__XY1VA',
                animatedContent_moveFromTopSingleTrack: 'PlayQueueAfterPlayingBlock_animatedContent_moveFromTopSingleTrack__rrewW',
                'move-from-top-single-track': 'PlayQueueAfterPlayingBlock_move-from-top-single-track__8po97',
                'move-prev-track-from-top-single-track': 'PlayQueueAfterPlayingBlock_move-prev-track-from-top-single-track__ySSca',
            };
        },
        38125: (e) => {
            e.exports = { root: 'Timecode_root__TLT75', root_start: 'Timecode_root_start__pHG5N', root_end: 'Timecode_root_end__LLQsh' };
        },
        41854: (e, t, a) => {
            'use strict';
            a.d(t, { LW: () => s, NY: () => l, pA: () => o, t$: () => r });
            var i = a(65493),
                n = a(55178);
            let r = (0, n.lazy)(async () =>
                    Promise.all([a.e(321), a.e(8158)])
                        .then(a.bind(a, 88158))
                        .then((e) => ({ default: e.VibeFallbackAnimation })),
                ),
                l = (0, n.lazy)(async () =>
                    Promise.all([a.e(321), a.e(4546)])
                        .then(a.bind(a, 14546))
                        .then((e) => ({ default: e.VibeAnimation })),
                ),
                s = i.default.default(
                    () =>
                        Promise.all([a.e(321), a.e(1560)])
                            .then(a.bind(a, 11560))
                            .then((e) => ({ default: e.VibeWidgetFallbackAnimation })),
                    { ssr: !1 },
                ),
                o = i.default.default(
                    () =>
                        Promise.all([a.e(321), a.e(1013)])
                            .then(a.bind(a, 51013))
                            .then((e) => ({ default: e.VibeWidgetAnimation })),
                    { ssr: !1 },
                );
        },
        42498: (e) => {
            e.exports = { root: 'PlayerBar_root__cXUnU', adPopup: 'PlayerBar_adPopup__BrBC6' };
        },
        43315: (e) => {
            e.exports = { root: 'VibeArtistCover_root__LSPPQ', cover: 'VibeArtistCover_cover__AEtTV' };
        },
        44240: (e, t, a) => {
            'use strict';
            var i;
            a.d(t, { y: () => i }),
                (function (e) {
                    (e.DEFAULT = 'DEFAULT'), (e.CONTROL = 'CONTROL'), (e.CONTROL_ACCENT = 'CONTROL_ACCENT');
                })(i || (i = {}));
        },
        46062: (e) => {
            e.exports = {
                root: 'PlayQueueDnDDraggableTrack_root__ysTVY',
                dots: 'PlayQueueDnDDraggableTrack_dots__enjOX',
                noHoverItem: 'PlayQueueDnDDraggableTrack_noHoverItem__uHRh1',
            };
        },
        47713: (e) => {
            e.exports = {
                root: 'VibePage_root__dGvPX',
                root_reshuffle: 'VibePage_root_reshuffle__gz97v',
                root_withoutPlus: 'VibePage_root_withoutPlus__xZ8r4',
                artistCover: 'VibePage_artistCover__RQee1',
                textContainer_withCover: 'VibePage_textContainer_withCover__U2z1l',
                freemiumBlock: 'VibePage_freemiumBlock__uhLoT',
                hoveredButton: 'VibePage_hoveredButton__6VSqR',
                meta: 'VibePage_meta__kWwRE',
                meta_noPlus: 'VibePage_meta_noPlus__YtQX1',
                entityMeta: 'VibePage_entityMeta__dhDch',
                entityMetaBody: 'VibePage_entityMetaBody__EITDL',
                'meta-fade-in': 'VibePage_meta-fade-in__H0xeT',
                vibeAnimation: 'VibePage_vibeAnimation__qQ6ci',
                textContainer: 'VibePage_textContainer__odK0M',
                context: 'VibePage_context__CoYut',
                text: 'VibePage_text__sPFhf',
                important: 'VibePage_important__qFvbL',
                button: 'VibePage_button__ZWQxy',
                playerBlock: 'VibePage_playerBlock__b6ZRu',
                playerBlock_withFreemium: 'VibePage_playerBlock_withFreemium__8Avmc',
                words: 'VibePage_words__39Mii',
                wheel: 'VibePage_wheel__E_p8_',
            };
        },
        49582: (e) => {
            e.exports = {
                root: 'FullscreenPlayerMobileContent_root__RITqv',
                wrapper: 'FullscreenPlayerMobileContent_wrapper__JPmBe',
                syncLyrics: 'FullscreenPlayerMobileContent_syncLyrics__HKUm0',
                trackInfoCoverContainer: 'FullscreenPlayerMobileContent_trackInfoCoverContainer__Y2hly',
                trackInfoCover: 'FullscreenPlayerMobileContent_trackInfoCover__zsEEq',
                contentContainer: 'FullscreenPlayerMobileContent_contentContainer__ILyg5',
                contentContainer_withSplitMode: 'FullscreenPlayerMobileContent_contentContainer_withSplitMode__Rdv5T',
                trackInfo: 'FullscreenPlayerMobileContent_trackInfo__IPGjo',
                metaContainer: 'FullscreenPlayerMobileContent_metaContainer__B2vTr',
                infoBlock: 'FullscreenPlayerMobileContent_infoBlock__ZcRdn',
                infoBlock_withExpandedSyncLyrics: 'FullscreenPlayerMobileContent_infoBlock_withExpandedSyncLyrics__qlbKX',
                coverWrapper: 'FullscreenPlayerMobileContent_coverWrapper___Y6ll',
                coverWrapper_enter: 'FullscreenPlayerMobileContent_coverWrapper_enter__oFtHh',
                coverWrapper_enter_active: 'FullscreenPlayerMobileContent_coverWrapper_enter_active__GM_of',
                'enter-fade': 'FullscreenPlayerMobileContent_enter-fade__Q0KNn',
                coverWrapper_exit: 'FullscreenPlayerMobileContent_coverWrapper_exit__QDk1i',
                coverWrapper_exit_active: 'FullscreenPlayerMobileContent_coverWrapper_exit_active__9S_wE',
                'exit-fade': 'FullscreenPlayerMobileContent_exit-fade__uS0jT',
                cover: 'FullscreenPlayerMobileContent_cover__W6pz2',
                metaText: 'FullscreenPlayerMobileContent_metaText__Fr74D',
                timeline: 'FullscreenPlayerMobileContent_timeline__Pta9W',
                content: 'FullscreenPlayerMobileContent_content__EAteH',
                syncLyricsContent: 'FullscreenPlayerMobileContent_syncLyricsContent__qhWG_',
                syncLyricsLoader: 'FullscreenPlayerMobileContent_syncLyricsLoader__0_W2j',
                syncLyricsScroller: 'FullscreenPlayerMobileContent_syncLyricsScroller__EqiCL',
                syncLyricsFooter: 'FullscreenPlayerMobileContent_syncLyricsFooter__bi9vY',
                syncLyricsCounter: 'FullscreenPlayerMobileContent_syncLyricsCounter___wm5g',
            };
        },
        49723: (e) => {
            e.exports = {
                root: 'VibeSettings_root__ufZlV',
                popover: 'VibeSettings_popover__VKqUc',
                overlay: 'VibeSettings_overlay__pusb4',
                toggleSettingsButton: 'VibeSettings_toggleSettingsButton__j6fIU',
                header: 'VibeSettings_header__OAWe2',
                actions: 'VibeSettings_actions__ckbMt',
                swipeableArea: 'VibeSettings_swipeableArea__Xx0nx',
                ripple: 'VibeSettings_ripple__kmFX6',
            };
        },
        50311: (e, t, a) => {
            'use strict';
            a.d(t, { N1: () => b, i_: () => r, h9: () => i });
            let i = (e) =>
                null === e ||
                !!(
                    'object' == typeof e &&
                    'imageUri' in e &&
                    'string' == typeof e.imageUri &&
                    'content' in e &&
                    'string' == typeof e.content &&
                    'primaryHref' in e &&
                    'string' == typeof e.primaryHref &&
                    'shouldShowSecondaryButton' in e &&
                    'boolean' == typeof e.shouldShowSecondaryButton &&
                    'secondaryText' in e &&
                    'string' == typeof e.secondaryText
                );
            var n = a(60754);
            let r = n.gK.model('BrandedPlayerModal', {
                imageUri: n.gK.maybeNull(n.gK.string),
                content: n.gK.string,
                primaryHref: n.gK.string,
                shouldShowSecondaryButton: n.gK.boolean,
                secondaryText: n.gK.maybeNull(n.gK.string),
            });
            var l = a(32290),
                s = a(96103),
                o = a(60900),
                c = a(39407),
                d = a(91027),
                u = a(63423),
                _ = a(82586),
                m = a(50162),
                p = a(84638),
                v = a(71926),
                y = a(49574),
                h = a(78648),
                g = a.n(h);
            let b = (0, s.PA)((e) => {
                var t;
                let { modal: a } = e,
                    {
                        paywall: i,
                        advertBanners: {
                            banners: { brandedPlayerBanner: n },
                        },
                    } = (0, y.Pjs)(),
                    { contentRootRef: r } = (0, y.gKY)(),
                    { formatMessage: s } = (0, o.A)(),
                    h = (0, y.ZpR)(a.primaryHref),
                    b = (0, d.c)((e) => {
                        var t, a;
                        null == (t = (a = n.modal).onOpenChange) || t.call(a, e);
                    }),
                    x = { '--modal-bottom-offset': ''.concat(null == (t = n.payload) ? void 0 : t.thumb.height, 'px') };
                return (0, l.jsxs)(p.a, {
                    size: 'fitContent',
                    placement: 'default',
                    open: n.modal.isOpened,
                    onOpenChange: b,
                    className: g().root,
                    contentClassName: g().modalContent,
                    portalNode: r,
                    showHeader: !1,
                    closeOnOutsidePress: !1,
                    lockScroll: !1,
                    withOverlay: !1,
                    enableSwipe: !0,
                    style: x,
                    onClose: n.modal.close,
                    shouldCloseOnNavigate: !0,
                    children: [
                        (0, l.jsxs)('header', {
                            children: [
                                a.imageUri && (0, l.jsx)(m.Image, { src: a.imageUri, className: g().image }),
                                (0, l.jsx)(u.$, {
                                    className: g().closeButton,
                                    color: 'primary',
                                    variant: 'text',
                                    radius: 'round',
                                    size: 'xxs',
                                    onClick: n.modal.close,
                                    icon: (0, l.jsx)(_.Icon, { variant: 'close', size: 'xs' }),
                                    'aria-label': s({ id: 'interface-actions.close' }),
                                }),
                            ],
                        }),
                        (0, l.jsx)(v.Caption, { variant: 'span', className: g().content, lineClamp: 2, children: a.content }),
                        (0, l.jsxs)('div', {
                            className: g().actions,
                            children: [
                                (0, l.jsx)(u.$, {
                                    size: 's',
                                    color: 'primary',
                                    variant: 'default',
                                    radius: 'xxxl',
                                    onClick: h,
                                    className: g().button,
                                    children: (0, l.jsx)(v.Caption, {
                                        variant: 'span',
                                        size: 'm',
                                        lineClamp: 1,
                                        children: (0, l.jsx)(c.A, { id: 'branded-player.to-website' }),
                                    }),
                                }),
                                a.shouldShowSecondaryButton &&
                                    (0, l.jsx)(u.$, {
                                        size: 's',
                                        color: 'secondary',
                                        variant: 'default',
                                        radius: 'xxxl',
                                        onClick: i.openModal,
                                        className: g().button,
                                        children: (0, l.jsx)(v.Caption, {
                                            variant: 'span',
                                            size: 'm',
                                            lineClamp: 1,
                                            children: a.secondaryText || (0, l.jsx)(c.A, { id: 'branded-player.hide' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
        },
        50444: (e, t, a) => {
            'use strict';
            a.d(t, { kn: () => A, vR: () => tX, uZ: () => B, LN: () => ap, Hq: () => ab, OK: () => O, j3: () => az, BG: () => aG, so: () => i });
            var i = (function (e) {
                    return (e.VIDEO = 'video-ad-player'), (e.SLOT = 'video-ad-container'), e;
                })({}),
                n = a(49574);
            let r = (e) => {
                let t = (0, n.eGp)(),
                    {
                        fullscreenPlayer: {
                            playQueue: { trackMap: a },
                        },
                    } = (0, n.Pjs)(),
                    i = null == t ? void 0 : t.state.queueState.entityList.value,
                    r = null == i ? void 0 : i[e];
                if (!r) return null;
                let {
                        context: { data: l },
                    } = r,
                    s = a.get(String(r.entity.data.meta.id));
                return s ? { track: s, playContextParams: { contextData: l, queueParams: { index: e } } } : null;
            };
            var l = a(60754);
            let s = l.gK.model('AdContainer', {
                adTitle: l.gK.maybe(l.gK.string),
                iconSrc: l.gK.maybe(l.gK.string),
                clickThroughUrl: l.gK.maybe(l.gK.string),
                src: l.gK.maybe(l.gK.string),
                clientLegalInfo: l.gK.maybe(l.gK.string),
                advertiserInfoUrl: l.gK.maybe(l.gK.string),
            });
            var o = a(32290),
                c = a(63618),
                d = a(96103),
                u = a(55178),
                _ = a.t(u, 2),
                m = a(39407),
                p = a(63423),
                v = a(50162),
                y = a(71926),
                h = a(44574),
                g = a(20669),
                b = a.n(g);
            let x = (0, d.PA)((e) => {
                    let { className: t, data: a, mediaContent: i, linkClassName: r } = e,
                        {
                            settings: { isMobile: l },
                        } = (0, n.Pjs)(),
                        s = (0, n.rs2)(),
                        d = (0, u.useMemo)(
                            () =>
                                (null == s ? void 0 : s.state.clickThrough)
                                    ? (0, o.jsx)(p.$, {
                                          className: (0, c.$)(b().button, r),
                                          variant: 'default',
                                          radius: 'xxxl',
                                          onClick: s.state.clickThrough,
                                          children: (0, o.jsx)(m.A, { id: 'ads.learn-more' }),
                                      })
                                    : (null == a ? void 0 : a.clickThroughUrl)
                                      ? (0, o.jsx)(h.N_, {
                                            target: '_blank',
                                            href: a.clickThroughUrl,
                                            className: (0, c.$)(b().button, b().linkButton, r),
                                            children: (0, o.jsx)(m.A, { id: 'ads.learn-more' }),
                                        })
                                      : (0, o.jsx)(p.$, {
                                            className: (0, c.$)(b().button, r),
                                            variant: 'default',
                                            radius: 'xxxl',
                                            disabled: !0,
                                            children: (0, o.jsx)(m.A, { id: 'ads.learn-more' }),
                                        }),
                            [null == a ? void 0 : a.clickThroughUrl, null == s ? void 0 : s.state.clickThrough, r],
                        );
                    return (0, o.jsxs)('div', {
                        className: (0, c.$)(b().root, t),
                        children: [
                            i,
                            (0, o.jsxs)('div', {
                                className: b().container,
                                children: [
                                    (0, o.jsxs)('div', {
                                        className: b().info,
                                        children: [
                                            (0, o.jsx)(v.Image, {
                                                className: b().favicon,
                                                withAspectRatio: !0,
                                                'aria-hidden': !0,
                                                fit: 'cover',
                                                src: (null == a ? void 0 : a.iconSrc) || '',
                                                alt: '',
                                                fallbackIconVariant: 'picture',
                                            }),
                                            (0, o.jsxs)('div', {
                                                className: b().text,
                                                children: [
                                                    (0, o.jsx)(y.Caption, {
                                                        variant: 'div',
                                                        type: 'text',
                                                        size: 'l',
                                                        weight: 'medium',
                                                        className: b().title,
                                                        lineClamp: l ? 5 : void 0,
                                                        children: null == a ? void 0 : a.adTitle,
                                                    }),
                                                    (0, o.jsx)(y.Caption, {
                                                        variant: 'div',
                                                        type: 'text',
                                                        size: 'm',
                                                        weight: 'medium',
                                                        className: b().subtitle,
                                                        children: (0, o.jsx)(m.A, { id: 'ads.ad' }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, o.jsx)('div', { className: b().buttonContainer, children: d }),
                                ],
                            }),
                        ],
                    });
                }),
                A = l.gK
                    .model('Advert', {
                        data: l.gK.maybeNull(s),
                        isAdvertShown: l.gK.maybe(l.gK.boolean),
                        isAdvertPlaying: l.gK.maybe(l.gK.boolean),
                        isAdvertPlaybackCreated: l.gK.boolean,
                        type: l.gK.maybeNull(l.gK.enumeration(Object.values(n.I1A))),
                    })
                    .views((e) => ({
                        get isAudioAdvert() {
                            return e.type === n.I1A.AUDIO;
                        },
                        get isVideoAdvert() {
                            return e.type === n.I1A.VIDEO;
                        },
                    }))
                    .actions((e) => ({
                        setData: (t) => {
                            e.data = (0, l.wg)({
                                adTitle: null == t ? void 0 : t.adTitle,
                                iconSrc: null == t ? void 0 : t.iconSrc,
                                clickThroughUrl: null == t ? void 0 : t.clickThroughUrl,
                                clientLegalInfo: null == t ? void 0 : t.clientLegalInfo,
                                advertiserInfoUrl: null == t ? void 0 : t.advertiserInfoUrl,
                            });
                        },
                        setType(t) {
                            e.type = t;
                        },
                        setAdvertShown: (t) => {
                            e.isAdvertShown = t;
                        },
                        setAdvertPlaying: (t) => {
                            e.isAdvertPlaying = t;
                        },
                        setIsAdvertPlaybackCreated(t) {
                            e.isAdvertPlaybackCreated = t;
                        },
                        isAdvertDisabled(t) {
                            var a, i;
                            let { experiments: r } = (0, l.Zn)(e);
                            if (!r.checkExperiment(n.zal.WebNextDisableAds, 'on')) return !1;
                            let s = null == (i = r.getExperiment(n.zal.WebNextDisableAds)) || null == (a = i.value) ? void 0 : a.values;
                            return Array.isArray(s) && s.includes(t);
                        },
                        reset: () => {
                            (e.data = null), (e.isAdvertPlaying = !0), (e.isAdvertShown = !1), (e.type = null);
                        },
                    }));
            var f = a(95428),
                C = (function (e) {
                    return (e.SYNC_LYRICS = 'syncLyrics'), (e.PLAY_QUEUE = 'playQueue'), e;
                })({}),
                k = a(71483),
                P = a(72676),
                N = a(1131);
            let j = l.gK
                .compose(
                    l.gK.model('PlayQueue', {
                        isVisible: l.gK.optional(l.gK.boolean, !1),
                        beforeTracksIds: l.gK.maybeNull(l.gK.array(l.gK.number)),
                        afterTracksIds: l.gK.optional(l.gK.frozen(), []),
                        hiddenTrackIds: l.gK.array(l.gK.number),
                        currentIndex: l.gK.optional(l.gK.number, 0),
                        trackMap: l.gK.optional(l.gK.map(N.x5), {}),
                    }),
                    f.pl,
                )
                .views((e) => ({
                    get isVibeBlockShowed() {
                        let {
                            sonataState: { isVibeContext: t },
                        } = (0, l.Zn)(e);
                        return !t && 0 === e.afterTracksIds.length;
                    },
                    get itemsKeys() {
                        var t, a;
                        return null != (a = null == (t = e.beforeTracksIds) ? void 0 : t.concat(e.afterTracksIds).map(String)) ? a : [];
                    },
                    get isDragAndDropEnabled() {
                        let {
                            experiments: t,
                            sonataState: { isVibeContext: a },
                        } = (0, l.Zn)(e);
                        return t.checkExperiment(n.zal.WebNextPlayQueueDnD, 'on') && !a;
                    },
                }))
                .actions((e) => {
                    let t = (t, a) => {
                            let i = t[a];
                            if (!i || (0, P.Re)(i)) return null;
                            let { entity: n } = i,
                                r = (0, N.pE)(n);
                            return !r || r.isHiddenFromSonataQueue ? null : (e.trackMap.has(r.id) || e.trackMap.set(r.id, (0, l.wg)(r)), a);
                        },
                        a = {
                            setVisible() {
                                e.isVisible = !0;
                            },
                            setInvisible() {
                                e.isVisible = !1;
                            },
                            updateTracks(e, t, i, n) {
                                a.setCurrentTrackId(e, t), a.setBeforeTracksIds(e, i), a.setAfterTracksIds(e, i, n), a.setHiddenTrackIds(e);
                            },
                            setCurrentTrackId(a, i) {
                                (e.currentIndex = i), t(a, i);
                            },
                            setBeforeTracksIds(a, i) {
                                let n = Math.max(0, e.currentIndex - 125) - 1,
                                    r = [];
                                for (let l = e.currentIndex - 1; l > n; l--) {
                                    let e = i[l];
                                    if ('number' != typeof e) break;
                                    let n = t(a, e);
                                    null !== n && r.unshift(n);
                                }
                                e.beforeTracksIds = (0, l.wg)(r);
                            },
                            setAfterTracksIds(a, i, n) {
                                let r = n === k.K.Vibe ? 1 : 125,
                                    l = [];
                                for (let n = e.currentIndex + 1; n < i.length && l.length < r; n++) {
                                    let e = i[n];
                                    if ('number' != typeof e) break;
                                    let r = t(a, e);
                                    null !== r && l.push(r);
                                }
                                e.afterTracksIds = l;
                            },
                            setHiddenTrackIds(t) {
                                let a = [];
                                for (let e = 0; e < t.length; e++) {
                                    let i = t[e];
                                    i && i.entity.hidden && a.push(e);
                                }
                                e.hiddenTrackIds = (0, l.wg)(a);
                            },
                            reset() {
                                e.destroyItems([e.beforeTracksIds, e.hiddenTrackIds]), (e.afterTracksIds = []), e.trackMap.clear();
                            },
                        };
                    return a;
                });
            var S = a(27576),
                E = a(53965),
                T = a(80864),
                I = a(93510);
            let w = (e) => {
                    if (!e) return;
                    let t = e.split(':'),
                        a = parseInt(t[0] || '0', 10),
                        i = parseFloat(t[1] || '0');
                    return a > 0 ? parseFloat((60 * a + i).toFixed(2)) : i;
                },
                parseLrc = (e) => {
                    try {
                        return (
                            ((e) => {
                                if ('string' != typeof e) throw TypeError('expect first argument to be a string');
                                let t = e.split('\n'),
                                    a = /\[(\d*:\d*\.?\d*)\]/,
                                    i = new RegExp(a.source + /(.+)/.source),
                                    n = [],
                                    r = [],
                                    s = { scripts: [] };
                                for (let e = 0; e < t.length; e++) {
                                    let a = t[e];
                                    if (a && !1 === i.test(a)) n.push(a);
                                    else break;
                                }
                                (n.reduce((e, t) => {
                                    let a = t.trim().slice(1, -1).split(': '),
                                        i = a[0],
                                        n = a[1];
                                    return (void 0 !== i && (e[i] = n), e);
                                }, s),
                                    t.splice(0, n.length));
                                let o = 0,
                                    c = s.offset;
                                if (!c) {
                                    let t = /\[offset\s*:\s*([+-]?\d+(?:\.\d+)?)\]/i.exec(e);
                                    t && (c = t[1]);
                                }
                                if (c) {
                                    let e = parseFloat(c);
                                    Number.isNaN(e) || (o = e / 1e3);
                                }
                                let d = new RegExp(''.concat(i.source, '|').concat(a.source));
                                t = t.filter((e) => e && d.test(e));
                                for (let e = 0, n = t.length; e < n; e++) {
                                    let s = t[e],
                                        d = e + 1 < n ? t[e + 1] : null;
                                    if (s) {
                                        let e = i.exec(s),
                                            t = d ? a.exec(d) : null;
                                        if (e) {
                                            let [, a, i] = e,
                                                n = null == t ? void 0 : t[1];
                                            if (a) {
                                                let e = w(a),
                                                    t = w(n);
                                                'number' == typeof e && (e += o);
                                                'number' == typeof t && (t += o);
                                                r.push({ start: e, text: i || '', end: t });
                                            }
                                        }
                                    }
                                }
                                return ((s.scripts = r), s);
                            })(e).scripts || []
                        ).map((e) => {
                            let { start: t, end: a, text: i } = e;
                            return (0, l.wg)({ text: i.trim(), fromSec: t, toSec: a });
                        });
                    } catch (e) {
                        return [];
                    }
                },
                normalizePlaceholderLyricsText = (e) => ('string' == typeof e ? e.trim().replace(/\s+/g, '') : ''),
                isPlaceholderSyncLyrics = (e) => Array.isArray(e) && e.length > 0 && e.every((e) => !normalizePlaceholderLyricsText(e.text).replace(/[.\-\u2013\u2014]/g, '')),
                normalizeSyncedTiming = (e, t) => {
                    if (!Array.isArray(e) || !e.length || !t || t <= 0) return e;
                    let a = e.at(-1),
                        i = null == a ? void 0 : a.toSec,
                        n = 'number' == typeof i ? i : null == a ? void 0 : a.fromSec;
                    if ('number' != typeof n || n <= t + 1) return e;
                    let r = t - n;
                    return e.map((e) => {
                        let t = 'number' == typeof e.fromSec ? Math.max(0, e.fromSec + r) : e.fromSec,
                            a = 'number' == typeof e.toSec ? Math.max(0, e.toSec + r) : e.toSec;
                        return (0, l.wg)({ text: e.text, fromSec: t, toSec: a });
                    });
                },
                lrclibQueue = (() => {
                    let e = Promise.resolve(),
                        t = 0,
                        a = 350,
                        i = 0;
                    let n = (runnable) => {
                        let r = i,
                            s = e.then(async () => {
                                if (r !== i) return;
                                let e = Date.now(),
                                    waitMs = a - (e - t);
                                waitMs > 0 && (await new Promise((e) => setTimeout(e, waitMs)));
                                if (r !== i) return;
                                return ((t = Date.now()), runnable());
                            });
                        return ((e = s.catch(() => {})), s);
                    };
                    return (
                        (n.reset = () => {
                            ((i += 1), (t = 0), (e = Promise.resolve()));
                        }),
                        n
                    );
                })(),
                lrclibSyncPrefetchByTrackId = new Map(),
                lrclibSyncPrefetchNoResultByTrackId = new Map(),
                lrclibSyncPrefetchInFlight = new Map(),
                LRCLIB_SYNC_PREFETCH_NO_RESULT_TTL_MS = 18e5,
                lrclibSyncSearchControllers = [],
                LRCLIB_SYNC_SEARCH_CACHE_MAX_SIZE = 500,
                LRCLIB_SYNC_SEARCH_CACHE_TTL_MS = 36e5,
                LRCLIB_SYNC_SEARCH_NO_RESULT_TTL_MS = 18e5,
                lrclibSyncSearchResultCache = new Map(),
                lrclibSyncSearchNoResultCache = new Map(),
                lrclibSyncSearchInFlightByKey = new Map(),
                lrclibSyncPrefetchRetryTimer = null,
                lrclibSyncPrefetchSeq = 0,
                lrclibSyncSonataStateRef = null,
                logSyncPrefetch = (e, t) => {
                    try {
                        console.debug('[LRCLib] sync prefetch '.concat(e), t);
                    } catch (e) {}
                },
                normalizeLrclibSyncCachePart = (e) =>
                    'string' == typeof e
                        ? e
                              .trim()
                              .toLowerCase()
                              .replace(/[\s\W_]+/g, '')
                        : '',
                makeLrclibSyncCacheKey = (e) => {
                    let t = normalizeLrclibSyncCachePart(null == e ? void 0 : e.trackName),
                        a = normalizeLrclibSyncCachePart(null == e ? void 0 : e.artistName),
                        i = null == e ? void 0 : e.duration;
                    return ''
                        .concat(t, '|')
                        .concat(a, '|')
                        .concat('number' == typeof i && i > 0 ? i : '');
                },
                readLrclibSyncCache = (e, t) => {
                    let a = e.get(t);
                    if (!a) return null;
                    if (a.expiresAt <= Date.now()) return (e.delete(t), null);
                    return (e.delete(t), e.set(t, a), a.value);
                },
                writeLrclibSyncCache = (e, t, a, i, n) => {
                    let r = { value: a, expiresAt: Date.now() + i };
                    (e.delete(t), e.set(t, r));
                    for (; e.size > n; ) {
                        let t = e.keys().next();
                        if (t.done) break;
                        e.delete(t.value);
                    }
                },
                getSyncTrackLookup = (e) => {
                    if (!e) return null;
                    let t = null == e ? void 0 : e.title,
                        a = null == e ? void 0 : e.name,
                        i = null == e ? void 0 : e.artists,
                        n = (null == i ? void 0 : i.length) ? i.map((e) => e.name).filter(Boolean) : [],
                        r = n.length > 0 ? n[0] : null,
                        s = null == e ? void 0 : e.durationMs,
                        o = s ? Math.round(s / 1e3) : null,
                        c = null == e ? void 0 : e.duration,
                        d = t || a,
                        u = null == e ? void 0 : e.version,
                        _ = null == e ? void 0 : e.trackSource,
                        m = null == e ? void 0 : e.ugcArtistName;
                    let includeTrackVersion = !0;
                    try {
                        let e = 'undefined' != typeof window && window.nativeSettings ? window.nativeSettings.get('modSettings.lrclib.useTrackVersion') : null;
                        'boolean' == typeof e && (includeTrackVersion = e);
                    } catch (e) {}
                    return (
                        r || (r = m || null),
                        d && includeTrackVersion && u && 'UGC' !== _ && 'string' == typeof u && !/^https?:\/\//.test(u) && (d = ''.concat(d, ' ').concat(u)),
                        d ? { trackName: d, artistName: r, duration: o || c } : null
                    );
                },
                getNextQueueTrackMeta = (e) => {
                    try {
                        if (!(null == e ? void 0 : e.state)) return (logSyncPrefetch('next-miss', { reason: 'sonata-state' }), null);
                        let t = null == e ? void 0 : e.state.queueState.index.value,
                            a = null == e ? void 0 : e.state.queueState.order.value,
                            i = null == e ? void 0 : e.state.queueState.entityList.value,
                            n = null;
                        if (!Array.isArray(i)) return (logSyncPrefetch('next-miss', { reason: 'entityList' }), null);
                        Array.isArray(a) && 'number' == typeof t && ((n = a[t + 1]), logSyncPrefetch('next-from-order', { queueIndex: t, nextIndex: n }));
                        if ('number' != typeof n) return (logSyncPrefetch('next-miss', { reason: 'nextIndex' }), null);
                        let r = i[n];
                        if (!(r && !(0, P.Re)(r) && r.entity)) return (logSyncPrefetch('next-miss', { reason: 'entityAtIndex', nextIndex: n }), null);
                        let s = (0, N.pE)(r.entity);
                        return (logSyncPrefetch('next-hit', { nextIndex: n, trackId: null == s ? void 0 : s.id }), s);
                    } catch (e) {
                        return (logSyncPrefetch('next-error', { error: null == e ? void 0 : e.message }), null);
                    }
                },
                fetchLrclibLyrics = async (e) => {
                    let { trackName: trackName, artistName: artistName, duration: durationSec } = e || {};
                    if (!trackName) return null;
                    let cacheKey = makeLrclibSyncCacheKey({ trackName, artistName, duration: durationSec }),
                        cachedResult = readLrclibSyncCache(lrclibSyncSearchResultCache, cacheKey);
                    if (cachedResult) return cachedResult;
                    if (readLrclibSyncCache(lrclibSyncSearchNoResultCache, cacheKey)) return null;
                    let inFlightSearch = lrclibSyncSearchInFlightByKey.get(cacheKey);
                    if (inFlightSearch) return inFlightSearch;
                    let searchPromise = (async () => {
                        try {
                            let useText = 'undefined' != typeof window && window.nativeSettings ? window.nativeSettings.get('modSettings.lrclib.useText') : null;
                            if (useText === !1) return null;
                        } catch (e) {}
                        let allowTitleOnlyFallback = !0;
                        try {
                            let setting =
                                'undefined' != typeof window && window.nativeSettings ? window.nativeSettings.get('modSettings.lrclib.useTitleOnlyFallback') : null;
                            if ('boolean' == typeof setting) allowTitleOnlyFallback = setting;
                        } catch (e) {}
                        let fetchResults = async (trackQuery, artistQuery) => {
                                let requestUrl = 'https://lrclib.net/api/search?track_name='.concat(encodeURIComponent(trackQuery));
                                if (artistQuery) requestUrl = requestUrl.concat('&artist_name=', encodeURIComponent(artistQuery));
                                return lrclibQueue(async () => {
                                    let controller = new AbortController(),
                                        timeoutId = setTimeout(() => controller.abort(), 1e4);
                                    try {
                                        lrclibSyncSearchControllers.push(controller);
                                        let response = await fetch(requestUrl, { signal: controller.signal });
                                        if (!response.ok) return { items: null, aborted: !1 };
                                        let payload = await response.json();
                                        console.debug('[LRCLib] sync response', { count: Array.isArray(payload) ? payload.length : 0 });
                                        return { items: Array.isArray(payload) && payload.length ? payload : null, aborted: !1 };
                                    } catch (error) {
                                        let aborted = error?.name === 'AbortError';
                                        return (
                                            aborted ? console.debug('[LRCLib] sync request aborted') : console.debug('[LRCLib] sync request failed', error),
                                            { items: null, aborted }
                                        );
                                    } finally {
                                        try {
                                            lrclibSyncSearchControllers = lrclibSyncSearchControllers.filter((e) => e !== controller);
                                        } catch (e) {}
                                        clearTimeout(timeoutId);
                                    }
                                });
                            },
                            retryIfAborted = async (attempt, ...args) => {
                                if (attempt && attempt.aborted) {
                                    let retry = await fetchResults(...args);
                                    return retry || attempt;
                                }
                                return attempt;
                            },
                            normalizeTitle = (e) => ('string' != typeof e ? '' : e.toLowerCase().replace(/[\s\W_]+/g, '')),
                            splitTrackTitle = (e) => {
                                if ('string' != typeof e) return null;
                                let separators = [' - ', ' — ', ' – '];
                                for (let sep of separators)
                                    if (e.includes(sep)) {
                                        let parts = e.split(sep),
                                            left = parts[0]?.trim() || '',
                                            right = parts.slice(1).join(sep).trim();
                                        if (left && right) return { left, right };
                                    }
                                return null;
                            },
                            getTitleVariants = (e) => {
                                let t = [];
                                if ('string' == typeof e && e.trim()) {
                                    let a = e.trim();
                                    t.push(a);
                                    let i = splitTrackTitle(a);
                                    i && (t.push(i.left), t.push(i.right));
                                }
                                return [...new Set(t.filter(Boolean))];
                            };
                        try {
                            let results = null,
                                variants = getTitleVariants(trackName);
                            for (let e of variants) {
                                let t = await retryIfAborted(await fetchResults(e, artistName), e, artistName);
                                if (t && t.items) {
                                    results = t.items;
                                    break;
                                }
                            }
                            if (!results && allowTitleOnlyFallback) {
                                for (let e of variants) {
                                    let t = await retryIfAborted(await fetchResults(e), e);
                                    if (t && t.items) {
                                        results = t.items;
                                        break;
                                    }
                                }
                            }
                            if (!results)
                                return (
                                    writeLrclibSyncCache(
                                        lrclibSyncSearchNoResultCache,
                                        cacheKey,
                                        !0,
                                        LRCLIB_SYNC_SEARCH_NO_RESULT_TTL_MS,
                                        LRCLIB_SYNC_SEARCH_CACHE_MAX_SIZE,
                                    ),
                                    null
                                );
                            results = results.filter((e) => e && !e.instrumental && e.syncedLyrics);
                            if (!results.length)
                                return (
                                    writeLrclibSyncCache(
                                        lrclibSyncSearchNoResultCache,
                                        cacheKey,
                                        !0,
                                        LRCLIB_SYNC_SEARCH_NO_RESULT_TTL_MS,
                                        LRCLIB_SYNC_SEARCH_CACHE_MAX_SIZE,
                                    ),
                                    null
                                );
                            if (artistName) {
                                let wantedArtist = normalizeTitle(artistName),
                                    closeMatches = results.filter((e) => normalizeTitle(e.artistName) === wantedArtist || normalizeTitle(e.artistName).includes(wantedArtist));
                                if (!closeMatches.length && !allowTitleOnlyFallback)
                                    return (
                                        writeLrclibSyncCache(
                                            lrclibSyncSearchNoResultCache,
                                            cacheKey,
                                            !0,
                                            LRCLIB_SYNC_SEARCH_NO_RESULT_TTL_MS,
                                            LRCLIB_SYNC_SEARCH_CACHE_MAX_SIZE,
                                        ),
                                        null
                                    );
                                if (closeMatches.length) results = closeMatches;
                            }
                            if (durationSec && durationSec > 0) {
                                let withDuration = results.filter((e) => 'number' == typeof e.duration);
                                if (withDuration.length > 0) {
                                    let closeMatches = withDuration.filter((e) => Math.abs(e.duration - durationSec) <= 10);
                                    if (!closeMatches.length)
                                        return (
                                            writeLrclibSyncCache(
                                                lrclibSyncSearchNoResultCache,
                                                cacheKey,
                                                !0,
                                                LRCLIB_SYNC_SEARCH_NO_RESULT_TTL_MS,
                                                LRCLIB_SYNC_SEARCH_CACHE_MAX_SIZE,
                                            ),
                                            null
                                        );
                                    results = closeMatches;
                                }
                            }
                            let selected = results[0];
                            if (durationSec && durationSec > 0) {
                                let byDuration = results.map((e) => ({ item: e, delta: Math.abs(e.duration - durationSec) })).sort((e, t) => e.delta - t.delta);
                                selected = byDuration[0] && byDuration[0].item ? byDuration[0].item : selected;
                            }
                            return (
                                lrclibSyncSearchNoResultCache.delete(cacheKey),
                                writeLrclibSyncCache(lrclibSyncSearchResultCache, cacheKey, selected, LRCLIB_SYNC_SEARCH_CACHE_TTL_MS, LRCLIB_SYNC_SEARCH_CACHE_MAX_SIZE),
                                selected
                            );
                        } catch (e) {
                            return (console.debug('[LRCLib] sync search failed', e), null);
                        }
                    })();
                    lrclibSyncSearchInFlightByKey.set(cacheKey, searchPromise);
                    searchPromise.finally(() => {
                        lrclibSyncSearchInFlightByKey.get(cacheKey) === searchPromise && lrclibSyncSearchInFlightByKey.delete(cacheKey);
                    });
                    return searchPromise;
                },
                L = l.gK.model('SyncLyricsLine', { text: l.gK.string, fromSec: l.gK.number, toSec: l.gK.maybe(l.gK.number) }).views((e) => ({
                    get key() {
                        return ''.concat(e.fromSec, ':').concat(e.toSec);
                    },
                })),
                M = l.gK
                    .compose(
                        l.gK.model('SyncLyrics', {
                            isVisible: l.gK.optional(l.gK.boolean, !1),
                            lines: l.gK.maybeNull(l.gK.array(L)),
                            major: l.gK.maybeNull(I.t$),
                            writers: l.gK.maybeNull(l.gK.array(l.gK.string)),
                            lyricId: l.gK.maybeNull(l.gK.number),
                            externalLyricId: l.gK.maybeNull(l.gK.string),
                            currentTrackId: l.gK.maybeNull(l.gK.union(l.gK.string, l.gK.number)),
                            hasLyricsViewed: l.gK.optional(l.gK.boolean, !1),
                        }),
                        f.XT,
                    )
                    .volatile(() => ({ requestToken: 0 }))
                    .views((e) => ({
                        get startSec() {
                            var t;
                            let a = null == (t = e.lines) ? void 0 : t.at(0);
                            return null == a ? void 0 : a.fromSec;
                        },
                        get endSec() {
                            var a;
                            let t = null == (a = e.lines) ? void 0 : a.at(-1);
                            return null == t ? void 0 : t.toSec;
                        },
                        get hasWriters() {
                            var i;
                            return !!(e.writers && (null == (i = e.writers) ? void 0 : i.length) > 0);
                        },
                        get hasInvalidLyrics() {
                            var n;
                            return !!(e.isResolved && (null == (n = e.lines) ? void 0 : n.length) === 0);
                        },
                        hasLyricsForTrack(t) {
                            let a = null == t ? null : String(t),
                                i = null == e.currentTrackId ? null : String(e.currentTrackId);
                            return !!(a && i && a === i && e.isResolved && Array.isArray(e.lines) && e.lines.length > 0);
                        },
                        isLoadingForTrack(t) {
                            let a = null == t ? null : String(t),
                                i = null == e.currentTrackId ? null : String(e.currentTrackId);
                            return !!(a && i && a === i && e.isLoading);
                        },
                    }))
                    .actions((e) => {
                        let isStale = (t, a) => t !== e.requestToken || String(e.currentTrackId) !== String(a),
                            t = {
                            setVisible() {
                                e.isVisible = !0;
                            },
                            setInvisible() {
                                e.isVisible = !1;
                            },
                            getActiveLineIndex: (t) => {
                                if ((e.startSec && t < e.startSec) || (e.endSec && t > e.endSec)) return null;
                                let a = (e.lines || []).findIndex((e) => (void 0 === e.toSec ? t >= e.fromSec : !!(t >= e.fromSec) && !!(e.toSec >= t)));
                                return a >= 0 ? a : null;
                            },
                            prefetchTrack: (0, l.L3)(function* (trackMeta, a = 0) {
                                let i = ++lrclibSyncPrefetchSeq,
                                    n = trackMeta || getNextQueueTrackMeta(lrclibSyncSonataStateRef);
                                if ((logSyncPrefetch('start', { prefetchId: i, retry: a, explicitTrackId: null == trackMeta ? void 0 : trackMeta.id }), !n)) {
                                    if (a >= 6) return void logSyncPrefetch('stop-no-next', { prefetchId: i, retry: a });
                                    return (
                                        lrclibSyncPrefetchRetryTimer && clearTimeout(lrclibSyncPrefetchRetryTimer),
                                        logSyncPrefetch('retry-scheduled', { prefetchId: i, retry: a + 1 }),
                                        void (lrclibSyncPrefetchRetryTimer = setTimeout(
                                            () => {
                                                lrclibSyncPrefetchRetryTimer = null;
                                                try {
                                                    t.prefetchTrack(getNextQueueTrackMeta(lrclibSyncSonataStateRef), a + 1);
                                                } catch (e) {}
                                            },
                                            250 * (a + 1),
                                        ))
                                    );
                                }
                                let r = null == n ? void 0 : n.id,
                                    s = null == r ? null : String(r);
                                if (!s) return void logSyncPrefetch('skip', { prefetchId: i, reason: 'track-id' });
                                let o =
                                    !!(null != n && !0 === n.hasSyncLyrics) ||
                                    !!(null != n && !0 === n.isSyncLyricsAvailable) ||
                                    !!(null != n && !0 === n.isSyncLyricsAvailableWithOfflineFeature);
                                if (o) return void logSyncPrefetch('skip', { prefetchId: i, reason: 'native-sync-available', trackId: s });
                                if (lrclibSyncPrefetchByTrackId.has(s)) return void logSyncPrefetch('skip', { prefetchId: i, reason: 'cached', trackId: s });
                                let c = lrclibSyncPrefetchNoResultByTrackId.get(s);
                                if ('number' == typeof c) {
                                    let e = Date.now() - c;
                                    if (e < LRCLIB_SYNC_PREFETCH_NO_RESULT_TTL_MS)
                                        return void logSyncPrefetch('skip', { prefetchId: i, reason: 'no-result-cached', trackId: s, ageMs: e });
                                    lrclibSyncPrefetchNoResultByTrackId.delete(s);
                                }
                                if (lrclibSyncPrefetchInFlight.has(s)) return void logSyncPrefetch('skip', { prefetchId: i, reason: 'inflight', trackId: s });
                                if (String(s) === String(e.currentTrackId)) return void logSyncPrefetch('skip', { prefetchId: i, reason: 'current-track', trackId: s });
                                let d = getSyncTrackLookup(n);
                                if (!(null == d ? void 0 : d.trackName)) return void logSyncPrefetch('skip', { prefetchId: i, reason: 'lookup-missing', trackId: s });
                                let u = fetchLrclibLyrics(d)
                                    .then((e) => {
                                        let t = !!(e && e.syncedLyrics);
                                        return (
                                            t
                                                ? (lrclibSyncPrefetchByTrackId.set(s, e), lrclibSyncPrefetchNoResultByTrackId.delete(s))
                                                : lrclibSyncPrefetchNoResultByTrackId.set(s, Date.now()),
                                            logSyncPrefetch('fetch-done', { prefetchId: i, trackId: s, hasResult: !!e, hasSynced: t }),
                                            e
                                        );
                                    })
                                    .catch((e) => (logSyncPrefetch('fetch-error', { prefetchId: i, trackId: s, error: null == e ? void 0 : e.message }), null))
                                    .finally(() => {
                                        lrclibSyncPrefetchInFlight.delete(s);
                                    });
                                (lrclibSyncPrefetchInFlight.set(s, u), yield u);
                            }),
                            getData: (0, l.L3)(function* (a) {
                                let { tracksResource: i, modelActionsLogger: r } = (0, l._$)(e);
                                if (!a) return;
                                if (e.isLoading && String(e.currentTrackId) === String(a)) return;
                                let s = ++e.requestToken;
                                try {
                                    ((e.loadingState = n.GuX.PENDING), (e.currentTrackId = a), (e.hasLyricsViewed = !1), (e.lines = null));
                                    let { sonataState: o } = (0, l.Zn)(e),
                                        c = null == o ? void 0 : o.entityMeta;
                                    if (null == c ? void 0 : c.hasSyncLyrics) {
                                        let { downloadUrl: o, major: d, externalLyricId: u, lyricId: _, writers: m } = yield i.getLyrics((0, T.h3)(a, E.o.LRC));
                                        if (isStale(s, a)) return;
                                        if (!o) throw new Error('Sync lyrics are not available');
                                        let p = yield t.downloadSyncLyrics(o, s, a);
                                        if (isStale(s, a)) return;
                                        if (!(null == p ? void 0 : p.length) || isPlaceholderSyncLyrics(p)) throw new Error('Sync lyrics are not available');
                                        return (
                                            (e.major = (0, I.LT)(d)),
                                            (e.externalLyricId = u),
                                            (e.lyricId = _),
                                            (e.writers = (0, l.wg)(null != m ? m : [])),
                                            (e.lines = (0, l.wg)(p)),
                                            logSyncPrefetch('trigger-from-getData', { reason: 'resolved-native', trackId: a }),
                                            void (e.loadingState = n.GuX.RESOLVE)
                                        );
                                    }
                                    throw new Error('Sync lyrics are not available');
                                } catch (err) {
                                    let { sonataState: o } = (0, l.Zn)(e),
                                        c = null == o ? void 0 : o.entityMeta,
                                        d = getSyncTrackLookup(c),
                                        u = null == a ? null : String(a),
                                        _ = u && lrclibSyncPrefetchByTrackId.has(u) ? lrclibSyncPrefetchByTrackId.get(u) : null;
                                    if (!_) {
                                        let e = u ? lrclibSyncPrefetchNoResultByTrackId.get(u) : null;
                                        if ('number' == typeof e) {
                                            if (Date.now() - e < LRCLIB_SYNC_PREFETCH_NO_RESULT_TTL_MS) {
                                                logSyncPrefetch('fallback-skip', { reason: 'no-result-cached', trackId: u });
                                            } else lrclibSyncPrefetchNoResultByTrackId.delete(u);
                                        }
                                        if (!_ && (null == d ? void 0 : d.trackName) && !('number' == typeof e && Date.now() - e < LRCLIB_SYNC_PREFETCH_NO_RESULT_TTL_MS))
                                            _ = yield fetchLrclibLyrics(d);
                                    }
                                    if (isStale(s, a)) return;
                                    if (!_)
                                        return void ((e.loadingState = n.GuX.REJECT),
                                        u && lrclibSyncPrefetchNoResultByTrackId.set(u, Date.now()),
                                        logSyncPrefetch('trigger-from-getData', { reason: 'reject-no-fallback', trackId: a }),
                                        r.error(err));
                                    u &&
                                        (null != _ && _.syncedLyrics
                                            ? (lrclibSyncPrefetchByTrackId.set(u, _), lrclibSyncPrefetchNoResultByTrackId.delete(u))
                                            : lrclibSyncPrefetchNoResultByTrackId.set(u, Date.now()));
                                    if (null != _ && _.syncedLyrics) {
                                        let i = normalizeSyncedTiming(parseLrc(_.syncedLyrics), null == d ? void 0 : d.duration);
                                        if (i.length > 0 && !isPlaceholderSyncLyrics(i))
                                            return (
                                                (e.major = (0, I.LT)({ id: 1337, name: 'LRCLIB', prettyName: 'LRCLIB' })),
                                                (e.externalLyricId = null == _.id ? null : String(_.id)),
                                                (e.lyricId = null),
                                                (e.writers = (0, l.wg)((null == c ? void 0 : c.artists) ? c.artists.map((e) => e.name).filter(Boolean) : [])),
                                                (e.hasLyricsViewed = !0),
                                                (e.lines = (0, l.wg)(i)),
                                                logSyncPrefetch('trigger-from-getData', { reason: 'resolved-lrclib', trackId: a }),
                                                void (e.loadingState = n.GuX.RESOLVE)
                                            );
                                    }
                                    ((e.loadingState = n.GuX.REJECT),
                                        u && lrclibSyncPrefetchNoResultByTrackId.set(u, Date.now()),
                                        logSyncPrefetch('trigger-from-getData', { reason: 'reject-without-lines', trackId: a }),
                                        r.error(err));
                                }
                            }),
                            downloadSyncLyrics: (0, l.L3)(function* (t, a, i) {
                                let { prefixlessResource: r } = (0, l._$)(e),
                                    s = yield r.getLyricsText(t);
                                if (void 0 !== i && String(e.currentTrackId) !== String(i)) return null;
                                if ('number' == typeof a && a !== e.requestToken) return null;
                                return parseLrc(s);
                            }),
                            sendViews: (0, l.L3)(function* (t) {
                                let { contextId: a, contextType: i } = t,
                                    { lyricViewsResource: r, modelActionsLogger: s } = (0, l._$)(e);
                                if (e.loadingState === n.GuX.RESOLVE)
                                    try {
                                        if (!e.major || !e.lyricId || !e.externalLyricId || !e.currentTrackId) return;
                                        yield r.sendViews({
                                            lyricViews: [
                                                {
                                                    id: (0, S.A)(),
                                                    trackId: e.currentTrackId,
                                                    majorId: e.major.id,
                                                    lyricId: e.lyricId,
                                                    externalLyricId: e.externalLyricId,
                                                    lyricFormat: E.o.LRC,
                                                    albumId: i === k.K.Album && a ? a : void 0,
                                                    playlistId: i === k.K.Playlist && a ? a : void 0,
                                                },
                                            ],
                                        }),
                                            (e.hasLyricsViewed = !0);
                                    } catch (e) {
                                        s.error(e);
                                    }
                            }),
                        };
                        return t;
                    }),
                B = l.gK
                    .model('FullscreenPlayer', {
                        mode: l.gK.maybeNull(l.gK.enumeration(Object.values(C))),
                        shouldRestoreSyncLyrics: l.gK.optional(l.gK.boolean, !1),
                        lastAutoHiddenSyncTrackId: l.gK.maybeNull(l.gK.union(l.gK.string, l.gK.number)),
                        syncLyrics: M,
                        playQueue: j,
                        modal: f.qt,
                    })
                    .views((e) => ({
                        get isSplitMode() {
                            return this.isPlayQueueMode || this.isSyncLyricsMode;
                        },
                        get isSyncLyricsMode() {
                            var t;
                            let { sonataState: a } = (0, l.Zn)(e);
                            let i = null == a || null == (t = a.entityMeta) ? void 0 : t.id,
                                n = i ? String(i) : null,
                                r = null == a || null == (t = a.entityMeta) ? void 0 : t.hasLyrics,
                                s = null == a || null == (t = a.entityMeta) ? void 0 : t.hasSyncLyrics,
                                o = null == a || null == (t = a.entityMeta) ? void 0 : t.isSyncLyricsAvailableWithOfflineFeature,
                                c = !!(n && e.syncLyrics.hasLyricsForTrack(n));
                            return e.mode === C.SYNC_LYRICS && (!!(null == a || null == (t = a.entityMeta) ? void 0 : t.isSyncLyricsAvailable) || !!o || !!s || !!r || c);
                        },
                        get isPlayQueueMode() {
                            return e.mode === C.PLAY_QUEUE;
                        },
                    }))
                    .actions((e) => ({
                        setMode(t) {
                            e.mode = t;
                        },
                        showFullscreenPlayerModal() {
                            e.syncLyrics.setInvisible(), e.modal.open();
                        },
                        showSyncLyrics() {
                            e.mode = C.SYNC_LYRICS;
                            let { sonataState: t } = (0, l.Zn)(e),
                                a = null == t || null == t.entityMeta ? void 0 : t.entityMeta.id;
                            (e.syncLyrics.setVisible(),
                                a && !e.syncLyrics.hasLyricsForTrack(a) && !e.syncLyrics.isLoadingForTrack(a) && e.syncLyrics.getData(a),
                                e.modal.isOpened || e.modal.open());
                        },
                        hideSyncLyrics() {
                            (e.mode = null), e.syncLyrics.setInvisible();
                        },
                        showPlayQueue() {
                            (e.mode = C.PLAY_QUEUE), e.playQueue.setVisible(), e.modal.isOpened || e.modal.open();
                        },
                        hidePlayQueue() {
                            (e.mode = null), e.playQueue.setInvisible();
                        },
                        isModeActive: (t) => e.mode === t,
                        reset() {
                            e.mode = null;
                        },
                    })),
                O = l.gK.model('QualitySettings', { modal: f.qt });
            var R = a(60900),
                D = a(59824),
                F = a(82586),
                V = a(84638),
                K = a(29680);
            let z = (e) => ({ '--player-average-color-background': (0, T.ye)(null == e || (window.DISABLE_PER_TRACK_COLORS?.() ?? !1) ? void 0 : e.averageColor) });
            var U = a(20959),
                W = a.n(U),
                G = a(86806),
                q = a(44989),
                Q = a(11715),
                Y = a(91027);
            let H = (0, u.createContext)({ difference: 0, isSingleTrackSwitch: !1 }),
                $ = () => (0, u.useContext)(H);
            var X = a(27202),
                Z = a.n(X),
                J = a(49364);
            let ee = (0, d.PA)((e) => {
                let { children: t } = e,
                    {
                        fullscreenPlayer: {
                            playQueue: { itemsKeys: a, isDragAndDropEnabled: i },
                        },
                    } = (0, n.Pjs)();
                return i ? (0, o.jsx)(J.gB, { items: a, strategy: J._G, children: t }) : t;
            });
            var et = a(6752),
                ea = a(18238),
                ei = a.n(ea);
            let en = (0, d.PA)(
                    (0, u.forwardRef)((e, t) => {
                        let { children: a, 'data-index': i, className: n, ...r } = e,
                            { isDragging: l, listeners: s, setNodeRef: d, transform: _, transition: m, attributes: p } = (0, J.gl)({ id: String(i) }),
                            v = (0, u.useCallback)(
                                (e) => {
                                    d(e), 'function' == typeof t && t(e);
                                },
                                [t, d],
                            ),
                            y = { transition: m, '--translate-y': _ ? ''.concat(Math.round(_.y), 'px') : void 0 };
                        return (0, o.jsx)('div', {
                            ref: v,
                            'data-index': i,
                            style: y,
                            ...r,
                            className: (0, c.$)(ei().root, n),
                            children: (0, o.jsx)('div', { ref: t, className: (0, c.$)(ei().inner, { [ei().dragging]: l }), ...s, ...p, role: 'listitem', children: a }),
                        });
                    }),
                ),
                er = (e) => {
                    let { index: t, isDragAndDropEnabled: a, blockRef: i, className: l, isRemoveAvailable: s, hideControls: c } = e,
                        d = (0, n.eGp)(),
                        _ = a && !c,
                        m = (0, u.useMemo)(() => {
                            let e = null == d ? void 0 : d.state.queueState.order.value.indexOf(t);
                            return 'number' == typeof e ? [e] : [];
                        }, [t, null == d ? void 0 : d.state.queueState.order.value]),
                        p = r(t),
                        v = null == p ? void 0 : p.track,
                        y = null == p ? void 0 : p.playContextParams,
                        h = (0, I.iQ)(null != v ? v : null, I.NM.HIDE, m),
                        g = (0, Y.c)(() => {
                            h(), (null == i ? void 0 : i.current) && i.current.focus();
                        }),
                        b = (0, et.L)(() =>
                            v && y
                                ? (0, o.jsx)(T.Kt, {
                                      track: v,
                                      playContextParams: y,
                                      className: l,
                                      withDNDBlock: _,
                                      handleRemove: s ? g : void 0,
                                      withSecondaryColor: !0,
                                      hideControls: c,
                                  })
                                : null,
                        );
                    return b ? (_ ? (0, o.jsx)(en, { 'data-index': t, children: b }) : b) : null;
                };
            var el = a(36894),
                es = a.n(el),
                eo = a(58359),
                ec = a(57318),
                ed = a(62386),
                eu = a(65068),
                e_ = a(64605),
                em = a(52138),
                ep = a(83778),
                ev = a(86771),
                ey = a(53512),
                eh = a(92382);
            let eg = (e) => !!(e && 'object' == typeof e && ('playlistUuid' in e || 'playlistTitle' in e));
            var eb = (function (e) {
                return (e.Artist = 'artist'), (e.Playlist = 'playlist'), (e.Album = 'album'), (e.Track = 'track'), e;
            })({});
            let ex = () => {
                    let { formatMessage: e } = (0, R.A)(),
                        {
                            experiments: t,
                            sonataState: { entityMeta: a },
                            vibe: i,
                        } = (0, n.Pjs)(),
                        r = (0, n.eGp)(),
                        l = null == r ? void 0 : r.state.currentContext.value,
                        s = null == l ? void 0 : l.data.meta,
                        c = null == r ? void 0 : r.state.queueState.currentEntity.value,
                        d = null == a ? void 0 : a.mainArtist,
                        _ = (null == l ? void 0 : l.data.type) === k.K.Artist ? l.data.meta.artist : void 0,
                        p = (null == _ ? void 0 : _.name) ? _ : d,
                        v = null == a ? void 0 : a.mainAlbum,
                        y = null == a ? void 0 : a.isPodcast,
                        h = t.checkExperiment(n.zal.WebNextUseWaveQueue, 'on'),
                        g = (function (e) {
                            let { isWaveQueueEnabled: t } = e,
                                a = (0, n.eGp)(),
                                i = null == a ? void 0 : a.state.queueState.currentEntity.value;
                            return (0, u.useMemo)(
                                () =>
                                    t
                                        ? (function (e) {
                                              if (!e) return { title: void 0, type: void 0, sourceContextType: void 0 };
                                              let t = e.data.sourceContextType;
                                              if ((0, ev.F)(e)) {
                                                  let a = e.data.meta.title;
                                                  if (a) return { title: a, type: k.K.Album, sourceContextType: t };
                                              }
                                              if ((0, eh.K)(e)) {
                                                  let a = e.data.meta.title;
                                                  if (a) return { title: a, type: k.K.Playlist, sourceContextType: t };
                                              }
                                              if ((0, ey.T)(e)) {
                                                  var a;
                                                  let i = null == (a = e.data.meta.artist) ? void 0 : a.name;
                                                  if (i) return { title: i, type: k.K.Artist, sourceContextType: t };
                                              }
                                              return { title: void 0, type: void 0, sourceContextType: t };
                                          })(null == i ? void 0 : i.sourceContext)
                                        : { title: void 0, type: void 0, sourceContextType: void 0 },
                                [null == i ? void 0 : i.sourceContext, t],
                            );
                        })({ isWaveQueueEnabled: h }),
                        b = (0, et.L)(() => {
                            if (h && g.type)
                                return (function (e) {
                                    let { sourceType: t, sourceContext: a } = e;
                                    if (a)
                                        switch (t) {
                                            case k.K.Album: {
                                                if (!(0, ev.F)(a)) return;
                                                let e = a.data.meta.id;
                                                if (!e) return;
                                                let { href: t } = (0, n.uvd)('/album/:albumId', { params: { albumId: String(e) } });
                                                return t;
                                            }
                                            case k.K.Artist: {
                                                if (!(0, ey.T)(a)) return;
                                                let e = a.data.meta.id;
                                                if (!e) return;
                                                let { href: t } = (0, n.uvd)('/artist/:artistId', { params: { artistId: String(e) } });
                                                return t;
                                            }
                                            case k.K.Playlist: {
                                                if (!(0, eh.K)(a)) return;
                                                let e = a.data.meta.playlistUuid;
                                                if (!e) return;
                                                let { href: t } = (0, n.uvd)('/playlists/:playlistUuid', { params: { playlistUuid: e } });
                                                return t;
                                            }
                                            default:
                                                return;
                                        }
                                })({ sourceType: g.type, sourceContext: null == c ? void 0 : c.sourceContext });
                            switch (null == l ? void 0 : l.data.type) {
                                case k.K.Vibe:
                                    var e;
                                    return ((e, t) => {
                                        var a, i;
                                        let r = (0, ed.i)(t) ? (null == t ? void 0 : t.data.parentContext) : null,
                                            l = (0, ed.i)(t) ? (null == t ? void 0 : t.data.parentContextId) : null;
                                        if (r || l)
                                            switch (e) {
                                                case eb.Artist: {
                                                    let { href: e } = (0, n.uvd)('/artist/:artistId', {
                                                        params: { artistId: (null != (a = null == r ? void 0 : r.data.meta.id) ? a : l) || '' },
                                                    });
                                                    return e;
                                                }
                                                case eb.Playlist: {
                                                    let e = null == r ? void 0 : r.data.meta,
                                                        t = eg(e) ? e.playlistUuid : l;
                                                    if (!t) return;
                                                    let { href: a } = (0, n.uvd)('/playlists/:playlistUuid', { params: { playlistUuid: String(t) } });
                                                    return a;
                                                }
                                                case eb.Album: {
                                                    if (!(null == r ? void 0 : r.data.meta.id) && !l) return;
                                                    let { href: e } = (0, n.uvd)('/album/:albumId', {
                                                        params: { albumId: (null != (i = null == r ? void 0 : r.data.meta.id) ? i : l) || '' },
                                                    });
                                                    return e;
                                                }
                                                case eb.Track: {
                                                    if (!l) return;
                                                    if (String(l).includes(':')) {
                                                        let [e, t] = String(l).split(':'),
                                                            { href: a } = (0, n.uvd)('/album/:albumId/track/:trackId', {
                                                                params: { albumId: e || '', trackId: t || '' },
                                                            });
                                                        return a;
                                                    }
                                                    let { href: e } = (0, n.uvd)('/track/:trackId', { params: { trackId: l } });
                                                    return e;
                                                }
                                                default:
                                                    return;
                                            }
                                    })(null == i || null == (e = i.meta) ? void 0 : e.stationType, l);
                                case k.K.Artist: {
                                    if (!(null == p ? void 0 : p.id)) return;
                                    let { href: e } = (0, n.uvd)('/artist/:artistId', { params: { artistId: String(p.id) } });
                                    return e;
                                }
                                case k.K.Playlist: {
                                    if (!eg(s)) return;
                                    let { href: e } = (0, n.uvd)('/playlists/:playlistUuid', { params: { playlistUuid: null == s ? void 0 : s.playlistUuid } });
                                    return e;
                                }
                                case k.K.Album: {
                                    if (!(null == v ? void 0 : v.id)) return;
                                    let { href: e } = (0, n.uvd)('/album/:albumId', { params: { albumId: v.id } });
                                    return e;
                                }
                                default:
                                    return;
                            }
                        }),
                        x = (0, et.L)(() => {
                            if (h && g.title) return g.title;
                            switch (null == l ? void 0 : l.data.type) {
                                case k.K.Vibe:
                                    var e, t;
                                    return ((e, t) => (t && e ? t : (0, o.jsx)(m.A, { id: 'entity-names.my-vibe' })))(
                                        null == i || null == (e = i.meta) ? void 0 : e.stationType,
                                        null == i || null == (t = i.meta) ? void 0 : t.title,
                                    );
                                case k.K.Artist:
                                    return null == p ? void 0 : p.name;
                                case k.K.Playlist:
                                    if (!eg(s)) return;
                                    return null == s ? void 0 : s.title;
                                case k.K.Album:
                                    return null == v ? void 0 : v.title;
                                case k.K.Various:
                                    return (0, o.jsx)(m.A, { id: 'play-queue.now-playing' });
                                default:
                                    return (0, o.jsx)(m.A, { id: 'entity-names.my-vibe' });
                            }
                        }),
                        A = (0, et.L)(() => {
                            if (h && g.type) {
                                let e = (function (e) {
                                    let { sourceType: t, sourceContext: a, sourceContextType: i } = e,
                                        n = (function (e) {
                                            switch (e) {
                                                case ep.h.SEARCH:
                                                    return (0, o.jsx)(m.A, { id: 'play-queue.now-playing-from-search' });
                                                case ep.h.DOWNLOADED_TRACKS:
                                                    return (0, o.jsx)(m.A, { id: 'play-queue.now-playing-from-downloads' });
                                                case ep.h.MUSIC_HISTORY:
                                                    return (0, o.jsx)(m.A, { id: 'play-queue.now-playing-from-history' });
                                                case ep.h.MUSIC_HISTORY_SEARCH:
                                                    return (0, o.jsx)(m.A, { id: 'play-queue.now-playing-from-history-search' });
                                                case ep.h.ARTIST_MY_COLLECTION:
                                                    return (0, o.jsx)(m.A, { id: 'play-queue.now-playing-from-artist-collection' });
                                                case ep.h.ARTIST_FAMILIAR_FROM_WAVE:
                                                    return (0, o.jsx)(m.A, { id: 'play-queue.now-playing-from-artist-wave' });
                                                default:
                                                    return;
                                            }
                                        })(i);
                                    if (n) return n;
                                    if (i === ep.h.BASED_ON_ENTITY_BY_DEFAULT || void 0 === i)
                                        switch (t) {
                                            case k.K.Album:
                                                if ((0, ev.F)(a) && a.data.meta.type === e_._.PODCAST)
                                                    return (0, o.jsx)(m.A, { id: 'play-queue.now-playing-from-podcast' });
                                                return (0, o.jsx)(m.A, { id: 'play-queue.now-playing-from-album' });
                                            case k.K.Artist:
                                                return (0, o.jsx)(m.A, { id: 'play-queue.now-playing-from-artist-popular-tracks' });
                                            case k.K.Playlist:
                                                return (0, o.jsx)(m.A, { id: 'play-queue.now-playing-from-playlist' });
                                        }
                                })({ sourceType: g.type, sourceContext: null == c ? void 0 : c.sourceContext, sourceContextType: g.sourceContextType });
                                if (e) return e;
                            }
                            switch (null == l ? void 0 : l.data.type) {
                                case k.K.Vibe:
                                    var a, r;
                                    if (!t.checkExperiment(n.zal.WebNextVibeDescription, 'on') || void 0 === (null == i || null == (a = i.meta) ? void 0 : a.description))
                                        return ((e, t) => {
                                            let a = (0, ed.i)(t) ? (null == t ? void 0 : t.data.parentContext) : null;
                                            switch (e) {
                                                case eb.Artist:
                                                    return (0, o.jsx)(m.A, { id: 'play-queue.now-playing-my-wave-by-artist' });
                                                case eb.Playlist:
                                                    return (0, o.jsx)(m.A, { id: 'play-queue.now-playing-my-wave-by-playlist' });
                                                case eb.Album:
                                                    if ((null == a ? void 0 : a.data.type) === e_._.PODCAST)
                                                        return (0, o.jsx)(m.A, { id: 'play-queue.now-playing-my-wave-by-podcast' });
                                                    return (0, o.jsx)(m.A, { id: 'play-queue.now-playing-my-wave-by-album' });
                                                case eb.Track:
                                                    return (0, o.jsx)(m.A, { id: 'play-queue.now-playing-my-wave-by-track' });
                                                default:
                                                    return (0, o.jsx)(m.A, { id: 'play-queue.now-playing' });
                                            }
                                        })(null == i || null == (r = i.meta) ? void 0 : r.stationType, l);
                                    if (null == i ? void 0 : i.isMyVibe) return e({ id: 'play-queue.now-playing' });
                                    return e({ id: 'play-queue.now-playing-by-entity' }, { entity: null == i ? void 0 : i.meta.getDescription() });
                                case k.K.Artist:
                                    return (0, o.jsx)(m.A, { id: 'play-queue.now-playing-from-artist-popular-tracks' });
                                case k.K.Playlist:
                                    return (0, o.jsx)(m.A, { id: 'play-queue.now-playing-from-playlist' });
                                case k.K.Album:
                                    if (y) return (0, o.jsx)(m.A, { id: 'play-queue.now-playing-from-podcast' });
                                    return (0, o.jsx)(m.A, { id: 'play-queue.now-playing-from-album' });
                                default:
                                    return;
                            }
                        }),
                        f = (0, et.L)(() => ((0, eu.p)(l) ? (0, o.jsx)(m.A, { id: 'entity-names.my-vibe' }) : x));
                    return {
                        url: b,
                        title: x,
                        subTitle: A,
                        vibeBlockTitle: f,
                        vibeBlockSubTitle: (0, et.L)(() => {
                            switch (null == l ? void 0 : l.data.type) {
                                case k.K.Artist:
                                    return (0, o.jsx)(m.A, { id: 'play-queue.my-wave-by-artist' });
                                case k.K.Playlist:
                                    return (0, o.jsx)(m.A, { id: 'play-queue.my-wave-by-playlist' });
                                case k.K.Album:
                                    return (0, o.jsx)(m.A, { id: 'play-queue.my-wave-by-album' });
                                default:
                                    return;
                            }
                        }),
                        vibeBlockAgent: (0, et.L)(() => {
                            var e, t, a;
                            switch (null == l ? void 0 : l.data.type) {
                                case k.K.Album:
                                    return (0, ec.KU)({ animationUri: '', cover: { uri: l.data.meta.coverUri }, entity: { type: em.h.ALBUM } });
                                case k.K.Artist:
                                    return (0, ec.KU)({
                                        animationUri: '',
                                        cover: { uri: null == (t = l.data.meta.artist) || null == (e = t.cover) ? void 0 : e.uri },
                                        entity: { type: em.h.ARTIST },
                                    });
                                case k.K.Playlist:
                                    return (0, ec.KU)({
                                        animationUri: '',
                                        cover: { uri: null == (a = l.data.meta.cover) ? void 0 : a.uri },
                                        entity: { type: em.h.PLAYLIST },
                                    });
                                case k.K.Various:
                                    return (0, ec.KU)({
                                        animationUri: '',
                                        cover: { uri: 'avatars.mds.yandex.net/get-music-misc/2419084/img.686688add03ee35062c02822/%%' },
                                        entity: { type: em.h.TRACK },
                                    });
                            }
                        }),
                    };
                },
                eA = { src: '/_next/static/media/vibeCover.c55d574d.png' };
            var ef = a(21325),
                eC = a.n(ef);
            let ek = (0, d.PA)(() => {
                    let { experiments: e } = (0, n.Pjs)(),
                        t = (0, n.eGp)(),
                        { vibeBlockTitle: a, vibeBlockSubTitle: i, vibeBlockAgent: r } = ex(),
                        l = (0, u.useCallback)(
                            (e) => {
                                (0, eo.P)(e, eC().ripple), null == t || t.moveForward();
                            },
                            [t],
                        ),
                        s = (0, et.L)(() =>
                            e.checkExperiment(n.zal.WebNextWaveAgentExperiment, 'on') && r
                                ? (0, o.jsx)(ec.nr, { agent: r, shouldShowControl: !1 })
                                : (0, o.jsx)(v.Image, {
                                      src: eA.src,
                                      className: eC().vibeCover,
                                      fit: 'cover',
                                      'aria-hidden': !0,
                                      ...(0, D.Am)(D.e8.player.PLAY_QUEUE_VIBE_BLOCK_IMAGE),
                                  }),
                        );
                    return (0, o.jsxs)('div', {
                        className: eC().root,
                        onClick: l,
                        ...(0, D.Am)(D.e8.player.PLAY_QUEUE_VIBE_BLOCK),
                        children: [
                            s,
                            (0, o.jsxs)('div', {
                                children: [
                                    (0, o.jsx)(y.Caption, {
                                        variant: 'div',
                                        size: 'm',
                                        className: eC().title,
                                        ...(0, D.Am)(D.e8.player.PLAY_QUEUE_VIBE_BLOCK_TITLE),
                                        children: a,
                                    }),
                                    (0, o.jsx)(y.Caption, {
                                        variant: 'div',
                                        size: 'm',
                                        className: eC().vibeTitle,
                                        ...(0, D.Am)(D.e8.player.PLAY_QUEUE_VIBE_BLOCK_VIBE_TITLE),
                                        children: i,
                                    }),
                                ],
                            }),
                        ],
                    });
                }),
                eP = (0, d.PA)(() => {
                    var e;
                    let {
                            fullscreenPlayer: {
                                playQueue: { afterTracksIds: t, isVibeBlockShowed: a, isDragAndDropEnabled: i, currentIndex: r },
                            },
                            sonataState: { isContextRepeatMode: l, isVibeContext: s },
                            experiments: d,
                        } = (0, n.Pjs)(),
                        _ = (0, n.eGp)(),
                        p = null == _ ? void 0 : _.state.queueState.order.value,
                        v = null != (e = null == _ ? void 0 : _.state.queueState.livePlayableIndex.value) ? e : 0,
                        h = null == _ ? void 0 : _.state.queueState.entityList.value,
                        g = d.checkExperiment(n.zal.WebNextUseWaveQueue, 'on'),
                        b = !s || g,
                        { isMovingForward: x, isMovingBackward: A, difference: f, isSingleTrackSwitch: C } = $(),
                        k = r - f,
                        P = (0, u.useId)(),
                        N = (0, u.useRef)(null);
                    return l && 0 === t.length
                        ? (0, o.jsx)('div', { className: es().root, ...(0, D.Am)(D.e8.player.PLAY_QUEUE_AFTER_PLAYING_BLOCK) })
                        : (0, o.jsxs)('div', {
                              className: es().root,
                              ...(0, D.Am)(D.e8.player.PLAY_QUEUE_AFTER_PLAYING_BLOCK),
                              children: [
                                  (0, o.jsx)(y.Caption, {
                                      variant: 'div',
                                      size: 'm',
                                      className: (0, c.$)(es().title, { [es().title_withDnD]: i }),
                                      ...(0, D.Am)(D.e8.player.PLAY_QUEUE_AFTER_PLAYING_BLOCK_TITLE),
                                      children: (0, o.jsx)(m.A, { id: 'play-queue.next-in' }),
                                  }),
                                  (0, o.jsx)(ee, {
                                      children: (0, o.jsxs)('div', {
                                          tabIndex: 0,
                                          ref: N,
                                          className: (0, c.$)(es().animatedContent, {
                                              [es().animatedContent_moveToTop]: x,
                                              [es().animatedContent_moveFromTop]: A && !C,
                                              [es().animatedContent_moveFromTopSingleTrack]: A && C,
                                          }),
                                          children: [
                                              t.map((e) => {
                                                  let t = ((e) => {
                                                      var t, a;
                                                      let { index: i, order: n, livePlayableIndex: r, isVibeContext: l, isWaveQueueEnabled: s, entityList: o } = e,
                                                          c = null != (a = null == n ? void 0 : n.indexOf(i)) ? a : -1,
                                                          d = !!(null == o || null == (t = o[i]) ? void 0 : t.sourceContext);
                                                      return l && s && c > r && !d;
                                                  })({ index: e, order: p, livePlayableIndex: v, isVibeContext: s, isWaveQueueEnabled: g, entityList: h });
                                                  return (null == p ? void 0 : p[k]) === e
                                                      ? (0, o.jsx)(
                                                            'div',
                                                            {
                                                                className: es().prevTrack,
                                                                children: (0, o.jsx)(er, { index: e, isDragAndDropEnabled: i, isRemoveAvailable: b, hideControls: t }, e),
                                                            },
                                                            P,
                                                        )
                                                      : (0, o.jsx)(er, { index: e, isDragAndDropEnabled: i, blockRef: N, isRemoveAvailable: b, hideControls: t }, e);
                                              }),
                                              a && (0, o.jsx)(ek, {}),
                                          ],
                                      }),
                                  }),
                              ],
                          });
                });
            var eN = a(65804),
                ej = a.n(eN);
            let eS = (0, d.PA)((e) => {
                    let { forwardRef: t, scrollToNowPlayingBlock: a } = e,
                        {
                            fullscreenPlayer: {
                                playQueue: { beforeTracksIds: i, isDragAndDropEnabled: r, currentIndex: l },
                            },
                            sonataState: { isVibeContext: s },
                            experiments: d,
                        } = (0, n.Pjs)(),
                        _ = (0, n.eGp)(),
                        m = null == _ ? void 0 : _.state.queueState.order.value,
                        p = d.checkExperiment(n.zal.WebNextUseWaveQueue, 'on'),
                        v = !s || p;
                    (0, u.useEffect)(() => {
                        a();
                        let e = new ResizeObserver(() => a());
                        return (
                            'function' != typeof t && (null == t ? void 0 : t.current) && e.observe(t.current),
                            () => {
                                e.disconnect();
                            }
                        );
                    }, [t, a]);
                    let { isMovingForward: y, isMovingBackward: h, difference: g, isSingleTrackSwitch: b } = $(),
                        x = l - g,
                        A = (0, u.useId)();
                    return (0, o.jsx)('div', {
                        className: ej().root,
                        ref: t,
                        children: (0, o.jsx)(ee, {
                            children: (0, o.jsx)('div', {
                                className: (0, c.$)(ej().animatedContent, {
                                    [ej().animatedContent_moveToBottom]: h,
                                    [ej().animatedContent_moveFromBottom]: y && !b,
                                    [ej().animatedContent_moveFromBottomSingleTrack]: y && b,
                                }),
                                ...(0, D.Am)(D.e8.player.PLAY_QUEUE_BEFORE_PLAYING_BLOCK),
                                children:
                                    null == i
                                        ? void 0
                                        : i.map((e) =>
                                              (null == m ? void 0 : m[x]) === e
                                                  ? (0, o.jsx)(
                                                        'div',
                                                        {
                                                            className: ej().prevTrack,
                                                            children: (0, o.jsx)(er, { index: e, isDragAndDropEnabled: r, isRemoveAvailable: v }, e),
                                                        },
                                                        A,
                                                    )
                                                  : (0, o.jsx)(er, { index: e, isDragAndDropEnabled: r, isRemoveAvailable: v }, e),
                                          ),
                            }),
                        }),
                    });
                }),
                eE = (0, u.forwardRef)((e, t) => (0, o.jsx)(eS, { forwardRef: t, ...e }));
            var eT = a(11386),
                eI = a(79259),
                ew = a(51767),
                eL = a(46062),
                eM = a.n(eL);
            let eB = (e) => {
                    let { index: t } = e,
                        a = r(t),
                        i = null == a ? void 0 : a.track,
                        n = null == a ? void 0 : a.playContextParams;
                    return i && n
                        ? (0, o.jsx)('div', {
                              className: eM().root,
                              children: (0, o.jsx)(T.Kt, {
                                  track: i,
                                  playContextParams: n,
                                  draggingClassName: eM().dots,
                                  className: eM().noHoverItem,
                                  withDNDBlock: !0,
                                  isDragging: !0,
                                  withSecondaryColor: !0,
                              }),
                          })
                        : null;
                },
                eO = (0, d.PA)((e) => {
                    let { children: t } = e,
                        {
                            fullscreenPlayer: {
                                playQueue: { isDragAndDropEnabled: a },
                            },
                        } = (0, n.Pjs)(),
                        { activeId: i, handleDragStart: r, handleDragCancel: l, sensors: s } = (0, n.YcA)(),
                        c = (0, u.useCallback)((e) => {
                            let { active: t, over: a } = e;
                            if (!t.id || !(null == a ? void 0 : a.id)) return;
                        }, []),
                        d = (0, u.useMemo)(() => {
                            if (i)
                                return (0, ew.createPortal)(
                                    (0, o.jsx)(eT.Hd, { dropAnimation: { duration: 0 }, children: (0, o.jsx)(eB, { index: Number(i) }) }),
                                    window.document.body,
                                );
                        }, [i]);
                    return a
                        ? (0, o.jsxs)(eT.Mp, {
                              sensors: s,
                              collisionDetection: eT.fp,
                              onDragStart: r,
                              onDragEnd: c,
                              onDragCancel: l,
                              modifiers: [eI.FN],
                              children: [t, d],
                          })
                        : t;
                });
            var eR = a(67288),
                eD = a.n(eR);
            let eF = (0, d.PA)(() => {
                let {
                        fullscreenPlayer: {
                            modal: e,
                            playQueue: { isDragAndDropEnabled: t },
                        },
                        sonataState: { isContextRepeatMode: a, isOneRepeatMode: i, shuffle: r },
                    } = (0, n.Pjs)(),
                    { formatMessage: l } = (0, R.A)(),
                    { url: s, title: d, subTitle: _ } = ex(),
                    m = (0, n.Cz$)({ onClick: e.close }),
                    p = (0, u.useMemo)(() => {
                        let e = s ? {} : (0, D.Am)(D.e8.player.PLAY_QUEUE_NOW_PLAYING_BLOCK_TITLE),
                            t = (0, o.jsx)(y.Heading, {
                                variant: 'h2',
                                size: 'm',
                                weight: 'bold',
                                lineClamp: 1,
                                className: (0, c.$)(eD().heading, { [eD().heading_withOffset]: !_ }),
                                ...e,
                                children: d,
                            });
                        return s
                            ? (0, o.jsx)(h.N_, {
                                  className: eD().title,
                                  containerClassName: eD().linkContainer,
                                  textClassName: eD().linkText,
                                  icon: (0, o.jsx)(F.Icon, { className: eD().titleIcon, size: 'xs', variant: 'arrowRight' }),
                                  iconPosition: 'right',
                                  href: s,
                                  onClick: m,
                                  ...(0, D.Am)(D.e8.player.PLAY_QUEUE_NOW_PLAYING_BLOCK_TITLE),
                                  children: t,
                              })
                            : t;
                    }, [m, _, d, s]),
                    v = (0, et.L)(() =>
                        a ? l({ id: 'play-queue.repeat-context' }) : i ? l({ id: 'play-queue.repeat-one' }) : r ? l({ id: 'play-queue.shuffle' }) : null,
                    );
                return (0, o.jsxs)('div', {
                    className: (0, c.$)(eD().root, { [eD().root_withDnD]: t }),
                    children: [
                        (0, o.jsx)(y.Caption, {
                            variant: 'div',
                            size: 'm',
                            className: eD().subTitle,
                            ...(0, D.Am)(D.e8.player.PLAY_QUEUE_NOW_PLAYING_BLOCK_SUBTITLE),
                            children: _,
                        }),
                        p,
                        (0, o.jsx)(y.Caption, {
                            variant: 'div',
                            size: 'm',
                            className: eD().modeTitle,
                            ...(0, D.Am)(D.e8.player.PLAY_QUEUE_NOW_PLAYING_BLOCK_MODE_TITLE),
                            children: v,
                        }),
                    ],
                });
            });
            var eV = a(90558),
                eK = a.n(eV);
            let ez = (0, d.PA)(() => {
                    var e, t;
                    let { from: a } = (0, n.fyy)(),
                        {
                            fullscreenPlayer: {
                                playQueue: { currentIndex: i, isDragAndDropEnabled: r },
                            },
                            sonataState: { entityMeta: l },
                        } = (0, n.Pjs)(),
                        { isMovingForward: s, isMovingBackward: d } = $(),
                        u = (0, n.eGp)(),
                        _ = null == u || null == (t = u.state.currentContext) || null == (e = t.value) ? void 0 : e.data;
                    if (!_ || !l) return null;
                    let m = { contextData: { ..._, from: a }, queueParams: { index: i, entityId: l.id } };
                    return (0, o.jsxs)('div', {
                        className: eK().root,
                        ...(0, D.Am)(D.e8.player.PLAY_QUEUE_NOW_PLAYING_BLOCK),
                        children: [
                            (0, o.jsx)(eF, {}),
                            (0, o.jsx)(T.Kt, {
                                track: l,
                                playContextParams: m,
                                className: (0, c.$)(eK().track, eK().important, { [eK().track_withDnD]: r, [eK().track_moveFromTop]: d, [eK().track_moveFromBottom]: s }),
                                withSecondaryColor: !0,
                            }),
                        ],
                    });
                }),
                eU = () => {
                    let { style: e, contextValue: t } = (() => {
                            var e;
                            let {
                                    fullscreenPlayer: {
                                        playQueue: { updateTracks: t, hiddenTrackIds: a },
                                    },
                                } = (0, n.Pjs)(),
                                i = (0, n.eGp)(),
                                [r, l] = (0, u.useState)(),
                                s = (0, u.useRef)(void 0),
                                o = (0, u.useRef)(void 0),
                                c = (0, u.useRef)(void 0),
                                { state: d, handleDebouncedToggle: _ } = (0, G.F)({ delay: 600, throttleTimeout: 600 }),
                                { state: m, handleDebouncedToggle: p } = (0, G.F)({ delay: 600, throttleTimeout: 600 }),
                                v = (0, Y.c)(() => {
                                    var e;
                                    let a = null == i ? void 0 : i.state.queueState.entityList.value,
                                        n = null == i ? void 0 : i.state.queueState.index.value,
                                        r = null == i ? void 0 : i.state.queueState.order.value,
                                        l = null == i || null == (e = i.state.currentContext.value) ? void 0 : e.data.type;
                                    a && 'number' == typeof n && r && l && t(a, n, r, l);
                                }),
                                y = (0, Y.c)(() => {
                                    var e;
                                    let t = null == i ? void 0 : i.state.queueState.index.value,
                                        n = null == i || null == (e = i.state.currentContext.value) ? void 0 : e.data.type,
                                        r = s.current;
                                    if ('number' == typeof t && 'number' == typeof r) {
                                        let e = a.reduce((e, t) => (t < r ? e + 1 : e - 1), 0),
                                            i = t - r;
                                        c.current = i;
                                        let s = n !== o.current,
                                            d = 1 === Math.abs(i) ? i : i + e;
                                        i > 0 || s ? (_(), l(s ? 1 : d)) : i < 0 && (p(), l(d));
                                    }
                                    (s.current = t), (o.current = n);
                                });
                            (0, u.useEffect)(() => {
                                let e =
                                    null == i
                                        ? void 0
                                        : i.state.queueState.index.onChange(() => {
                                              v(), y();
                                          });
                                return () => {
                                    null == e || e();
                                };
                            }, [y, v, null == i ? void 0 : i.state.queueState.index]),
                                (0, u.useEffect)(() => {
                                    let e = null == i ? void 0 : i.state.queueState.shuffle.onChange(v),
                                        t = null == i ? void 0 : i.state.queueState.entityList.onChange(v),
                                        a = null == i ? void 0 : i.state.queueState.order.onChange(v);
                                    return () => {
                                        null == e || e(), null == t || t(), null == a || a();
                                    };
                                }, [
                                    v,
                                    null == i ? void 0 : i.state.queueState.entityList,
                                    null == i ? void 0 : i.state.queueState.index,
                                    null == i ? void 0 : i.state.queueState.order,
                                    null == i ? void 0 : i.state.queueState.shuffle,
                                ]);
                            let h = (0, u.useMemo)(() => {
                                    let e = 56 * (r || 1);
                                    return {
                                        '--play-queue-transition-duration-s': ''.concat(0.6, 's'),
                                        '--now-playing-title-height-px': ''.concat(90, 'px'),
                                        '--next-in-title-height-px': ''.concat(52, 'px'),
                                        '--track-height-px': ''.concat(56, 'px'),
                                        '--move-to-top-start-position': ''.concat(e, 'px'),
                                        '--move-from-top-start-position': ''.concat(e - 142, 'px'),
                                        '--move-to-bottom-start-position': ''.concat(e, 'px'),
                                        '--move-from-bottom-start-position': ''.concat(e + 52 + 90, 'px'),
                                        '--move-from-top-now-playing-block-start-position': ''.concat(e - 90, 'px'),
                                        '--move-from-bottom-now-playing-block-start-position': ''.concat(e + 52, 'px'),
                                    };
                                }, [r]),
                                g = 1 === Math.abs(null != r ? r : 0);
                            return {
                                style: h,
                                contextValue: { isMovingForward: d, isMovingBackward: m, difference: null != (e = c.current) ? e : 0, isSingleTrackSwitch: g },
                            };
                        })(),
                        a = (0, u.useRef)(null),
                        i = (0, u.useRef)(null),
                        { state: r, handleDebouncedToggle: l, reset: s } = (0, G.F)({ delay: 1e4, throttleTimeout: 2e3 }),
                        c = (0, u.useCallback)(function () {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'instant';
                            if (i.current && a.current) {
                                let t = i.current.clientHeight;
                                a.current.scrollTo({ top: t, behavior: e });
                            }
                        }, []);
                    return (
                        (0, u.useEffect)(() => {
                            r || (c('smooth'), s());
                        }, [r, s, c]),
                        (0, u.useEffect)(() => {
                            let e = a.current;
                            return (
                                null == e || e.addEventListener('scroll', l),
                                () => {
                                    null == e || e.removeEventListener('scroll', l);
                                }
                            );
                        }, [l]),
                        (0, o.jsx)(eO, {
                            children: (0, o.jsx)(H.Provider, {
                                value: t,
                                children: (0, o.jsx)('div', {
                                    className: Z().root,
                                    style: e,
                                    ...(0, D.Am)(D.e8.player.PLAY_QUEUE),
                                    children: (0, o.jsx)('div', {
                                        className: Z().content,
                                        ref: a,
                                        children: (0, o.jsxs)('div', {
                                            className: Z().scrollContent,
                                            children: [(0, o.jsx)(eE, { ref: i, scrollToNowPlayingBlock: c }), (0, o.jsx)(ez, {}), (0, o.jsx)(eP, {})],
                                        }),
                                    }),
                                }),
                            }),
                        })
                    );
                },
                eW = (0, u.createContext)({});
            var eG = a(58178),
                eq = a.n(eG),
                eQ = a(95520),
                eY = a.n(eQ);
            let eH = (0, d.PA)((e) => {
                let { className: t, icon: a } = e,
                    { sonataState: i } = (0, n.Pjs)(),
                    r = (0, u.useCallback)(
                        (e) => {
                            let t = { animationDelay: ''.concat((e + 1) * 0.275, 's'), animationDuration: ''.concat(1.1, 's, ').concat(1.1, 's') };
                            return a
                                ? (0, u.cloneElement)(a, {
                                      className: (0, c.$)(eY().element, eY().element_withIcon, { [eY().element_paused]: i.isPaused }),
                                      key: e,
                                      style: t,
                                  })
                                : (0, o.jsx)(
                                      'div',
                                      { className: (0, c.$)(eY().element, eY().element_withDefaultElement, { [eY().element_paused]: i.isPaused }), style: t },
                                      e,
                                  );
                        },
                        [a, i],
                    );
                return (0, o.jsx)('div', { className: (0, c.$)(eY().root, t), children: Array.from({ length: 4 }, (e, t) => r(t)) });
            });
            var e$ = a(6005),
                eX = a(15875),
                eZ = (function (e) {
                    return (e.INTRO = 'intro'), (e.PREPARE = 'prepare'), (e.PLAYING = 'playing'), (e.OUTRO = 'outro'), e;
                })({}),
                eJ = a(17416),
                e0 = a.n(eJ);
            let e1 = (0, d.PA)(() => {
                var e, t, a;
                let { formatMessage: i } = (0, R.A)(),
                    {
                        fullscreenPlayer: { syncLyrics: r },
                    } = (0, n.Pjs)();
                return (0, o.jsxs)('footer', {
                    className: e0().root,
                    children: [
                        r.hasWriters &&
                            (0, o.jsx)(y.Caption, {
                                className: e0().writers,
                                variant: 'div',
                                size: 'l',
                                weight: 'medium',
                                children: i({ id: 'entity-names.authors' }, { authors: null == (e = r.writers) ? void 0 : e.join(', ') }),
                            }),
                        (null == (t = r.major) ? void 0 : t.prettyName) &&
                            (0, o.jsx)(y.Caption, {
                                className: e0().major,
                                variant: 'div',
                                size: 'l',
                                weight: 'medium',
                                children: i({ id: 'entity-names.source' }, { source: null == (a = r.major) ? void 0 : a.prettyName }),
                            }),
                    ],
                });
            });
            var e2 = a(52930),
                e8 = a.n(e2);
            let e5 = (e) => {
                let { className: t, text: a } = e;
                return (0, o.jsx)('span', { className: (0, c.$)(e8().root, t), children: a });
            };
            var e6 = a(20418),
                e9 = a.n(e6);
            let e4 = (0, d.PA)((e) => {
                var t, a;
                let { state: i, progressPosition: r, shouldShowScrolledLyrics: l, setProgressPosition: s } = e,
                    d = (0, n.eGp)(),
                    _ = (0, eX.Mn)(),
                    {
                        fullscreenPlayer: { syncLyrics: m },
                    } = (0, n.Pjs)(),
                    p = (0, u.useCallback)(
                        (e) => (t) => {
                            l &&
                                (t.stopPropagation(),
                                s(e + 0.01),
                                null == d ||
                                    d.setProgress(e + 0.01).catch(() => {
                                        s(r);
                                    }));
                        },
                        [r, s, l, d],
                    ),
                    v = m.getActiveLineIndex(r);
                return (
                    ((e) => {
                        let t = (0, u.useRef)(0),
                            {
                                fullscreenPlayer: { syncLyrics: a },
                                sonataState: { contextId: i, contextType: r },
                            } = (0, n.Pjs)();
                        (0, u.useEffect)(() => {
                            !a.hasLyricsViewed &&
                                null !== e &&
                                'visible' === document.visibilityState &&
                                (t.current++, t.current >= 2 && a.sendViews({ contextId: i, contextType: r }));
                        }, [e, i, r, a]);
                    })(v),
                    (0, u.useEffect)(() => {
                        if (!l) {
                            if (((i === eZ.INTRO || i === eZ.PREPARE) && _.slideTo(0), i === eZ.OUTRO)) {
                                var e;
                                _.slideTo(Number(null == (e = m.lines) ? void 0 : e.length));
                            }
                            null !== v && _.slideTo(v + 1);
                        }
                    }, [v, l, i, _, null == (t = m.lines) ? void 0 : t.length]),
                    null == (a = m.lines)
                        ? void 0
                        : a.map((e, t) => {
                              var a;
                              return (0, o.jsx)(
                                  eX.qr,
                                  {
                                      onClickCapture: p(e.fromSec),
                                      className: (0, c.$)(e9().line, {
                                          [e9().line_last]: t === Number(null == (a = m.lines) ? void 0 : a.length) - 1 && !l,
                                          [e9().line_active]: t === v && !l,
                                      }),
                                      ...(0, D.Am)(D.e8.player.SYNC_LYRICS_LINE),
                                      children: (0, o.jsx)(e5, { text: e.text }),
                                  },
                                  e.key,
                              );
                          })
                );
            });
            e4.displayName = 'SwiperSlide';
            let e3 = { forceToAxis: !0 },
                e7 = (0, d.PA)(() => {
                    let {
                            fullscreenPlayer: { syncLyrics: e },
                            settings: { isMobile: t },
                        } = (0, n.Pjs)(),
                        { progressPosition: a, setProgressPosition: i } = (() => {
                            var e;
                            let t = (0, n.eGp)(),
                                [a, i] = (0, u.useState)(null != (e = null == t ? void 0 : t.state.playerState.progress.value.position) ? e : 0),
                                r = (0, u.useCallback)((e) => {
                                    i(e);
                                }, []);
                            return (
                                (0, u.useEffect)(() => {
                                    let e =
                                        null == t
                                            ? void 0
                                            : t.state.playerState.progress.onChange(() => {
                                                  i(t.state.playerState.progress.value.position);
                                              });
                                    return () => {
                                        null == e || e();
                                    };
                                }, [t]),
                                { progressPosition: a, setProgressPosition: r }
                            );
                        })(),
                        { state: r } = ((e) => {
                            let { position: t } = e,
                                {
                                    fullscreenPlayer: { syncLyrics: a },
                                } = (0, n.Pjs)();
                            return {
                                state: (0, u.useMemo)(() => {
                                    let { startSec: e, endSec: i } = a;
                                    return e && e >= 3 && e - t > 0 && e - t <= 3 ? eZ.PREPARE : e && e > t ? eZ.INTRO : i && t > i ? eZ.OUTRO : eZ.PLAYING;
                                }, [t, a]),
                            };
                        })({ position: a }),
                        { scrollerClassName: l, footerClassName: s, counterClassName: d } = (0, u.useContext)(eW),
                        { state: _, handleDebouncedToggle: m, reset: p } = (0, G.F)({ delay: 3e3, throttleTimeout: 300 }),
                        { state: v, handleDebouncedToggle: y, reset: h } = (0, G.F)({ delay: 3e3, throttleTimeout: 300 }),
                        g = (0, u.useCallback)(() => {
                            v || m();
                        }, [m, v]),
                        b = (0, u.useCallback)(() => {
                            _ && p(), y();
                        }, [y, p, _]),
                        x = (0, u.useCallback)(
                            (e) => {
                                switch (e.code) {
                                    case n.Y_O.KEY_L:
                                    case n.Y_O.KEY_J:
                                    case n.Y_O.ARROW_LEFT:
                                    case n.Y_O.ARROW_RIGHT:
                                        m();
                                }
                            },
                            [m],
                        ),
                        A = (0, u.useMemo)(() => (r === eZ.PREPARE ? Math.ceil(Number(e.startSec) - a) : null), [a, r, e.startSec]),
                        f = (0, u.useMemo)(
                            () => (r === eZ.PREPARE ? (0, o.jsx)(e5, { className: e9().counterLine, text: A }) : r === eZ.INTRO ? (0, o.jsx)(eH, {}) : null),
                            [A, r],
                        );
                    return (
                        ((e) => {
                            let { onSetProgressEventChange: t } = e,
                                a = (0, n.eGp)();
                            (0, u.useEffect)(() => {
                                let e =
                                    null == a
                                        ? void 0
                                        : a.state.playerState.event.onChange((e) => {
                                              e === P.Iu.SET_PROGRESS && t();
                                          });
                                return () => {
                                    null == e || e();
                                };
                            }, [t, a]);
                        })({ onSetProgressEventChange: h }),
                        (0, u.useEffect)(
                            () => (
                                window.addEventListener('keydown', x),
                                () => {
                                    window.removeEventListener('keydown', x);
                                }
                            ),
                            [x],
                        ),
                        (0, u.useEffect)(
                            () => (
                                window.addEventListener('mousemove', g),
                                () => {
                                    window.removeEventListener('mousemove', g);
                                }
                            ),
                            [g],
                        ),
                        (0, o.jsxs)(eX.RC, {
                            className: (0, c.$)(
                                e9().root,
                                { [e9()['root_'.concat(r)]]: !v, [e9().root_withVisibleUpperLyrics]: _, [e9().root_withVisibleScrolledLyrics]: v },
                                l,
                            ),
                            modules: [e$.FJ, e$.U1],
                            slidesPerView: 'auto',
                            spaceBetween: 32,
                            direction: 'vertical',
                            mousewheel: e3,
                            freeMode: !0,
                            onScroll: b,
                            onTouchMove: t ? b : void 0,
                            allowTouchMove: t,
                            children: [
                                (0, o.jsx)(eX.qr, { className: (0, c.$)(e9().counter, d), children: f }),
                                (0, o.jsx)(e4, { setProgressPosition: i, shouldShowScrolledLyrics: v, state: r, progressPosition: a }),
                                (0, o.jsx)(eX.qr, { className: s, children: (0, o.jsx)(e1, {}) }),
                            ],
                        })
                    );
                }),
                te = (0, d.PA)((e) => {
                    let { className: t, counterClassName: a, footerClassName: i, scrollerClassName: r, contentClassName: l, loaderClassName: s } = e,
                        d = (0, u.useRef)(null),
                        sonataRuntimeState = (0, n.eGp)(),
                        {
                            sonataState: { entityMeta: _ },
                            fullscreenPlayer: { syncLyrics: m, hideSyncLyrics: p },
                        } = (0, n.Pjs)();
                    (0, u.useEffect)(() => {
                        let e = null == _ ? void 0 : _.id,
                            t = null != _ && !0 === _.hasSyncLyrics,
                            a = null != _ && !1 === _.hasSyncLyrics,
                            i = e && m.currentTrackId !== e && (t || a || !!(null == _ ? void 0 : _.hasLyrics) || 'UGC' === (null == _ ? void 0 : _.trackSource)),
                            n = getNextQueueTrackMeta(sonataRuntimeState);
                        lrclibSyncSonataStateRef = sonataRuntimeState;
                        (i && m.getData(e), m.prefetchTrack(n));
                    }, [
                        null == _ ? void 0 : _.id,
                        null == _ ? void 0 : _.hasSyncLyrics,
                        null == _ ? void 0 : _.hasLyrics,
                        null == _ ? void 0 : _.trackSource,
                        m.currentTrackId,
                        m,
                        sonataRuntimeState,
                    ]);
                    (0, u.useEffect)(() => {
                        let e = null == _ ? void 0 : _.id,
                            t = null == e ? null : String(e),
                            a = null == m.currentTrackId ? null : String(m.currentTrackId);
                        if (!t || !a || t !== a) return;
                        if (m.isLoadingForTrack(t)) return;
                        (m.isRejected || m.hasInvalidLyrics) && p();
                    }, [null == _ ? void 0 : _.id, m.currentTrackId, m.isLoading, m.isRejected, m.hasInvalidLyrics, m.lines, m, p]);
                    let v = (0, u.useMemo)(() => {
                            let e = null == _ ? void 0 : _.id,
                                t = e ? String(e) : null,
                                a =
                                    !!(null == _ ? void 0 : _.isSyncLyricsAvailable) ||
                                    !!(null == _ ? void 0 : _.isSyncLyricsAvailableWithOfflineFeature) ||
                                    !!(null == _ ? void 0 : _.hasSyncLyrics) ||
                                    !!(null == _ ? void 0 : _.hasLyrics) ||
                                    (!!t && m.hasLyricsForTrack(t));
                            if (m.isResolved) return (0, o.jsx)(e7, { key: null == m.currentTrackId ? 'sync-lyrics-no-track' : String(m.currentTrackId) });
                            if (!a && t && m.isLoadingForTrack(t)) return null;
                            if (m.isRejected || m.hasInvalidLyrics) return null;
                            return (0, o.jsx)(eH, { className: s });
                        }, [
                            null == _ ? void 0 : _.id,
                            null == _ ? void 0 : _.isSyncLyricsAvailable,
                            null == _ ? void 0 : _.isSyncLyricsAvailableWithOfflineFeature,
                            null == _ ? void 0 : _.hasSyncLyrics,
                            null == _ ? void 0 : _.hasLyrics,
                            m.currentTrackId,
                            m.lines,
                            m.isLoading,
                            m.isResolved,
                            m.isRejected,
                            m.hasInvalidLyrics,
                            s,
                            m,
                        ]),
                        y = (0, u.useMemo)(() => ({ counterClassName: a, scrollerClassName: r, footerClassName: i }), [a, i, r]);
                    return (0, o.jsx)(eW.Provider, {
                        value: y,
                        children: (0, o.jsx)('div', {
                            ref: d,
                            className: (0, c.$)(eq().root, t),
                            children: (0, o.jsx)('div', { className: (0, c.$)(eq().content, l), ...(0, D.Am)(D.e8.player.SYNC_LYRICS_CONTENT), children: v }),
                        }),
                    });
                });
            var tt = a(85433),
                ta = a(3992),
                ti = a.n(ta);
            let tn = (0, d.PA)((e) => {
                    let {
                            className: t,
                            variant: a = 'text',
                            iconSize: i,
                            iconClassName: r,
                            withRipple: l = !1,
                            size: s = 's',
                            forwardRef: d,
                            children: _,
                            color: m,
                            disabled: v = !1,
                        } = e,
                        { formatMessage: y } = (0, R.A)(),
                        {
                            fullscreenPlayer: { isPlayQueueMode: h, hidePlayQueue: g, showPlayQueue: b },
                        } = (0, n.Pjs)(),
                        x = (0, u.useCallback)(() => (h ? g() : b()), [g, h, b]),
                        { scaleAnimation: A, unscaleAnimation: f, handleAnimationEnd: C, handleClick: k } = (0, tt.C)({ shouldStartFromUnscale: h, onClick: x });
                    return (0, o.jsx)(p.$, {
                        className: (0, c.$)(ti().root, { [ti().animation_scaled]: A, [ti().animation_unscaled]: f }, t),
                        color: m,
                        onAnimationEnd: C,
                        withRipple: l,
                        variant: a,
                        size: s,
                        radius: 'xxxl',
                        'aria-label': y({ id: 'play-queue.title' }),
                        'aria-pressed': h,
                        onClick: k,
                        icon: (0, o.jsx)(F.Icon, { size: i, className: (0, c.$)(ti().icon, r, { [ti().icon_active]: h }), variant: 'playQueue' }),
                        ref: d,
                        disabled: v,
                        ...(0, D.Am)(D.e8.player.FULLSCREEN_PLAYER_QUEUE_BUTTON),
                        children: _,
                    });
                }),
                tr = (0, u.forwardRef)((e, t) => (0, o.jsx)(tn, { forwardRef: t, ...e }));
            var tl = a(24554),
                ts = a.n(tl);
            let to = (0, d.PA)((e) => {
                    let {
                            className: t,
                            variant: a = 'text',
                            iconSize: i,
                            iconClassName: r,
                            withRipple: l = !1,
                            size: s = 's',
                            forwardRef: d,
                            children: _,
                            color: m,
                            disabled: v = !1,
                        } = e,
                        { formatMessage: y } = (0, R.A)(),
                        {
                            fullscreenPlayer: { isSyncLyricsMode: h, hideSyncLyrics: g, showSyncLyrics: b },
                        } = (0, n.Pjs)(),
                        x = (0, u.useCallback)(() => (h ? g() : b()), [g, h, b]),
                        { scaleAnimation: A, unscaleAnimation: f, handleAnimationEnd: C, handleClick: k } = (0, tt.C)({ shouldStartFromUnscale: h, onClick: x }),
                        P = ''.concat(y({ id: 'interface-actions.open-sync-lyrics' }), ' ').concat(y({ id: 'warning-messages.can-break-accessibility' }));
                    return (0, o.jsx)(p.$, {
                        className: (0, c.$)(ts().root, { [ts().animation_scaled]: A, [ts().animation_unscaled]: f }, t),
                        color: m,
                        onAnimationEnd: C,
                        withRipple: l,
                        variant: a,
                        size: s,
                        radius: 'xxxl',
                        'aria-label': P,
                        'aria-pressed': h,
                        onClick: k,
                        icon: (0, o.jsx)(F.Icon, { size: i, className: (0, c.$)(ts().icon, r, { [ts().icon_active]: h }), variant: 'syncLyrics' }),
                        ref: d,
                        disabled: v,
                        ...(0, D.Am)(D.e8.player.PLAYERBAR_DESKTOP_SYNC_LYRICS_BUTTON),
                        children: _,
                    });
                }),
                tc = (0, u.forwardRef)((e, t) => (0, o.jsx)(to, { forwardRef: t, ...e }));
            var td = a(20142),
                tu = a.n(td);
                let t_ = (0, d.PA)(() => {
                    var e;
                let [t, a] = (0, u.useState)(!1),
                    {
                        sonataState: i,
                        user: r,
                        fullscreenPlayer: { syncLyrics: x },
                    } = (0, n.Pjs)(),
                    { entityMeta: l } = i,
                    { handleDebouncedToggle: s } = (0, G.F)({ delay: 1500, throttleTimeout: 300 }),
                    d = i.canSpeed && ((null == l ? void 0 : l.isNonMusic) || (null == l || null == (e = l.mainAlbum) ? void 0 : e.isNonMusic)),
                    _ = (0, I.KX)(l),
                    m = (0, u.useCallback)((e) => {
                        e.stopPropagation();
                    }, []),
                    p = (0, et.L)(() => {
                        if ((null == l || !l.isRemoved) && (null == l ? void 0 : l.isAvailable))
                            return (0, o.jsx)(T._Y, {
                                dismissSettings: { bubbles: { escapeKey: !1 } },
                                track: l,
                                open: t,
                                onOpenChange: a,
                                placement: 'left',
                                icon: (0, o.jsx)(F.Icon, { variant: 'more', size: 'm' }),
                                className: (0, c.$)(tu().menuButton, { [tu().menuButton_active]: t }),
                                wrapperClassName: tu().menuWrapper,
                                onClick: m,
                                size: 'l',
                                ...(0, D.Am)(D.e8.player.FULLSCREEN_PLAYER_CONTEXT_MENU_BUTTON),
                            });
                    }),
                    syncLyricsAvailable = (0, u.useMemo)(() => {
                        let e = null == l ? void 0 : l.id,
                            t = e ? String(e) : null;
                        return (
                            !!(null == l ? void 0 : l.isSyncLyricsAvailable) ||
                            !!(null == l ? void 0 : l.isSyncLyricsAvailableWithOfflineFeature) ||
                            !!(null == l ? void 0 : l.hasSyncLyrics) ||
                            !!(null == l ? void 0 : l.hasLyrics) ||
                            (!!t && x.hasLyricsForTrack(t))
                        );
                    }, [
                        null == l ? void 0 : l.id,
                        null == l ? void 0 : l.isSyncLyricsAvailable,
                        null == l ? void 0 : l.isSyncLyricsAvailableWithOfflineFeature,
                        null == l ? void 0 : l.hasSyncLyrics,
                        null == l ? void 0 : l.hasLyrics,
                        x.currentTrackId,
                        x.lines,
                        x.isResolved,
                    ]),
                    v = (0, u.useMemo)(() => {
                        if (syncLyricsAvailable)
                            return (0, o.jsx)(tc, {
                                className: tu().syncLyricsButton,
                                iconSize: 'm',
                                size: 'l',
                                variant: 'default',
                                color: 'secondary',
                                disabled: !r.isAuthorized,
                            });
                    }, [syncLyricsAvailable, r.isAuthorized]);
                return (
                    (0, u.useEffect)(
                        () => (
                            window.addEventListener('mousemove', s),
                            () => {
                                window.removeEventListener('mousemove', s);
                            }
                        ),
                        [s],
                    ),
                    (0, o.jsxs)('div', {
                        className: (0, c.$)(tu().root, { [tu().root_visible]: t }),
                        children: [
                            (0, o.jsx)(tr, {
                                className: tu().playQueueButton,
                                iconSize: 'm',
                                size: 'l',
                                variant: 'default',
                                color: 'secondary',
                                disabled: !r.isAuthorized,
                            }),
                            (0, o.jsx)(N.$u, { className: tu().sonataControls, isMobile: !1, entityMeta: l, isFullscreen: !0 }),
                            p,
                            v,
                            (0, o.jsxs)('div', {
                                className: tu().bottomRightButtonsWrapper,
                                children: [
                                    d && (0, o.jsx)(h.ig, { className: tu().speedButton, size: 'l', iconSize: 'm', isIconCentered: !0 }),
                                    (0, o.jsx)(h.aQ, {
                                        fallback: (0, o.jsx)(h.cy, {
                                            className: tu().likeButton,
                                            isLiked: null == l ? void 0 : l.isLiked,
                                            onClick: _,
                                            iconSize: 'm',
                                            size: 'l',
                                            variant: 'default',
                                            color: 'secondary',
                                            disabled: !r.isAuthorized,
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    })
                );
            });
            var tm = a(86269),
                tp = a(55482),
                tv = a.n(tp);
            let ty = (e) => {
                let { className: t, children: a, coverUri: i } = e;
                return (0, o.jsxs)(tm.Paper, {
                    radius: 'm',
                    className: (0, c.$)(tv().root, t),
                    ...(0, D.Am)(D.e8.player.FULLSCREEN_PLAYER_POSTER_CONTENT),
                    children: [(0, o.jsx)(h.BW, { className: tv().cover, src: i, size: 400, fit: 'cover', withAvatarReplace: !0 }), a],
                });
            };
            var th = a(61802),
                tg = a.n(th),
                tb = a(9612);
            let tx = {
                    enter: tg().additionalContent_enter,
                    enterActive: tg().additionalContent_enter_active,
                    exit: tg().additionalContent_exit,
                    exitActive: tg().additionalContent_exit_active,
                    appear: tg().additionalContent_enter,
                    appearActive: tg().additionalContent_enter_active,
                },
                tA = (e) => {
                    let { isModeActive: t, shouldDisableInsetTransition: a, children: i } = e,
                        n = (0, u.useRef)(null);
                    return (0, o.jsx)(tb.A, {
                        in: t,
                        nodeRef: n,
                        timeout: 800,
                        unmountOnExit: !0,
                        appear: !0,
                        classNames: tx,
                        children: (0, o.jsx)('div', {
                            ref: n,
                            className: (0, c.$)(tg().additionalContent, { [tg().additionalContent_withDisabledInsetTransition]: a }),
                            children: i,
                        }),
                    });
                },
                tf = (0, d.PA)(() => {
                    var e;
                    let { state: t, handleDebouncedToggle: a } = (0, G.F)({ delay: 150, throttleTimeout: 100 }),
                        {
                            sonataState: { entityMeta: i },
                            fullscreenPlayer: r,
                        } = (0, n.Pjs)(),
                        { state: l, toggleTrue: s } = (0, q.e)(!1),
                        d = (null == i ? void 0 : i.isTrackPodcast) || (null == i || null == (e = i.mainAlbum) ? void 0 : e.isPodcast),
                        _ = null == i ? void 0 : i.isTrackAudiobook,
                        m = {
                            [C.PLAY_QUEUE]: { component: (0, o.jsx)(eU, {}), isActive: r.isPlayQueueMode },
                            [C.SYNC_LYRICS]: {
                                component: (0, o.jsx)(te, {
                                    className: tg().syncLyrics,
                                    loaderClassName: tg().syncLyricsLoader,
                                    contentClassName: tg().syncLyricsContent,
                                    scrollerClassName: tg().syncLyricsScroller,
                                    counterClassName: tg().syncLyricsCounter,
                                    footerClassName: tg().syncLyricsFooter,
                                }),
                                isActive: r.isSyncLyricsMode,
                            },
                        },
                        p = (0, u.useMemo)(
                            () =>
                                i
                                    ? _
                                        ? (0, o.jsx)(T.ZS, {
                                              hasLineClamp: !1,
                                              className: (0, c.$)(tg().meta, { [tg().meta_isSplitMode]: r.isSplitMode }),
                                              titleContainerClassName: tg().title,
                                              track: i,
                                              withSecondaryColor: !0,
                                              captionSize: 'l',
                                              explicitSize: 'xs',
                                              withAuthor: !0,
                                              textClassName: (0, c.$)(tg().nonMusicAuthors, tg().ellipsis),
                                              withContextMenuArtists: !0,
                                          })
                                        : d
                                          ? (0, o.jsx)(T.wo, {
                                                className: (0, c.$)(tg().meta, { [tg().meta_isSplitMode]: r.isSplitMode }),
                                                titleContainerClassName: tg().title,
                                                track: i,
                                                withSecondaryColor: !0,
                                                withDate: !1,
                                                captionSize: 'l',
                                                explicitSize: 'xs',
                                                withPodcastName: !0,
                                                textClassName: tg().nonMusicAuthors,
                                            })
                                          : (0, o.jsx)(T.j7, {
                                                hasLineClamp: !1,
                                                className: (0, c.$)(tg().meta, { [tg().meta_isSplitMode]: r.isSplitMode }),
                                                titleContainerClassName: tg().title,
                                                track: i,
                                                withSecondaryColor: !0,
                                                withAlbumLink: !1,
                                                captionSize: 'l',
                                                explicitSize: 'xs',
                                                withAllArtistsTitle: !0,
                                                artistsClassName: tg().artists,
                                                textClassName: tg().ellipsis,
                                                withContextMenuArtists: !0,
                                            })
                                    : null,
                            [i, null == i ? void 0 : i.id, d, _, r.isSplitMode],
                        );
                    return (
                        (0, u.useEffect)(
                            () => (
                                window.addEventListener('resize', a),
                                () => {
                                    window.removeEventListener('resize', a);
                                }
                            ),
                            [a],
                        ),
                        (0, u.useEffect)(() => {
                            r.isSplitMode && s();
                        }, [r.isSplitMode, r.mode, s]),
                        (0, u.useEffect)(
                            () => () => {
                                r.reset(), r.playQueue.reset();
                            },
                            [r],
                        ),
                        (0, o.jsxs)('div', {
                            className: tg().root,
                            children: [
                                (0, o.jsxs)('div', {
                                    className: (0, c.$)(tg().fullscreenContent, {
                                        [tg().fullscreenContent_withDisabledInsetTransition]: t,
                                        [tg().fullscreenContent_enter]: r.isSplitMode,
                                        [tg().fullscreenContent_leave]: !r.isSplitMode && l,
                                    }),
                                    ...(0, D.Am)(D.e8.player.FULLSCREEN_PLAYER_FULLSCREEN_CONTENT),
                                    children: [
                                        (0, o.jsx)(ty, {
                                            className: (0, c.$)(tg().poster, tg().important),
                                            coverUri: null == i ? void 0 : i.coverUri,
                                            children: (0, o.jsx)(t_, {}),
                                        }),
                                        (0, o.jsxs)('div', {
                                            className: tg().info,
                                            children: [
                                                p,
                                                (0, o.jsx)(Q.v, {
                                                    className: tg().sliderContainer,
                                                    sliderClassName: tg().slider,
                                                    disabled: !i,
                                                    isMobile: !1,
                                                    isFullscreen: r.isSplitMode,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                Object.entries(m).map((e) => {
                                    let [a, { component: i, isActive: n }] = e;
                                    return (0, o.jsx)(tA, { isModeActive: n, shouldDisableInsetTransition: t, children: i }, a);
                                }),
                            ],
                        })
                    );
                }),
                tC = (0, d.PA)(() => {
                    let { formatMessage: e } = (0, R.A)(),
                        {
                            currentTrackInfo: { modal: t },
                            sonataState: { entityMeta: a },
                            fullscreenPlayer: i,
                            fullscreenVideoPlayer: r,
                            advert: l,
                        } = (0, n.Pjs)(),
                        s = z(a);
                    (0, u.useEffect)(() => {
                        l.isAdvertShown && i.modal.close();
                    }, [l.isAdvertShown, i.modal]);
                    let d = !t.isOpened && !r.modal.isOpened;
                    return (0, o.jsxs)(V.a, {
                        className: (0, c.$)(W().root, W().important),
                        open: i.modal.isOpened,
                        onOpenChange: d ? i.modal.onOpenChange : void 0,
                        onClose: i.modal.close,
                        size: 'fullscreen',
                        placement: 'center',
                        showHeader: !1,
                        style: s,
                        contentClassName: W().modalContent,
                        closeOnOutsidePress: !1,
                        ...(0, D.Am)(D.e8.player.FULLSCREEN_PLAYER_MODAL),
                        children: [
                            (0, o.jsx)('header', {
                                className: W().header,
                                children: (0, o.jsx)(p.$, {
                                    className: W().closeButton,
                                    radius: 'round',
                                    color: 'secondary',
                                    size: 'm',
                                    icon: (0, o.jsx)(F.Icon, { variant: 'arrowDown', size: 'xs' }),
                                    onClick: i.modal.close,
                                    'aria-label': e({ id: 'interface-actions.close' }),
                                    ...(0, D.Am)(D.e8.player.FULLSCREEN_PLAYER_CLOSE_BUTTON),
                                }),
                            }),
                            (0, o.jsx)(tf, {}),
                            (0, o.jsx)(K.Notification, {
                                className: W().notification,
                                enableMultiContainer: !0,
                                containerId: n.uQT.FULLSCREEN_INFO,
                                position: 'bottom-center',
                            }),
                            (0, o.jsx)(K.Notification, {
                                className: W().notification,
                                enableMultiContainer: !0,
                                containerId: n.uQT.FULLSCREEN_ERROR,
                                position: 'bottom-center',
                            }),
                        ],
                    });
                });
            var tk = a(22333),
                tP = a.n(tk),
                tN = a(76232),
                tj = a(19740),
                tS = a(74196),
                tE = a(97552),
                tSwitch = a(99311),
                tT = a(16172),
                tI = a(52068);
            let tw = () => {
                let e = (0, tI.st)(),
                    t = (0, n.UlF)(),
                    { hash: a } = (0, tI.gf)(),
                    { pageId: i } = (0, n.$au)();
                return (0, u.useCallback)(
                    (r, l) => {
                        if (!e || !i || !n.Wft[i] || !a) return;
                        let s = { hash: a, pageId: n.Wft[i], propertyKey: 'sound_quality', propertyValueNew: r, propertyValueOld: l },
                            o = (0, tT.Fx)({ params: s, logger: t, context: 'useSendEventOnQualitySettingsChanged' });
                        o && (0, tT.Bl)(e.evgenInstance, o);
                    },
                    [e, a, t, i],
                );
            };
            var tL = a(95114),
                tM = a.n(tL);
            let tB = (e) => {
                let { closeToast: t, onOpenQualitySettingsMenu: a, message: i, ariaLabel: n, isMobile: r } = e,
                    { formatMessage: l } = (0, R.A)(),
                    s = (0, u.useCallback)(() => {
                        a(), null == t || t();
                    }, [t, a]),
                    c = (0, u.useMemo)(
                        () =>
                            (0, o.jsxs)('div', {
                                className: tM().message,
                                children: [
                                    (0, o.jsx)(tS.q, { children: (0, o.jsx)('p', { role: 'alert', 'aria-label': n }) }),
                                    (0, o.jsx)(y.Caption, {
                                        variant: 'div',
                                        size: 'm',
                                        'aria-hidden': !0,
                                        ...(0, D.Am)(D.e8.player.NOTIFICATION_CHANGE_QUALITY_TEXT),
                                        children: i,
                                    }),
                                    !r &&
                                        (0, o.jsx)(p.$, {
                                            className: tM().changeButton,
                                            onClick: s,
                                            variant: 'text',
                                            withRipple: !1,
                                            'aria-label': l({ id: 'interface-actions.change' }),
                                            children: (0, o.jsx)(y.Caption, { variant: 'div', size: 'm', children: (0, o.jsx)(m.A, { id: 'interface-actions.change' }) }),
                                        }),
                                ],
                            }),
                        [n, l, s, i, r],
                    );
                return (0, o.jsx)(h.$W, {
                    closeToast: t,
                    cover: (0, o.jsx)(F.Icon, { className: tM().icon, size: 'xs', variant: 'settings' }),
                    message: c,
                    coverRadius: 's',
                });
            };
            var tO = a(98602),
                tR = a.n(tO);
            let tD = [
                    {
                        type: tN.e.HIGH_QUALITY,
                        text: (0, o.jsx)(m.A, { id: 'player-actions.audio-quality-maximum' }),
                        qualityMessageId: 'player-actions.audio-quality-maximum',
                    },
                    {
                        type: tN.e.BALANCED,
                        text: (0, o.jsx)(m.A, { id: 'player-actions.audio-quality-optimal' }),
                        qualityMessageId: 'player-actions.audio-quality-optimal',
                    },
                    {
                        type: tN.e.EFFICIENT,
                        text: (0, o.jsx)(m.A, { id: 'player-actions.audio-quality-economical' }),
                        qualityMessageId: 'player-actions.audio-quality-economical',
                    },
                ],
                tF = {
                    [tN.e.HIGH_QUALITY]: (0, o.jsx)(m.A, { id: 'player-actions.audio-quality-maximum-description' }),
                    [tN.e.BALANCED]: (0, o.jsx)(m.A, { id: 'player-actions.audio-quality-optimal-description' }),
                    [tN.e.EFFICIENT]: (0, o.jsx)(m.A, { id: 'player-actions.audio-quality-economical-description' }),
                },
                tV = (0, d.PA)((e) => {
                    let { onOpenChange: t, open: a, placement: i, size: r, referenceClassName: l, icon: s, referenceLabel: d, disabled: _ } = e;
                    (0, n.NBO)(a);
                    let v = (0, u.useId)(),
                        { formatMessage: y } = (0, R.A)(),
                        { notify: g } = (0, n.lkh)(),
                        b = (0, n.NFA)().get(n.ooW),
                        {
                            sonataState: x,
                            user: A,
                            settings: { isMobile: f },
                            quality: C,
                        } = (0, n.Pjs)(),
                        k = (0, tE.Sq)(),
                        P = (0, n.gQL)(),
                        N = tw(),
                        { state: j, setState: S } = (0, q.e)(!1),
                        E = (0, u.useCallback)(() => {
                            null == t || t(!0);
                        }, [t]),
                        T = (0, u.useCallback)(
                            (e) => {
                                N(e, x.quality), x.setQuality(e), null == P || P.setQuality(e), b.set(n.cYZ.YmPlayerQuality, e, { expires: 365 });
                            },
                            [P, x, b, N],
                        ),
                        I = (0, u.useCallback)(
                            (e) => {
                                let t = y({ id: e }).toLowerCase();
                                return {
                                    message: (0, o.jsx)(m.A, { id: 'notifications-info.quality-changed', values: { quality: t } }),
                                    ariaLabel: y({ id: 'notifications-info.quality-changed' }, { quality: t }),
                                };
                            },
                            [y],
                        ),
                        w = (0, u.useCallback)(
                            (e, t) => () => {
                                if (x.quality === e) return;
                                T(e);
                                let { message: a, ariaLabel: i } = I(t);
                                g((0, o.jsx)(tB, { onOpenQualitySettingsMenu: E, message: a, ariaLabel: i, isMobile: f }), { containerId: n.uQT.INFO });
                            },
                            [I, E, g, x.quality, T, f],
                        ),
                        L = (0, u.useCallback)(
                            (e) => {
                                let { selectedItemIcon: t, type: a, qualityMessageId: i, ariaSelected: n, text: r } = e;
                                return (e) => {
                                    let { isPopoverEnabled: l, popoverText: s } = e;
                                    return (0, o.jsx)(tj.Dr, {
                                        isBlock: !0,
                                        disabled: l,
                                        className: (0, c.$)(tR().item, tR().expandedItem),
                                        iconPosition: 'right',
                                        icon: t,
                                        onClick: w(a, i),
                                        role: 'option',
                                        'aria-selected': n,
                                        children: (0, o.jsxs)('span', {
                                            className: tR().itemWrapper,
                                            children: [
                                                (0, o.jsxs)('span', { className: tR().item_option, children: [r, ' ', (0, o.jsx)(tS.q, { children: s })] }),
                                                (0, o.jsx)('span', { className: (0, c.$)(tR().item_option, tR().itemSubTitle), children: tF[a] }),
                                            ],
                                        }),
                                    });
                                };
                            },
                            [w],
                        ),
                        M = !A.hasPlus,
                        B = (0, u.useMemo)(
                            () =>
                                tD.map((e) => {
                                    let { type: t, text: a, qualityMessageId: i } = e,
                                        n = t === x.quality ? (0, o.jsx)(F.Icon, { variant: 'check', size: 'xxs' }) : null,
                                        r = t === x.quality;
                                    return (0, o.jsx)(
                                        h.SU,
                                        {
                                            isNested: !0,
                                            isEnabled: M && !f,
                                            placement: 'left',
                                            textVariant: 'highQuality',
                                            renderChildren: L({ selectedItemIcon: n, type: t, qualityMessageId: i, ariaSelected: r, text: a }),
                                        },
                                        t,
                                    );
                                }),
                            [x.quality, M, f, L],
                        ),
                        O = (0, u.useMemo)(
                            () => ({
                                listClassName: (0, c.$)(tR().root, tR().root_withNewQuality, { [tR().root_withEqualizer]: k.isAvailable }),
                                menuClassName: (0, c.$)({ [tR().menuContent]: !f }),
                            }),
                            [k.isAvailable, f],
                        ),
                        V = (0, u.useMemo)(() => {
                            if (k.isAvailable && !f)
                                return (0, o.jsx)(tE.rk, { isExpanded: k.isEnabled, isDisabled: !1, className: tR().equalizer, title: y({ id: 'equalizer.title' }) }, v);
                        }, [k.isEnabled, v, y, k.isAvailable, f]),
                        K = (0, u.useCallback)(
                            (e) => {
                                let { isPopoverEnabled: n } = e;
                                if (!f)
                                    return (0, o.jsx)(p.$, {
                                        className: (0, c.$)(l, { [tR().button_active]: C.modal.isOpened }),
                                        radius: 'round',
                                        color: 'secondary',
                                        size: r,
                                        icon: s,
                                        variant: 'text',
                                        onClick: C.modal.open,
                                        'aria-label': y({ id: 'player-actions.audio-quality' }),
                                        withRipple: !1,
                                        ...(0, D.Am)(D.e8.player.SOUND_QUALITY_BUTTON),
                                    });
                                let u = n ? S : t;
                                return (0, o.jsx)(tj.W1, {
                                    wrapperClassName: l,
                                    size: r,
                                    icon: s,
                                    placement: i,
                                    open: a,
                                    onOpenChange: u,
                                    ariaLabel: y({ id: 'player-actions.audio-quality' }),
                                    footer: V,
                                    label: d,
                                    variant: 'text',
                                    ...O,
                                    containerProps: (0, D.Am)(D.e8.player.QUALITY_SETTINGS_CONTEXT_MENU),
                                    isMobile: f,
                                    lockScroll: !f,
                                    disabled: _,
                                    ...(0, D.Am)(D.e8.player.SOUND_QUALITY_BUTTON),
                                    children: B,
                                });
                            },
                            [f, S, t, l, r, s, i, a, y, V, d, O, B, C.modal.open, C.modal.isOpened, _],
                        );
                    return (0, o.jsx)(h.Zr, {
                        isEnabled: !A.isAuthorized,
                        isOpened: j,
                        onOpenChange: S,
                        placement: 'top',
                        textVariant: 'changeQuality',
                        renderChildren: K,
                    });
                }),
                tK = (0, d.PA)((e) => {
                    var t, a, i, r;
                    let { className: l, onSyncLyricsButtonClick: s } = e,
                        {
                            sonataState: d,
                            settings: { isLandscape: _ },
                            fullscreenPlayer: { isSyncLyricsMode: m },
                            user: { hasPlus: v },
                        } = (0, n.Pjs)(),
                        { formatMessage: y } = (0, R.A)(),
                        [g, b] = (0, u.useState)(!1),
                        x = (0, N.AA)(),
                        A = (0, N.e9)(),
                        f = null === d.entityMeta,
                        C = (null == (t = d.entityMeta) ? void 0 : t.isNonMusic) || (null == (i = d.entityMeta) || null == (a = i.mainAlbum) ? void 0 : a.isNonMusic),
                        k = d.canSpeed && C,
                        P = (0, Y.c)(() => {
                            A(d);
                        }),
                        j = (0, Y.c)(() => {
                            x(d);
                        }),
                        S = (0, u.useMemo)(() => {
                            var e;
                            if (C) return;
                            let t = ''.concat(y({ id: 'interface-actions.open-sync-lyrics' }), ' ').concat(y({ id: 'warning-messages.can-break-accessibility' }));
                            return (0, o.jsx)(p.$, {
                                className: (0, c.$)(tP().syncLyricsButton, { [tP().syncLyricsButton_active]: m }),
                                radius: 'round',
                                size: 'xxxs',
                                variant: 'text',
                                disabled: !(null == (e = d.entityMeta) ? void 0 : e.isSyncLyricsAvailable) || _,
                                withRipple: !1,
                                withHover: !1,
                                'aria-label': t,
                                icon: (0, o.jsx)(F.Icon, { variant: 'syncLyrics', size: 'xs' }),
                                onClick: s,
                            });
                        }, [y, C, m, s, _, null == (r = d.entityMeta) ? void 0 : r.isSyncLyricsAvailable]);
                    return (0, o.jsx)('div', {
                        className: (0, c.$)(tP().footer, l),
                        children: (0, o.jsxs)('div', {
                            className: tP().footerContainer,
                            children: [
                                (f || d.canChangeRepeatMode) && (0, o.jsx)(N.s_, { onClick: j, isDisabled: f, repeatMode: d.repeatMode, variant: 'text' }),
                                k && (0, o.jsx)(h.ig, { size: 'xxxs', iconSize: 'l' }),
                                (0, o.jsx)(tV, { open: g, onOpenChange: b, icon: (0, o.jsx)(F.Icon, { variant: 'settings', size: 'xs' }), size: 'xxxs', disabled: !v }),
                                S,
                                (f || d.canShuffle) && (0, o.jsx)(N.uP, { onClick: P, isDisabled: f, shuffle: d.shuffle, variant: 'text' }),
                            ],
                        }),
                    });
                });
            var tz = a(49582),
                tU = a.n(tz);
            let tW = {
                    enter: tU().coverWrapper_enter,
                    enterActive: tU().coverWrapper_enter_active,
                    exit: tU().coverWrapper_exit,
                    exitActive: tU().coverWrapper_exit_active,
                },
                tG = (0, d.PA)((e) => {
                    var t;
                    let { className: a } = e,
                        i = (0, u.useRef)(null),
                        [r, l] = (0, u.useState)(!1),
                        { state: s, handleDebouncedToggle: d, reset: _ } = (0, G.F)({ delay: 7e3, throttleTimeout: 0 }),
                        {
                            fullscreenPlayer: { isSplitMode: m, isSyncLyricsMode: p, showSyncLyrics: v, hideSyncLyrics: y, isPlayQueueMode: g, syncLyrics: b },
                            sonataState: { entityMeta: x },
                            settings: { isLandscape: A },
                        } = (0, n.Pjs)(),
                        f = (null == x ? void 0 : x.isTrackPodcast) || (null == x || null == (t = x.mainAlbum) ? void 0 : t.isPodcast),
                        C = null == x ? void 0 : x.isTrackAudiobook,
                        k = (s || !m || A) && !g,
                        P = (0, u.useCallback)(() => {
                            p && !A && (s ? _() : d());
                        }, [p, s, _, d, A]),
                        j = (0, u.useCallback)(() => {
                            p && !A && s && d();
                        }, [d, p, s, A]),
                        fullscreenSyncLyricsTrackId = null == x ? void 0 : x.id,
                        canOpenFullscreenSyncLyrics =
                            !!(null == x ? void 0 : x.isSyncLyricsAvailable) ||
                            !!(null == x ? void 0 : x.isSyncLyricsAvailableWithOfflineFeature) ||
                            !!(null == x ? void 0 : x.hasSyncLyrics) ||
                            !!(null == x ? void 0 : x.hasLyrics) ||
                            (!!fullscreenSyncLyricsTrackId && b.hasLyricsForTrack(fullscreenSyncLyricsTrackId)),
                        S = (0, u.useCallback)(() => {
                            return canOpenFullscreenSyncLyrics ? (p ? y() : v()) : void 0;
                        }, [canOpenFullscreenSyncLyrics, y, p, v]),
                        E = (0, u.useMemo)(() => {
                            if (x)
                                return C
                                    ? (0, o.jsx)(T.ZS, {
                                          textClassName: tU().metaText,
                                          track: x,
                                          withSecondaryColor: !0,
                                          captionSize: 'l',
                                          explicitSize: 'xs',
                                          withAuthor: !0,
                                          withContextMenuArtists: !0,
                                      })
                                    : f
                                      ? (0, o.jsx)(T.wo, {
                                            textClassName: tU().metaText,
                                            track: x,
                                            withSecondaryColor: !0,
                                            withDate: !1,
                                            captionSize: 'l',
                                            explicitSize: 'xs',
                                            withPodcastName: !0,
                                        })
                                      : (0, o.jsx)(T.j7, {
                                            textClassName: tU().metaText,
                                            track: x,
                                            withSecondaryColor: !0,
                                            withAlbumLink: !1,
                                            captionSize: 'l',
                                            explicitSize: 'xs',
                                            withAllArtistsTitle: !0,
                                            withContextMenuArtists: !0,
                                        });
                        }, [x, C, f]);
                    return (
                        (0, u.useEffect)(() => {
                            p && A && b.setInvisible();
                        }, [A, p, b]),
                        (0, u.useLayoutEffect)(() => {
                            p && !A && d();
                        }, [d, p, A]),
                        (0, o.jsxs)('div', {
                            onTouchEnd: j,
                            className: (0, c.$)(tU().root, a),
                            children: [
                                (0, o.jsx)('div', {
                                    className: tU().content,
                                    children: (0, o.jsxs)('div', {
                                        className: tU().wrapper,
                                        children: [
                                            (0, o.jsxs)('div', {
                                                className: (0, c.$)(tU().infoBlock, { [tU().infoBlock_withExpandedSyncLyrics]: !s && p && !A }),
                                                children: [
                                                    (0, o.jsxs)('div', {
                                                        onClick: P,
                                                        className: (0, c.$)(tU().contentContainer, { [tU().contentContainer_withSplitMode]: m }),
                                                        children: [
                                                            p &&
                                                                !A &&
                                                                (0, o.jsx)(te, {
                                                                    className: tU().syncLyrics,
                                                                    scrollerClassName: tU().syncLyricsScroller,
                                                                    contentClassName: tU().syncLyricsContent,
                                                                    loaderClassName: tU().syncLyricsLoader,
                                                                    footerClassName: tU().syncLyricsFooter,
                                                                    counterClassName: tU().syncLyricsCounter,
                                                                }),
                                                            g && (0, o.jsx)(eU, {}),
                                                            (0, o.jsx)(tb.A, {
                                                                in: !m || (A && p),
                                                                nodeRef: i,
                                                                timeout: 200,
                                                                unmountOnExit: !0,
                                                                classNames: tW,
                                                                children: (0, o.jsx)(tm.Paper, {
                                                                    ref: i,
                                                                    radius: 'm',
                                                                    className: tU().coverWrapper,
                                                                    children: (0, o.jsx)(h.BW, {
                                                                        className: tU().cover,
                                                                        src: null == x ? void 0 : x.coverUri,
                                                                        size: 400,
                                                                        fit: 'cover',
                                                                        withAvatarReplace: !0,
                                                                    }),
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                                    !g &&
                                                        (0, o.jsxs)('div', {
                                                            className: tU().trackInfo,
                                                            children: [
                                                                !s &&
                                                                    p &&
                                                                    !A &&
                                                                    (0, o.jsx)(tm.Paper, {
                                                                        className: tU().trackInfoCoverContainer,
                                                                        radius: 'xs',
                                                                        children: (0, o.jsx)(h.BW, {
                                                                            className: tU().trackInfoCover,
                                                                            src: null == x ? void 0 : x.coverUri,
                                                                            size: 200,
                                                                            fit: 'cover',
                                                                            withAvatarReplace: !0,
                                                                        }),
                                                                    }),
                                                                (0, o.jsxs)('div', {
                                                                    className: tU().metaContainer,
                                                                    children: [
                                                                        E,
                                                                        !(null == x ? void 0 : x.isRemoved) &&
                                                                            (null == x ? void 0 : x.isAvailable) &&
                                                                            (0, o.jsx)(T._Y, {
                                                                                className: (0, c.$)(tU().contextMenu, { [tU().contextMenu_visible]: r }),
                                                                                track: x,
                                                                                open: r,
                                                                                onOpenChange: l,
                                                                                placement: 'bottom',
                                                                                isFullscreenMobile: !0,
                                                                                size: 'xs',
                                                                                icon: (0, o.jsx)(F.Icon, { variant: 'more', size: 'xxs' }),
                                                                                ...(0, D.Am)(D.e8.player.MOBILE_FULLSCREEN_PLAYER_CONTEXT_MENU_BUTTON),
                                                                            }),
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                ],
                                            }),
                                            k && (0, o.jsx)(Q.v, { className: tU().timeline, disabled: !x, isMobile: !0, isFullscreen: !0, showThumbVariant: 'always' }),
                                            k && (0, o.jsx)(N.$u, { className: tU().buttonsBlock, isMobile: !0, entityMeta: x, isFullscreen: !0 }),
                                        ],
                                    }),
                                }),
                                k && (0, o.jsx)(tK, { onSyncLyricsButtonClick: S }),
                            ],
                        })
                    );
                });
            var tq = a(51776),
                tQ = a.n(tq);
            let tY = (0, d.PA)((e) => {
                    let { children: t, className: a } = e,
                        { url: i, title: r, subTitle: l } = ex(),
                        { fullscreenPlayer: s } = (0, n.Pjs)(),
                        d = (0, Y.c)((e) => {
                            e.stopPropagation(), s.modal.isOpened && s.modal.close();
                        }),
                        _ = (0, u.useMemo)(() => {
                            let e = (0, o.jsx)(y.Caption, {
                                variant: 'span',
                                size: 'm',
                                className: tQ().title,
                                lineClamp: 1,
                                ...(0, D.Am)(D.e8.player.MOBILE_PLAY_QUEUE_NOW_PLAYING_BLOCK_TITLE),
                                children: r,
                            });
                            return i ? (0, o.jsx)(h.N_, { href: i, target: '_self', onClick: d, className: tQ().link, children: e }) : e;
                        }, [d, r, i]);
                    return (0, o.jsxs)('div', {
                        className: (0, c.$)(tQ().root, a),
                        ...(0, D.Am)(D.e8.player.MOBILE_PLAY_QUEUE_NOW_PLAYING_BLOCK),
                        children: [
                            (0, o.jsxs)('div', {
                                className: tQ().textBlock,
                                children: [
                                    (0, o.jsx)(y.Caption, {
                                        variant: 'span',
                                        size: 's',
                                        weight: 'normal',
                                        className: tQ().subTitle,
                                        ...(0, D.Am)(D.e8.player.MOBILE_PLAY_QUEUE_NOW_PLAYING_BLOCK_SUBTITLE),
                                        children: l,
                                    }),
                                    _,
                                ],
                            }),
                            t,
                        ],
                    });
                }),
                tH = (0, d.PA)(() => {
                    let { formatMessage: e } = (0, R.A)(),
                        {
                            fullscreenPlayer: { modal: t, showPlayQueue: a, isPlayQueueMode: i, hidePlayQueue: r },
                            user: l,
                        } = (0, n.Pjs)(),
                        s = (0, u.useCallback)(() => (i ? r() : a()), [r, i, a]);
                    return (0, o.jsxs)('header', {
                        className: tP().header,
                        children: [
                            (0, o.jsx)(p.$, {
                                radius: 'round',
                                color: 'secondary',
                                size: 's',
                                variant: 'text',
                                icon: (0, o.jsx)(F.Icon, { variant: 'arrowDown', size: 'xs' }),
                                onClick: t.close,
                                'aria-label': e({ id: 'interface-actions.close' }),
                                ...(0, D.Am)(D.e8.player.MOBILE_FULLSCREEN_PLAYER_CLOSE_BUTTON),
                            }),
                            (0, o.jsx)(tY, {
                                className: tP().headerCenter,
                                children: (0, o.jsx)(h.hj, {
                                    title: e({ id: 'player-actions.cast' }),
                                    description: e({ id: 'future-feature.message' }),
                                    children: (0, o.jsx)(p.$, {
                                        className: tP().castButton,
                                        radius: 'round',
                                        size: 's',
                                        variant: 'text',
                                        disabled: !0,
                                        withRipple: !1,
                                        'aria-label': e({ id: 'player-actions.cast' }),
                                        icon: (0, o.jsx)(F.Icon, { variant: 'cast', size: 'xs' }),
                                    }),
                                }),
                            }),
                            (0, o.jsx)(p.$, {
                                className: (0, c.$)(tP().playQueueButton, { [tP().playQueueButton_active]: i }),
                                radius: 'round',
                                size: 's',
                                variant: 'text',
                                withRipple: !1,
                                withHover: !1,
                                'aria-label': e({ id: 'play-queue.title' }),
                                onClick: s,
                                icon: (0, o.jsx)(F.Icon, { variant: 'playQueue', size: 'xs' }),
                                disabled: !l.isAuthorized,
                                ...(0, D.Am)(D.e8.player.MOBILE_FULLSCREEN_PLAYER_QUEUE_BUTTON),
                            }),
                        ],
                    });
                }),
                t$ = (0, d.PA)(() => {
                    let {
                            sonataState: { entityMeta: e },
                            fullscreenPlayer: t,
                            advert: a,
                            settings: { isMobile: i },
                        } = (0, n.Pjs)(),
                        r = z(e);
                    return (
                        (0, u.useEffect)(() => {
                            a.isAdvertShown && t.modal.close();
                        }, [a.isAdvertShown, t.modal]),
                        (0, o.jsxs)(V.a, {
                            className: (0, c.$)(tP().root, tP().important),
                            open: t.modal.isOpened,
                            onOpenChange: t.modal.onOpenChange,
                            size: 'fullscreen',
                            placement: 'center',
                            showHeader: !1,
                            style: r,
                            contentClassName: tP().modalContent,
                            lockScroll: i,
                            ...(0, D.Am)(D.e8.player.MOBILE_FULLSCREEN_PLAYER_MODAL),
                            children: [
                                (0, o.jsx)(tH, {}),
                                (0, o.jsx)(tG, {}),
                                (0, o.jsx)(K.Notification, {
                                    className: tP().notification,
                                    enableMultiContainer: !0,
                                    containerId: n.uQT.FULLSCREEN_INFO,
                                    position: 'bottom-center',
                                }),
                                (0, o.jsx)(K.Notification, {
                                    className: tP().notification,
                                    enableMultiContainer: !0,
                                    containerId: n.uQT.FULLSCREEN_ERROR,
                                    position: 'bottom-center',
                                }),
                            ],
                        })
                    );
                }),
                tX = (0, d.PA)(() => {
                    let {
                            settings: { isMobileLandscapeHeight: e, layout: t },
                        } = (0, n.Pjs)(),
                        a = t === n.u40.Mobile;
                    return (!a && e) || a ? (0, o.jsx)(t$, {}) : (0, o.jsx)(tC, {});
                });
            var tZ = a(2930),
                tJ = a(96416);
            let t0 = () => {
                var e, t;
                let { sonataState: a } = (0, n.Pjs)(),
                    i = (0, I.KX)(a.entityMeta),
                    r = (0, I.mW)(a.entityMeta),
                    { isGenerativeLiked: l, isGenerativeDisliked: s, onGenerativeLikeClick: o, onGenerativeDislikeClick: c } = (0, tJ.nD)();
                return a.isGenerativeContext
                    ? { isLiked: l, isDisliked: s, handleLike: o, handleDislike: c }
                    : {
                          isLiked: null == (e = a.entityMeta) ? void 0 : e.isLiked,
                          isDisliked: null == (t = a.entityMeta) ? void 0 : t.isDisliked,
                          handleLike: i,
                          handleDislike: r,
                      };
            };
            var t1 = a(88386),
                t2 = a.n(t1);
            let t8 = (0, d.PA)((e) => {
                    let { advertData: t } = e,
                        {
                            settings: { isMobile: a },
                        } = (0, n.Pjs)(),
                        { formatMessage: i } = (0, R.A)(),
                        r = !!t.advertiserInfoUrl || !!t.clientLegalInfo,
                        l = (0, u.useCallback)(() => {
                            window.open(t.advertiserInfoUrl, '_blank', 'noreferrer noopener');
                        }, [t.advertiserInfoUrl]);
                    return r
                        ? (0, o.jsxs)(tj.W1, {
                              className: t2().contextMenuButton,
                              size: 'xxs',
                              icon: (0, o.jsx)(F.Icon, { size: 'xxs', variant: 'more', className: t2().contextMenuIcon }),
                              isMobile: a,
                              ariaLabel: i({ id: 'interface-actions.context-menu' }),
                              children: [
                                  t.clientLegalInfo &&
                                      (0, o.jsx)(y.Caption, { variant: 'div', size: 's', className: t2().contextMenuHeader, children: t.clientLegalInfo }),
                                  t.advertiserInfoUrl &&
                                      (0, o.jsx)(tj.Dr, {
                                          onClick: l,
                                          icon: (0, o.jsx)(F.Icon, { variant: 'info', size: 'xxs' }),
                                          children: (0, o.jsx)(m.A, { id: 'ads.about-advertiser' }),
                                      }),
                              ],
                          })
                        : null;
                }),
                t5 = (0, d.PA)((e) => {
                    var t, a, i;
                    let { className: r } = e,
                        { advert: l } = (0, n.Pjs)();
                    return l.isAdvertDisabled(n.fDi.AUDIO) || !(l.data && l.isAudioAdvert)
                        ? null
                        : (0, o.jsx)('div', {
                              className: r,
                              children: (0, o.jsx)(x, {
                                  data: l.data,
                                  mediaContent: (0, o.jsxs)('div', {
                                      className: t2().imageContainer,
                                      children: [
                                          (0, o.jsx)(v.Image, {
                                              className: (0, c.$)(t2().image, { [t2().image_fallback]: !(null == (t = l.data) ? void 0 : t.iconSrc) }),
                                              'aria-hidden': !0,
                                              fit: 'cover',
                                              src: null == (a = l.data) ? void 0 : a.iconSrc,
                                              fallbackIconVariant: 'picture',
                                              alt: '',
                                          }),
                                          (0, o.jsx)(v.Image, {
                                              className: t2().backgroundImage,
                                              'aria-hidden': !0,
                                              fit: 'cover',
                                              src: null == (i = l.data) ? void 0 : i.iconSrc,
                                              fallbackIconVariant: 'picture',
                                              alt: '',
                                          }),
                                          (0, o.jsx)(t8, { advertData: l.data }),
                                      ],
                                  }),
                                  linkClassName: t2().linkButton,
                              }),
                          });
                });
            var t6 = a(19267),
                t9 = a.n(t6);
            let t4 = (0, d.PA)(() => {
                let {
                        settings: { isMobile: e },
                        sonataState: t,
                        user: a,
                        quality: i,
                    } = (0, n.Pjs)(),
                    r = (0, tE.Sq)(),
                    { contentRootRef: l } = (0, n.gKY)(),
                    { formatMessage: s } = (0, R.A)(),
                    d = (0, n.NFA)(),
                    { notify: _ } = (0, n.lkh)(),
                    v = (0, u.useId)(),
                    g = (0, n.gQL)(),
                    b = d.get(n.ooW),
                    x = tw(),
                    A = (0, u.useCallback)(
                        (e) => {
                            x(e, t.quality), t.setQuality(e), null == g || g.setQuality(e), b.set(n.cYZ.YmPlayerQuality, e, { expires: 365 });
                        },
                        [g, t, b, x],
                    ),
                    f = (0, u.useCallback)(
                        (e) => {
                            let t = s({ id: e }).toLowerCase();
                            return {
                                message: (0, o.jsx)(m.A, { id: 'notifications-info.quality-changed', values: { quality: t } }),
                                ariaLabel: s({ id: 'notifications-info.quality-changed' }, { quality: t }),
                            };
                        },
                        [s],
                    ),
                    C = (0, u.useCallback)(
                        (e, a) => () => {
                            if (t.quality === e) return;
                            i.modal.close(), A(e);
                            let { message: r, ariaLabel: l } = f(a);
                            _((0, o.jsx)(tB, { onOpenQualitySettingsMenu: i.modal.open, message: r, ariaLabel: l }), { containerId: n.uQT.INFO });
                        },
                        [f, _, t.quality, A, i.modal],
                    ),
                    k = (0, Y.c)((e) => {
                        switch (e) {
                            case tN.e.HIGH_QUALITY:
                                return D.e8.player.QUALITY_SETTINGS_CONTEXT_MENU_ITEM_HIGH_QUALITY;
                            case tN.e.BALANCED:
                                return D.e8.player.QUALITY_SETTINGS_CONTEXT_MENU_ITEM_BALANCED;
                            default:
                                return D.e8.player.QUALITY_SETTINGS_CONTEXT_MENU_ITEM_EFFICIENT;
                        }
                    }),
                    P = (0, u.useCallback)(
                        (e) => {
                            let { selectedItemIcon: t, type: a, qualityMessageId: i, ariaSelected: n, text: r } = e;
                            return (e) => {
                                let { isPopoverEnabled: l, popoverText: s } = e;
                                return (0, o.jsx)(
                                    p.$,
                                    {
                                        isBlock: !0,
                                        disabled: l,
                                        className: (0, c.$)(tR().item, t9().button, tR().expandedItem),
                                        iconPosition: 'right',
                                        icon: t,
                                        onClick: C(a, i),
                                        role: 'option',
                                        'aria-selected': n,
                                        variant: 'text',
                                        ...(0, D.Am)(k(a)),
                                        children: (0, o.jsxs)('span', {
                                            className: tR().itemWrapper,
                                            children: [
                                                (0, o.jsxs)('span', { className: tR().item_option, children: [r, ' ', (0, o.jsx)(tS.q, { children: s })] }),
                                                (0, o.jsx)('span', { className: (0, c.$)(tR().item_option, tR().itemSubTitle), children: tF[a] }),
                                            ],
                                        }),
                                    },
                                    a,
                                );
                            };
                        },
                        [C, k],
                    );
                (0, u.useEffect)(
                    () => () => {
                        i.modal.close();
                    },
                    [i.modal],
                );
                (0, u.useEffect)(() => {
                    i.modal.isOpened && setR128Enabled(window.nativeSettings.get('modSettings.r128Normalization') ?? !0);
                }, [i.modal.isOpened]);
                let r128Audio = 'function' == typeof n.iIU ? (0, n.iIU)() : null,
                    [r128Enabled, setR128Enabled] = (0, u.useState)(() => window.nativeSettings.get('modSettings.r128Normalization') ?? !0),
                    onR128NormalizationToggle = (0, u.useCallback)(
                        (e) => {
                            var a, i, r, l, o;
                            let s = 'boolean' == typeof e ? e : !(window.nativeSettings.get('modSettings.r128Normalization') ?? !0);
                            setR128Enabled(s), window.nativeSettings.set('modSettings.r128Normalization', s);
                            let d = null == (a = t.state) || null == (i = a.queueState) || null == (r = i.currentEntity) || null == (l = r.value) ? void 0 : l.entity,
                                c = null == d || null == (o = d.data) ? void 0 : o.meta.r128;
                            null == r128Audio ||
                                null == r128Audio.graphs ||
                                r128Audio.graphs.forEach((e) => {
                                    e.setR128Gain(c, s);
                                });
                        },
                        [t.state, r128Audio],
                    ),
                    N = !a.hasPlus,
                    j = (0, u.useMemo)(
                        () =>
                            tD.map((a) => {
                                let { type: i, text: n, qualityMessageId: r } = a,
                                    l = i === t.quality ? (0, o.jsx)(F.Icon, { variant: 'check', size: 'xxs' }) : null,
                                    s = i === t.quality;
                                return (0, o.jsx)(
                                    h.SU,
                                    {
                                        isNested: !0,
                                        isEnabled: N && !e,
                                        placement: 'left',
                                        textVariant: 'highQuality',
                                        renderChildren: P({ selectedItemIcon: l, type: i, qualityMessageId: r, ariaSelected: s, text: n }),
                                    },
                                    i,
                                );
                            }),
                        [t.quality, N, e, P],
                    ),
                    S = (0, u.useMemo)(() => {
                        if (r.isAvailable && !e)
                            return (0, o.jsx)(
                                tE.rk,
                                {
                                    isExpanded: r.isEnabled,
                                    isDisabled: !1,
                                    className: (0, c.$)(tR().equalizer, tR().equalizer_withNewQuality),
                                    title: s({ id: 'equalizer.title' }),
                                },
                                v,
                            );
                    }, [v, s, e, r.isEnabled, r.isAvailable]);
                let X = (0, u.useMemo)(() => {
                    if (e || !r.isAvailable) return null;
                    return (0, o.jsxs)('div', {
                        className: tR().equalizer,
                        style: { display: 'flex', 'align-items': 'center', 'justify-content': 'space-between', gap: '0.5rem' },
                        children: [
                            (0, o.jsx)(y.Caption, {
                                className: tR().item_option,
                                style: {
                                    width: 'unset',
                                },
                                variant: 'span',
                                size: 'l',
                                weight: 'medium',
                                children: 'Нормализация громкости',
                            }),
                            (0, o.jsx)(tSwitch.l, {
                                isChecked: r128Enabled,
                                onChange: onR128NormalizationToggle,
                                'aria-label': 'Нормализация громкости',
                            }),
                        ],
                    });
                }, [e, r.isAvailable, r128Enabled, onR128NormalizationToggle]);
                return (0, o.jsxs)(V.a, {
                    size: 'fitContent',
                    placement: e ? 'default' : 'right',
                    open: i.modal.isOpened,
                    onOpenChange: i.modal.onOpenChange,
                    onClose: i.modal.close,
                    className: t9().root,
                    contentClassName: t9().modalContent,
                    portalNode: e ? null : l,
                    showHeader: !1,
                    overlayClassName: t9().overlay,
                    containerProps: (0, D.Am)(D.e8.player.QUALITY_SETTINGS_CONTEXT_MENU),
                    children: [
                        !e &&
                            (0, o.jsxs)(y.Heading, {
                                className: (0, c.$)(tR().header, tR().headerWithCloseButton),
                                variant: 'h4',
                                size: 'xs',
                                weight: 'bold',
                                children: [
                                    (0, o.jsx)(m.A, { id: 'player-actions.audio-quality' }),
                                    (0, o.jsx)(p.$, {
                                        radius: 'round',
                                        color: 'secondary',
                                        size: 'xxs',
                                        icon: (0, o.jsx)(F.Icon, { variant: 'close', size: 'xxs' }),
                                        onClick: i.modal.close,
                                        'aria-label': s({ id: 'interface-actions.close-quality-settings' }),
                                    }),
                                ],
                        }),
                        j,
                        X,
                        S,
                    ],
                });
            });
            var t3 = a(42498),
                t7 = a.n(t3),
                ae = a(70280),
                at = a(95897);
            let aa = 'player-region';
            var ai = a(99622),
                an = a.n(ai);
            let ar = (e) => {
                    let { className: t, ariaLabel: a, onClick: i, forwardRef: n } = e;
                    return (0, o.jsx)('div', {
                        ref: n,
                        className: (0, c.$)(an().root, t),
                        children: (0, o.jsx)(p.$, {
                            className: an().button,
                            radius: 'round',
                            size: 's',
                            color: 'secondary',
                            withRipple: !1,
                            'aria-label': a,
                            icon: (0, o.jsx)(F.Icon, { variant: 'fullscreen', size: 'xs' }),
                            onClick: i,
                            ...(0, D.Am)(D.e8.player.FULLSCREEN_PLAYER_BUTTON),
                        }),
                    });
                },
                al = (0, u.forwardRef)((e, t) => (0, o.jsx)(ar, { forwardRef: t, ...e }));
            var as = a(55165),
                ao = a.n(as);
            let ac = (0, d.PA)((e) => {
                var t;
                let [, forcePlayerBarRerender] = (0, u.useReducer)((e) => e + 1, 0);
                window.forcePlayerBarRerender = forcePlayerBarRerender;
                let { className: a, entityMeta: i, isLiked: r, isDisliked: l, onLikeClick: s, onDislikeClick: d } = e,
                    {
                        user: _,
                        sonataState: v,
                        fullscreenPlayer: g,
                        settings: { isMobileLandscapeHeight: b },
                        advert: x,
                        track: A,
                        experiments: f,
                    } = (0, n.Pjs)(),
                    [C, k] = (0, u.useState)(!1),
                    [P, j] = (0, u.useState)(!1),
                    [downloadProgress, setDownloadProgress] = (0, u.useState)(0),
                    { formatMessage: S } = (0, R.A)(),
                    E = !v.isGenerativeContext,
                    I = v.canSpeed && (null == i ? void 0 : i.isNonMusic),
                    w = (null == i ? void 0 : i.isTrackPodcast) || (null == i || null == (t = i.mainAlbum) ? void 0 : t.isPodcast),
                    L = null == i ? void 0 : i.isTrackAudiobook,
                    M = (0, N.d0)(),
                    B = z(i),
                    O = (0, Y.c)(() => {
                        A.open({ trackId: null == i ? void 0 : i.id, albumId: null == i ? void 0 : i.albumId });
                    }),
                    V = (0, Y.c)((e) => {
                        e.stopPropagation();
                    }),
                    K = (0, Y.c)(async (e) => {
                        await M(v, e);
                    }),
                    trackDownloadName = (0, u.useMemo)(() => {
                        let e = (i?.artists ?? []).map((e) => e.name).filter(Boolean).join(', ');
                        return [e, i?.title].filter(Boolean).join(' — ');
                    }, [i]),
                    onDownloadClick = (0, u.useCallback)(() => {
                        (null == i ? void 0 : i.id) && window.desktopEvents?.send(n.EE.DOWNLOAD_TRACK, i.id, trackDownloadName);
                    }, [i, trackDownloadName]),
                    U = (0, Y.c)((e) => {
                        let t = e.target,
                            a = t instanceof Element && ['DIV', 'SECTION', 'SPAN'].includes(t.tagName);
                        i && E && a && !x.isAdvertShown && g.showFullscreenPlayerModal();
                    }),
                    W = (0, Y.c)((e) => {
                        if (!v.isGenerativeContext && i) {
                            if (((0, eo.P)(e, ao().ripple), 2 === e.detail)) {
                                A.close(), U(e);
                                return;
                            }
                            1 === e.detail && (null == i ? void 0 : i.hasTrackLink) && !g.modal.isOpened && O();
                        }
                    }),
                    syncLyricsAvailable = (0, u.useMemo)(() => {
                        let e = null == i ? void 0 : i.id,
                            t = e ? String(e) : null;
                        return (
                            !!(null == i ? void 0 : i.isSyncLyricsAvailable) ||
                            !!(null == i ? void 0 : i.isSyncLyricsAvailableWithOfflineFeature) ||
                            !!(null == i ? void 0 : i.hasSyncLyrics) ||
                            !!(null == i ? void 0 : i.hasLyrics) ||
                            (!!t && g.syncLyrics.hasLyricsForTrack(t))
                        );
                    }, [
                        null == i ? void 0 : i.id,
                        null == i ? void 0 : i.isSyncLyricsAvailable,
                        null == i ? void 0 : i.isSyncLyricsAvailableWithOfflineFeature,
                        null == i ? void 0 : i.hasSyncLyrics,
                        null == i ? void 0 : i.hasLyrics,
                        g.syncLyrics.currentTrackId,
                        g.syncLyrics.lines,
                        g.syncLyrics.isResolved,
                    ]),
                    G = (0, u.useCallback)(
                        (e) => {
                            let { isPopoverEnabled: t } = e,
                                a = ''.concat(S({ id: 'interface-actions.open-sync-lyrics' }), ' ').concat(S({ id: 'warning-messages.can-break-accessibility' })),
                                n = t ? void 0 : g.showSyncLyrics;
                            return (0, o.jsx)(p.$, {
                                radius: 'round',
                                size: 'xxxs',
                                variant: 'text',
                                disabled: !syncLyricsAvailable || b,
                                'aria-hidden': !syncLyricsAvailable,
                                withRipple: !1,
                                'aria-label': a,
                                icon: (0, o.jsx)(F.Icon, { variant: 'syncLyrics', size: 'xs' }),
                                onClick: n,
                                ...(0, D.Am)(D.e8.player.PLAYERBAR_DESKTOP_SYNC_LYRICS_BUTTON),
                            });
                        },
                        [S, g.showSyncLyrics, syncLyricsAvailable, b],
                    ),
                    q = (0, u.useMemo)(
                        () =>
                            (null == i ? void 0 : i.isNonMusic) || x.isAdvertShown
                                ? null
                                : _.isAuthorized && !_.hasPlus
                                  ? (0, o.jsx)(h.SU, { placement: 'top', textVariant: 'sync-lyrics', renderChildren: G })
                                  : (0, o.jsx)(h.Zr, { isEnabled: !_.isAuthorized, placement: 'top', textVariant: 'sync-lyrics', renderChildren: G }),
                        [null == i ? void 0 : i.isNonMusic, x.isAdvertShown, _.isAuthorized, G, _.hasPlus],
                    ),
                    H = (0, u.useCallback)(
                        (e) => {
                            let { isPopoverEnabled: t } = e,
                                a = t ? void 0 : g.showPlayQueue;
                            return (0, o.jsx)(p.$, {
                                radius: 'round',
                                size: 'xxxs',
                                variant: 'text',
                                disabled: !i,
                                withRipple: !1,
                                'aria-label': S({ id: 'play-queue.title' }),
                                icon: (0, o.jsx)(F.Icon, { variant: 'playQueue', size: 'xs' }),
                                onClick: a,
                                ...(0, D.Am)(D.e8.player.PLAYERBAR_DESKTOP_PLAY_QUEUE_BUTTON),
                            });
                        },
                        [i, g.showPlayQueue, S],
                    ),
                    $ = (0, u.useMemo)(
                        () => (x.isAdvertShown ? null : (0, o.jsx)(h.Zr, { isEnabled: !_.isAuthorized, placement: 'top', textVariant: 'openQueue', renderChildren: H })),
                        [x.isAdvertShown, _.isAuthorized, H],
                    ),
                    X = (0, u.useMemo)(() => {
                        if (i && !v.isGenerativeContext && !x.isAdvertShown)
                            return (0, o.jsx)('div', {
                                onDoubleClick: V,
                                children: (0, o.jsx)(T._Y, {
                                    track: i,
                                    placement: 'top',
                                    className: ao().trackContextMenuIcon,
                                    open: C,
                                    onOpenChange: k,
                                    icon: (0, o.jsx)(F.Icon, { size: 'xxs', variant: 'more' }),
                                    size: 'xs',
                                    ...(0, D.Am)(D.e8.player.PLAYERBAR_DESKTOP_CONTEXT_MENU_BUTTON),
                                }),
                            });
                    }, [x.isAdvertShown, i, V, C, v.isGenerativeContext]),
                    Z = (0, u.useMemo)(
                        () =>
                            i
                                ? L
                                    ? (0, o.jsx)(T.ZS, {
                                          afterTitle: X,
                                          explicitSize: 'xxxs',
                                          track: i,
                                          withAuthor: !0,
                                          withSecondaryColor: !0,
                                          withContextMenuArtists: !0,
                                      })
                                    : w
                                      ? (0, o.jsx)(T.wo, { afterTitle: X, explicitSize: 'xxxs', track: i, withDate: !1, withSecondaryColor: !0, withPodcastName: !0 })
                                      : (0, o.jsx)(T.j7, {
                                            afterTitle: X,
                                            track: i,
                                            withSecondaryColor: !0,
                                            withAlbumLink: !1,
                                            withTrackLink: !v.isGenerativeContext,
                                            withContextMenuArtists: !0,
                                        })
                                : null,
                        [X, i, L, w, v.isGenerativeContext],
                    );
                const qualityMap = {
                    lq: 'LQ',
                    nq: 'NQ',
                    hq: 'HQ',
                    lossless: 'HQ+',
                };
                const codecMap = {
                    mp3: 'MP3',
                    'he-aac': 'HE-AAC',
                    aac: 'AAC',
                    flac: 'FLAC',
                    'aac-mp4': 'AAC',
                    'he-aac-mp4': 'HE-AAC',
                    'flac-mp4': 'FLAC',
                };
                let theState = (0, n.eGp)();
                let [downloadInfo, setDownloadInfo] = (0, u.useState)(theState?.state?.queueState?.currentEntity?.value?.entity?.mediaSourceData?.data);
                let [realBitrate, setRealBitrate] = (0, u.useState)(null);
                let syncLyricsPrefetchHook =
                    ((0, u.useEffect)(() => {
                        let e = null == i ? void 0 : i.id,
                            t = null != i && !1 === i.hasSyncLyrics,
                            a = null != i && !0 === i.hasSyncLyrics,
                            n = null == i ? void 0 : i.trackSource,
                            r = e && g.syncLyrics.currentTrackId !== e && (t || a || !!(null == i ? void 0 : i.hasLyrics) || 'UGC' === n),
                            l = getNextQueueTrackMeta(theState);
                        lrclibSyncSonataStateRef = theState;
                        (r && g.syncLyrics.getData(e), g.syncLyrics.prefetchTrack(l));
                    }, [
                        null == i ? void 0 : i.id,
                        null == i ? void 0 : i.hasSyncLyrics,
                        null == i ? void 0 : i.hasLyrics,
                        null == i ? void 0 : i.trackSource,
                        g.syncLyrics,
                        theState,
                    ]),
                    null);

                const updateRealBitrate = (0, u.useCallback)(() => {
                    const instance = window?.Ya?.YaspAudioElement?.instances?.find((instance) => instance.yaspSrc);
                    if (!instance) {
                        // Dirty workaround
                        setTimeout(updateRealBitrate, 1000);
                        return console.debug('YaspAudioElement not found, retrying...');
                    }

                    setTimeout(() => {
                        // Dirty workaround
                        instance.yaspRequestDebugInfo().then((info) => {
                            const tracks = info.sources.find((src) => src.attached)?.abr?.abrDecisionsLog?.tracks;

                            if (!tracks) return;
                            let bitrate = Math.round((Object.values(tracks)?.[0]?.bitrate ?? 0) / 1000);

                            setRealBitrate(bitrate);
                            console.debug('Bitrate Updated:', bitrate);
                        });
                    }, 100);
                }, [setRealBitrate]);
                updateRealBitrate();
                (0, u.useEffect)(() => {
                    let e = (e, t, a) => {
                        'trackDownloadCurrent' === t && setDownloadProgress(a);
                    };
                    return (
                        window.desktopEvents?.on?.(n.EE.PROGRESS_BAR_CHANGE, e),
                        () => {
                            window.desktopEvents?.off?.(n.EE.PROGRESS_BAR_CHANGE, e);
                        }
                    );
                }, []);
                let J =
                    ((f.checkExperiment(n.zal.WebNextNewWaveTab, 'on') || f.checkExperiment(n.zal.WebNextNewWaveTab, 'on1')) &&
                        f.checkExperiment(n.zal.WebNextNewWaveTabRedesign, 'on')) ||
                    window.CHANGE_DISLIKE_BUTTON_POS?.();
                return (
                    (0, u.useEffect)(() => {
                        let intervalId;

                        const unsubscribe = theState.state.queueState.currentEntity.onChange(() => {
                            const data = theState?.state?.queueState?.currentEntity?.value?.entity?.mediaSourceData?.data;

                            const dataString = JSON.stringify(data);
                            const downloadInfoString = JSON.stringify(downloadInfo);

                            if (dataString !== downloadInfoString) {
                                if (data === undefined) {
                                    let retries = 5;
                                    intervalId = setInterval(() => {
                                        const rerequestedData = theState?.state?.queueState?.currentEntity?.value?.entity?.mediaSourceData?.data;
                                        if (retries <= 0 || rerequestedData !== undefined) {
                                            setDownloadInfo(rerequestedData);
                                            clearInterval(intervalId);
                                        }
                                    }, 200);
                                } else {
                                    setDownloadInfo(data);
                                }
                            }
                        });

                        const data = theState?.state?.queueState?.currentEntity?.value?.entity?.mediaSourceData?.data;
                        if (data) {
                            setDownloadInfo(data);
                        }

                        return () => {
                            if (intervalId) clearInterval(intervalId);
                            if (typeof unsubscribe === 'function') unsubscribe();
                        };
                    }),
                    (0, o.jsx)('section', {
                    style: x.isAdvertShown ? void 0 : B,
                    className: (0, c.$)(ao().root, ao().important, a),
                    ...(0, D.Am)(D.e8.player.PLAYERBAR_DESKTOP),
                    'aria-labelledby': aa,
                    children: (0, o.jsxs)('div', {
                        className: ao().playerBar,
                        children: [
                            !v.isGenerativeContext &&
                                (0, o.jsx)(Q.J, { sliderClassName: ao().slider, progressbarClassName: ao().progressBar, disabled: !i, isMobile: !1 }),
                            (0, o.jsxs)('div', {
                                className: (0, c.$)(ao().player, { [ao().player_disabled]: !i }),
                                children: [
                                    (0, o.jsx)('div', { onClick: W, className: ao().triggerModal }),
                                    (0, o.jsx)(tS.q, {
                                        children: (0, o.jsx)(y.Heading, { variant: 'h3', id: aa, children: (0, o.jsx)(m.A, { id: 'a11y-regions.player' }) }),
                                    }),
                                    (0, o.jsx)('div', {
                                        className: ao().info,
                                        children: (0, o.jsx)('div', {
                                            className: ao().infoCard,
                                            children:
                                                i &&
                                                !x.isAdvertShown &&
                                                (0, o.jsxs)(o.Fragment, {
                                                    children: [
                                                        (0, o.jsxs)(tm.Paper, {
                                                            radius: 's',
                                                            className: ao().coverContainer,
                                                            ...(0, D.Am)(D.e8.player.PLAYERBAR_DESKTOP_COVER_CONTAINER),
                                                            children: [
                                                                (0, o.jsx)(h.BW, {
                                                                    className: ao().cover,
                                                                    src: i.coverUri,
                                                                    size: 100,
                                                                    fit: 'cover',
                                                                    withAvatarReplace: !0,
                                                                }),
                                                                E &&
                                                                    (0, o.jsxs)(ae.m_, {
                                                                        placement: 'top',
                                                                        offsetOptions: 4,
                                                                        children: [
                                                                            (0, o.jsx)(al, {
                                                                                ariaLabel: S({ id: 'player-actions.fullscreen-button' }),
                                                                                onClick: g.showFullscreenPlayerModal,
                                                                            }),
                                                                            (0, o.jsx)(ae.ZI, { children: (0, o.jsx)(m.A, { id: 'player-actions.fullscreen' }) }),
                                                                        ],
                                                                    }),
                                                            ],
                                                        }),
                                                        (0, o.jsx)('div', { className: ao().description, children: Z }),
                                                    ],
                                                }),
                                        }),
                                    }),
                                    (0, o.jsxs)('div', {
                                        className: (0, c.$)(ao().sonata, { [ao().sonata_withReversedControls]: J }),
                                        children: [
                                            (0, o.jsx)(h.aQ, { fallback: (0, o.jsx)(h.cy, { disabled: !i || x.isAdvertShown, isLiked: r, onClick: s, iconSize: 'xs' }) }),
                                            (0, o.jsx)(N.$u, {
                                                className: (0, c.$)(ao().sonataControls, ao().important),
                                                withRepeat: !0,
                                                withShuffle: !0,
                                                isMobile: !1,
                                                entityMeta: i,
                                            }),
                                            (0, o.jsx)(h.aQ, {
                                                fallback: (0, o.jsx)(h._I, { disabled: !i || x.isAdvertShown, isDisliked: l, onClick: d, iconSize: 'xs' }),
                                            }),
                                        ],
                                    }),
                                    (0, o.jsxs)('div', {
                                        className: ao().meta,
                                        children: [
                                            !v.isGenerativeContext &&
                                                !x.isAdvertShown &&
                                                (0, o.jsxs)(o.Fragment, {
                                                    children: [
                                                        I && (0, o.jsx)(h.ig, { iconSize: 'l' }),
                                                        q,
                                                        $,
                                                        (0, o.jsx)(pulseSyncYandexStationCastControl, { buttonClassName: ao().settingsButton, disabled: x.isAdvertShown }),
                                                        (0, o.jsx)(h.hj, {
                                                            title: 'Скачать трек в файл',
                                                            description: i?.id ? 'Скачать трек в читаемый файл на вашем ПК' : 'Не удалось получить данные о треке',
                                                            children: (0, o.jsxs)('button', {
                                                                disabled: !i?.id,
                                                                className: `cpeagBA1_PblpJn8Xgtv UDMYhpDjiAFT3xUx268O ${!i?.id ? '' : 'HbaqudSqu7Q3mv3zMPGr'} qU2apWBO1yyEK0lZ3lPO`,
                                                                style: {
                                                                    display: 'flex',
                                                                    'flex-direction': 'column',
                                                                    gap: '2px',
                                                                    'align-self': 'center',
                                                                    'padding-top': '5px',
                                                                    'padding-inline': '2px',
                                                                },
                                                                children: [
                                                                    (0, o.jsx)('span', {
                                                                        className: 'JjlbHZ4FaP9EAcR_1DxF',
                                                                        children: (0, o.jsx)(F.Icon, {
                                                                            variant: 'download',
                                                                            size: 'xxs',
                                                                            style: {
                                                                                width: '24px',
                                                                                height: '24px',
                                                                            },
                                                                        }),
                                                                    }),
                                                                    (0, o.jsx)('div', {
                                                                        style: {
                                                                            'background-color': 'var(--ym-controls-color-secondary-text-enabled)',
                                                                            width: `${downloadProgress === -100 ? 0 : downloadProgress}%`,
                                                                            transition:
                                                                                downloadProgress >= 0 && downloadProgress < 100
                                                                                    ? 'width 0.3s'
                                                                                    : 'width 0.3s, opacity 0.3s linear 0.5s',
                                                                            opacity: downloadProgress >= 0 && downloadProgress < 100 ? '1' : '0',
                                                                            height: '2px',
                                                                            'border-radius': '10px',
                                                                        },
                                                                    }),
                                                                ],
                                                                onClick: onDownloadClick,
                                                            }),
                                                        }),
                                                        (0, o.jsx)(h.hj, {
                                                            title: 'Качество трека',
                                                            description: downloadInfo?.quality
                                                                ? `${qualityMap[downloadInfo?.quality]}: ${codecMap[downloadInfo?.codec]}` +
                                                                  (downloadInfo?.bitrate ? `-${downloadInfo?.bitrate}` : '') +
                                                                  (downloadInfo?.codec !== 'mp3' && realBitrate ? ` ${realBitrate} kbps` : '')
                                                                : 'Не удалось получить качество трека',
                                                            children: (0, o.jsxs)('div', {
                                                                className: 'cpeagBA1_PblpJn8Xgtv HbaqudSqu7Q3mv3zMPGr',
                                                                children: (0, o.jsx)(tV, {
                                                                    placement: 'bottom',
                                                                    open: P,
                                                                    onOpenChange: j,
                                                                    icon: (
                                                                        window?.SHOW_CODEC_INSTEAD_OF_QUALITY_MARK()
                                                                            ? codecMap[downloadInfo?.codec]
                                                                            : qualityMap[downloadInfo?.quality]
                                                                    )
                                                                        ? (0, o.jsxs)('span', {
                                                                              className: ao().settingsButton,
                                                                              style: {
                                                                                  width: 'auto',
                                                                                  height: 'auto',
                                                                                  'align-content': 'center',
                                                                              },
                                                                              children:
                                                                                  (window?.SHOW_CODEC_INSTEAD_OF_QUALITY_MARK()
                                                                                      ? codecMap[downloadInfo?.codec]
                                                                                      : qualityMap[downloadInfo?.quality]) ?? 'NONE',
                                                                          })
                                                                        : (0, o.jsx)(F.Icon, {
                                                                              variant: 'settings',
                                                                              size: 'xs',
                                                                          }),
                                                                    size: 'xxxs',
                                                                    referenceClassName: ao().settingsButton,
                                                                }),
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                            (0, o.jsx)(at.r, { variant: at.q.VERTICAL, sonataVolume: v.volume, onVolumeSet: v.setVolume, onVolumeClick: K }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    })
                );
            });
            var ad = a(79856),
                au = a(65337),
                a_ = a.n(au);
            let am = (0, d.PA)((e) => {
                    var t;
                    let { className: a, entityMeta: i, isLiked: r, onLikeClick: l } = e,
                        { user: s, sonataState: d, fullscreenPlayer: _, advert: p } = (0, n.Pjs)(),
                        v = s.isAuthorized && i && !p.isAdvertShown,
                        g = (null == i ? void 0 : i.isTrackPodcast) || (null == i || null == (t = i.mainAlbum) ? void 0 : t.isPodcast),
                        b = null == i ? void 0 : i.isTrackAudiobook,
                        x = z(i),
                        A = (0, u.useCallback)(
                            (e) => {
                                if (p.isAdvertShown) return;
                                let t = e.target,
                                    a = t instanceof Element && ['DIV', 'SECTION', 'IMG', 'SPAN'].includes(t.tagName);
                                i && a && !d.isGenerativeContext && _.showFullscreenPlayerModal();
                            },
                            [i, _, d.isGenerativeContext, p.isAdvertShown],
                        ),
                        f = (0, u.useMemo)(
                            () =>
                                p.isAdvertShown
                                    ? null
                                    : i
                                      ? b
                                          ? (0, o.jsx)(T.ZS, { explicitSize: 'xxxs', track: i, withAuthor: !0, withSecondaryColor: !0, withArtistLink: !1 })
                                          : g
                                            ? (0, o.jsx)(T.wo, {
                                                  explicitSize: 'xxxs',
                                                  track: i,
                                                  withDate: !1,
                                                  withSecondaryColor: !0,
                                                  withPodcastName: !0,
                                                  withAlbumTitleLink: !1,
                                              })
                                            : (0, o.jsx)(T.j7, { withArtistLink: !1, track: i, withSecondaryColor: !0, withAlbumLink: !1 })
                                      : (0, o.jsxs)('div', {
                                            className: a_().shimmerMeta,
                                            children: [
                                                (0, o.jsx)(ad.Shimmer, { className: a_().shimmerMetaTitle }),
                                                (0, o.jsx)(ad.Shimmer, { className: a_().shimmerMetaDescription }),
                                            ],
                                        }),
                            [p.isAdvertShown, i, b, g],
                        ),
                        C = (0, et.L)(() =>
                            p.isAdvertShown
                                ? (0, o.jsx)('div', { className: a_().infoCard })
                                : i
                                  ? (0, o.jsxs)('div', {
                                        className: a_().infoCard,
                                        children: [
                                            (0, o.jsx)(tm.Paper, {
                                                radius: 's',
                                                className: a_().coverContainer,
                                                children: (0, o.jsx)(h.BW, { className: a_().cover, src: i.coverUri, size: 50, fit: 'cover', withAvatarReplace: !0 }),
                                            }),
                                            (0, o.jsx)('div', { className: a_().description, children: f }),
                                        ],
                                    })
                                  : (0, o.jsxs)('div', {
                                        className: a_().infoCard,
                                        children: [
                                            (0, o.jsx)(tm.Paper, {
                                                radius: 's',
                                                className: a_().coverContainer,
                                                children: (0, o.jsx)(ad.Shimmer, { className: a_().shimmerCover }),
                                            }),
                                            (0, o.jsx)('div', { className: a_().description, children: f }),
                                        ],
                                    }),
                        );
                    return (0, o.jsxs)('section', {
                        style: p.isAdvertShown ? void 0 : x,
                        className: (0, c.$)(a_().root, a),
                        onClick: A,
                        ...(0, D.Am)(D.e8.player.MOBILE_PLAYERBAR),
                        children: [
                            (0, o.jsx)(tS.q, { children: (0, o.jsx)(y.Heading, { variant: 'h3', id: aa, children: (0, o.jsx)(m.A, { id: 'a11y-regions.player' }) }) }),
                            !d.isGenerativeContext &&
                                (0, o.jsx)(Q.v, {
                                    className: a_().backgroundProgress,
                                    sliderClassName: a_().sliderChangeTimeCode,
                                    isMobile: !0,
                                    isFullscreen: !1,
                                    disabled: !i,
                                }),
                            (0, o.jsxs)('div', {
                                className: a_().info,
                                children: [
                                    C,
                                    (0, o.jsxs)('div', {
                                        className: a_().infoButtons,
                                        children: [
                                            i &&
                                                v &&
                                                !p.isAdvertShown &&
                                                (0, o.jsx)(h.aQ, { fallback: (0, o.jsx)(h.cy, { isLiked: r, iconSize: 'xs', onClick: l, disabled: !s.isAuthorized }) }),
                                            (0, o.jsx)(N.$u, { isMobile: !0, entityMeta: i }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                }),
                ap = (0, d.PA)((e) => {
                    let { className: t } = e,
                        {
                            settings: { isMobile: a },
                            sonataState: i,
                            fullscreenPlayer: r,
                        } = (0, n.Pjs)(),
                        { isLiked: l, handleLike: s, isDisliked: d, handleDislike: _ } = t0(),
                        m = (0, n.zwV)(),
                        k = (0, Y.c)(() => {
                            if (i.entityMeta) {
                                if (r.modal.isOpened) return void r.modal.close();
                                r.modal.open();
                            }
                        });
                    return (
                        (0, u.useEffect)(() => {
                            if (!i.isGenerativeContext)
                                return (
                                    null == m || m.addShortcutsListener(n.Mo.MAIN, n.lbr.TOGGLE_FULLSCREEN_PLAYER, k),
                                    null == m || m.addShortcutsListener(n.Mo.MAIN, n.lbr.LIKE, s),
                                    null == m || m.addShortcutsListener(n.Mo.MAIN, n.lbr.DISLIKE, _),
                                    () => {
                                        null == m || m.removeShortcutsListener(n.Mo.MAIN, n.lbr.TOGGLE_FULLSCREEN_PLAYER),
                                            null == m || m.removeShortcutsListener(n.Mo.MAIN, n.lbr.LIKE),
                                            null == m || m.removeShortcutsListener(n.Mo.MAIN, n.lbr.DISLIKE);
                                    }
                                );
                        }, [_, s, m, i.isGenerativeContext, i.entityMeta, k]),
                        (0, o.jsxs)(o.Fragment, {
                            children: [
                                (0, o.jsx)(a ? am : ac, {
                                    className: (0, c.$)(t, t7().root),
                                    entityMeta: i.entityMeta,
                                    isLiked: l,
                                    isDisliked: d,
                                    onDislikeClick: _,
                                    onLikeClick: s,
                                }),
                                (0, o.jsx)(t5, { className: t7().adPopup }),
                                (0, o.jsx)(tZ.M, {}),
                                (0, o.jsx)(t4, {}),
                            ],
                        })
                    );
                });
            var av = a(12699),
                ay = a.n(av);
            let ah = (0, d.PA)((e) => {
                    let { entityMeta: t, onLikeClick: a, className: i } = e,
                        {
                            promolanding: { state: r },
                        } = (0, n.Pjs)(),
                        l = z(t),
                        s = (0, N.d0)(),
                        d = (0, Y.c)(async (e) => {
                            await s(r, e, n.V_r.PROMO_LANDING);
                        }),
                        u = (0, et.L)(() =>
                            t ? (0, o.jsx)(T.j7, { track: t, withSecondaryColor: !0, withAlbumLink: !1, withTrackLink: !1, withArtistLink: !1 }) : null,
                        );
                    return (0, o.jsxs)('section', {
                        style: l,
                        className: (0, c.$)(ay().root, i),
                        'aria-labelledby': aa,
                        ...(0, D.Am)(D.e8.player.PROMOLANDING_PLAYERBAR_DESKTOP),
                        children: [
                            (0, o.jsx)(tS.q, { children: (0, o.jsx)(y.Heading, { variant: 'h3', id: aa, children: (0, o.jsx)(m.A, { id: 'a11y-regions.player' }) }) }),
                            t &&
                                (0, o.jsxs)('div', {
                                    className: ay().info,
                                    children: [
                                        (0, o.jsxs)('div', {
                                            className: ay().infoCard,
                                            children: [
                                                (0, o.jsx)(tm.Paper, {
                                                    radius: 's',
                                                    className: ay().coverContainer,
                                                    children: (0, o.jsx)(h.BW, {
                                                        className: ay().cover,
                                                        src: t.coverUri,
                                                        size: 100,
                                                        fit: 'cover',
                                                        withAvatarReplace: !0,
                                                    }),
                                                }),
                                                (0, o.jsx)('div', { className: ay().description, children: u }),
                                            ],
                                        }),
                                        (0, o.jsx)('div', {
                                            className: ay().infoButtons,
                                            children: (0, o.jsx)(h.cy, { className: ay().likeButton, isLiked: t.isLiked, onClick: a, iconSize: 'xs' }),
                                        }),
                                    ],
                                }),
                            (0, o.jsxs)('div', {
                                className: ay().sonata,
                                children: [
                                    (0, o.jsx)(N.jh, { isMobile: !1, entityMeta: t }),
                                    (0, o.jsx)(Q.v, { disabled: !t, isMobile: !1, isFullscreen: !1, sonataPlaybackId: n.V_r.PROMO_LANDING }),
                                ],
                            }),
                            (0, o.jsx)('div', {
                                className: ay().meta,
                                children: (0, o.jsx)(at.r, { sonataVolume: r.volume, onVolumeClick: d, playbackId: n.V_r.PROMO_LANDING }),
                            }),
                        ],
                    });
                }),
                ag = (0, d.PA)((e) => {
                    let { onLikeClick: t, entityMeta: a, className: i } = e,
                        r = z(a),
                        l = (0, et.L)(() =>
                            a ? (0, o.jsx)(T.j7, { track: a, withSecondaryColor: !0, withAlbumLink: !1, withTrackLink: !1, withArtistLink: !1 }) : null,
                        );
                    return (0, o.jsxs)('section', {
                        style: r,
                        className: (0, c.$)(a_().root, i),
                        children: [
                            (0, o.jsx)(tS.q, { children: (0, o.jsx)(y.Heading, { variant: 'h3', id: aa, children: (0, o.jsx)(m.A, { id: 'a11y-regions.player' }) }) }),
                            (0, o.jsx)(Q.v, {
                                className: a_().progressBar,
                                sliderClassName: a_().progressBar,
                                isMobile: !0,
                                isFullscreen: !1,
                                disabled: !a,
                                sonataPlaybackId: n.V_r.PROMO_LANDING,
                            }),
                            (0, o.jsxs)('div', {
                                className: a_().info,
                                children: [
                                    a &&
                                        (0, o.jsxs)('div', {
                                            className: a_().infoCard,
                                            children: [
                                                (0, o.jsx)(tm.Paper, {
                                                    radius: 's',
                                                    className: a_().coverContainer,
                                                    children: (0, o.jsx)(h.BW, { className: a_().cover, src: a.coverUri, size: 50, fit: 'cover', withAvatarReplace: !0 }),
                                                }),
                                                (0, o.jsx)('div', { className: a_().description, children: l }),
                                            ],
                                        }),
                                    (0, o.jsxs)('div', {
                                        className: a_().infoButtons,
                                        children: [
                                            a && (0, o.jsx)(h.cy, { isLiked: a.isLiked, iconSize: 'xs', onClick: t }),
                                            (0, o.jsx)(N.jh, { isMobile: !0, entityMeta: a }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                }),
                ab = (0, d.PA)((e) => {
                    let { className: t } = e,
                        {
                            settings: { isMobile: a },
                            promolanding: { state: i },
                        } = (0, n.Pjs)(),
                        r = (0, n.zwV)(),
                        l = (0, I.c5)(i.entityMeta);
                    (0, u.useEffect)(
                        () => (
                            null == r || r.addShortcutsListener(n.Mo.PROMO_LANDING, n.lbr.LIKE, l),
                            () => {
                                null == r || r.removeShortcutsListener(n.Mo.PROMO_LANDING, n.lbr.LIKE);
                            }
                        ),
                        [l, r],
                    );
                    let s = (0, et.L)(() => (a ? ag : ah));
                    return (0, o.jsx)(s, { onLikeClick: l, entityMeta: i.entityMeta, className: (0, c.$)(t7().root, t) });
                });
            var ax = a(9152),
                aA = a(99711),
                af = a.n(aA);
            let pulseSyncImprovedWaveLayoutSettingKey = 'modSettings.vibeAnimationEnhancement.improvedWaveLayout',
                pulseSyncIsImprovedWaveLayoutEnabled = () => {
                    try {
                        if ('undefined' == typeof window) return !0;
                        return window.IMPROVED_WAVE_LAYOUT?.() ?? window.nativeSettings?.get?.(pulseSyncImprovedWaveLayoutSettingKey) ?? !0;
                    } catch (e) {
                        return !0;
                    }
                },
                aC = 'https://avatars.mds.yandex.net/get-music-misc/29541/img.698c9ec84f02b819695579e7/orig',
                ak = (0, d.PA)((e) => {
                    var t, a, i, r;
                    let { album: l, hoveredButtonClassName: s } = e,
                        {
                            vibe: d,
                            sonataState: _,
                            advert: m,
                            modals: { popoverOverPlayer: y },
                            fullscreenPlayer: g,
                            user: b,
                        } = (0, n.Pjs)(),
                        { openIntroModalFromPlay: x } = (0, n.e8U)(),
                        { withFreemiumCloseListening: A, withPlusPopoverWeb: f } = (0, n.XCI)(),
                        { formatMessage: C } = (0, R.A)(),
                        k = (0, n.eGp)(),
                        P = (0, n.zwV)(),
                        playGuard = (0, n.PT7)(),
                        j = (0, n.brA)(),
                        S = (0, n.rs2)(),
                        E = (0, n.mFl)(),
                        T = (0, n.NKK)(),
                        shuffleSetter = 'function' == typeof N.e9 ? (0, N.e9)() : null,
                        repeatSetter = 'function' == typeof N.AA ? (0, N.AA)() : null,
                        [isImprovedWaveLayoutEnabled, setIsImprovedWaveLayoutEnabled] = (0, u.useState)(pulseSyncIsImprovedWaveLayoutEnabled()),
                        { togglePlay: I } = (0, n.B0S)({
                            seeds: null != (i = null == (t = d.meta) ? void 0 : t.seeds) ? i : [],
                            pageIdForFrom: n._Q$.HOME,
                            blockIdForFrom: n.hf$.RUP_MAIN_RADIO,
                            onPlayInterrupted: y.open,
                        }),
                        w = (0, ax.r_)(null == l ? void 0 : l.type),
                        L = ''.concat(w, ' ').concat(null == l ? void 0 : l.title),
                        M = _.entityMeta,
                        repeatIconVariant = _.repeatMode === aP.pM.ONE ? 'repeat_one' : 'repeat',
                        B = (0, Y.c)((e) => {
                            e.stopPropagation(), (0, eo.P)(e, af().ripple), null == k || k.moveForward(), E({ actionType: tT.X2.Skip });
                        }),
                        O = (0, Y.c)((e) => {
                            e.stopPropagation(), (0, eo.P)(e, af().ripple), null == k || k.moveBackward(), E({ actionType: tT.X2.Backskip });
                        }),
                        shuffleClick = (0, Y.c)((e) => {
                            e.stopPropagation(), null == shuffleSetter || shuffleSetter(_), E({ actionType: tT.X2.ChangeShuffle });
                        }),
                        repeatClick = (0, Y.c)((e) => {
                            e.stopPropagation(), null == repeatSetter || repeatSetter(_), E({ actionType: tT.X2.ChangeRepeatSettings });
                        }),
                        V = (0, Y.c)(() => {
                            if (m.isAdvertShown) {
                                var e;
                                null == S || null == (e = S.audioAdvertPlayback) || e.togglePause();
                                return;
                            }
                            if (!x())
                                if (M) null == k || k.togglePause(), E({ actionType: _.isPlaying ? tT.X2.Pause : tT.X2.Play });
                                else {
                                    if (f) return;
                                    I(), j(!_.isPlaying);
                                }
                        }),
                        K = (0, Y.c)(() => {
                            playGuard() || V();
                        }),
                        z = !M && !b.hasPlus && A,
                        U = (0, u.useCallback)(
                            () =>
                                (0, o.jsx)(h.DM, {
                                    className: (0, c.$)(af().playButton, { [af().playButton_playing]: _.isPlaying }),
                                    isPlaying: _.isPlaying,
                                    iconClassName: af().playButtonIcon,
                                    color: 'secondary',
                                    onClick: K,
                                }),
                            [K, _.isPlaying],
                        ),
                        W = (0, u.useMemo)(
                            () =>
                                z
                                    ? b.isAuthorized
                                        ? (0, o.jsx)(h.SU, { isEnabled: f, placement: 'top', textVariant: 'vibe', renderChildren: U })
                                        : (0, o.jsx)(h.Zr, { isEnabled: z, placement: 'top', textVariant: 'vibe', renderChildren: U })
                                    : U(),
                            [z, U, b.isAuthorized, f],
                        ),
                        G = (0, Y.c)(() => {
                            g.showFullscreenPlayerModal(), T({ to: tT.QT.PlayerScreen });
                        }),
                        q = (0, et.L)(() => (_.isGenerativeContext ? (null == M ? void 0 : M.coverUri) || aC : (null == l ? void 0 : l.coverUri) || aC));
                    return (
                        (0, u.useEffect)(
                            () => (
                                null == P || P.addShortcutsListener(n.Mo.MAIN, n.lbr.TOGGLE_PLAY, V),
                                () => {
                                    null == P || P.removeShortcutsListener(n.Mo.MAIN, n.lbr.TOGGLE_PLAY);
                                }
                            ),
                            [V, P],
                        ),
                        (0, u.useEffect)(() => {
                            const e = (e, t, a) => {
                                t === pulseSyncImprovedWaveLayoutSettingKey && setIsImprovedWaveLayoutEnabled(a !== !1);
                            };
                            return window.desktopEvents?.on?.('NATIVE_STORE_UPDATE', e);
                        }, []),
                        (0, o.jsxs)('div', {
                            className: (0, c.$)(af().root, { [af().root_withYellowPlayButton]: f }),
                            'aria-label': L,
                            children: [
                                isImprovedWaveLayoutEnabled &&
                                    !_.isGenerativeContext &&
                                    (_.canShuffle || _.canChangeRepeatMode) &&
                                    (0, o.jsx)(p.$, {
                                        className: (0, c.$)(af().button, s),
                                        variant: 'text',
                                        radius: 'round',
                                        disabled: !_.canShuffle,
                                        'aria-hidden': !_.canShuffle,
                                        withRipple: !1,
                                        'aria-label': C({ id: 'player-actions.shuffle' }),
                                        icon: (0, o.jsx)(F.Icon, { variant: 'shuffle', size: 'xs' }),
                                        onClick: shuffleClick,
                                        style: _.shuffle ? { color: 'var(--ym-controls-color-primary-text-hovered)' } : void 0,
                                    }),
                                !_.isGenerativeContext &&
                                    (0, o.jsx)(p.$, {
                                        className: (0, c.$)(af().button, af().button_backward),
                                        variant: 'text',
                                        radius: 'round',
                                        disabled: !_.canMoveBackward,
                                        'aria-hidden': !_.canMoveBackward,
                                        withRipple: !1,
                                        'aria-label': C({ id: 'player-actions.previous-track' }),
                                        icon: (0, o.jsx)(F.Icon, { variant: 'previous', size: 'xs' }),
                                        onClick: O,
                                        ...(0, D.Am)(D.Kq.sonata.PREVIOUS_TRACK_BUTTON),
                                    }),
                                (0, o.jsxs)('div', {
                                    className: af().coverContainer,
                                    ...(0, D.Am)(D.e8.player.VIBE_ALBUM_COVER),
                                    children: [
                                        (0, o.jsx)(
                                            v.Image,
                                            {
                                                src: q,
                                                className: (0, c.$)(af().cover, { [af().cover_visible]: _.isPlaying, [af().cover_generative]: _.isGenerativeContext }),
                                                onClick: G,
                                                fit: 'cover',
                                                size: 400,
                                                withAvatarReplace: !0,
                                                alt: L,
                                                'aria-hidden': !0,
                                            },
                                            null != (r = null == (a = _.entityMeta) ? void 0 : a.idWithContext) ? r : 'default',
                                        ),
                                        (0, o.jsx)('div', {
                                            className: (0, c.$)(
                                                af().playButtonContainer,
                                                {
                                                    [af().playButtonContainer_playing]: _.isPlaying,
                                                    [af().playButtonContainer_withoutBackground]: !_.isPlaying || _.isGenerativeContext,
                                                },
                                                _.isPlaying && s,
                                            ),
                                            children: W,
                                        }),
                                    ],
                                }),
                                !_.isGenerativeContext &&
                                    (0, o.jsx)(p.$, {
                                        className: (0, c.$)(af().button, af().button_forward),
                                        variant: 'text',
                                        radius: 'round',
                                        disabled: !_.canMoveForward,
                                        'aria-hidden': !_.canMoveForward,
                                        withRipple: !1,
                                        'aria-label': C({ id: 'player-actions.next-track' }),
                                        icon: (0, o.jsx)(F.Icon, { variant: 'next', size: 'xs' }),
                                        onClick: B,
                                        ...(0, D.Am)(D.Kq.sonata.NEXT_TRACK_BUTTON),
                                    }),
                                isImprovedWaveLayoutEnabled &&
                                    !_.isGenerativeContext &&
                                    (_.canShuffle || _.canChangeRepeatMode) &&
                                    (0, o.jsx)(p.$, {
                                        className: (0, c.$)(af().button, s),
                                        variant: 'text',
                                        radius: 'round',
                                        disabled: !_.canChangeRepeatMode,
                                        'aria-hidden': !_.canChangeRepeatMode,
                                        withRipple: !1,
                                        'aria-label': (0, N.zM)(_.repeatMode, C),
                                        icon: (0, o.jsx)(F.Icon, { variant: repeatIconVariant, size: 'xs' }),
                                        onClick: repeatClick,
                                        style: _.repeatMode !== aP.pM.NONE ? { color: 'var(--ym-controls-color-primary-text-hovered)' } : void 0,
                                    }),
                            ],
                        })
                    );
                });
            var aP = a(6612),
                aN = a(62146),
                aj = a.n(aN),
                aS = a(90593),
                aE = a.n(aS);
            let aT = (0, d.PA)((e) => {
                var t, a, i, r, l, s, d;
                let { buttonClassName: u } = e,
                    { sonataState: _, advert: v, fullscreenPlayer: y, quality: g, vibe: b, user: x } = (0, n.Pjs)(),
                    { formatMessage: A } = (0, R.A)(),
                    f = 'function' == typeof N.e9 ? (0, N.e9)() : null,
                    C = 'function' == typeof N.AA ? (0, N.AA)() : null,
                    k = (0, ec.A7)(b.meta),
                    { state: P, setState: j, toggleFalse: S } = (0, q.e)(!1),
                    E = (0, n.NKK)(),
                    I = (0, n.mFl)(),
                    w = _.entityMeta,
                    L = null !== w,
                    M = (0, Y.c)((e) => {
                        j(e);
                    }),
                    B = (0, Y.c)(() => {
                        y.showPlayQueue(), E({ to: tT.QT.PlayerScreen }), S();
                    }),
                    O = (0, Y.c)(() => {
                        g.modal.open(), S();
                    }),
                    V = (0, Y.c)(() => {
                        y.showSyncLyrics(), E({ to: tT.QT.PlayerScreen }), S();
                    }),
                    K = (0, Y.c)(() => {
                        null == f || f(_), I({ actionType: tT.X2.ChangeShuffle });
                    }),
                    z = (0, Y.c)(() => {
                        null == C || C(_), I({ actionType: tT.X2.ChangeRepeatSettings });
                    }),
                    U = (0, Y.c)(() => {
                        k(), S();
                    }),
                    W = (0, Y.c)((e) => {
                        (0, eo.P)(e, aj().ripple), O();
                    }),
                    G = (0, n.PT7)(),
                    { shouldShowBuySubscriptionModal: Q, showBuySubscriptionModal: H } = (0, n.qBP)(),
                    { isPlaying: $, togglePlay: X } = (0, n.B0S)({
                        seeds: null != (l = null == w ? void 0 : w.seeds) ? l : [],
                        pageIdForFrom: n._Q$.RADIO,
                        blockIdForFrom: ''.concat(n.UfI.TRACK, '-').concat(null == w ? void 0 : w.id),
                        parentContextId: (null == w || null == (t = w.mainAlbum) ? void 0 : t.id)
                            ? ''.concat(null == w ? void 0 : w.mainAlbum.id, ':').concat(null == w ? void 0 : w.id)
                            : null == w
                              ? void 0
                              : w.entityId,
                    }),
                    Z = (0, Y.c)(() => {
                        if (Q && x.isAuthorized) return void H();
                        !G() && ($ || X());
                    }),
                    J = _.repeatMode === aP.pM.ONE ? 'repeat_one' : 'repeat',
                    ee = _.repeatMode !== aP.pM.NONE,
                    ea = _.shuffle,
                    ei = y.isSyncLyricsMode,
                    en = !!(null == (a = b.meta) ? void 0 : a.isPinned),
                    er = !!(b.isMyVibe || b.isShuffleVibe),
                    el = !!b.meta && _.isVibeContext && !er,
                    es = _.canSpeed && ((null == w ? void 0 : w.isNonMusic) || (null == w || null == (i = w.mainAlbum) ? void 0 : i.isNonMusic)),
                    ed = (null == w ? void 0 : w.isNonUserGenerated) && !(null == (r = w.mainAlbum) ? void 0 : r.isNonMusic),
                    eu = (null == w ? void 0 : w.albumId) ? '/album/:albumId/track/:trackId' : '/track/:trackId',
                    { shareLink: e_, pathname: em } = (0, n.bNS)(eu, {
                        params: { albumId: null != (s = null == w ? void 0 : w.albumId) ? s : '', trackId: null != (d = null == w ? void 0 : w.id) ? d : '' },
                    }),
                    ep = (0, et.L)(() => {
                        var e, t;
                        if (w)
                            return {
                                variant: n.Yxq.TRACK,
                                id: w.id,
                                title: w.title,
                                path: em,
                                trackArtistName: null == (e = w.mainArtist) ? void 0 : e.name,
                                trackArtistId: null == (t = w.mainArtist) ? void 0 : t.id,
                                trackAlbumId: w.albumId,
                            };
                    }),
                    trackDownloadName = (0, et.L)(() => {
                        let e = ((null == w ? void 0 : w.artists) || []).map((e) => e.name).filter(Boolean).join(', ');
                        return [e, null == w ? void 0 : w.title].filter(Boolean).join(' — ');
                    }),
                    downloadTrackToFile = (0, Y.c)(() => {
                        var e;
                        (null == w ? void 0 : w.id) && (null == (e = window.desktopEvents) || e.send(n.EE.DOWNLOAD_TRACK, w.id, trackDownloadName)), S();
                    }),
                    ev = ''.concat(A({ id: 'interface-actions.open-sync-lyrics' }), ' ').concat(A({ id: 'warning-messages.can-break-accessibility' })),
                    ey = (0, et.L)(() => {
                        let e = [];
                        return es && e.push((0, o.jsx)(h.Kc, {}, 'speed')), e.length > 0 && e.push((0, o.jsx)('div', { className: aE().divider }, 'speed-divider')), e;
                    }),
                    eh = (0, et.L)(() => {
                        let e = [];
                        return (
                            el &&
                                e.push(
                                    (0, o.jsx)(
                                        tj.Dr,
                                        {
                                            onClick: U,
                                            icon: (0, o.jsx)(F.Icon, { variant: en ? 'pin_filled' : 'pin', size: 'xxs' }),
                                            ...(0, D.Am)(D.e8.player.VIBE_CONTEXT_MENU_PIN_ITEM),
                                            children: en
                                                ? (0, o.jsx)(m.A, { id: 'interface-actions.unpin-my-vibe' })
                                                : (0, o.jsx)(m.A, { id: 'interface-actions.pin-my-vibe' }),
                                        },
                                        'pin',
                                    ),
                                ),
                            ed && e.push((0, o.jsx)(h.C6, { variant: n.IGO.TRACK, onClick: Z, disabled: !x.isAuthorized, onOpenMenuChange: M }, 'vibe')),
                            e.length > 0 && e.push((0, o.jsx)('div', { className: aE().divider }, 'top-divider')),
                            e
                        );
                    }),
                    eg = (0, et.L)(() => {
                        let e = [];
                        return (
                            w &&
                                e.push(
                                    (0, o.jsx)(
                                        tj.Dr,
                                        {
                                            onClick: downloadTrackToFile,
                                            disabled: !(null == w ? void 0 : w.id),
                                            icon: (0, o.jsx)(F.Icon, { variant: 'download', size: 'xxs' }),
                                            children: 'Скачать в файл',
                                        },
                                        'download-to-file',
                                    ),
                                ),
                            w && e.push((0, o.jsx)(T.$e, { track: w }, 'add-to-playlist')),
                            ep && (null == w ? void 0 : w.isNonUserGenerated) && e.push((0, o.jsx)(h.Ht, { shareLink: e_, entityMeta: ep }, 'share')),
                            e.length > 0 && e.unshift((0, o.jsx)('div', { className: aE().divider }, 'bottom-divider')),
                            e
                        );
                    });
                return _.isGenerativeContext
                    ? (0, o.jsx)(p.$, {
                          className: u,
                          radius: 'round',
                          size: 'xxxs',
                          variant: 'text',
                          withRipple: !1,
                          onClick: W,
                          'aria-label': A({ id: 'player-actions.audio-quality' }),
                          icon: (0, o.jsx)(F.Icon, { variant: 'settings', size: 'xs' }),
                      })
                    : (0, o.jsxs)(tj.W1, {
                          placement: 'top',
                          offsetOptions: 10,
                          open: P,
                          onOpenChange: M,
                          variant: 'text',
                          icon: (0, o.jsx)(F.Icon, { variant: 'more', size: 'xs' }),
                          radius: 'xxxl',
                          className: u,
                          ariaLabel: A({ id: 'interface-actions.context-menu' }),
                          containerProps: (0, D.Am)(D.e8.player.VIBE_CONTEXT_MENU),
                          ...(0, D.Am)(D.e8.player.VIBE_CONTEXT_MENU_BUTTON),
                          children: [
                              eh,
                              ey,
                              _.canShuffle &&
                                  f &&
                                  (0, o.jsx)(tj.Dr, {
                                      'aria-label': A({ id: 'player-actions.shuffle' }),
                                      onClick: K,
                                      icon: (0, o.jsx)(F.Icon, { variant: 'shuffle', size: 'xxs' }),
                                      className: (0, c.$)({ [aE().item_active]: ea }),
                                      isSubMenu: !0,
                                      ...(0, D.Am)(D.e8.player.VIBE_CONTEXT_MENU_SHUFFLE_ITEM),
                                      children: (0, o.jsx)(m.A, { id: 'player-actions.mix' }),
                                  }),
                              _.canChangeRepeatMode &&
                                  C &&
                                  (0, o.jsx)(tj.Dr, {
                                      'aria-label': (0, N.zM)(_.repeatMode, A),
                                      onClick: z,
                                      icon: (0, o.jsx)(F.Icon, { variant: J, size: 'xxs' }),
                                      className: (0, c.$)({ [aE().item_active]: ee }),
                                      isSubMenu: !0,
                                      ...(0, D.Am)(D.e8.player.VIBE_CONTEXT_MENU_REPEAT_ITEM),
                                      children: (0, o.jsx)(m.A, { id: 'player-actions.repeat-action' }),
                                  }),
                              !_.isGenerativeContext &&
                                  !v.isAdvertShown &&
                                  ((null == w ? void 0 : w.isSyncLyricsAvailable) ||
                                      (null == w ? void 0 : w.isSyncLyricsAvailableWithOfflineFeature) ||
                                      (null == w ? void 0 : w.hasSyncLyrics) ||
                                      (null == w ? void 0 : w.hasLyrics) ||
                                      ((null == w ? void 0 : w.id) && y.syncLyrics.hasLyricsForTrack(null == w ? void 0 : w.id))) &&
                                  (0, o.jsx)(tj.Dr, {
                                      'aria-label': ev,
                                      onClick: V,
                                      icon: (0, o.jsx)(F.Icon, { variant: 'syncLyrics', size: 'xxs' }),
                                      className: (0, c.$)({ [aE().item_active]: ei }),
                                      ...(0, D.Am)(D.e8.player.VIBE_CONTEXT_MENU_SYNC_LYRICS_ITEM),
                                      children: (0, o.jsx)(m.A, { id: 'interface-actions.open-lyrics' }),
                                  }),
                              !_.isGenerativeContext &&
                                  !v.isAdvertShown &&
                                  (0, o.jsx)(tj.Dr, {
                                      'aria-label': A({ id: 'interface-actions.open-play-queue' }),
                                      onClick: B,
                                      disabled: !L,
                                      icon: (0, o.jsx)(F.Icon, { variant: 'playQueue', size: 'xxs' }),
                                      ...(0, D.Am)(D.e8.player.VIBE_CONTEXT_MENU_PLAY_QUEUE_ITEM),
                                      children: (0, o.jsx)(m.A, { id: 'interface-actions.open-play-queue' }),
                                  }),
                              (0, o.jsx)(tj.Dr, {
                                  onClick: O,
                                  icon: (0, o.jsx)(F.Icon, { variant: 'settings', size: 'xxs' }),
                                  ...(0, D.Am)(D.e8.player.VIBE_CONTEXT_MENU_AUDIO_QUALITY_ITEM),
                                  children: (0, o.jsx)(m.A, { id: 'player-actions.audio-quality' }),
                              }),
                              eg,
                          ],
                      });
            });
            var aI = a(62060),
                aw = {
                    5881: (e, t, a) => {
                        function i() {
                            for (var e, t, a = 0, i = ''; a < arguments.length; )
                                (e = arguments[a++]) &&
                                    (t = (function e(t) {
                                        var a,
                                            i,
                                            n = '';
                                        if ('string' == typeof t || 'number' == typeof t) n += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (a = 0; a < t.length; a++) t[a] && (i = e(t[a])) && (n && (n += ' '), (n += i));
                                            else for (a in t) t[a] && (n && (n += ' '), (n += a));
                                        return n;
                                    })(e)) &&
                                    (i && (i += ' '), (i += t));
                            return i;
                        }
                        a.r(t), a.d(t, { clsx: () => i, default: () => n });
                        let n = i;
                    },
                    1858: (e, t, a) => {
                        a.r(t), a.d(t, { default: () => i });
                        let i = {
                            root: 'MoGQRtOtKDQCJc5HZNLw',
                            marquee: 'eYOrGFuz5P6VSNQ_IgdM',
                            content: 'eY9nVaCYr1nX7vFMBaaD',
                            content_static: 'NuV8xfAyyQwIpvv3W2Gy',
                            measure: 'CapcUKn78Iu2s1O6joam',
                        };
                    },
                    1269: (e, t, a) => {
                        Object.defineProperty(t, '__esModule', { value: !0 });
                        var i = a(810),
                            n = (function (e) {
                                return e && 'object' == typeof e && 'default' in e ? e : { default: e };
                            })(i);
                        !(function (e) {
                            if (!e) return;
                            let t = document.createElement('style');
                            t.setAttribute('type', 'text/css'), (t.innerHTML = e), document.head.appendChild(t);
                        })(
                            '.rfm-marquee-container {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.rfm-marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.rfm-marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.rfm-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.rfm-overlay::before, .rfm-overlay::after {\n  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n  pointer-events: none;\n  touch-action: none;\n}\n.rfm-overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.rfm-overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.rfm-marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.rfm-initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n  align-items: center;\n}\n\n.rfm-child {\n  transform: var(--transform);\n}',
                        ),
                            (t.default = i.forwardRef(function (e, t) {
                                let {
                                        style: a = {},
                                        className: r = '',
                                        autoFill: l = !1,
                                        play: s = !0,
                                        pauseOnHover: o = !1,
                                        pauseOnClick: c = !1,
                                        direction: d = 'left',
                                        speed: u = 50,
                                        delay: _ = 0,
                                        loop: m = 0,
                                        gradient: p = !1,
                                        gradientColor: v = 'white',
                                        gradientWidth: y = 200,
                                        onFinish: h,
                                        onCycleComplete: g,
                                        onMount: b,
                                        children: x,
                                    } = e,
                                    [A, f] = i.useState(0),
                                    [C, k] = i.useState(0),
                                    [P, N] = i.useState(1),
                                    [j, S] = i.useState(!1),
                                    E = i.useRef(null),
                                    T = t || E,
                                    I = i.useRef(null),
                                    w = i.useCallback(() => {
                                        if (I.current && T.current) {
                                            let e = T.current.getBoundingClientRect(),
                                                t = I.current.getBoundingClientRect(),
                                                a = e.width,
                                                i = t.width;
                                            ('up' === d || 'down' === d) && ((a = e.height), (i = t.height)),
                                                l && a && i ? N(i < a ? Math.ceil(a / i) : 1) : N(1),
                                                f(a),
                                                k(i);
                                        }
                                    }, [l, T, d]);
                                i.useEffect(() => {
                                    if (j && (w(), I.current && T.current)) {
                                        let e = new ResizeObserver(() => w());
                                        return (
                                            e.observe(T.current),
                                            e.observe(I.current),
                                            () => {
                                                e && e.disconnect();
                                            }
                                        );
                                    }
                                }, [w, T, j]),
                                    i.useEffect(() => {
                                        w();
                                    }, [w, x]),
                                    i.useEffect(() => {
                                        S(!0);
                                    }, []),
                                    i.useEffect(() => {
                                        'function' == typeof b && b();
                                    }, []);
                                let L = i.useMemo(() => (l ? (C * P) / u : C < A ? A / u : C / u), [l, A, C, P, u]),
                                    M = i.useMemo(
                                        () =>
                                            Object.assign(Object.assign({}, a), {
                                                '--pause-on-hover': !s || o ? 'paused' : 'running',
                                                '--pause-on-click': !s || (o && !c) || c ? 'paused' : 'running',
                                                '--width': 'up' === d || 'down' === d ? '100vh' : '100%',
                                                '--transform': 'up' === d ? 'rotate(-90deg)' : 'down' === d ? 'rotate(90deg)' : 'none',
                                            }),
                                        [a, s, o, c, d],
                                    ),
                                    B = i.useMemo(() => ({ '--gradient-color': v, '--gradient-width': 'number' == typeof y ? ''.concat(y, 'px') : y }), [v, y]),
                                    O = i.useMemo(
                                        () => ({
                                            '--play': s ? 'running' : 'paused',
                                            '--direction': 'left' === d ? 'normal' : 'reverse',
                                            '--duration': ''.concat(L, 's'),
                                            '--delay': ''.concat(_, 's'),
                                            '--iteration-count': m ? ''.concat(m) : 'infinite',
                                            '--min-width': l ? 'auto' : '100%',
                                        }),
                                        [s, d, L, _, m, l],
                                    ),
                                    R = i.useMemo(() => ({ '--transform': 'up' === d ? 'rotate(90deg)' : 'down' === d ? 'rotate(-90deg)' : 'none' }), [d]),
                                    D = i.useCallback(
                                        (e) =>
                                            [...Array(Number.isFinite(e) && e >= 0 ? e : 0)].map((e, t) =>
                                                n.default.createElement(
                                                    i.Fragment,
                                                    { key: t },
                                                    i.Children.map(x, (e) => n.default.createElement('div', { style: R, className: 'rfm-child' }, e)),
                                                ),
                                            ),
                                        [R, x],
                                    );
                                return j
                                    ? n.default.createElement(
                                          'div',
                                          { ref: T, style: M, className: 'rfm-marquee-container ' + r },
                                          p && n.default.createElement('div', { style: B, className: 'rfm-overlay' }),
                                          n.default.createElement(
                                              'div',
                                              { className: 'rfm-marquee', style: O, onAnimationIteration: g, onAnimationEnd: h },
                                              n.default.createElement(
                                                  'div',
                                                  { className: 'rfm-initial-child-container', ref: I },
                                                  i.Children.map(x, (e) => n.default.createElement('div', { style: R, className: 'rfm-child' }, e)),
                                              ),
                                              D(P - 1),
                                          ),
                                          n.default.createElement('div', { className: 'rfm-marquee', style: O }, D(P)),
                                      )
                                    : null;
                            }));
                    },
                    9097: (e, t) => {
                        var a = Symbol.for('react.transitional.element');
                        function i(e, t, i) {
                            var n = null;
                            if ((void 0 !== i && (n = '' + i), void 0 !== t.key && (n = '' + t.key), 'key' in t))
                                for (var r in ((i = {}), t)) 'key' !== r && (i[r] = t[r]);
                            else i = t;
                            return { $$typeof: a, type: e, key: n, ref: void 0 !== (t = i.ref) ? t : null, props: i };
                        }
                        (t.Fragment = Symbol.for('react.fragment')), (t.jsx = i), (t.jsxs = i);
                    },
                    4377: (e, t, a) => {
                        e.exports = a(9097);
                    },
                    998: (e, t) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useReturnValue = void 0), (t.useReturnValue = (e) => e());
                    },
                    9598: function (e, t, a) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.OverflowMarquee = void 0);
                        let n = a(4377),
                            r = a(5881),
                            l = a(810),
                            s = i(a(1269)),
                            o = a(998),
                            c = i(a(1858));
                        t.OverflowMarquee = (e) => {
                            let {
                                    children: t,
                                    className: a,
                                    contentClassName: i,
                                    scrollingClassName: d,
                                    speed: u = 50,
                                    delay: _ = 0,
                                    pauseOnHover: m = !0,
                                    pauseOnClick: p = !1,
                                    loop: v = 0,
                                    direction: y = 'left',
                                    autoFill: h = !1,
                                    gradient: g = !1,
                                    gradientColor: b,
                                    gradientWidth: x,
                                    gap: A = 12,
                                    ...f
                                } = e,
                                C = (0, l.useRef)(null),
                                k = (0, l.useRef)(null),
                                [P, N] = (0, l.useState)(!1),
                                [j, S] = (0, l.useState)(!1);
                            (0, l.useEffect)(() => {
                                let e = window.matchMedia('(prefers-reduced-motion: reduce)'),
                                    t = () => {
                                        S(e.matches);
                                    };
                                return (
                                    t(),
                                    e.addEventListener('change', t),
                                    () => {
                                        e.removeEventListener('change', t);
                                    }
                                );
                            }, []),
                                (0, l.useEffect)(() => {
                                    let e = C.current,
                                        t = k.current;
                                    if (null === e || null === t) return;
                                    let a = () => {
                                        let a = e.clientWidth,
                                            i = t.scrollWidth;
                                        if (0 === a || 0 === i) return void N(!1);
                                        N(i > a);
                                    };
                                    if ((a(), 'undefined' == typeof ResizeObserver)) return;
                                    let i = new ResizeObserver(a);
                                    return (
                                        i.observe(e),
                                        i.observe(t),
                                        () => {
                                            i.disconnect();
                                        }
                                    );
                                }, []);
                            let E = P && !j,
                                T = E && void 0 !== A ? { marginInlineEnd: ''.concat(A, 'px') } : void 0,
                                I = (0, o.useReturnValue)(() =>
                                    E
                                        ? (0, n.jsx)(s.default, {
                                              className: c.default.marquee,
                                              play: E,
                                              speed: u,
                                              delay: _ / 1e3,
                                              loop: v,
                                              direction: y,
                                              autoFill: h,
                                              pauseOnHover: m,
                                              pauseOnClick: p,
                                              gradient: g,
                                              gradientColor: b,
                                              gradientWidth: x,
                                              children: (0, n.jsx)('div', { className: (0, r.clsx)(c.default.content, i), style: T, children: t }),
                                          })
                                        : (0, n.jsx)('div', { className: (0, r.clsx)(c.default.content, c.default.content_static, i), style: T, children: t }),
                                );
                            return (0, n.jsxs)('div', {
                                ref: C,
                                className: (0, r.clsx)(c.default.root, a, E && d),
                                ...f,
                                children: [
                                    (0, n.jsx)('div', { ref: k, className: (0, r.clsx)(c.default.measure, c.default.content, i), 'aria-hidden': !0, children: t }),
                                    I,
                                ],
                            });
                        };
                    },
                    810: (e) => {
                        e.exports = _;
                    },
                },
                aL = {};
            function aM(e) {
                var t = aL[e];
                if (void 0 !== t) return t.exports;
                var a = (aL[e] = { exports: {} });
                return aw[e].call(a.exports, a, a.exports, aM), a.exports;
            }
            (aM.d = (e, t) => {
                for (var a in t) aM.o(t, a) && !aM.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
            }),
                (aM.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (aM.r = (e) => {
                    'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 });
                });
            var aB = {};
            (() => {
                Object.defineProperty(aB, 'X', { value: !0 }), (aB.W = void 0);
                var e = aM(9598);
                Object.defineProperty(aB, 'W', {
                    enumerable: !0,
                    get: function () {
                        return e.OverflowMarquee;
                    },
                });
            })();
            var aO = aB.W;
            aB.X;
            var aR = a(378),
                aD = a(33797),
                aF = a(19953),
                aV = a.n(aF);
            let aK = (0, d.PA)(() => {
                    var e, t, a, i;
                    let {
                            sonataState: r,
                            advert: l,
                            fullscreenPlayer: s,
                            settings: { isMobile: d },
                        } = (0, n.Pjs)(),
                        { formatMessage: _ } = (0, R.A)(),
                        m = (0, n.NKK)(),
                        p = (0, n.eGp)(),
                        v = r.entityMeta,
                        y = !r.isPlaying && r.isVibeContext,
                        g = null != (t = r.position) ? t : 0,
                        b = null != (a = r.duration) ? a : 0,
                        [x, A] = (0, u.useState)(null),
                        f = (0, u.useRef)(!1),
                        { state: C, toggleTrue: k, toggleFalse: P } = (0, q.e)(!1),
                        N = !!b && !r.isGenerativeContext && C,
                        j = f.current && null != x ? x : g,
                        S = b > 0 ? (Math.min(j, b) / b) * 100 : 0,
                        E = (0, n.E4p)(Math.round(j), Math.round(b)),
                        T = (0, n.E4p)(Math.round(b), Math.round(b)),
                        I = (0, n.PMf)(j),
                        w = (0, n.PMf)(b),
                        L = { '--track-progress': ''.concat(S, '%'), '--progress-transition': f.current ? 'none' : void 0 },
                        M = (0, u.useMemo)(
                            () =>
                                (0, aI.A)(() => {
                                    P();
                                }, 1e3),
                            [P],
                        ),
                        B = (0, Y.c)((e, t) => {
                            l.isAdvertShown || ((f.current = !t), d && (k(), M.cancel(), M()), t ? null == p || p.setProgress(e) : A(e));
                        }),
                        O = (0, Y.c)((e) => {
                            2 !== e.detail || !v || r.isGenerativeContext || l.isAdvertShown || (s.showFullscreenPlayerModal(), m({ to: tT.QT.PlayerScreen }));
                        }),
                        V = (0, et.L)(() => {
                            if (r.isGenerativeContext)
                                return (0, o.jsx)(F.Icon, { size: 'xs', variant: 'infinity', ...(0, D.Am)(D.e8.player.VIBE_PLAYERBAR_NEUROMUSIC_ICON) });
                            let e = [];
                            return (
                                y && v && (e.push((0, aD.XV)(v.artists)), e.push(' — ')),
                                (null == v ? void 0 : v.title) && e.push(v.title),
                                !(null == v ? void 0 : v.isRemoved) && (null == v ? void 0 : v.version) && e.push('('.concat(v.version, ')')),
                                e.join(' ')
                            );
                        });
                    return (0, o.jsx)('div', {
                        className: aV().root,
                        style: L,
                        children: (0, o.jsxs)('div', {
                            className: (0, c.$)(aV().center, {
                                [aV().center_withExplicitMark]: null == v ? void 0 : v.explicitDisclaimer,
                                [aV().center_withExplicitMark_playing]: r.isPlaying,
                                [aV().center_withoutExplicitMark]: !(null == v ? void 0 : v.explicitDisclaimer),
                                [aV().center_withoutExplicitMark_playing]: r.isPlaying,
                                [aV().center_withTimecode]: N,
                                [aV().center_active]: !r.isGenerativeContext,
                            }),
                            onMouseEnter: k,
                            onMouseLeave: P,
                            onClick: O,
                            ...(0, D.Am)(D.e8.player.VIBE_PLAYERBAR_TIMECODE_SLIDER),
                            children: [
                                (0, o.jsx)(
                                    aO,
                                    {
                                        className: aV().trackName,
                                        scrollingClassName: aV().scrollingTrackName,
                                        contentClassName: aV().trackNameText,
                                        pauseOnHover: !1,
                                        speed: 35,
                                        gap: 32,
                                        ...(0, D.Am)(D.e8.player.VIBE_PLAYERBAR_TRACK_NAME),
                                        children: V,
                                    },
                                    ''.concat(null != (i = null == (e = r.entityMeta) ? void 0 : e.idWithContext) ? i : 'default', '-').concat(y),
                                ),
                                (null == v ? void 0 : v.explicitDisclaimer) &&
                                    (0, o.jsx)(h.Nq, {
                                        containerClassName: aV().explicitMarkContainer,
                                        getDescriptionTexts: v.getDescriptionTexts,
                                        size: 'xxxs',
                                        variant: v.explicitDisclaimer,
                                        className: aV().explicitMark,
                                        trackId: v.id,
                                    }),
                                !r.isGenerativeContext &&
                                    (0, o.jsx)('span', {
                                        className: aV().timecodeOverlay,
                                        'aria-hidden': !0,
                                        ...(0, D.Am)(D.e8.player.VIBE_PLAYERBAR_TIMECODE),
                                        children: ''.concat(E, ' / ').concat(T),
                                    }),
                                !r.isGenerativeContext &&
                                    (0, o.jsx)(aR.A, {
                                        className: (0, c.$)(aV().slider, { [aV().slider_active]: !r.isGenerativeContext }),
                                        'aria-label': _({ id: 'player-actions.timecode-control' }),
                                        'aria-valuetext': ''.concat(I, ' / ').concat(w),
                                        disabled: !v || l.isAdvertShown,
                                        onChange: B,
                                        onFocus: k,
                                        onBlur: P,
                                        maxValue: Math.round(b),
                                        mode: 'deferred',
                                        value: Math.round(j),
                                        showThumbVariant: 'never',
                                        trackSize: 's',
                                        thumbSize: 's',
                                    }),
                            ],
                        }),
                    });
                }),
                pulseSyncWaveButtonModule = a(63423),
                pulseSyncWaveIconModule = a(82586),
                pulseSyncWaveButton = pulseSyncWaveButtonModule.$,
                pulseSyncWaveIcon = pulseSyncWaveIconModule.Icon,
                pulseSyncNormalizeStationText = (e) =>
                    String(e ?? '')
                        .trim()
                        .toLowerCase()
                        .replace(/\s+/g, ' '),
                pulseSyncStationNamesMatch = (e, t) => {
                    const a = pulseSyncNormalizeStationText(e),
                        i = pulseSyncNormalizeStationText(t);
                    return !!a && !!i && (a.includes(i) || i.includes(a));
                },
                pulseSyncFindLocalStation = (e, t, a) => {
                    const i = pulseSyncNormalizeStationText(e?.configuration?.glagolDeviceId);
                    if (i) {
                        const e = t.find((e) => !a.has(e) && pulseSyncNormalizeStationText(e?.deviceId) === i);
                        if (e) return e;
                    }
                    const n = pulseSyncNormalizeStationText(e?.configuration?.platform);
                    return n
                        ? (t.find(
                              (t) => !a.has(t) && pulseSyncNormalizeStationText(t?.platform) === n && pulseSyncStationNamesMatch(e?.name, t?.name ?? t?.instanceName),
                          ) ?? null)
                        : null;
                },
                pulseSyncBuildCastDeviceRows = (e = [], t = []) => {
                    const a = new Set();
                    return e.map((e) => {
                        const i = pulseSyncFindLocalStation(e, t, a);
                        return (i && a.add(i), { accountSpeaker: e, localSpeaker: i ?? void 0, canUseLocal: !!i });
                    });
                },
                pulseSyncGetCastDevicePlatform = (e) =>
                    pulseSyncNormalizeStationText(
                        e?.accountSpeaker?.configuration?.platform ??
                            e?.accountSpeaker?.configuration?.quasarInfo?.platform ??
                            e?.localSpeaker?.platform ??
                            e?.localSpeaker?.txt?.platform,
                    ),
                pulseSyncGetCastDeviceIconKind = (e) => {
                    if (e?.isThisDevice) return 'computer';
                    const t = pulseSyncGetCastDevicePlatform(e);
                    const a = {
                        yandexstation: 'station',
                        yandexstation_2: 'station',
                        yandexmidi: 'station2',
                        yandexmini: 'mini',
                        yandexmini_2: 'mini',
                        yandexmicro: 'mini',
                        yandexmodule: 'module',
                        yandexmodule_2: 'module',
                        yandex_tv: 'tv',
                        saturn: 'chiron',
                        cucumber: 'cucumber',
                        bergamot: 'mini',
                        plum: 'mini',
                        orion: 'station',
                        monet: 'tv',
                        magritte: 'tv',
                        goya: 'tv',
                    };
                    if (a[t]) return a[t];
                    if (/computer|desktop|windows|win32|darwin|mac|linux|electron/.test(t)) return 'computer';
                    if (/chiron/.test(t)) return 'chiron';
                    if (/cucumber/.test(t)) return 'cucumber';
                    if (/mini/.test(t)) return 'mini';
                    if (/station[_-]?2|station2|yandexstation[_-]?2|yandex_station[_-]?2/.test(t)) return 'station2';
                    return 'station';
                },
                pulseSyncCastDeviceIconPath = {
                    computer:
                        'm14.6,5c1.1024,0 2.01,-0.0016 2.7373,0.0772 0.7461,0.0808 1.4215,0.2556 2.0147,0.6865 0.3394,0.2466 0.6381,0.5453 0.8847,0.8848 0.431,0.5931 0.6057,1.2686 0.6866,2.0146 0.0787,0.7273 0.0771,1.6349 0.0771,2.7373v0.1992c0,1.1024 0.0016,2.01 -0.0771,2.7373 -0.0809,0.7461 -0.2556,1.4215 -0.6866,2.0147 -0.1727,0.2377 -0.3718,0.4545 -0.5918,0.6484h3.3555v2h-22v-2h3.3555c-0.2199,-0.1939 -0.419,-0.4107 -0.5918,-0.6484 -0.4309,-0.5932 -0.6057,-1.2686 -0.6865,-2.0147 -0.0787,-0.7273 -0.0772,-1.6349 -0.0772,-2.7373v-0.1992c0,-1.1024 -0.0016,-2.01 0.0772,-2.7373 0.0808,-0.7461 0.2556,-1.4215 0.6865,-2.0146 0.2466,-0.3394 0.5453,-0.6381 0.8848,-0.8848 0.5932,-0.4309 1.2686,-0.6057 2.0146,-0.6865 0.7273,-0.0787 1.6349,-0.0772 2.7373,-0.0772h5.1992zM9.4008,7c-1.1472,0 -1.9278,0.001 -2.5225,0.0654 -0.5758,0.0624 -0.8583,0.1744 -1.0537,0.3164 -0.1697,0.1233 -0.3191,0.2727 -0.4424,0.4424 -0.142,0.1954 -0.254,0.4779 -0.3164,1.0537 -0.0644,0.5946 -0.0654,1.3754 -0.0654,2.5225v0.1992c0,1.1471 0.001,1.9278 0.0654,2.5225 0.0624,0.5758 0.1744,0.8583 0.3164,1.0537 0.1233,0.1697 0.2727,0.3191 0.4424,0.4424 0.1954,0.1419 0.4779,0.254 1.0537,0.3164 0.5947,0.0644 1.3753,0.0654 2.5225,0.0654h5.1992c1.1472,0 1.9278,-0.001 2.5225,-0.0654 0.5758,-0.0624 0.8583,-0.1745 1.0537,-0.3164 0.1697,-0.1234 0.3191,-0.2727 0.4424,-0.4424 0.1419,-0.1954 0.254,-0.4779 0.3164,-1.0537 0.0644,-0.5947 0.0654,-1.3754 0.0654,-2.5225v-0.1992c0,-1.1471 -0.001,-1.9278 -0.0654,-2.5225 -0.0624,-0.5758 -0.1745,-0.8583 -0.3164,-1.0537 -0.1233,-0.1697 -0.2727,-0.3191 -0.4424,-0.4424 -0.1954,-0.142 -0.4779,-0.254 -1.0537,-0.3164 -0.5947,-0.0644 -1.3753,-0.0654 -2.5225,-0.0654h-5.1992z',
                    module: 'M15.16 3.75L1 11.3l7.84 4.25L23 8l-7.84-4.25zM1 12.95v3.3l7.84 4.25L23 12.95v-3.3L8.84 17.2l-2.6-1.41V17L3.44 15.5v-1.22L1 12.95z',
                    tv: 'M19.6 6.4v7.2H4.4V6.4h15.2zM2 4h2.4h15.2H22v2.4v7.2V16h-2.4H4.4H2v-2.4v-7.2V4zm5 16.2h10v-2.4H7v2.4z',
                    hub: 'M12 5.13l6.6 4.4v9.07h-4.35v-6.1h-4.5v6.1H5.4V9.53l6.6-4.4zM9.75 21H5.4H3v-2.4V8.25l9-6l9 6V18.6V21h-2.4h-4.35h-4.5z',
                    station:
                        'm16.454,3.4996c0,1.23 -1.9942,2.2271 -4.4542,2.2271 -2.46,0 -4.4542,-0.9971 -4.4542,-2.2271s1.9942,-2.2271 4.4542,-2.2271c2.46,0 4.4542,0.9971 4.4542,2.2271zM18.7659,18.3616c0.2514,-0.4236 0.2331,-1.0072 0.2331,-2.236v-10.066c0,-0.1388 -0.0361,-0.2752 -0.1048,-0.3958s-0.1675,-0.2213 -0.2868,-0.2921c-0.1194,-0.0708 -0.2551,-0.1094 -0.3939,-0.112 -0.1387,-0.0025 -0.2758,0.0311 -0.3976,0.0975l-0.0704,0.0384c-3.0073,1.6403 -4.3768,2.4605 -5.7462,2.4605 -1.3695,0 -2.739,-0.8202 -5.7463,-2.4605l-0.0704,-0.0384c-0.1218,-0.0665 -0.2589,-0.1001 -0.3976,-0.0975 -0.1388,0.0025 -0.2745,0.0411 -0.3938,0.112 -0.1193,0.0708 -0.2182,0.1715 -0.2869,0.2921 -0.0687,0.1206 -0.1048,0.257 -0.1048,0.3958v10.066c0,1.229 -0.0183,1.8126 0.2331,2.2361 0.2514,0.4235 0.7725,0.6869 1.8514,1.2754 2.5725,1.4032 3.7439,2.1048 4.9153,2.1047 1.1712,0 2.3425,-0.7015 4.9142,-2.1043 1.0795,-0.5888 1.6008,-0.8523 1.8523,-1.2759z',
                    station2:
                        'm8.4897,3.8078c-0.4164,0.1864 -0.7401,0.3313 -0.9898,0.4862 -0.5817,0.3609 -0.0566,0.6464 0.2313,0.7626 3.6409,1.4686 5.111,2.0123 6.4594,1.7962 0.7603,-0.1218 1.4819,-0.4853 2.5322,-1.0608 0.6573,-0.3602 0.9884,-0.5985 0.1269,-1.0421 -0.312,-0.1607 -0.7566,-0.3262 -1.3895,-0.5574 -4.3376,-1.5844 -4.807,-1.3701 -6.4444,-0.6224 -0.1744,0.0796 -0.3623,0.1644 -0.5261,0.2377h-0zM16.7201,20.8098c1.8489,-0.8276 2.2799,-1.0205 2.2799,-3.2928v-10.022c0,-0.1382 -0.0473,-0.274 -0.1373,-0.3941s-0.2195,-0.2203 -0.3759,-0.2908c-0.1564,-0.0705 -0.3343,-0.1089 -0.5161,-0.1115 -0.1819,-0.0025 -0.3614,0.031 -0.5211,0.0971l-0.0923,0.0382c-1.502,0.842 -2.3794,1.3667 -3.3171,1.5181 -1.4591,0.2356 -3.0642,-0.433 -7.3956,-2.2173l-0.0923,-0.0382c-0.1597,-0.0662 -0.3392,-0.0996 -0.5211,-0.0971 -0.1819,0.0025 -0.3597,0.0409 -0.5161,0.1115 -0.1564,0.0705 -0.2859,0.1708 -0.3759,0.2909 -0.09,0.1201 -0.1373,0.2559 -0.1373,0.3941v10.022c0,0.1362 -0.0005,0.2648 -0.001,0.3863 -0.0085,2.0629 -0.0087,2.1084 2.7328,3.1098 5.5921,2.0427 6.1973,1.7663 8.3082,0.8024 0.0732,-0.0334 0.1483,-0.0677 0.2254,-0.1027 0.1597,-0.0725 0.3105,-0.14 0.4529,-0.2038z',
                    chiron: 'm8.4,3h-0.0557c-1.0775,-0 -1.9665,-0 -2.6817,0.0774 -0.7461,0.0808 -1.4206,0.2555 -2.0138,0.6865 -0.3396,0.2467 -0.6382,0.5454 -0.8849,0.8849 -0.431,0.5932 -0.6057,1.2677 -0.6865,2.0138 -0.0775,0.7151 -0.0775,1.6041 -0.0774,2.6817v1.3114c-0,1.0775 -0,1.9665 0.0774,2.6817 0.0808,0.7461 0.2555,1.4206 0.6865,2.0137 0.2467,0.3396 0.5454,0.6383 0.8849,0.885 0.4135,0.3004 0.8665,0.4763 1.3557,0.5826 0.0183,1.4667 0.1098,2.3134 0.5684,2.9447 0.185,0.2546 0.409,0.4786 0.6637,0.6637 0.7886,0.5729 1.9135,0.5729 4.1634,0.5729h3.2c2.2498,0 3.3748,0 4.1634,-0.5729 0.2546,-0.1851 0.4786,-0.4091 0.6637,-0.6637 0.4586,-0.6313 0.5501,-1.478 0.5683,-2.9447 0.4893,-0.1063 0.9423,-0.2822 1.3557,-0.5826 0.3396,-0.2467 0.6383,-0.5454 0.885,-0.885 0.4309,-0.5931 0.6056,-1.2676 0.6865,-2.0137 0.0774,-0.7152 0.0774,-1.6042 0.0774,-2.6817v-1.3114c0,-1.0775 0,-1.9665 -0.0774,-2.6817 -0.0809,-0.7461 -0.2556,-1.4206 -0.6865,-2.0138 -0.2467,-0.3396 -0.5454,-0.6382 -0.885,-0.8849 -0.5931,-0.431 -1.2676,-0.6057 -2.0137,-0.6865 -0.7152,-0.0775 -1.6042,-0.0775 -2.6817,-0.0774h-7.2557zM15.665,15c1.1118,-0.0001 1.8736,-0.0026 2.4569,-0.0658 0.576,-0.0624 0.8583,-0.1742 1.0537,-0.3162 0.1698,-0.1233 0.3191,-0.2726 0.4424,-0.4424 0.142,-0.1954 0.2538,-0.4777 0.3162,-1.0537 0.0644,-0.5946 0.0658,-1.3747 0.0658,-2.5219v-1.2c0,-1.1472 -0.0014,-1.9273 -0.0658,-2.5219 -0.0624,-0.576 -0.1742,-0.8582 -0.3162,-1.0536 -0.1233,-0.1698 -0.2726,-0.3191 -0.4424,-0.4425 -0.1954,-0.142 -0.4777,-0.2538 -1.0537,-0.3162 -0.5946,-0.0644 -1.3747,-0.0658 -2.5219,-0.0658h-7.2c-1.1472,0 -1.9273,0.0014 -2.5219,0.0658 -0.576,0.0624 -0.8582,0.1742 -1.0536,0.3162 -0.1698,0.1234 -0.3191,0.2727 -0.4425,0.4425 -0.142,0.1954 -0.2538,0.4777 -0.3162,1.0536 -0.0644,0.5947 -0.0658,1.3747 -0.0658,2.5219v1.2c0,1.1472 0.0014,1.9273 0.0658,2.5219 0.0624,0.576 0.1742,0.8583 0.3162,1.0537 0.1234,0.1698 0.2727,0.3191 0.4425,0.4424 0.1954,0.142 0.4777,0.2538 1.0536,0.3162 0.5834,0.0632 1.3452,0.0657 2.457,0.0658h7.33z',
                    cucumber:
                        'm8.2522,6.6265 l2.4062,1.2031c0.8445,0.4223 1.8387,0.4223 2.6832,0l2.4062,-1.2031c0.5159,-0.258 0.5159,-0.9942 0,-1.2522l-2.4062,-1.2031c-0.8445,-0.4223 -1.8387,-0.4223 -2.6832,0l-2.4062,1.2031c-0.5159,0.258 -0.5159,0.9942 0,1.2522zM12,10.2496c-1.4143,0 -3.3087,-0.7801 -5.6832,-2.3403 -0.1386,-0.0911 -0.3009,-0.1396 -0.4668,-0.1396 -0.4694,0 -0.85,0.3806 -0.85,0.85v6.6321c0,0.8018 0.3845,1.5549 1.0339,2.025 2.5073,1.8153 4.4961,2.7229 5.9661,2.7229s3.4587,-0.9076 5.9661,-2.7229c0.6494,-0.4701 1.0339,-1.2232 1.0339,-2.025v-6.632c0,-0.1659 -0.0485,-0.3282 -0.1396,-0.4668 -0.2578,-0.3923 -0.7849,-0.5014 -1.1772,-0.2436 -2.3745,1.5602 -4.2689,2.3403 -5.6832,2.3403z',
                    mini: 'm17.939,8.0749c0,1.64 -2.659,2.9695 -5.939,2.9695 -3.2799,0 -5.9389,-1.3295 -5.9389,-2.9695s2.6589,-2.9695 5.9389,-2.9695c3.28,0 5.939,1.3295 5.939,2.9695zM19.8807,11.0635c0.0781,0.1264 0.1194,0.272 0.1194,0.4206v4.3451c0,2.2093 -3.5817,4 -7.9999,4 -4.4183,0 -8.0001,-1.7908 -8.0001,-4v-4.3451c-0.0002,-0.1486 0.0411,-0.2944 0.1191,-0.4208 0.0781,-0.1265 0.1898,-0.2287 0.3227,-0.2952s0.2817,-0.0946 0.4298,-0.0813c0.148,0.0134 0.2894,0.0678 0.4082,0.1571 2.005,1.2692 4.3492,1.8975 6.7203,1.8011 2.371,0.0964 4.7151,-0.5319 6.7201,-1.8011 0.1189,-0.0891 0.2602,-0.1433 0.4081,-0.1566 0.148,-0.0133 0.2967,0.0148 0.4296,0.0813 0.1329,0.0664 0.2446,0.1686 0.3227,0.2949z',
                },
                pulseSyncRenderCastDeviceIcon = (e, t = '') =>
                    (0, o.jsx)('span', {
                        className: 'PulseSync_castPopoverItemIcon'.concat(t ? ' '.concat(t) : ''),
                        'aria-hidden': !0,
                        children: (0, o.jsx)('svg', {
                            width: '32',
                            height: '32',
                            viewBox: '0 0 24 24',
                            fill: 'none',
                            xmlns: 'http://www.w3.org/2000/svg',
                            children: (0, o.jsx)('path', {
                                d: pulseSyncCastDeviceIconPath[pulseSyncGetCastDeviceIconKind(e)] ?? pulseSyncCastDeviceIconPath.station,
                                fill: 'currentColor',
                                fillRule: 'evenodd',
                                clipRule: 'evenodd',
                            }),
                        }),
                    }),
                pulseSyncGetActiveCastDeviceRow = (e, t) => (t ? e.find((e) => !e.isThisDevice && e.accountSpeaker?.id === t) : null),
                pulseSyncCastConnectDelay = (e) => new Promise((t) => setTimeout(t, e)),
                pulseSyncSelectYandexStationSpeaker = async (e) => {
                    let t = null;
                    for (let a = 0; a <= 3; a += 1) {
                        try {
                            if (
                                ((t = window.pulseSyncYandexStationCast?.activate
                                    ? await window.pulseSyncYandexStationCast.activate(e)
                                    : await window.desktopEvents?.invoke?.('YANDEX_STATION_SELECT_SPEAKER', e)),
                                t?.ok)
                            )
                                return t;
                        } catch (e) {
                            t = { ok: !1, error: e };
                        }
                        a < 3 && (await pulseSyncCastConnectDelay(600));
                    }
                    return t ?? { ok: !1 };
                },
                pulseSyncIsYandexStationCastEnabled = () => {
                    try {
                        return window.__pulseSyncYandexStationCastEnabled ?? window.ENABLE_YANDEX_STATION_CAST?.() ?? !0;
                    } catch (e) {
                        return !0;
                    }
                },
                pulseSyncApplyYandexStationState = (e, t) => {
                    const a = Array.isArray(e?.accountSpeakers) ? e.accountSpeakers : [],
                        i = Array.isArray(e?.localSpeakers) ? e.localSpeakers : [];
                    t.setActiveSpeakerId(e?.activeSpeaker?.accountSpeaker?.id ?? window.pulseSyncYandexStationCast?.activeSpeakerId ?? null);
                    t.setDeviceRows([{ isThisDevice: !0 }, ...pulseSyncBuildCastDeviceRows(a, i)]);
                    t.setDevicesLoaded(Boolean(e?.firstFlowCompleted));
                    t.setDevicesLoading(Boolean(e?.refreshing));
                },
                pulseSyncGetCastPopoverShift = (e) => {
                    const t = e?.getBoundingClientRect?.();
                    if (!t) return 0;
                    const a = 320,
                        i = 12,
                        n = window.innerWidth || document.documentElement?.clientWidth || a,
                        r = t.left + t.width / 2,
                        l = r - a / 2,
                        s = r + a / 2;
                    if (l < i) return i - l;
                    if (s > n - i) return n - i - s;
                    return 0;
                },
                pulseSyncYandexStationCastControl = (0, d.PA)((e) => {
                    let { buttonClassName: t, disabled: a } = e,
                        { formatMessage: i } = (0, R.A)(),
                        [r, l] = (0, u.useState)(!1),
                        [s, d] = (0, u.useState)(!1),
                        [_, m] = (0, u.useState)(0),
                        [v, y] = (0, u.useState)([]),
                        [g, b] = (0, u.useState)(window.pulseSyncYandexStationCast?.activeSpeakerId ?? null),
                        [x, A] = (0, u.useState)(null),
                        [f, C] = (0, u.useState)(null),
                        [k, P] = (0, u.useState)(!1),
                        [j, S] = (0, u.useState)(!1),
                        [castHoveredDeviceKey, setCastHoveredDeviceKey] = (0, u.useState)(null),
                        [E, T] = (0, u.useState)(pulseSyncIsYandexStationCastEnabled()),
                        I = (0, u.useRef)(null),
                        w = (0, u.useRef)(null),
                        L = (0, u.useCallback)(async () => {
                            if (!E) {
                                y([]);
                                S(!1);
                                P(!1);
                                return;
                            }
                            try {
                                P(!0);
                                const e = await (window.desktopEvents?.invoke?.('YANDEX_STATION_STATE') ?? Promise.resolve(null));
                                pulseSyncApplyYandexStationState(e, {
                                    setActiveSpeakerId: b,
                                    setDeviceRows: y,
                                    setDevicesLoaded: S,
                                    setDevicesLoading: P,
                                });
                            } catch (e) {
                                (console.warn('Failed to load Yandex Station cast devices', e), y([]), S(!1), P(!1));
                            }
                        }, [E]),
                        M = (0, u.useCallback)(() => {
                            l(!1);
                            clearTimeout(w.current);
                            w.current = setTimeout(() => {
                                d(!1);
                                setCastHoveredDeviceKey(null);
                            }, 160);
                        }, []),
                        B = (0, u.useCallback)(() => {
                            m(pulseSyncGetCastPopoverShift(I.current));
                        }, []),
                        O = (0, u.useCallback)(() => {
                            clearTimeout(w.current);
                            d(!0);
                            requestAnimationFrame(() => {
                                B();
                                l(!0);
                            });
                        }, [B]),
                        V = (0, u.useCallback)(() => {
                            r ? M() : O();
                        }, [r, M, O]);
                    (0, u.useEffect)(() => {
                        void L();
                    }, [L]);
                    (0, u.useEffect)(() => {
                        const e = (e, t) => {
                            pulseSyncApplyYandexStationState(t, {
                                setActiveSpeakerId: b,
                                setDeviceRows: y,
                                setDevicesLoaded: S,
                                setDevicesLoading: P,
                            });
                        };
                        return window.desktopEvents?.on?.('YANDEX_STATION_STATE', e);
                    }, []);
                    (0, u.useEffect)(() => {
                        const e = (e) => {
                            b(e.detail?.activeSpeakerId ?? null);
                        };
                        return (
                            window.addEventListener('pulse-sync-yandex-station-cast-change', e),
                            () => {
                                window.removeEventListener('pulse-sync-yandex-station-cast-change', e);
                            }
                        );
                    }, []);
                    (0, u.useEffect)(() => {
                        const e = (e) => {
                            const t = e.detail?.enabled ?? pulseSyncIsYandexStationCastEnabled();
                            T(t);
                            t ? (S(!1), void L()) : (M(), y([]), b(null), S(!1), P(!1));
                        };
                        return (
                            window.addEventListener('pulse-sync-yandex-station-cast-setting-change', e),
                            () => {
                                window.removeEventListener('pulse-sync-yandex-station-cast-setting-change', e);
                            }
                        );
                    }, [M, L]);
                    (0, u.useEffect)(() => () => clearTimeout(w.current), []);
                    (0, u.useEffect)(() => {
                        if (!s) return;
                        const e = (e) => {
                            I.current?.contains?.(e.target) || M();
                        };
                        return (
                            document.addEventListener('pointerdown', e, !0),
                            () => {
                                document.removeEventListener('pointerdown', e, !0);
                            }
                        );
                    }, [s, M]);
                    (0, u.useEffect)(() => {
                        if (!s) return;
                        const e = () => B();
                        return (
                            B(),
                            window.addEventListener('resize', e),
                            () => {
                                window.removeEventListener('resize', e);
                            }
                        );
                    }, [s, B]);
                    return a || !E
                        ? null
                        : (0, o.jsxs)('div', {
                              ref: I,
                              style: { position: 'relative', display: 'flex', alignItems: 'center' },
                              children: [
                                  (0, o.jsx)(p.$, {
                                      className: t,
                                      radius: 'round',
                                      size: 'xxxs',
                                      variant: 'text',
                                      withRipple: !1,
                                      'aria-label': i({ id: 'player-actions.cast' }),
                                      icon: g
                                          ? pulseSyncRenderCastDeviceIcon(pulseSyncGetActiveCastDeviceRow(v, g), 'PulseSync_castPlayerButtonIcon')
                                          : (0, o.jsx)(F.Icon, { variant: 'cast', size: 'xs' }),
                                      onClick: V,
                                      style: g ? { color: 'var(--ym-controls-color-primary-text-hovered)' } : void 0,
                                  }),
                                  s &&
                                      (0, o.jsx)('div', {
                                          className: 'PulseSync_castPopover',
                                          style: {
                                              opacity: r ? 1 : 0,
                                              transform: 'translateX('.concat(_, 'px) ').concat(r ? 'translateY(0)' : 'translateY(10px)'),
                                              pointerEvents: r ? 'auto' : 'none',
                                          },
                                          children: !j
                                              ? (0, o.jsx)('div', {
                                                    className: 'PulseSync_castPopoverStatus PulseSync_castPopoverStatus_shimmer',
                                                    children: 'Поиск устройств...',
                                                })
                                              : (0, o.jsxs)('div', {
                                                    className: 'PulseSync_castPopoverContent',
                                                    children: [
                                                        (0, o.jsx)(
                                                            'div',
                                                            {
                                                                className: 'PulseSync_castPopoverStatus PulseSync_castPopoverStatus_refreshing'.concat(
                                                                    k ? ' PulseSync_castPopoverStatus_visible' : '',
                                                                ),
                                                                children: 'Обновляем список устройств...',
                                                            },
                                                            'cast-refreshing',
                                                        ),
                                                        v.length
                                                            ? v.map((e) => {
                                                                  const t = !e.isThisDevice && !e.canUseLocal,
                                                                      a = e.isThisDevice ? void 0 : (e.accountSpeaker?.roomName ?? e.accountSpeaker?.householdName),
                                                                      r = e.accountSpeaker?.id,
                                                                      isConnecting = !e.isThisDevice && x === r && g !== r,
                                                                      hasConnectionError = !e.isThisDevice && f === r && g !== r,
                                                                      isDisabled = t || !!x,
                                                                      isConnected = (e.isThisDevice && !g) || (!e.isThisDevice && g === r),
                                                                      i = e.isThisDevice
                                                                          ? g
                                                                              ? 'Отключить колонку'
                                                                              : 'Сейчас выбрано'
                                                                          : isConnecting
                                                                            ? 'Подключение...'
                                                                            : hasConnectionError
                                                                              ? 'Ошибка подключения'
                                                                              : g === r
                                                                                ? 'Подключено'
                                                                                : e.canUseLocal
                                                                                  ? 'В сети'
                                                                                  : 'Вне локальной сети',
                                                                      n = e.isThisDevice
                                                                          ? 'pulse-sync-this-device'
                                                                          : (e.accountSpeaker?.id ?? e.accountSpeaker?.name ?? e.localSpeaker?.deviceId);
                                                                  return (0, o.jsxs)('button', {
                                                                          key: n,
                                                                          type: 'button',
                                                                          className: 'PulseSync_castPopoverItem'.concat(
                                                                              isConnected || (!isDisabled && castHoveredDeviceKey === n) ? ' PulseSync_castPopoverItem_active' : '',
                                                                          ),
                                                                          disabled: isDisabled,
                                                                          onClick: isDisabled
                                                                              ? void 0
                                                                              : async () => {
                                                                                    if (e.isThisDevice) {
                                                                                        window.pulseSyncYandexStationCast?.clear
                                                                                            ? await window.pulseSyncYandexStationCast.clear()
                                                                                            : await window.desktopEvents?.invoke?.('YANDEX_STATION_CLEAR_SPEAKER');
                                                                                        b(null);
                                                                                        A(null);
                                                                                        C(null);
                                                                                        M();
                                                                                        return;
                                                                                    }
                                                                                    const t = e.accountSpeaker?.id;
                                                                                    if (!t) return;
                                                                                    A(t);
                                                                                    C(null);
                                                                                    try {
                                                                                        const e = await pulseSyncSelectYandexStationSpeaker(t);
                                                                                        e?.ok
                                                                                            ? (b(t), C(null), M())
                                                                                            : (C(t), console.warn('Failed to select Yandex Station cast device', e));
                                                                                    } catch (e) {
                                                                                        C(t);
                                                                                        console.warn('Failed to select Yandex Station cast device', e);
                                                                                    } finally {
                                                                                        A(null);
                                                                                    }
                                                                                },
                                                                          onMouseEnter: isDisabled ? void 0 : () => setCastHoveredDeviceKey(n),
                                                                          onMouseLeave: isDisabled ? void 0 : () => setCastHoveredDeviceKey(null),
                                                                          children: [
                                                                              pulseSyncRenderCastDeviceIcon(e),
                                                                              (0, o.jsx)('div', {
                                                                                  style: {
                                                                                      display: 'flex',
                                                                                      alignItems: 'flex-start',
                                                                                      flexDirection: 'column',
                                                                                      minWidth: 0,
                                                                                      flex: '1 1 auto',
                                                                                  },
                                                                                  children: [
                                                                                      (0, o.jsx)('span', {
                                                                                          style: {
                                                                                              display: 'flex',
                                                                                              gap: '5px',
                                                                                              alignItems: 'baseline',
                                                                                              minWidth: 0,
                                                                                              maxWidth: '100%',
                                                                                          },
                                                                                          children: [
                                                                                              (0, o.jsx)('span', {
                                                                                                  className: 'PulseSync_castPopoverItemTitle',
                                                                                                  children: e.isThisDevice
                                                                                                      ? 'Это устройство'
                                                                                                      : (e.accountSpeaker?.name ?? e.accountSpeaker?.id ?? 'Yandex Station'),
                                                                                              }),
                                                                                              a &&
                                                                                                  (0, o.jsx)('span', {
                                                                                                      className: 'PulseSync_castPopoverItemMeta PulseSync_castPopoverItemRoom',
                                                                                                      children: (0, o.jsx)('span', {
                                                                                                          className: 'PulseSync_castPopoverItemRoomText',
                                                                                                          children: a,
                                                                                                      }),
                                                                                                  }),
                                                                                          ],
                                                                                      }),
                                                                                      (0, o.jsx)('span', {
                                                                                          className: 'PulseSync_castPopoverItemMeta'
                                                                                              .concat(isConnecting ? ' PulseSync_castPopoverItemMeta_shimmer' : '')
                                                                                              .concat(hasConnectionError ? ' PulseSync_castPopoverItemMeta_error' : ''),
                                                                                          children: i,
                                                                                      }),
                                                                                  ],
                                                                              }),
                                                                              isConnected &&
                                                                                  (0, o.jsx)('span', {
                                                                                      children: (0, o.jsx)('svg', {
                                                                                          width: '16',
                                                                                          height: '16',
                                                                                          fill: 'currentColor',
                                                                                          xmlns: 'http://www.w3.org/2000/svg',
                                                                                          children: (0, o.jsx)('path', {
                                                                                              d: 'M6.5 11.5l-3.5-3.5 1.4-1.4L6.5 8.7l5.1-5.1 1.4 1.4z',
                                                                                          }),
                                                                                      }),
                                                                                  }),
                                                                          ],
                                                                      });
                                                              })
                                                            : (0, o.jsx)('div', { className: 'PulseSync_castPopoverStatus', children: 'Устройства не найдены' }, 'cast-empty'),
                                                    ],
                                                },
                                                'cast-content',
                                            ),
                                      }),
                              ],
                          });
                }),
                az = (0, d.PA)((e) => {
                    var t, a;
                    let { hoveredButtonClassName: i } = e,
                        {
                            vibe: r,
                            sonataState: l,
                            advert: s,
                            fullscreenPlayer: d,
                            settings: { isMobile: _ },
                            modals: { popoverOverPlayer: m },
                        } = (0, n.Pjs)(),
                        { formatMessage: waveFormatMessage } = (0, R.A)(),
                        v = (0, n.zwV)(),
                        y = (0, N.d0)(),
                        { isLiked: g, handleLike: b, isDisliked: x, handleDislike: A } = t0(),
                        f = (0, n.eGp)(),
                        C = (0, n.PT7)(),
                        k = (0, n.brA)(),
                        P = (0, n.rs2)(),
                        j = (0, n.mFl)(),
                        screenNavigation = (0, n.NKK)(),
                        { togglePlay: S } = (0, n.B0S)({
                            seeds: null != (a = null == (t = r.meta) ? void 0 : t.seeds) ? a : [],
                            pageIdForFrom: n._Q$.HOME,
                            blockIdForFrom: n.hf$.RUP_MAIN_RADIO,
                            onPlayInterrupted: m.open,
                        }),
                        E = l.entityMeta,
                        T = null == E ? void 0 : E.mainAlbum,
                        I = !l.isPlaying && !E,
                        U = null != l.position ? l.position : 0,
                        H = null != l.duration ? l.duration : 0,
                        W = H > 0 ? (Math.min(U, H) / H) * 100 : 0,
                        [waveCastPopoverOpen, setWaveCastPopoverOpen] = (0, u.useState)(!1),
                        [waveCastPopoverMounted, setWaveCastPopoverMounted] = (0, u.useState)(!1),
                        [waveCastPopoverShift, setWaveCastPopoverShift] = (0, u.useState)(0),
                        [waveCastDeviceRows, setWaveCastDeviceRows] = (0, u.useState)([]),
                        [waveCastHoveredDeviceKey, setWaveCastHoveredDeviceKey] = (0, u.useState)(null),
                        [waveCastActiveSpeakerId, setWaveCastActiveSpeakerId] = (0, u.useState)(window.pulseSyncYandexStationCast?.activeSpeakerId ?? null),
                        [waveCastConnectingSpeakerId, setWaveCastConnectingSpeakerId] = (0, u.useState)(null),
                        [waveCastConnectionErrorSpeakerId, setWaveCastConnectionErrorSpeakerId] = (0, u.useState)(null),
                        [waveCastDevicesLoading, setWaveCastDevicesLoading] = (0, u.useState)(!1),
                        [waveCastDevicesLoaded, setWaveCastDevicesLoaded] = (0, u.useState)(!1),
                        [isWaveYandexStationCastEnabled, setIsWaveYandexStationCastEnabled] = (0, u.useState)(pulseSyncIsYandexStationCastEnabled()),
                        [isImprovedWaveLayoutEnabled, setIsImprovedWaveLayoutEnabled] = (0, u.useState)(pulseSyncIsImprovedWaveLayoutEnabled()),
                        waveCastControlRef = (0, u.useRef)(null),
                        waveCastCloseTimerRef = (0, u.useRef)(null),
                        w = (0, Y.c)(() => {
                            if (l.entityMeta) {
                                if (d.modal.isOpened) return void d.modal.close();
                                d.modal.open();
                            }
                        });
                    (0, u.useEffect)(() => {
                        if (!l.isGenerativeContext)
                            return (
                                null == v || v.addShortcutsListener(n.Mo.MAIN, n.lbr.TOGGLE_FULLSCREEN_PLAYER, w),
                                null == v || v.addShortcutsListener(n.Mo.MAIN, n.lbr.LIKE, b),
                                null == v || v.addShortcutsListener(n.Mo.MAIN, n.lbr.DISLIKE, A),
                                () => {
                                    null == v || v.removeShortcutsListener(n.Mo.MAIN, n.lbr.TOGGLE_FULLSCREEN_PLAYER),
                                        null == v || v.removeShortcutsListener(n.Mo.MAIN, n.lbr.LIKE),
                                        null == v || v.removeShortcutsListener(n.Mo.MAIN, n.lbr.DISLIKE);
                                }
                            );
                    }, [A, b, v, l.isGenerativeContext, l.entityMeta, w]);
                    (0, u.useEffect)(() => {
                        const e = (e, t, a) => {
                            t === pulseSyncImprovedWaveLayoutSettingKey && setIsImprovedWaveLayoutEnabled(a !== !1);
                        };
                        return window.desktopEvents?.on?.('NATIVE_STORE_UPDATE', e);
                    }, []);
                    (0, u.useEffect)(() => {
                        let e = null == E ? void 0 : E.id,
                            t = null != E && !1 === E.hasSyncLyrics,
                            a = null != E && !0 === E.hasSyncLyrics,
                            i = null == E ? void 0 : E.trackSource,
                            r = !!(null == E ? void 0 : E.isNonMusic),
                            s = !0;
                        try {
                            let e = 'undefined' != typeof window && window.nativeSettings ? window.nativeSettings.get('modSettings.lrclib.useText') : null;
                            !1 === e && (s = !1);
                        } catch (e) {}
                        let o = e && d.syncLyrics.currentTrackId !== e && (t || a || !!(null == E ? void 0 : E.hasLyrics) || 'UGC' === i || (!r && s)),
                            c = getNextQueueTrackMeta(f);
                        lrclibSyncSonataStateRef = f;
                        (o && d.syncLyrics.getData(e), d.syncLyrics.prefetchTrack(c));
                    }, [
                        null == E ? void 0 : E.id,
                        null == E ? void 0 : E.hasSyncLyrics,
                        null == E ? void 0 : E.hasLyrics,
                        null == E ? void 0 : E.trackSource,
                        null == E ? void 0 : E.isNonMusic,
                        d.syncLyrics,
                        f,
                    ]);
                    let L = (0, Y.c)(async (e, t) => {
                            t && (0, eo.P)(t, aj().ripple), await y(l, e);
                        }),
                        M = (0, Y.c)((e) => {
                            (0, eo.P)(e, aj().ripple), A();
                        }),
                        B = (0, Y.c)((e) => {
                            e && !_ && (0, eo.P)(e, aj().ripple), b();
                        }),
                        O = (0, Y.c)(() => {
                            if (s.isAdvertShown) {
                                var e;
                                null == P || null == (e = P.audioAdvertPlayback) || e.togglePause();
                                return;
                            }
                            E ? (null == f || f.togglePause(), j({ actionType: l.isPlaying ? tT.X2.Pause : tT.X2.Play })) : (S(), k(!l.isPlaying));
                        }),
                        F = (0, Y.c)((e) => {
                            (0, eo.P)(e, aj().ripple), C() || O();
                        }),
                        V = (0, et.L)(() =>
                            _
                                ? null
                                : (0, o.jsx)(at.r, {
                                      className: aj().changeVolume,
                                      buttonClassName: aj().button,
                                      verticalSliderClassName: aj().verticalSlider,
                                      variant: at.q.VERTICAL,
                                      sonataVolume: l.volume,
                                      onVolumeSet: l.setVolume,
                                      onVolumeClick: L,
                                      style: !isImprovedWaveLayoutEnabled && isWaveYandexStationCastEnabled ? { marginLeft: 'calc(48px + 0.25rem)' } : void 0,
                                  }),
                        ),
                        K = (0, et.L)(() =>
                            _ && l.isPlaying
                                ? (0, o.jsx)(h.DM, { className: aj().button, isPlaying: l.isPlaying, color: 'secondary', onClick: F })
                                : _ && !l.isPlaying
                                  ? null
                                  : (0, o.jsx)(h._I, { className: aj().button, disabled: !E || s.isAdvertShown, isDisliked: x, onClick: M, iconSize: 'xs' }),
                        ),
                        loadWaveCastDevices = (0, u.useCallback)(async () => {
                            if (!isWaveYandexStationCastEnabled) {
                                setWaveCastDeviceRows([]);
                                setWaveCastDevicesLoaded(!1);
                                setWaveCastDevicesLoading(!1);
                                return;
                            }
                            try {
                                setWaveCastDevicesLoading(!0);
                                const e = await (window.desktopEvents?.invoke?.('YANDEX_STATION_STATE') ?? Promise.resolve(null));
                                pulseSyncApplyYandexStationState(e, {
                                    setActiveSpeakerId: setWaveCastActiveSpeakerId,
                                    setDeviceRows: setWaveCastDeviceRows,
                                    setDevicesLoaded: setWaveCastDevicesLoaded,
                                    setDevicesLoading: setWaveCastDevicesLoading,
                                });
                            } catch (e) {
                                (console.warn('Failed to load Yandex Station cast devices', e),
                                    setWaveCastDeviceRows([]),
                                    setWaveCastDevicesLoaded(!1),
                                    setWaveCastDevicesLoading(!1));
                            }
                        }, [isWaveYandexStationCastEnabled]),
                        closeWaveCastPopover = (0, u.useCallback)(() => {
                            setWaveCastPopoverOpen(!1);
                            clearTimeout(waveCastCloseTimerRef.current);
                            waveCastCloseTimerRef.current = setTimeout(() => {
                                setWaveCastPopoverMounted(!1);
                                setWaveCastHoveredDeviceKey(null);
                            }, 160);
                        }, []),
                        updateWaveCastPopoverShift = (0, u.useCallback)(() => {
                            setWaveCastPopoverShift(pulseSyncGetCastPopoverShift(waveCastControlRef.current));
                        }, []),
                        openWaveCastPopover = (0, u.useCallback)(() => {
                            clearTimeout(waveCastCloseTimerRef.current);
                            setWaveCastPopoverMounted(!0);
                            requestAnimationFrame(() => {
                                updateWaveCastPopoverShift();
                                setWaveCastPopoverOpen(!0);
                            });
                        }, [updateWaveCastPopoverShift]),
                        toggleWaveCastPopover = (0, u.useCallback)(() => {
                            waveCastPopoverOpen ? closeWaveCastPopover() : openWaveCastPopover();
                        }, [waveCastPopoverOpen, closeWaveCastPopover, openWaveCastPopover]),
                        waveCastControl = (0, u.useMemo)(
                            () =>
                              s.isAdvertShown || !isWaveYandexStationCastEnabled
                                    ? null
                                    : (0, o.jsxs)('div', {
                                          ref: waveCastControlRef,
                                          style: { position: 'relative', display: 'flex', alignItems: 'center' },
                                          children: [
                                              (0, o.jsx)(pulseSyncWaveButton, {
                                                      className: aj().button,
                                                      radius: 'round',
                                                      size: 'xxxs',
                                                      variant: 'text',
                                                      withRipple: !1,
                                                      'aria-label': waveFormatMessage({ id: 'player-actions.cast' }),
                                                      icon: waveCastActiveSpeakerId
                                                          ? pulseSyncRenderCastDeviceIcon(
                                                                pulseSyncGetActiveCastDeviceRow(waveCastDeviceRows, waveCastActiveSpeakerId),
                                                                'PulseSync_castPlayerButtonIcon',
                                                            )
                                                          : pulseSyncWaveIcon
                                                            ? (0, o.jsx)(pulseSyncWaveIcon, { variant: 'cast', size: 'xs' })
                                                            : null,
                                                      onClick: toggleWaveCastPopover,
                                                      style: waveCastActiveSpeakerId ? { color: 'var(--ym-controls-color-primary-text-hovered)' } : void 0,
                                                  }),
                                              waveCastPopoverMounted &&
                                                  (0, o.jsx)('div', {
                                                      className: 'PulseSync_castPopover',
                                                      style: {
                                                          opacity: waveCastPopoverOpen ? 1 : 0,
                                                          transform: 'translateX('
                                                              .concat(waveCastPopoverShift, 'px) ')
                                                              .concat(waveCastPopoverOpen ? 'translateY(0)' : 'translateY(10px)'),
                                                          pointerEvents: waveCastPopoverOpen ? 'auto' : 'none',
                                                      },
                                                      children: !waveCastDevicesLoaded
                                                          ? (0, o.jsx)('div', {
                                                                className: 'PulseSync_castPopoverStatus PulseSync_castPopoverStatus_shimmer',
                                                                children: 'Поиск устройств...',
                                                            })
                                                          : (0, o.jsxs)(
                                                                'div',
                                                                {
                                                                    className: 'PulseSync_castPopoverContent',
                                                                    children: [
                                                                        (0, o.jsx)(
                                                                            'div',
                                                                            {
                                                                                className: 'PulseSync_castPopoverStatus PulseSync_castPopoverStatus_refreshing'.concat(
                                                                                    waveCastDevicesLoading ? ' PulseSync_castPopoverStatus_visible' : '',
                                                                                ),
                                                                                children: 'Обновляем список устройств...',
                                                                            },
                                                                            'wave-cast-refreshing',
                                                                        ),
                                                                        waveCastDeviceRows.length
                                                                            ? waveCastDeviceRows.map((e) => {
                                                                                  const t = !e.isThisDevice && !e.canUseLocal,
                                                                                      a = e.isThisDevice
                                                                                          ? void 0
                                                                                          : (e.accountSpeaker?.roomName ?? e.accountSpeaker?.householdName),
                                                                                      i = e.accountSpeaker?.id,
                                                                                      n =
                                                                                          !e.isThisDevice &&
                                                                                          waveCastConnectingSpeakerId === i &&
                                                                                          waveCastActiveSpeakerId !== i,
                                                                                      r =
                                                                                          !e.isThisDevice &&
                                                                                          waveCastConnectionErrorSpeakerId === i &&
                                                                                          waveCastActiveSpeakerId !== i,
                                                                                      d = t || !!waveCastConnectingSpeakerId,
                                                                                      u =
                                                                                          (e.isThisDevice && !waveCastActiveSpeakerId) ||
                                                                                          (!e.isThisDevice && waveCastActiveSpeakerId === i),
                                                                                      _ = e.isThisDevice
                                                                                          ? waveCastActiveSpeakerId
                                                                                              ? 'Отключить колонку'
                                                                                              : 'Сейчас выбрано'
                                                                                          : n
                                                                                            ? 'Подключение...'
                                                                                            : r
                                                                                              ? 'Ошибка подключения'
                                                                                              : waveCastActiveSpeakerId === i
                                                                                                ? 'Подключено'
                                                                                                : e.canUseLocal
                                                                                                  ? 'В сети'
                                                                                                  : 'Вне локальной сети',
                                                                                      m = e.isThisDevice
                                                                                          ? 'pulse-sync-wave-this-device'
                                                                                          : (e.accountSpeaker?.id ?? e.accountSpeaker?.name ?? e.localSpeaker?.deviceId);
                                                                                  return (0, o.jsxs)('button', {
                                                                                          key: m,
                                                                                          type: 'button',
                                                                                          className: 'PulseSync_castPopoverItem'.concat(
                                                                                              u || (!d && waveCastHoveredDeviceKey === m) ? ' PulseSync_castPopoverItem_active' : '',
                                                                                          ),
                                                                                          disabled: d,
                                                                                          onClick: d
                                                                                              ? void 0
                                                                                              : async () => {
                                                                                                    if (e.isThisDevice) {
                                                                                                        window.pulseSyncYandexStationCast?.clear
                                                                                                            ? await window.pulseSyncYandexStationCast.clear()
                                                                                                            : await window.desktopEvents?.invoke?.('YANDEX_STATION_CLEAR_SPEAKER');
                                                                                                        setWaveCastActiveSpeakerId(null);
                                                                                                        setWaveCastConnectingSpeakerId(null);
                                                                                                        setWaveCastConnectionErrorSpeakerId(null);
                                                                                                        closeWaveCastPopover();
                                                                                                        return;
                                                                                                    }
                                                                                                    const t = e.accountSpeaker?.id;
                                                                                                    if (!t) return;
                                                                                                    setWaveCastConnectingSpeakerId(t);
                                                                                                    setWaveCastConnectionErrorSpeakerId(null);
                                                                                                    try {
                                                                                                        const e = await pulseSyncSelectYandexStationSpeaker(t);
                                                                                                        e?.ok
                                                                                                            ? (setWaveCastActiveSpeakerId(t),
                                                                                                              setWaveCastConnectionErrorSpeakerId(null),
                                                                                                              closeWaveCastPopover())
                                                                                                            : (setWaveCastConnectionErrorSpeakerId(t),
                                                                                                              console.warn('Failed to select Yandex Station cast device', e));
                                                                                                    } catch (e) {
                                                                                                        setWaveCastConnectionErrorSpeakerId(t);
                                                                                                        console.warn('Failed to select Yandex Station cast device', e);
                                                                                                    } finally {
                                                                                                        setWaveCastConnectingSpeakerId(null);
                                                                                                    }
                                                                                                },
                                                                                          onMouseEnter: d ? void 0 : () => setWaveCastHoveredDeviceKey(m),
                                                                                          onMouseLeave: d ? void 0 : () => setWaveCastHoveredDeviceKey(null),
                                                                                          children: [
                                                                                              pulseSyncRenderCastDeviceIcon(e),
                                                                                              (0, o.jsx)('div', {
                                                                                                  style: {
                                                                                                      display: 'flex',
                                                                                                      alignItems: 'flex-start',
                                                                                                      flexDirection: 'column',
                                                                                                      minWidth: 0,
                                                                                                      flex: '1 1 auto',
                                                                                                  },
                                                                                                  children: [
                                                                                                      (0, o.jsx)('span', {
                                                                                                          style: {
                                                                                                              display: 'flex',
                                                                                                              gap: '5px',
                                                                                                              alignItems: 'baseline',
                                                                                                              minWidth: 0,
                                                                                                              maxWidth: '100%',
                                                                                                          },
                                                                                                          children: [
                                                                                                              (0, o.jsx)('span', {
                                                                                                                  className: 'PulseSync_castPopoverItemTitle',
                                                                                                                  children: e.isThisDevice
                                                                                                                      ? 'Это устройство'
                                                                                                                      : (e.accountSpeaker?.name ?? e.accountSpeaker?.id ?? 'Yandex Station'),
                                                                                                              }),
                                                                                                              a &&
                                                                                                                  (0, o.jsx)('span', {
                                                                                                                      className:
                                                                                                                          'PulseSync_castPopoverItemMeta PulseSync_castPopoverItemRoom',
                                                                                                                      children: (0, o.jsx)('span', {
                                                                                                                          className: 'PulseSync_castPopoverItemRoomText',
                                                                                                                          children: a,
                                                                                                                      }),
                                                                                                                  }),
                                                                                                          ],
                                                                                                      }),
                                                                                                      (0, o.jsx)('span', {
                                                                                                          className: 'PulseSync_castPopoverItemMeta'
                                                                                                              .concat(n ? ' PulseSync_castPopoverItemMeta_shimmer' : '')
                                                                                                              .concat(r ? ' PulseSync_castPopoverItemMeta_error' : ''),
                                                                                                          children: _,
                                                                                                      }),
                                                                                                  ],
                                                                                              }),
                                                                                              u &&
                                                                                                  (0, o.jsx)('span', {
                                                                                                      children: (0, o.jsx)('svg', {
                                                                                                          width: '16',
                                                                                                          height: '16',
                                                                                                          fill: 'currentColor',
                                                                                                          xmlns: 'http://www.w3.org/2000/svg',
                                                                                                          children: (0, o.jsx)('path', {
                                                                                                              d: 'M6.5 11.5l-3.5-3.5 1.4-1.4L6.5 8.7l5.1-5.1 1.4 1.4z',
                                                                                                          }),
                                                                                                      }),
                                                                                                  }),
                                                                                          ],
                                                                                      });
                                                                              })
                                                                            : (0, o.jsx)('div', { className: 'PulseSync_castPopoverStatus', children: 'Устройства не найдены' }, 'wave-cast-empty'),
                                                                    ],
                                                                },
                                                                'wave-cast-content',
                                                            ),
                                                  }),
                                          ],
                                      }),
                            [
                                s.isAdvertShown,
                                isWaveYandexStationCastEnabled,
                                waveFormatMessage,
                                toggleWaveCastPopover,
                                closeWaveCastPopover,
                                waveCastActiveSpeakerId,
                                waveCastPopoverOpen,
                                waveCastPopoverMounted,
                                waveCastPopoverShift,
                                waveCastDevicesLoading,
                                waveCastDevicesLoaded,
                                waveCastDeviceRows,
                                waveCastHoveredDeviceKey,
                                waveCastConnectingSpeakerId,
                                waveCastConnectionErrorSpeakerId,
                            ],
                        );
                    let waveSyncLyricsAvailable = (0, u.useMemo)(
                            () =>
                                !!(null == E ? void 0 : E.isSyncLyricsAvailable) ||
                                !!(null == E ? void 0 : E.isSyncLyricsAvailableWithOfflineFeature) ||
                                !!(null == E ? void 0 : E.hasSyncLyrics) ||
                                !!(null == E ? void 0 : E.hasLyrics) ||
                                (!!(null == E ? void 0 : E.id) && d.syncLyrics.hasLyricsForTrack(null == E ? void 0 : E.id)),
                            [
                                null == E ? void 0 : E.id,
                                null == E ? void 0 : E.isSyncLyricsAvailable,
                                null == E ? void 0 : E.isSyncLyricsAvailableWithOfflineFeature,
                                null == E ? void 0 : E.hasSyncLyrics,
                                null == E ? void 0 : E.hasLyrics,
                                d.syncLyrics.currentTrackId,
                                d.syncLyrics.lines,
                                d.syncLyrics.isResolved,
                            ],
                        ),
                        openWaveSyncLyrics = (0, Y.c)(() => {
                            d.showSyncLyrics(), screenNavigation({ to: tT.QT.PlayerScreen });
                        }),
                        waveSyncLyricsControl = (0, u.useMemo)(() => {
                            let e = ''
                                .concat(waveFormatMessage({ id: 'interface-actions.open-sync-lyrics' }), ' ')
                                .concat(waveFormatMessage({ id: 'warning-messages.can-break-accessibility' }));
                            return (null == E ? void 0 : E.isNonMusic) || s.isAdvertShown || !pulseSyncWaveButton
                                ? null
                                : (0, o.jsx)(pulseSyncWaveButton, {
                                      className: aj().button,
                                      radius: 'round',
                                      size: 'xxxs',
                                      variant: 'text',
                                      disabled: !waveSyncLyricsAvailable || l.isGenerativeContext,
                                      'aria-hidden': !waveSyncLyricsAvailable,
                                      withRipple: !1,
                                      'aria-label': e,
                                      icon: pulseSyncWaveIcon ? (0, o.jsx)(pulseSyncWaveIcon, { variant: 'syncLyrics', size: 'xs' }) : null,
                                      onClick: openWaveSyncLyrics,
                                  });
                        }, [waveFormatMessage, null == E ? void 0 : E.isNonMusic, s.isAdvertShown, waveSyncLyricsAvailable, l.isGenerativeContext, openWaveSyncLyrics]),
                        waveExtraControl = isImprovedWaveLayoutEnabled ? (isWaveYandexStationCastEnabled ? waveCastControl : waveSyncLyricsControl) : waveCastControl;
                    let waveProgressStyle = { '--track-progress': ''.concat(W, '%') };
                    (0, u.useEffect)(() => {
                        void loadWaveCastDevices();
                    }, [loadWaveCastDevices]);
                    (0, u.useEffect)(() => {
                        const e = (e, t) => {
                            pulseSyncApplyYandexStationState(t, {
                                setActiveSpeakerId: setWaveCastActiveSpeakerId,
                                setDeviceRows: setWaveCastDeviceRows,
                                setDevicesLoaded: setWaveCastDevicesLoaded,
                                setDevicesLoading: setWaveCastDevicesLoading,
                            });
                        };
                        return window.desktopEvents?.on?.('YANDEX_STATION_STATE', e);
                    }, []);
                    (0, u.useEffect)(() => {
                        const e = (e) => {
                            setWaveCastActiveSpeakerId(e.detail?.activeSpeakerId ?? null);
                        };
                        return (
                            window.addEventListener('pulse-sync-yandex-station-cast-change', e),
                            () => {
                                window.removeEventListener('pulse-sync-yandex-station-cast-change', e);
                            }
                        );
                    }, []);
                    (0, u.useEffect)(() => {
                        const e = (e) => {
                            const t = e.detail?.enabled ?? pulseSyncIsYandexStationCastEnabled();
                            setIsWaveYandexStationCastEnabled(t);
                            t ? (setWaveCastDevicesLoaded(!1), void loadWaveCastDevices()) : (closeWaveCastPopover(), setWaveCastDeviceRows([]), setWaveCastActiveSpeakerId(null), setWaveCastDevicesLoaded(!1), setWaveCastDevicesLoading(!1));
                        };
                        return (
                            window.addEventListener('pulse-sync-yandex-station-cast-setting-change', e),
                            () => {
                                window.removeEventListener('pulse-sync-yandex-station-cast-setting-change', e);
                            }
                        );
                    }, [closeWaveCastPopover, loadWaveCastDevices]);
                    (0, u.useEffect)(() => () => clearTimeout(waveCastCloseTimerRef.current), []);
                    (0, u.useEffect)(() => {
                        if (!waveCastPopoverMounted) return;
                        const e = (e) => {
                            waveCastControlRef.current?.contains?.(e.target) || closeWaveCastPopover();
                        };
                        return (
                            document.addEventListener('pointerdown', e, !0),
                            () => {
                                document.removeEventListener('pointerdown', e, !0);
                            }
                        );
                    }, [waveCastPopoverMounted, closeWaveCastPopover]);
                    (0, u.useEffect)(() => {
                        if (!waveCastPopoverMounted) return;
                        const e = () => updateWaveCastPopoverShift();
                        return (
                            updateWaveCastPopoverShift(),
                            window.addEventListener('resize', e),
                            () => {
                                window.removeEventListener('resize', e);
                            }
                        );
                    }, [waveCastPopoverMounted, updateWaveCastPopoverShift]);
                    return (0, o.jsxs)('section', {
                        role: 'region',
                        'aria-label': waveFormatMessage({ id: 'a11y-regions.player' }),
                        className: aj().root,
                        style: waveProgressStyle,
                        ...(0, D.Am)(D.e8.player.VIBE_PLAYERBAR),
                        children: [
                            (0, o.jsx)(ak, { album: T, hoveredButtonClassName: i }),
                            (0, o.jsxs)('div', {
                                className: (0, c.$)(aj().progress, { [aj().progress_visible]: !I }),
                                style: waveProgressStyle,
                                children: [
                                    isImprovedWaveLayoutEnabled &&
                                        pulseSyncWaveButton &&
                                        (0, o.jsx)(pulseSyncWaveButton, {
                                            className: aj().button,
                                            radius: 'round',
                                            size: 'xxxs',
                                            variant: 'text',
                                            disabled: !E || l.isGenerativeContext || s.isAdvertShown,
                                            withRipple: !1,
                                            'aria-label': waveFormatMessage({ id: 'player-actions.fullscreen-button' }),
                                            icon: pulseSyncWaveIcon ? (0, o.jsx)(pulseSyncWaveIcon, { variant: 'fullscreen', size: 'xs' }) : null,
                                            onClick: w,
                                        }),
                                    V,
                                    K,
                                    (0, o.jsx)(aK, {}),
                                    (0, o.jsx)(h.cy, {
                                        className: (0, c.$)(aj().button, { [aj().likeButton_mobilePaused]: _ && !l.isPlaying }),
                                        disabled: !E || s.isAdvertShown,
                                        isLiked: g,
                                        onClick: B,
                                        iconSize: 'xs',
                                    }),
                                    waveExtraControl,
                                    !_ && (0, o.jsx)(aT, { buttonClassName: (0, c.$)(aj().button, aj().important), ...(0, D.Am)(D.e8.player.VIBE_CONTEXT_MENU_BUTTON) }),
                                    (0, o.jsx)(t4, {}),
                                ],
                            }),
                        ],
                    });
                });
            var aU = a(6054),
                aW = a.n(aU);
            let aG = (0, d.PA)((e) => {
                let { className: t } = e,
                    {
                        advert: a,
                        user: r,
                        paywall: { modal: l },
                    } = (0, n.Pjs)(),
                    s = a.isAdvertDisabled(n.fDi.VIDEO),
                    { notify: d, dismiss: _ } = (0, n.lkh)(),
                    { formatMessage: v } = (0, R.A)(),
                    g = (0, n.zwV)(),
                    b = (0, n.rs2)(),
                    [A, f] = (0, u.useState)(!1),
                    C = (0, u.useRef)(null),
                    k = (0, u.useCallback)(
                        (e) => {
                            e.stopPropagation(), e.preventDefault(), l.open(), f(!0), null == b || b.pauseVideoAdvert(), _();
                        },
                        [b, _, l],
                    );
                (0, u.useEffect)(() => {
                    A && !l.isOpened && (f(!1), null == b || b.resumeVideoAdvert());
                }, [b, A, l.isOpened]);
                let P = (0, u.useCallback)(() => {
                    d(
                        (0, o.jsx)(h.$W, {
                            className: aW().notify,
                            message: (0, o.jsx)(y.Caption, {
                                className: aW().text,
                                variant: 'div',
                                type: 'controls',
                                size: 'm',
                                children: (0, o.jsx)(m.A, { id: 'ads.notification' }),
                            }),
                            cover: (0, o.jsx)(F.Icon, { className: aW().icon, variant: 'plusColor' }),
                            coverRadius: 'round',
                            withDefaultCloseButton: !1,
                            coverClassName: (0, c.$)(aW().cover, aW().important),
                            closeButton: (0, o.jsx)(p.$, {
                                className: aW().notifyClose,
                                variant: 'text',
                                color: 'primary',
                                size: 'xxs',
                                onClick: k,
                                withRipple: !1,
                                ref: C,
                                'data-intersection-property-id': 'video-ad-button',
                                children: (0, o.jsx)(m.A, { id: 'ads.disable-ads' }),
                            }),
                        }),
                        { containerId: n.uQT.AD_INFO },
                    );
                }, [k, d]);
                if (
                    ((0, u.useEffect)(() => {
                        if (!r.hasPlus && !s)
                            return (
                                null == g ||
                                    g.addShortcutsListener(n.Mo.MAIN, n.lbr.CLOSE, () => {
                                        a.isAdvertShown && a.isVideoAdvert && P();
                                    }),
                                () => {
                                    null == g || g.removeShortcutsListener(n.Mo.MAIN, n.lbr.CLOSE);
                                }
                            );
                    }, [P, g, a.isAdvertShown, a.isVideoAdvert, r.hasPlus, s]),
                    r.hasPlus || s)
                )
                    return;
                let N = a.isAdvertShown && a.isVideoAdvert;
                return (0, o.jsxs)(o.Fragment, {
                    children: [
                        (0, o.jsx)(V.a, {
                            className: (0, c.$)(aW().root, { [aW().root_hidden]: !N }, t),
                            contentClassName: aW().content,
                            placement: 'center',
                            showHeader: !1,
                            closeOnOutsidePress: !1,
                            escapeKey: !1,
                            withOverlay: N,
                            open: !0,
                            lockScroll: N,
                            overlayColor: 'full',
                            disableGuards: !N,
                            disableFocusTrap: !N,
                            ...(0, D.Am)(D.e8.ad.VIDEO_AD),
                            children: (0, o.jsxs)(o.Fragment, {
                                children: [
                                    (0, o.jsx)(p.$, {
                                        className: aW().close,
                                        radius: 'round',
                                        color: 'secondary',
                                        size: 'xxs',
                                        icon: (0, o.jsx)(F.Icon, { variant: 'close', size: 'xxs' }),
                                        onClick: P,
                                        'aria-label': v({ id: 'interface-actions.close-ad' }),
                                        withRipple: !1,
                                    }),
                                    (0, o.jsx)(x, {
                                        data: a.data,
                                        mediaContent: (0, o.jsx)('div', {
                                            className: aW().videoBlock,
                                            id: i.SLOT,
                                            children: (0, o.jsx)('video', { id: i.VIDEO, className: aW().video }),
                                        }),
                                    }),
                                ],
                            }),
                        }),
                        (0, o.jsx)(K.Notification, { enableMultiContainer: !0, containerId: n.uQT.AD_INFO, position: 'bottom-center' }),
                    ],
                });
            });
            aG.displayName = 'VideoAd';
        },
        51776: (e) => {
            e.exports = {
                root: 'PlayingNow_root__0lQa8',
                textBlock: 'PlayingNow_textBlock___CfRh',
                title: 'PlayingNow_title__82csz',
                subTitle: 'PlayingNow_subTitle__JNJfh',
                link: 'PlayingNow_link__4gLK9',
            };
        },
        51947: (e, t, a) => {
            'use strict';
            a.d(t, { Td: () => A, p3: () => D, Ho: () => c });
            var i = a(60754),
                n = a(33797),
                r = a(49574),
                l = a(95428),
                s = a(92708);
            let o = i.gK.model('WizardGenre', { id: i.gK.string, title: i.gK.string }),
                c = i.gK
                    .model('Wizard', {
                        loadingState: i.gK.enumeration(Object.values(r.GuX)),
                        modal: l.qt,
                        introModal: l.qt,
                        genres: i.gK.array(o),
                        artistsByGenres: i.gK.maybe(i.gK.frozen()),
                        savedLikedArtists: i.gK.array(i.gK.string),
                        likedArtists: i.gK.array(i.gK.string),
                        unlikedArtists: i.gK.array(i.gK.string),
                        filter: i.gK.maybe(i.gK.string),
                    })
                    .views((e) => ({
                        get genreItem() {
                            var t;
                            return null == (t = e.artistsByGenres) ? void 0 : t.get(e.filter);
                        },
                        get artistsByGenre() {
                            var a;
                            return (null == (a = this.genreItem) ? void 0 : a.artists) || [];
                        },
                        get selectedArtistsCounter() {
                            return e.likedArtists.length + e.savedLikedArtists.length - e.unlikedArtists.length;
                        },
                        isArtistLiked: (t) => !e.unlikedArtists.includes(t) && (e.likedArtists.includes(t) || e.savedLikedArtists.includes(t)),
                    }))
                    .actions((e) => ({
                        likeArtist: (t) => {
                            let { likedArtists: a, unlikedArtists: n, savedLikedArtists: r } = e,
                                l = ((e) => {
                                    let { id: t, likedArtists: a, unlikedArtists: i, savedLikedArtists: n } = e,
                                        r = {};
                                    if (a.includes(t)) return (r.likedArtists = a.filter((e) => e !== t)), r;
                                    let l = n.includes(t),
                                        s = i.includes(t);
                                    return ((r.unlikedArtists = i.filter((e) => e !== t)), l && !s) ? r.unlikedArtists.push(t) : (r.likedArtists = [...a, t]), r;
                                })({ id: t, likedArtists: a, unlikedArtists: n, savedLikedArtists: r });
                            l.likedArtists && (e.likedArtists = (0, i.wg)(l.likedArtists)), l.unlikedArtists && (e.unlikedArtists = (0, i.wg)(l.unlikedArtists));
                        },
                        setFilter: (t) => {
                            e.filter = t;
                        },
                        getGenres: (0, i.L3)(function* () {
                            let { feedResource: t, modelActionsLogger: a } = (0, i._$)(e);
                            if (e.loadingState !== r.GuX.PENDING && e.loadingState !== r.GuX.RESOLVE)
                                try {
                                    var n;
                                    e.loadingState = r.GuX.PENDING;
                                    let { genres: a } = yield t.getWizardGenres();
                                    if (((e.genres = (0, i.wg)(a.map((e) => ({ id: e.id, title: e.title })))), !a.length))
                                        throw Error("The wizard's genre array is empty");
                                    (e.filter = null == (n = a[0]) ? void 0 : n.id),
                                        (e.artistsByGenres = (0, i.wg)(
                                            ((e) => {
                                                let t = new Map();
                                                return (
                                                    e.map((e) => {
                                                        t.set(e.id, { loadingState: r.GuX.IDLE, artists: [], showedArtists: [] });
                                                    }),
                                                    s.sH.map(t)
                                                );
                                            })(a),
                                        )),
                                        e.loadingState !== r.GuX.IDLE && (e.loadingState = r.GuX.RESOLVE);
                                } catch (t) {
                                    a.error(t), e.loadingState !== r.GuX.IDLE && (e.loadingState = r.GuX.REJECT);
                                }
                        }),
                        getArtists: (0, i.L3)(function* (t) {
                            let { feedResource: a, modelActionsLogger: l } = (0, i._$)(e);
                            if (e.loadingState !== r.GuX.RESOLVE || !e.filter) return;
                            let s = e.artistsByGenres.get(e.filter);
                            if (s.loadingState !== r.GuX.PENDING)
                                try {
                                    s.loadingState = r.GuX.PENDING;
                                    let { artists: l = [], likedArtists: o = [] } = yield a.getWizardArtistsByGenre({
                                            genre: e.filter,
                                            showedArtists: s.showedArtists,
                                            likedArtists: e.likedArtists,
                                            unlikedArtists: e.unlikedArtists,
                                            countOfNewArtists: t,
                                        }),
                                        c = l.map((e) => (0, n.as)({ artist: e })),
                                        d = l.map((e) => e.id);
                                    e.artistsByGenres.set(e.filter, {
                                        artists: [...s.artists, ...c],
                                        showedArtists: [...s.showedArtists, ...d],
                                        loadingState: r.GuX.RESOLVE,
                                    }),
                                        (e.savedLikedArtists = (0, i.wg)(o.map((e) => String(e)))),
                                        (e.likedArtists = (0, i.wg)([])),
                                        (e.unlikedArtists = (0, i.wg)([]));
                                } catch (e) {
                                    l.error(e), (s.loadingState = r.GuX.REJECT);
                                }
                        }),
                        finish: (0, i.L3)(function* () {
                            let { feedResource: t, modelActionsLogger: a } = (0, i._$)(e);
                            if (!e.filter) return r.FlZ.ERROR;
                            try {
                                return yield t.finishWizard({ genre: e.filter, likedArtists: e.likedArtists, unlikedArtists: e.unlikedArtists }), r.FlZ.OK;
                            } catch (e) {
                                return a.error(e), r.FlZ.ERROR;
                            }
                        }),
                    }));
            var d = a(32290),
                u = a(63618),
                _ = a(96103),
                m = a(60900),
                p = a(91027),
                v = a(63423),
                y = a(50162),
                h = a(84638),
                g = a(71926),
                b = a(10598),
                x = a.n(b);
            let A = (0, _.PA)(() => {
                let {
                        wizard: e,
                        settings: { isMobile: t },
                    } = (0, r.Pjs)(),
                    { formatMessage: a } = (0, m.A)(),
                    i = (0, p.c)(() => {
                        e.introModal.close(), e.modal.open();
                    });
                return (0, d.jsxs)(h.a, {
                    className: (0, u.$)((0, r.JH_)(r.Sxu.Dark), x().root, { [x().root_mobile]: t }),
                    headerClassName: x().header,
                    contentClassName: x().content,
                    size: 'fitContent',
                    placement: t ? 'default' : 'center',
                    enableSwipe: t,
                    overlayColor: 'full',
                    labelClose: a({ id: 'interface-actions.close' }),
                    open: e.introModal.isOpened,
                    onOpenChange: e.introModal.onOpenChange,
                    onClose: e.introModal.close,
                    children: [
                        (0, d.jsx)(y.Image, {
                            src: 'avatars.mds.yandex.net/get-music-misc/70850/img.6a15a60535ffcf283a9da9e0/%%',
                            srcSet: ''.concat('avatars.mds.yandex.net/get-music-misc/70683/img.6a15a60f5d36c3160a7fb52a/%%', ' 2x'),
                            className: x().image,
                            size: 375,
                            withAvatarReplace: !0,
                            withAspectRatio: !0,
                            fit: 'contain',
                            alt: '',
                            'aria-hidden': !0,
                        }),
                        (0, d.jsxs)('div', {
                            className: x().text,
                            children: [
                                (0, d.jsx)(g.Heading, { variant: 'h2', size: 'xl', className: x().title, children: a({ id: 'wizard.title' }) }),
                                (0, d.jsx)(g.Caption, { variant: 'span', size: 'm', className: x().description, children: a({ id: 'wizard.description' }) }),
                            ],
                        }),
                        (0, d.jsx)(v.$, { className: x().button, color: 'primary', size: 'm', radius: 'xxxl', onClick: i, children: a({ id: 'wizard.buttonText' }) }),
                    ],
                });
            });
            var f = a(55178),
                C = a(39407),
                k = a(59824),
                P = a(54862),
                N = a(15299),
                j = a(44574),
                S = a(14934),
                E = a(82586),
                T = a(86269);
            let I = { src: '/_next/static/media/artist.c49b2bfa.png' };
            var w = a(22800),
                L = a.n(w);
            let M = (0, _.PA)((e) => {
                let { className: t, artist: a } = e,
                    { ref: i, intersectionPropertyId: n } = (0, r.nMI)(),
                    {
                        wizard: { likeArtist: l, isArtistLiked: s },
                    } = (0, r.Pjs)(),
                    { id: o, name: c, coverUri: _ } = a,
                    m = (0, f.useCallback)(() => {
                        l(o);
                    }, [l, o]),
                    p = s(o),
                    y = (0, f.useMemo)(
                        () =>
                            (0, d.jsx)(T.Paper, {
                                className: L().cover,
                                radius: 'round',
                                ...(0, k.Am)(k.e8.wizard.ARTIST_CARD),
                                children: (0, d.jsxs)(v.$, {
                                    radius: 'round',
                                    className: L().coverBlock,
                                    variant: 'default',
                                    onClick: m,
                                    withRipple: !1,
                                    withHover: !1,
                                    'aria-pressed': p,
                                    'aria-label': c,
                                    ...(0, k.Am)(k.e8.wizard.ARTIST_CARD_BUTTON),
                                    children: [
                                        (0, d.jsx)(j.BW, { className: L().image, src: _ || I.src, fit: 'cover', alt: c, withAvatarReplace: !!_, 'aria-hidden': !0 }),
                                        (0, d.jsx)('div', {
                                            className: (0, u.$)(L().like),
                                            children: (0, d.jsx)(E.Icon, { variant: 'likedVariant', size: 's', className: L().icon }),
                                        }),
                                    ],
                                }),
                            }),
                        [p, _, c, m],
                    );
                return (0, d.jsx)(S.MN, {
                    ref: i,
                    className: (0, u.$)(L().root, { [L().root_selected]: p }, t),
                    textPosition: 'center',
                    title: (0, d.jsx)(g.Caption, {
                        'aria-hidden': !0,
                        className: L().name,
                        variant: 'div',
                        type: 'entity',
                        size: 'l',
                        weight: 'medium',
                        lineClamp: 2,
                        ...(0, k.Am)(k.e8.wizard.ARTIST_CARD_NAME),
                        children: c,
                    }),
                    'data-intersection-property-id': n,
                    view: y,
                    ...(0, k.Am)(k.Kq.artist.ARTIST_ITEM),
                });
            });
            var B = a(6680),
                O = a.n(B);
            let R = { [r.u40.Desktop]: { start: 40, end: 40 }, [r.u40.Mobile]: { start: 40, end: 40 } },
                D = (0, _.PA)(() => {
                    let { formatMessage: e } = (0, m.A)(),
                        {
                            wizard: t,
                            settings: { isMobile: a, isWindowsApplication: i, isLinuxApplication: n },
                            user: l,
                        } = (0, r.Pjs)(),
                        { notify: s } = (0, r.lkh)(),
                        o = (0, r.zwV)(),
                        [c, _] = (0, P.d)(),
                        p = (0, r.RpR)(),
                        y = (0, N.useTabsState)(0),
                        b = (0, f.useMemo)(
                            () => (e) => {
                                var a;
                                if (!y.onTabChange || e === y.value) return;
                                y.onTabChange(e);
                                let i = null == (a = t.genres[e]) ? void 0 : a.id;
                                t.setFilter(i), null == c || c.scrollTo({ top: 0 });
                            },
                            [t, y, c],
                        ),
                        x = (0, f.useMemo)(() => {
                            switch (t.selectedArtistsCounter) {
                                case 0:
                                    return e({ id: 'wizard.button-tune' });
                                case 1:
                                    return e({ id: 'wizard.button-little-more' });
                                case 2:
                                    return e({ id: 'wizard.button-one-more' });
                                default:
                                    return e({ id: 'wizard.button-done' });
                            }
                        }, [t.selectedArtistsCounter, e]),
                        A = (0, f.useMemo)(
                            () =>
                                (0, d.jsx)(j.wI, {
                                    className: O().tabCarousel,
                                    ...y,
                                    onTabChange: b,
                                    isShimmerVisible: t.loadingState === r.GuX.PENDING,
                                    shimmer: (0, d.jsx)(j.zr, { isActive: !0, className: O().tabCarousel, shimmerClassName: O().tabShimmer, count: a ? 2 : 3 }),
                                    children: t.genres.map((e, t) =>
                                        (0, d.jsx)(
                                            j.oz,
                                            {
                                                className: (0, u.$)(O().filter, { [O().filter_selected]: t === y.value }),
                                                titleClassName: O().tabTitle,
                                                title: e.title,
                                                value: t,
                                            },
                                            t,
                                        ),
                                    ),
                                }),
                            [t.genres, y, b, t.loadingState, a],
                        ),
                        S = (0, f.useCallback)(() => {
                            t.getArtists(60);
                        }, [t]);
                    (0, f.useEffect)(() => {
                        t.filter && S();
                    }, [t.filter, S]);
                    let E = (0, f.useCallback)(async () => {
                        await t.getGenres(), S();
                    }, [t, S]);
                    (0, f.useEffect)(() => {
                        t.modal.isOpened && E();
                    }, [t, t.modal.isOpened, E]),
                        (0, f.useEffect)(() => {
                            t.loadingState === r.GuX.REJECT &&
                                (t.modal.close(), s((0, d.jsx)(j.hT, { error: e({ id: 'error-messages.error-load-wizard' }) }), { containerId: r.uQT.ERROR }));
                        }, [t, t.getGenres, t.loadingState, e, s]);
                    let T = (0, f.useMemo)(
                            () =>
                                (0, d.jsx)(g.Heading, {
                                    className: O().title,
                                    weight: 'bold',
                                    variant: 'h1',
                                    size: 'l',
                                    ...(0, k.Am)(k.e8.wizard.WIZARD_MODAL_TITLE),
                                    children: (0, d.jsx)(C.A, { id: 'wizard.modal-title' }),
                                }),
                            [],
                        ),
                        I = (0, f.useCallback)(async () => {
                            t.selectedArtistsCounter < 3 ? t.getArtists() : (await t.finish()) === r.FlZ.OK && (await l.getSettings(), p()), t.modal.close();
                        }, [p, l, t]);
                    return (
                        (0, f.useEffect)(
                            () => (
                                null == o ||
                                    o.addShortcutsListener(r.Mo.MAIN, r.lbr.CLOSE, () => {
                                        t.modal.isOpened && I();
                                    }),
                                () => {
                                    null == o || o.removeShortcutsListener(r.Mo.MAIN, r.lbr.CLOSE);
                                }
                            ),
                            [I, t.modal.isOpened, o],
                        ),
                        (0, d.jsxs)(h.a, {
                            className: (0, u.$)(O().root, { [O().root_withCustomControls]: i || n }),
                            headerClassName: O().modalHeader,
                            contentClassName: O().modalContent,
                            open: t.modal.isOpened,
                            onOpenChange: t.modal.onOpenChange,
                            onClose: I,
                            size: 'fullscreen',
                            placement: 'center',
                            labelClose: e({ id: 'interface-actions.close' }),
                            closeButtonProps: (0, k.Am)(k.e8.wizard.WIZARD_MODAL_CLOSE_BUTTON),
                            ...(0, k.Am)(k.e8.wizard.WIZARD_MODAL),
                            header: a && T,
                            escapeKey: !1,
                            children: [
                                (0, d.jsxs)('div', {
                                    className: O().wrapper,
                                    children: [
                                        !a && T,
                                        (0, d.jsx)(g.Caption, {
                                            className: O().text,
                                            variant: 'div',
                                            size: 'l',
                                            weight: 'normal',
                                            ...(0, k.Am)(k.e8.wizard.WIZARD_MODAL_TEXT),
                                            children: (0, d.jsx)(C.A, { id: 'wizard.modal-text' }),
                                        }),
                                        (0, d.jsx)(v.$, {
                                            className: O().button,
                                            size: a ? 'm' : 'l',
                                            iconPosition: 'right',
                                            radius: 'xxxl',
                                            color: 'primary',
                                            onClick: I,
                                            disabled: t.selectedArtistsCounter < 3,
                                            ...(0, k.Am)(k.e8.wizard.WIZARD_MODAL_BUTTON),
                                            children: (0, d.jsx)(g.Caption, { variant: 'div', size: 'm', weight: 'medium', children: x }),
                                        }),
                                    ],
                                }),
                                (0, d.jsxs)('div', {
                                    className: O().mainContainer,
                                    children: [
                                        (0, d.jsx)(j.FY, { className: O().carousel, carouselElement: A, scrollPadding: R }),
                                        (0, d.jsx)(j.$$, {
                                            withFooter: !1,
                                            className: (0, u.$)(O().scrollContainer, O().important),
                                            itemContentCallback: (a) => {
                                                let i = t.artistsByGenre[a];
                                                if (!i) {
                                                    let t = e({ id: 'loading-messages.entity-is-loading' }, { entityName: e({ id: 'entity-names.artist' }) });
                                                    return (0, d.jsx)(j.Vt, { 'aria-label': t, round: !0, centered: !0 });
                                                }
                                                return (0, d.jsx)(M, { artist: i }, i.id);
                                            },
                                            data: t.artistsByGenre,
                                            endReached: S,
                                            listClassName: O().content,
                                            itemClassName: O().item,
                                            pageSize: 60,
                                            handleRef: _,
                                            ...(0, k.Am)(k.e8.wizard.WIZARD_MODAL_ARTISTS_GRID),
                                        }),
                                    ],
                                }),
                            ],
                        })
                    );
                });
        },
        52930: (e) => {
            e.exports = { root: 'SyncLyricsLine_root__r62BN' };
        },
        53255: (e) => {
            e.exports = { root: 'VibeDynamicArtists_root__Wbigy' };
        },
        53512: (e, t, a) => {
            'use strict';
            a.d(t, { T: () => n });
            var i = a(71483);
            function n(e) {
                return (null == e ? void 0 : e.data.type) === i.K.Artist;
            }
        },
        55165: (e) => {
            e.exports = {
                root: 'PlayerBarDesktopWithBackgroundProgressBar_root__bpmwN',
                important: 'PlayerBarDesktopWithBackgroundProgressBar_important__HzXrK',
                ripple: 'PlayerBarDesktopWithBackgroundProgressBar_ripple__FcmrF',
                progressBar: 'PlayerBarDesktopWithBackgroundProgressBar_progressBar___Q6eK',
                slider: 'PlayerBarDesktopWithBackgroundProgressBar_slider__SezFn',
                player: 'PlayerBarDesktopWithBackgroundProgressBar_player__ASKKs',
                playerBar: 'PlayerBarDesktopWithBackgroundProgressBar_playerBar__mp0p9',
                info: 'PlayerBarDesktopWithBackgroundProgressBar_info__YnvZ_',
                infoCard: 'PlayerBarDesktopWithBackgroundProgressBar_infoCard__i0cbW',
                coverContainer: 'PlayerBarDesktopWithBackgroundProgressBar_coverContainer__dkNCG',
                cover: 'PlayerBarDesktopWithBackgroundProgressBar_cover__MKmEt',
                description: 'PlayerBarDesktopWithBackgroundProgressBar_description__5jHke',
                artists: 'PlayerBarDesktopWithBackgroundProgressBar_artists__wKsF6',
                artistLink: 'PlayerBarDesktopWithBackgroundProgressBar_artistLink__l9Bk_',
                infoButtons: 'PlayerBarDesktopWithBackgroundProgressBar_infoButtons__OxPBy',
                sonata: 'PlayerBarDesktopWithBackgroundProgressBar_sonata__mGFb_',
                sonata_withReversedControls: 'PlayerBarDesktopWithBackgroundProgressBar_sonata_withReversedControls__9TjDN',
                meta: 'PlayerBarDesktopWithBackgroundProgressBar_meta__FhKTC',
                sonataControls: 'PlayerBarDesktopWithBackgroundProgressBar_sonataControls__rSmXQ',
                settingsButton: 'PlayerBarDesktopWithBackgroundProgressBar_settingsButton__HnCgK',
                trackContextMenuIcon: 'PlayerBarDesktopWithBackgroundProgressBar_trackContextMenuIcon__xBJxI',
                triggerModal: 'PlayerBarDesktopWithBackgroundProgressBar_triggerModal__EVv5d',
            };
        },
        55482: (e) => {
            e.exports = { root: 'FullscreenPlayerDesktopPoster_root__d__YD', cover: 'FullscreenPlayerDesktopPoster_cover__CDmhM' };
        },
        58178: (e) => {
            e.exports = { root: 'SyncLyrics_root__6KZg4', content: 'SyncLyrics_content__lbkWP' };
        },
        60070: (e) => {
            e.exports = {
                button: 'ChangeVolume_button__4HLEr',
                icon: 'ChangeVolume_icon__5Zv2a',
                sliderContainer: 'ChangeVolume_sliderContainer__pvOZa',
                sliderContainer_focusVisible: 'ChangeVolume_sliderContainer_focusVisible__1JxI9',
                wrapperSlider: 'ChangeVolume_wrapperSlider__9S1Vi',
                root: 'ChangeVolume_root__HDxtA',
                slider: 'ChangeVolume_slider__fCKGZ',
                important: 'ChangeVolume_important__ZIYpu',
            };
        },
        61802: (e) => {
            e.exports = {
                root: 'FullscreenPlayerDesktopContent_root__tKNGK',
                fullscreenContent: 'FullscreenPlayerDesktopContent_fullscreenContent__Nvety',
                fullscreenContent_enter: 'FullscreenPlayerDesktopContent_fullscreenContent_enter__xMN2Y',
                'enter-fade-fullscreen-content': 'FullscreenPlayerDesktopContent_enter-fade-fullscreen-content__eOCyM',
                fullscreenContent_leave: 'FullscreenPlayerDesktopContent_fullscreenContent_leave__6HeZ_',
                'leave-fade-fullscreen-content': 'FullscreenPlayerDesktopContent_leave-fade-fullscreen-content__kswW5',
                fullscreenContent_withDisabledInsetTransition: 'FullscreenPlayerDesktopContent_fullscreenContent_withDisabledInsetTransition___gd__',
                additionalContent: 'FullscreenPlayerDesktopContent_additionalContent__tuuy7',
                additionalContent_enter: 'FullscreenPlayerDesktopContent_additionalContent_enter__WQmXC',
                additionalContent_enter_active: 'FullscreenPlayerDesktopContent_additionalContent_enter_active__a3nOf',
                'enter-fade-additional-content': 'FullscreenPlayerDesktopContent_enter-fade-additional-content__awk7_',
                additionalContent_exit: 'FullscreenPlayerDesktopContent_additionalContent_exit__aM4Or',
                additionalContent_exit_active: 'FullscreenPlayerDesktopContent_additionalContent_exit_active__vokVE',
                'leave-fade-additional-content': 'FullscreenPlayerDesktopContent_leave-fade-additional-content__dlFhp',
                additionalContent_withDisabledInsetTransition: 'FullscreenPlayerDesktopContent_additionalContent_withDisabledInsetTransition__kvSmh',
                info: 'FullscreenPlayerDesktopContent_info__Dq69p',
                artists: 'FullscreenPlayerDesktopContent_artists__a_2G3',
                nonMusicAuthors: 'FullscreenPlayerDesktopContent_nonMusicAuthors__JhhPY',
                meta: 'FullscreenPlayerDesktopContent_meta__3jDTy',
                title: 'FullscreenPlayerDesktopContent_title__I2JrP',
                meta_isSplitMode: 'FullscreenPlayerDesktopContent_meta_isSplitMode__zPC2S',
                ellipsis: 'FullscreenPlayerDesktopContent_ellipsis__2Qk2b',
                sliderContainer: 'FullscreenPlayerDesktopContent_sliderContainer__FtBZ7',
                slider: 'FullscreenPlayerDesktopContent_slider__FJscl',
                syncLyrics: 'FullscreenPlayerDesktopContent_syncLyrics__6dTfH',
                syncLyricsContent: 'FullscreenPlayerDesktopContent_syncLyricsContent__H_enX',
                syncLyricsLoader: 'FullscreenPlayerDesktopContent_syncLyricsLoader__EQ8o9',
                syncLyricsScroller: 'FullscreenPlayerDesktopContent_syncLyricsScroller__JslVK',
                syncLyricsFooter: 'FullscreenPlayerDesktopContent_syncLyricsFooter__HS8JZ',
                syncLyricsCounter: 'FullscreenPlayerDesktopContent_syncLyricsCounter__CnB_k',
            };
        },
        62146: (e) => {
            e.exports = {
                root: 'VibePlayerBar_root__G3MOe',
                progress: 'VibePlayerBar_progress__Cri6E',
                progress_visible: 'VibePlayerBar_progress_visible__EfP1V',
                button: 'VibePlayerBar_button__GLhJ_',
                important: 'VibePlayerBar_important__XGV7k',
                ripple: 'VibePlayerBar_ripple__8YHn7',
                likeButton_mobilePaused: 'VibePlayerBar_likeButton_mobilePaused__ufI2D',
                changeVolume: 'VibePlayerBar_changeVolume__x7FHC',
                verticalSlider: 'VibePlayerBar_verticalSlider__JPDlB',
            };
        },
        64308: (e) => {
            e.exports = {
                backgroundProgressbar: 'ChangeTimecodeBackground_backgroundProgressbar__hT_QP',
                progressbar: 'ChangeTimecodeBackground_progressbar__M93Ie',
                timecodeGroup: 'ChangeTimecodeBackground_timecodeGroup__2VQ1N',
                thumb: 'ChangeTimecodeBackground_thumb__vx6J0',
                timecodeGroupCurrent: 'ChangeTimecodeBackground_timecodeGroupCurrent__aGlrB',
                important: 'ChangeTimecodeBackground_important__OSzLR',
                root_focusVisible: 'ChangeTimecodeBackground_root_focusVisible__RLp5i',
                root: 'ChangeTimecodeBackground_root__B89FS',
                root_isPlayingTrack: 'ChangeTimecodeBackground_root_isPlayingTrack__2naHL',
                brandedThumb: 'ChangeTimecodeBackground_brandedThumb__igXsO',
                slider: 'ChangeTimecodeBackground_slider__Jdu3l',
            };
        },
        64696: (e, t, a) => {
            'use strict';
            a.d(t, { Q: () => k, T: () => C });
            var i,
                n = a(65493),
                r = a(60754),
                l = a(36751),
                s = a(49574),
                o = a(95428),
                c = a(24991),
                d = a(44240),
                u = a(16486),
                _ = a(57318);

            const settingItem = {
                id: 'setting',
                type: 'SETTING',
                style: 'CONTROL',
                data: {
                    title: 'Настроить Мою волну',
                    cover: {
                        uri: 'avatars.mds.yandex.net/get-music-misc/30221/img.6a02b79f69c75168250b2889/%%',
                    },
                },
            };

            let m = (e) => {
                if (window.nativeSettings?.get?.('modSettings.vibeAnimationEnhancement.forceOldSettingsInWheel') ?? false) {
                    e.items = e.items.filter((item) => item.type !== 'SETTING');
                    e.items = [e.items.shift(), settingItem, ...e.items];
                }
                return e.items
                    .map((e, t) => {
                        var a, i, n, l;
                        switch (e.type) {
                            case c.D.WAVE:
                                return (0, r.wg)({
                                    id: e.id,
                                    index: t,
                                    type: c.D.WAVE,
                                    style: null != (a = e.style) ? a : d.y.DEFAULT,
                                    description: e.description,
                                    data: (0, _.lb)(e.data.wave, e.data.agent),
                                });
                            case c.D.ALBUM:
                                return (0, r.wg)({
                                    id: e.id,
                                    index: t,
                                    type: c.D.ALBUM,
                                    style: null != (i = e.style) ? i : d.y.DEFAULT,
                                    description: e.description,
                                    data: (0, u.sK)({ album: e.data.album, artists: e.data.artists }),
                                });
                            case c.D.PROMO_LINK:
                                return (0, r.wg)({
                                    id: e.id,
                                    index: t,
                                    type: c.D.PROMO_LINK,
                                    style: null != (n = e.style) ? n : d.y.DEFAULT,
                                    description: e.description,
                                    data: ((e) =>
                                        (0, r.wg)({ id: e.id, title: e.title, description: e.description, url: e.action.weblink, cover: e.cover, color: e.color }))(
                                        e.data,
                                    ),
                                });
                            case c.D.SETTING:
                                return (0, r.wg)({
                                    id: e.id,
                                    index: t,
                                    type: c.D.SETTING,
                                    style: null != (l = e.style) ? l : d.y.DEFAULT,
                                    description: e.description,
                                    data: { title: e.data.title, cover: e.data.cover },
                                });
                            default:
                                return null;
                        }
                    })
                    .filter((e) => null !== e);
            };
            var p = a(12388);
            !(function (e) {
                (e.CLICK = 'CLICK'), (e.VIEW = 'VIEW');
            })(i || (i = {}));
            let v = r.gK
                    .model('BaseWheelItem', {
                        id: r.gK.string,
                        index: r.gK.number,
                        type: r.gK.enumeration(Object.values(c.D)),
                        style: r.gK.enumeration(Object.values(d.y)),
                        description: r.gK.maybe(r.gK.string),
                    })
                    .actions((e) => ({
                        handleFeedbackView() {
                            let { wheel: t } = (0, r.Zn)(e);
                            t.addFeedback(i.VIEW, e.type, e.id, e.index);
                        },
                        handleFeedbackClick() {
                            let { wheel: t } = (0, r.Zn)(e);
                            t.addFeedback(i.CLICK, e.type, e.id, e.index);
                        },
                    })),
                y = v.props({ type: r.gK.literal(c.D.ALBUM), data: p.J }),
                h = r.gK
                    .model('PromoLink', {
                        id: r.gK.string,
                        title: r.gK.string,
                        description: r.gK.maybe(r.gK.string),
                        url: r.gK.maybeNull(r.gK.string),
                        cover: o.$B,
                        color: r.gK.string,
                    })
                    .actions((e) => ({ getKey: (t) => ''.concat(t, '_').concat(e.id) })),
                g = v.props({ type: r.gK.literal(c.D.PROMO_LINK), data: h }),
                b = r.gK.model('Setting', { title: r.gK.string, cover: o.$B }).actions((e) => ({ getKey: (t) => ''.concat(t, '_').concat(e.title) })),
                x = v.props({ type: r.gK.literal(c.D.SETTING), data: b }),
                A = v.props({ type: r.gK.literal(c.D.WAVE), data: _.Gh }),
                f = r.gK.union(A, y, g, x),
                C = r.gK
                    .compose(
                        r.gK.model('Wheel', {
                            wheelId: r.gK.optional(r.gK.string, ''),
                            items: r.gK.array(f),
                            activeIndex: r.gK.optional(r.gK.number, 1),
                            lastRequestId: r.gK.optional(r.gK.string, ''),
                        }),
                        o.XT,
                        o.pl,
                    )
                    .views((e) => ({
                        get isShimmerVisible() {
                            return e.isNeededToLoad || e.isLoading;
                        },
                        get isEmpty() {
                            return 0 === e.items.length;
                        },
                    }))
                    .actions((e) => {
                        let t = Array(100),
                            a = 0,
                            i = 0;
                        return {
                            setActiveIndex(t) {
                                e.activeIndex = t;
                            },
                            addFeedback(n, r, l, s) {
                                (t[a] = { wheelId: e.wheelId, timestamp: Date.now(), eventType: n, item: { type: r, id: l }, position: s }),
                                    (a = (a + 1) % 100),
                                    i < 100 && i++;
                            },
                            getData: (0, r.L3)(function* (n, o) {
                                let { context: d } = n,
                                    u = ((e) => {
                                        switch (e.type) {
                                            case l.b.ALBUM:
                                            case l.b.ARTIST:
                                                return ''.concat(e.type, ':').concat(e.data.id);
                                            case l.b.PLAYLIST:
                                                return ''.concat(e.type, ':').concat(e.data.playlistUuid);
                                            case l.b.WAVE:
                                                return ''.concat(e.type, ':').concat(e.data.seeds.join(','));
                                            case l.b.GENERATIVE:
                                            case l.b.CLIP:
                                                return e.type;
                                            case l.b.OTHER:
                                                var t, a;
                                                return ''.concat(e.type, ':').concat(null != (a = null == (t = e.data) ? void 0 : t.id) ? a : '');
                                        }
                                    })(d);
                                if (u === e.lastRequestId) return;
                                let { wheelResource: _, modelActionsLogger: p } = (0, r._$)(e);
                                e.loadingState = s.GuX.PENDING;
                                let v = (() => {
                                    if (0 === i) return [];
                                    let e = Array(i),
                                        n = (a - i + 100) % 100;
                                    for (let a = 0; a < i; a++) {
                                        let i = t[(n + a) % 100];
                                        i && (e[a] = i);
                                    }
                                    return e;
                                })();
                                try {
                                    let t = yield _.wheelNew({ context: d, feedbacks: v });
                                    if (((i = 0), (e.wheelId = t.wheelId), (e.items = (0, r.wg)(m(t))), (e.activeIndex = 1), (e.lastRequestId = u), 0 === e.items.length))
                                        throw Error('Empty response');
                                    e.loadingState = s.GuX.RESOLVE;
                                } catch (t) {
                                    if (e.isEmpty && o) {
                                        p.error('[Wheel] Pumpkin', { error: t });
                                        let a = ((e) => {
                                            let t = e({ id: 'vibe-wheel.activity-description' }),
                                                a = e({ id: 'vibe-wheel.mood-description' });
                                            return {
                                                wheelId: 'PUMPKIN',
                                                items: [
                                                    {
                                                        id: 'activity:wake-up',
                                                        type: c.D.WAVE,
                                                        data: {
                                                            wave: { name: e({ id: 'vibe-wheel.activity-wake-up' }), description: t, seeds: ['activity:wake-up'] },
                                                            agent: {
                                                                animationUri: 'https://music-custom-wave-media.music.yandex.net/JVsyUlrs9Y',
                                                                cover: {
                                                                    uri: 'https://avatars.mds.yandex.net/get-music-misc/28592/rotor-activity-wake-up-agent-cover-RSUMc/%%',
                                                                    color: '#FFFFD6',
                                                                },
                                                            },
                                                        },
                                                    },
                                                    {
                                                        id: 'activity:road-trip',
                                                        type: c.D.WAVE,
                                                        data: {
                                                            wave: { name: e({ id: 'vibe-wheel.activity-road-trip' }), description: t, seeds: ['activity:road-trip'] },
                                                            agent: {
                                                                animationUri: 'https://music-custom-wave-media.music.yandex.net/Foah9sRLsS',
                                                                cover: {
                                                                    uri: 'https://avatars.mds.yandex.net/get-music-misc/70683/rotor-activity-road-trip-agent-cover-S1vPp/%%',
                                                                    color: '#FFFFDF',
                                                                },
                                                            },
                                                        },
                                                    },
                                                    {
                                                        id: 'activity:work-background',
                                                        type: c.D.WAVE,
                                                        data: {
                                                            wave: {
                                                                name: e({ id: 'vibe-wheel.activity-work-background' }),
                                                                description: t,
                                                                seeds: ['activity:work-background'],
                                                            },
                                                            agent: {
                                                                animationUri: 'https://music-custom-wave-media.music.yandex.net/tsXpFHIBjM',
                                                                cover: {
                                                                    uri: 'https://avatars.mds.yandex.net/get-music-misc/2413828/rotor-activity-work-background-agent-cover-5t6qb/%%',
                                                                    color: '#FFFFFF',
                                                                },
                                                            },
                                                        },
                                                    },
                                                    {
                                                        id: 'activity:workout',
                                                        type: c.D.WAVE,
                                                        data: {
                                                            wave: { name: e({ id: 'vibe-wheel.activity-workout' }), description: t, seeds: ['activity:workout'] },
                                                            agent: {
                                                                animationUri: 'https://music-custom-wave-media.music.yandex.net/PexWCCcEc9',
                                                                cover: {
                                                                    uri: 'https://avatars.mds.yandex.net/get-music-misc/2413828/rotor-activity-workout-agent-cover-Wcrjo/%%',
                                                                    color: '#EBFFFE',
                                                                },
                                                            },
                                                        },
                                                    },
                                                    {
                                                        id: 'activity:fall-asleep',
                                                        type: c.D.WAVE,
                                                        data: {
                                                            wave: { name: e({ id: 'vibe-wheel.activity-fall-asleep' }), description: t, seeds: ['activity:fall-asleep'] },
                                                            agent: {
                                                                animationUri: 'https://music-custom-wave-media.music.yandex.net/J9QAoYnnPe',
                                                                cover: {
                                                                    uri: 'https://avatars.mds.yandex.net/get-music-misc/28592/rotor-activity-fall-asleep-agent-cover-XaOnj/%%',
                                                                    color: '#FAFFFF',
                                                                },
                                                            },
                                                        },
                                                    },
                                                    {
                                                        id: 'mood:energetic',
                                                        type: c.D.WAVE,
                                                        data: {
                                                            wave: { name: e({ id: 'vibe-wheel.mood-energetic' }), description: a, seeds: ['mood:energetic'] },
                                                            agent: {
                                                                animationUri: 'https://music-custom-wave-media.music.yandex.net/e6Ptlara08',
                                                                cover: {
                                                                    uri: 'https://avatars.mds.yandex.net/get-music-misc/70683/rotor-mood-energetic-agent-cover-NrJtV/%%',
                                                                    color: '#FDFAFF',
                                                                },
                                                            },
                                                        },
                                                    },
                                                    {
                                                        id: 'mood:happy',
                                                        type: c.D.WAVE,
                                                        data: {
                                                            wave: { name: e({ id: 'vibe-wheel.mood-happy' }), description: a, seeds: ['mood:happy'] },
                                                            agent: {
                                                                animationUri: 'https://music-custom-wave-media.music.yandex.net/EzOBeQmIXi',
                                                                cover: {
                                                                    uri: 'https://avatars.mds.yandex.net/get-music-misc/70683/rotor-mood-happy-agent-cover-JWFjr/%%',
                                                                    color: '#FFFFE8',
                                                                },
                                                            },
                                                        },
                                                    },
                                                    {
                                                        id: 'mood:sad',
                                                        type: c.D.WAVE,
                                                        data: {
                                                            wave: { name: e({ id: 'vibe-wheel.mood-sad' }), description: a, seeds: ['mood:sad'] },
                                                            agent: {
                                                                animationUri: 'https://music-custom-wave-media.music.yandex.net/rrF2I4tUvZ',
                                                                cover: {
                                                                    uri: 'https://avatars.mds.yandex.net/get-music-misc/30221/rotor-mood-sad-agent-cover-IN0O6/%%',
                                                                    color: '#EAFFFF',
                                                                },
                                                            },
                                                        },
                                                    },
                                                ],
                                            };
                                        })(o);
                                        (e.wheelId = a.wheelId), (e.items = (0, r.wg)(m(a))), (e.activeIndex = 1);
                                    } else p.error('[Wheel] Load error', { error: t });
                                    e.loadingState = s.GuX.REJECT;
                                }
                            }),
                        };
                    }),
                k = n.default.default(() =>
                    Promise.all([a.e(6582), a.e(3283), a.e(9858)])
                        .then(a.bind(a, 63306))
                        .then((e) => ({ default: e.Wheel })),
                );
        },
        65068: (e, t, a) => {
            'use strict';
            a.d(t, { p: () => n });
            var i = a(71483);
            function n(e) {
                return (null == e ? void 0 : e.data.type) === i.K.Various;
            }
        },
        65337: (e) => {
            e.exports = {
                root: 'PlayerBarMobile_root__cdKy_',
                progressBar: 'PlayerBarMobile_progressBar___DmH8',
                info: 'PlayerBarMobile_info__WmdhZ',
                infoCard: 'PlayerBarMobile_infoCard__DCATu',
                coverContainer: 'PlayerBarMobile_coverContainer__a3JDF',
                cover: 'PlayerBarMobile_cover__pnJd1',
                description: 'PlayerBarMobile_description__IxQ9L',
                artists: 'PlayerBarMobile_artists__XVSBV',
                artistLink: 'PlayerBarMobile_artistLink__pieMq',
                infoButtons: 'PlayerBarMobile_infoButtons__JXxfv',
                sliderChangeTimeCode: 'PlayerBarMobile_sliderChangeTimeCode___2Vpu',
                backgroundProgress: 'PlayerBarMobile_backgroundProgress__jevhK',
                shimmerCover: 'PlayerBarMobile_shimmerCover__q1eXc',
                shimmerMeta: 'PlayerBarMobile_shimmerMeta__4vDEK',
                shimmerMetaTitle: 'PlayerBarMobile_shimmerMetaTitle__TsIb2',
                shimmerMetaDescription: 'PlayerBarMobile_shimmerMetaDescription__pIeAr',
            };
        },
        65804: (e) => {
            e.exports = {
                root: 'PlayQueueBeforePlayingBlock_root__QIIfB',
                prevTrack: 'PlayQueueBeforePlayingBlock_prevTrack__5b6o4',
                animatedContent: 'PlayQueueBeforePlayingBlock_animatedContent__C04_K',
                animatedContent_moveToBottom: 'PlayQueueBeforePlayingBlock_animatedContent_moveToBottom__2gKF7',
                'move-to-bottom': 'PlayQueueBeforePlayingBlock_move-to-bottom__7EZIY',
                animatedContent_moveFromBottom: 'PlayQueueBeforePlayingBlock_animatedContent_moveFromBottom__0kTuW',
                'move-from-bottom': 'PlayQueueBeforePlayingBlock_move-from-bottom__8mDwi',
                'move-prev-track-from-bottom': 'PlayQueueBeforePlayingBlock_move-prev-track-from-bottom__mFqMq',
                animatedContent_moveFromBottomSingleTrack: 'PlayQueueBeforePlayingBlock_animatedContent_moveFromBottomSingleTrack__MIEIc',
                'move-from-bottom-single-track': 'PlayQueueBeforePlayingBlock_move-from-bottom-single-track__YhsMT',
                'move-prev-track-from-bottom-single-track': 'PlayQueueBeforePlayingBlock_move-prev-track-from-bottom-single-track__NGI9j',
            };
        },
        66007: (e) => {
            e.exports = {
                root: 'PlayButton_root__nYKdN',
                root_isLoading: 'PlayButton_root_isLoading__925Sa',
                'applying-setting': 'PlayButton_applying-setting__3nbT9',
                icon: 'PlayButton_icon__t_THQ',
            };
        },
        67288: (e) => {
            e.exports = {
                root: 'PlayQueueTitle_root__E2XOW',
                root_withDnD: 'PlayQueueTitle_root_withDnD__8kctq',
                linkContainer: 'PlayQueueTitle_linkContainer__xqLIj',
                titleIcon: 'PlayQueueTitle_titleIcon__z1B_p',
                title: 'PlayQueueTitle_title__q3ppG',
                linkText: 'PlayQueueTitle_linkText__9mgvM',
                heading: 'PlayQueueTitle_heading__JrzQq',
                heading_withOffset: 'PlayQueueTitle_heading_withOffset__ZRyEr',
                subTitle: 'PlayQueueTitle_subTitle__RzrJA',
                modeTitle: 'PlayQueueTitle_modeTitle__KixWV',
            };
        },
        75225: (e) => {
            e.exports = {
                root: 'VibeContext_root__dbiNv',
                context: 'VibeContext_context__Z_82k',
                pinButton: 'VibeContext_pinButton__b6SNF',
                resetButton: 'VibeContext_resetButton__9KK4S',
            };
        },
        76464: (e, t, a) => {
            'use strict';
            a.d(t, { s$: () => Q, zP: () => X, LL: () => _ });
            var i = a(49574),
                n = a(60754),
                r = a(95428);
            let l = (e) => {
                    let { type: t, tag: a } = e.id;
                    return { title: e.name, seed: ''.concat(t, ':').concat(a), specialContext: e.specialContext, specialContextImage: e.specialContextImage };
                },
                s = (e, t) => {
                    let a = [];
                    return (
                        t.possibleValues.forEach((e) => {
                            e.unspecified || a.push(((e) => ({ value: e.value, title: e.name, seed: e.serializedSeed, imageUrl: e.imageUrl }))(e));
                        }),
                        { type: e, title: t.name, values: (0, n.wg)(a) }
                    );
                };
            var o = (function (e) {
                return (e.DIVERSITY = 'diversity'), (e.MOOD_ENERGY = 'moodEnergy'), (e.LANGUAGE = 'language'), e;
            })({});
            let c = n.gK.model('ContextItem', {
                    title: n.gK.string,
                    seed: n.gK.string,
                    specialContext: n.gK.boolean,
                    specialContextImage: n.gK.optional(n.gK.string, ''),
                }),
                d = n.gK.model('RestrictonValue', { value: n.gK.string, title: n.gK.string, seed: n.gK.string, imageUrl: n.gK.maybe(n.gK.string) }),
                u = n.gK.model('Restricton', { type: n.gK.enumeration(Object.values(o)), title: n.gK.string, values: n.gK.array(d) }),
                _ = n.gK
                    .compose(
                        n.gK.model('VibeSettings', {
                            contextItems: n.gK.array(c),
                            diversity: n.gK.maybeNull(u),
                            moodEnergy: n.gK.maybeNull(u),
                            language: n.gK.maybeNull(u),
                            modal: r.qt,
                        }),
                        r.XT,
                    )
                    .actions((e) => ({
                        getData: (0, n.L3)(function* (t) {
                            let { rotorResource: a, modelActionsLogger: r } = (0, n._$)(e);
                            if (e.loadingState !== i.GuX.PENDING)
                                try {
                                    var c, d, u, _;
                                    e.loadingState = i.GuX.PENDING;
                                    let r = yield a.waveSettings(t);
                                    (null == r || null == (c = r.settingRestrictions) ? void 0 : c.diversity) &&
                                        (e.diversity = s(o.DIVERSITY, r.settingRestrictions.diversity)),
                                        (null == r || null == (d = r.settingRestrictions) ? void 0 : d.moodEnergy) &&
                                            (e.moodEnergy = s(o.MOOD_ENERGY, r.settingRestrictions.moodEnergy)),
                                        (null == r || null == (u = r.settingRestrictions) ? void 0 : u.language) &&
                                            (e.language = s(o.LANGUAGE, r.settingRestrictions.language));
                                    let m =
                                        Array.isArray(null == r ? void 0 : r.blocks) &&
                                        (null == r || null == (_ = r.blocks) ? void 0 : _.find((e) => (null == e ? void 0 : e.type) === 'contexts'));
                                    m && Array.isArray(m.items) && (e.contextItems = (0, n.wg)(m.items.map(l))),
                                        e.loadingState !== i.GuX.IDLE && (e.loadingState = i.GuX.RESOLVE);
                                } catch (t) {
                                    r.error(t), e.loadingState !== i.GuX.IDLE && (e.loadingState = i.GuX.REJECT);
                                }
                        }),
                        reset() {
                            (e.loadingState = i.GuX.IDLE),
                                (e.contextItems = (0, n.wg)([])),
                                (e.diversity = null),
                                (e.moodEnergy = null),
                                (e.language = null),
                                e.modal.close();
                        },
                    }));
            var m = a(32290),
                p = a(96103),
                v = a(55178),
                y = a.t(v, 2),
                h = a(60900),
                g = a(39407),
                b = a(59824),
                x = a(91027),
                A = {
                    4490: (e, t, a) => {
                        a.r(t), a.d(t, { DOWN: () => s, LEFT: () => n, RIGHT: () => r, UP: () => l, useSwipeable: () => m });
                        var i = a(810);
                        let n = 'Left',
                            r = 'Right',
                            l = 'Up',
                            s = 'Down',
                            o = {
                                delta: 10,
                                preventScrollOnSwipe: !1,
                                rotationAngle: 0,
                                trackMouse: !1,
                                trackTouch: !0,
                                swipeDuration: 1 / 0,
                                touchEventOptions: { passive: !0 },
                            },
                            c = { first: !0, initial: [0, 0], start: 0, swiping: !1, xy: [0, 0] },
                            d = 'mousemove',
                            u = 'mouseup';
                        function _(e, t) {
                            if (0 === t) return e;
                            let a = (Math.PI / 180) * t;
                            return [e[0] * Math.cos(a) + e[1] * Math.sin(a), e[1] * Math.cos(a) - e[0] * Math.sin(a)];
                        }
                        function m(e) {
                            var t, a, m;
                            let p,
                                { trackMouse: v } = e,
                                y = i.useRef(Object.assign({}, c)),
                                h = i.useRef(Object.assign({}, o)),
                                g = i.useRef(Object.assign({}, h.current));
                            for (p in ((g.current = Object.assign({}, h.current)), (h.current = Object.assign(Object.assign({}, o), e)), o))
                                void 0 === h.current[p] && (h.current[p] = o[p]);
                            let [b, x] = i.useMemo(
                                () =>
                                    (function (e, t) {
                                        let a = (t) => {
                                                let a = 'touches' in t;
                                                (a && t.touches.length > 1) ||
                                                    e((e, n) => {
                                                        n.trackMouse && !a && (document.addEventListener(d, i), document.addEventListener(u, p));
                                                        let { clientX: r, clientY: l } = a ? t.touches[0] : t,
                                                            s = _([r, l], n.rotationAngle);
                                                        return (
                                                            n.onTouchStartOrOnMouseDown && n.onTouchStartOrOnMouseDown({ event: t }),
                                                            Object.assign(Object.assign(Object.assign({}, e), c), { initial: s.slice(), xy: s, start: t.timeStamp || 0 })
                                                        );
                                                    });
                                            },
                                            i = (t) => {
                                                e((e, a) => {
                                                    var i, c, d, u;
                                                    let m = 'touches' in t;
                                                    if (m && t.touches.length > 1) return e;
                                                    if (t.timeStamp - e.start > a.swipeDuration)
                                                        return e.swiping ? Object.assign(Object.assign({}, e), { swiping: !1 }) : e;
                                                    let { clientX: p, clientY: v } = m ? t.touches[0] : t,
                                                        [y, h] = _([p, v], a.rotationAngle),
                                                        g = y - e.xy[0],
                                                        b = h - e.xy[1],
                                                        x = Math.abs(g),
                                                        A = Math.abs(b),
                                                        f = (t.timeStamp || 0) - e.start,
                                                        C = Math.sqrt(x * x + A * A) / (f || 1),
                                                        k = [g / (f || 1), b / (f || 1)],
                                                        P = ((i = x), (c = A), (d = g), (u = b), i > c ? (d > 0 ? r : n) : u > 0 ? s : l),
                                                        N = 'number' == typeof a.delta ? a.delta : a.delta[P.toLowerCase()] || o.delta;
                                                    if (x < N && A < N && !e.swiping) return e;
                                                    let j = {
                                                        absX: x,
                                                        absY: A,
                                                        deltaX: g,
                                                        deltaY: b,
                                                        dir: P,
                                                        event: t,
                                                        first: e.first,
                                                        initial: e.initial,
                                                        velocity: C,
                                                        vxvy: k,
                                                    };
                                                    j.first && a.onSwipeStart && a.onSwipeStart(j), a.onSwiping && a.onSwiping(j);
                                                    let S = !1;
                                                    return (
                                                        (a.onSwiping || a.onSwiped || a['onSwiped'.concat(P)]) && (S = !0),
                                                        S && a.preventScrollOnSwipe && a.trackTouch && t.cancelable && t.preventDefault(),
                                                        Object.assign(Object.assign({}, e), { first: !1, eventData: j, swiping: !0 })
                                                    );
                                                });
                                            },
                                            m = (t) => {
                                                e((e, a) => {
                                                    let i;
                                                    if (e.swiping && e.eventData) {
                                                        if (t.timeStamp - e.start < a.swipeDuration) {
                                                            (i = Object.assign(Object.assign({}, e.eventData), { event: t })), a.onSwiped && a.onSwiped(i);
                                                            let n = a['onSwiped'.concat(i.dir)];
                                                            n && n(i);
                                                        }
                                                    } else a.onTap && a.onTap({ event: t });
                                                    return (
                                                        a.onTouchEndOrOnMouseUp && a.onTouchEndOrOnMouseUp({ event: t }),
                                                        Object.assign(Object.assign(Object.assign({}, e), c), { eventData: i })
                                                    );
                                                });
                                            },
                                            p = (e) => {
                                                document.removeEventListener(d, i), document.removeEventListener(u, p), m(e);
                                            },
                                            v = (e, t) => {
                                                let n = () => {};
                                                if (e && e.addEventListener) {
                                                    let r = Object.assign(Object.assign({}, o.touchEventOptions), t.touchEventOptions),
                                                        l = [
                                                            ['touchstart', a, r],
                                                            ['touchmove', i, Object.assign(Object.assign({}, r), t.preventScrollOnSwipe ? { passive: !1 } : {})],
                                                            ['touchend', m, r],
                                                        ];
                                                    l.forEach((t) => {
                                                        let [a, i, n] = t;
                                                        return e.addEventListener(a, i, n);
                                                    }),
                                                        (n = () =>
                                                            l.forEach((t) => {
                                                                let [a, i] = t;
                                                                return e.removeEventListener(a, i);
                                                            }));
                                                }
                                                return n;
                                            },
                                            y = {
                                                ref: (t) => {
                                                    null !== t &&
                                                        e((e, a) => {
                                                            if (e.el === t) return e;
                                                            let i = {};
                                                            return (
                                                                e.el && e.el !== t && e.cleanUpTouch && (e.cleanUpTouch(), (i.cleanUpTouch = void 0)),
                                                                a.trackTouch && t && (i.cleanUpTouch = v(t, a)),
                                                                Object.assign(Object.assign(Object.assign({}, e), { el: t }), i)
                                                            );
                                                        });
                                                },
                                            };
                                        return t.trackMouse && (y.onMouseDown = a), [y, v];
                                    })((e) => (y.current = e(y.current, h.current)), { trackMouse: v }),
                                [v],
                            );
                            return (
                                (t = y.current),
                                (a = h.current),
                                (m = g.current),
                                (y.current =
                                    a.trackTouch && t.el
                                        ? t.cleanUpTouch
                                            ? a.preventScrollOnSwipe !== m.preventScrollOnSwipe || a.touchEventOptions.passive !== m.touchEventOptions.passive
                                                ? (t.cleanUpTouch(), Object.assign(Object.assign({}, t), { cleanUpTouch: x(t.el, a) }))
                                                : t
                                            : Object.assign(Object.assign({}, t), { cleanUpTouch: x(t.el, a) })
                                        : (t.cleanUpTouch && t.cleanUpTouch(), Object.assign(Object.assign({}, t), { cleanUpTouch: void 0 }))),
                                b
                            );
                        }
                    },
                    8691: (e, t, a) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useCallbackRef = void 0);
                        let i = a(810);
                        t.useCallbackRef = function (e) {
                            let t = (0, i.useRef)({
                                stableFn: function () {
                                    for (var e = arguments.length, a = Array(e), i = 0; i < e; i++) a[i] = arguments[i];
                                    return t.current.callback(...a);
                                },
                                callback: e,
                            });
                            return (
                                (0, i.useInsertionEffect)(() => {
                                    t.current.callback = e;
                                }),
                                t.current.stableFn
                            );
                        };
                    },
                    1381: (e, t, a) => {
                        var i;
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useComponentSwipeable = t.SwipeablePlacement = void 0);
                        let n = a(4490),
                            r = a(8691);
                        !(function (e) {
                            (e.TOP = 'top'), (e.BOTTOM = 'bottom'), (e.RIGHT = 'right'), (e.LEFT = 'left');
                        })(i || (t.SwipeablePlacement = i = {}));
                        let l = (e) => {
                                let { ref: t, deltaY: a, deltaX: n, placement: r } = e;
                                requestAnimationFrame(() => {
                                    t.current &&
                                        ((t.current.style.willChange = 'transform'),
                                        (t.current.style.transform =
                                            r === i.TOP || r === i.BOTTOM ? 'translateY('.concat(a || 0, 'px)') : 'translateX('.concat(n || 0, 'px)')));
                                });
                            },
                            s = (e) => {
                                requestAnimationFrame(() => {
                                    e.current && ((e.current.style.transition = 'none'), (e.current.style.willChange = ''), (e.current.style.transform = ''));
                                });
                            };
                        t.useComponentSwipeable = (e) => {
                            let { ref: t, swipeableProps: a = {}, onClose: o, disableSwipe: c, placement: d, threshold: u } = e,
                                _ = (0, r.useCallbackRef)(() => {
                                    o && (s(t), o());
                                }),
                                m = (0, r.useCallbackRef)((e) => {
                                    c ||
                                        ((e) => {
                                            let { ref: t, deltaY: a, deltaX: n, placement: r } = e;
                                            switch (r) {
                                                case i.TOP:
                                                    a <= 0 && l({ ref: t, deltaY: a, deltaX: n, placement: r });
                                                    break;
                                                case i.RIGHT:
                                                    n >= 0 && l({ ref: t, deltaY: a, deltaX: n, placement: r });
                                                    break;
                                                case i.LEFT:
                                                    n <= 0 && l({ ref: t, deltaY: a, deltaX: n, placement: r });
                                                    break;
                                                default:
                                                    a >= 0 && l({ ref: t, deltaY: a, deltaX: n, placement: r });
                                            }
                                        })({ ref: t, deltaY: e.deltaY, deltaX: e.deltaX, placement: d });
                                }),
                                p = (0, r.useCallbackRef)((e) => {
                                    !c &&
                                        (((e) => {
                                            let { ref: t, deltaY: a, deltaX: n, placement: r, threshold: l = 25 } = e;
                                            if (!t.current) return !1;
                                            let s = (l / 100) * (r === i.TOP || r === i.BOTTOM ? t.current.offsetHeight : t.current.offsetWidth);
                                            switch (r) {
                                                case i.TOP:
                                                    return a < 0 && Math.abs(a) >= s;
                                                case i.RIGHT:
                                                    return n > 0 && n >= s;
                                                case i.LEFT:
                                                    return n < 0 && Math.abs(n) >= s;
                                                default:
                                                    return a > 0 && a >= s;
                                            }
                                        })({ ref: t, deltaY: e.deltaY, deltaX: e.deltaX, placement: d, threshold: u })
                                            ? o && (s(t), o())
                                            : s(t));
                                });
                            return { handlers: (0, n.useSwipeable)({ onSwiped: p, onSwiping: m, trackMouse: !0, trackTouch: !0, ...a }), onCloseCallback: _ };
                        };
                    },
                    810: (e) => {
                        e.exports = y;
                    },
                },
                f = {};
            function C(e) {
                var t = f[e];
                if (void 0 !== t) return t.exports;
                var a = (f[e] = { exports: {} });
                return A[e](a, a.exports, C), a.exports;
            }
            (C.d = (e, t) => {
                for (var a in t) C.o(t, a) && !C.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
            }),
                (C.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (C.r = (e) => {
                    'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 });
                });
            var k = {};
            (() => {
                Object.defineProperty(k, '__esModule', { value: !0 }), (k.usePopoverSwipeable = void 0);
                let e = C(810),
                    t = C(1381);
                k.usePopoverSwipeable = (a) => {
                    let { ref: i, swipeableProps: n = {}, onClose: r, disableSwipe: l, placement: s, threshold: o } = a,
                        c = (0, e.useMemo)(() => {
                            switch (s) {
                                case 'top':
                                case 'top-end':
                                case 'top-start':
                                    return t.SwipeablePlacement.TOP;
                                case 'right':
                                case 'right-end':
                                case 'right-start':
                                    return t.SwipeablePlacement.RIGHT;
                                case 'left':
                                case 'left-end':
                                case 'left-start':
                                    return t.SwipeablePlacement.LEFT;
                                default:
                                    return t.SwipeablePlacement.BOTTOM;
                            }
                        }, [s]);
                    return (0, t.useComponentSwipeable)({ ref: i, swipeableProps: n, onClose: r, disableSwipe: l, placement: c, threshold: o });
                };
            })(),
                k.__esModule;
            var P = k.usePopoverSwipeable,
                N = a(44989),
                j = a(58359),
                S = a(63423),
                E = a(82586),
                T = a(48454),
                I = a(70280),
                w = a(71926);
            let L = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    [t, a] = (0, v.useState)(e),
                    { contentRef: n } = (0, i.gKY)();
                return (
                    (0, v.useEffect)(() => {
                        let e = new ResizeObserver((e) => {
                            let [i] = e || [];
                            i && i.contentRect.height !== t && a(i.contentRect.height);
                        });
                        return (
                            n && e.observe(n),
                            () => {
                                e.disconnect();
                            }
                        );
                    }, [t, n]),
                    { contentHeight: t }
                );
            };
            var M = a(83850),
                B = a(63618),
                O = a(50162);
            let R = (e) => {
                var t, a, n;
                let { seed: r, title: l, isStation: s } = e,
                    { vibe: o } = (0, i.Pjs)(),
                    { applySetting: c } = (0, i.B0S)({
                        seeds: null != (n = null == (t = o.meta) ? void 0 : t.seeds) ? n : [],
                        pageIdForFrom: i._Q$.HOME,
                        blockIdForFrom: i.hf$.RUP_MAIN_RADIO,
                    }),
                    { formatMessage: d } = (0, h.A)(),
                    u = !!(null == (a = o.meta) ? void 0 : a.seeds.includes(r)),
                    _ = o.applyingSetting === r,
                    m = (0, v.useMemo)(
                        () => (u ? ''.concat(d({ id: 'vibe-actions.remove' }), ' ').concat(l) : ''.concat(d({ id: 'vibe-actions.apply' }), ' ').concat(l)),
                        [u, l, d],
                    );
                return {
                    isApplying: _,
                    isSelected: u,
                    ariaLabel: m,
                    ariaPressed: u,
                    onClickHandler: (0, v.useCallback)(async () => {
                        o.setApplyingSetting(r), await c(r, s), o.setApplyingSetting();
                    }, [c, s, r, o]),
                };
            };
            var D = a(86323),
                F = a.n(D);
            let V = (0, p.PA)((e) => {
                    let { item: t } = e,
                        { vibe: a } = (0, i.Pjs)(),
                        n = (0, v.useRef)(null),
                        { isApplying: r, isSelected: l, ariaPressed: s, onClickHandler: o } = R({ seed: t.seed, title: t.title, isStation: !0 }),
                        c = (0, v.useCallback)(
                            (e) => {
                                a.isApplying || (n.current && (0, j.P)(e, F().ripple, n.current), o());
                            },
                            [o, a.isApplying],
                        );
                    return (0, m.jsxs)(S.$, {
                        radius: 'xxxl',
                        className: (0, B.$)(F().button, F().textButton, { [F().button_selected]: l, [F().button_applying]: r, [F().specialButton]: t.specialContext }),
                        onClick: c,
                        'aria-disabled': a.isApplying,
                        'aria-pressed': s,
                        withRipple: !1,
                        ...(0, b.Am)(b.Kq.vibeSettings.VIBE_SETTINGS_CONTEXT_BUTTON),
                        children: [
                            t.specialContext &&
                                (0, m.jsx)(O.Image, { className: F().specialImage, src: t.specialContextImage, size: 100, fit: 'cover', withAvatarReplace: !0 }),
                            (0, m.jsx)(w.Caption, { variant: 'span', type: 'controls', size: 'm', weight: 'medium', className: F().title, children: t.title }),
                            (0, m.jsx)('div', { className: F().rippleContainer, ref: n }),
                        ],
                    });
                }),
                K = (0, p.PA)((e) => {
                    let { type: t, restrictionValue: a } = e,
                        { vibe: n } = (0, i.Pjs)(),
                        r = (0, v.useRef)(null),
                        { isApplying: l, isSelected: s, ariaPressed: c, onClickHandler: d } = R({ seed: a.seed, title: a.title }),
                        u = (0, v.useCallback)(
                            (e) => {
                                n.isApplying || (r.current && (0, j.P)(e, F().ripple, r.current), d());
                            },
                            [d, n.isApplying],
                        ),
                        _ = (0, v.useMemo)(
                            () => (0, m.jsx)(w.Caption, { variant: 'span', type: 'controls', size: 'm', weight: 'medium', className: F().title, children: a.title }),
                            [a.title],
                        );
                    switch (t) {
                        case o.DIVERSITY:
                            return (0, m.jsxs)(S.$, {
                                className: (0, B.$)(F().button, F().diversityButton, { [F().button_selected]: s, [F().button_applying]: l }),
                                radius: 'xl',
                                'aria-disabled': n.isApplying,
                                'aria-pressed': c,
                                onClick: u,
                                withRipple: !1,
                                ...(0, b.Am)(b.Kq.vibeSettings.VIBE_SETTINGS_DIVERSITY_BUTTON),
                                children: [
                                    (0, m.jsx)(O.Image, {
                                        'aria-hidden': !0,
                                        src: a.imageUrl,
                                        fit: 'contain',
                                        width: 40,
                                        height: 40,
                                        withAvatarReplace: !0,
                                        className: F().diversityButtonImage,
                                    }),
                                    _,
                                    (0, m.jsx)('div', { className: F().rippleContainer, ref: r }),
                                ],
                            });
                        case o.MOOD_ENERGY:
                            return (0, m.jsxs)('div', {
                                className: F().moodEnergy,
                                ...(0, b.Am)(b.Kq.vibeSettings.VIBE_SETTINGS_MOOD_ENERGY_BUTTON),
                                children: [
                                    (0, m.jsx)(S.$, {
                                        variant: 'text',
                                        className: (0, B.$)(F().button, F().moodEnergyButton, { [F().button_selected]: s, [F().button_applying]: l }),
                                        radius: 'round',
                                        onClick: u,
                                        withRipple: !1,
                                        'aria-disabled': n.isApplying,
                                        'aria-pressed': c,
                                        'aria-label': a.title,
                                        children: (0, m.jsx)(O.Image, {
                                            src: a.imageUrl,
                                            fit: 'contain',
                                            width: 52,
                                            height: 52,
                                            'aria-hidden': !0,
                                            withAvatarReplace: !0,
                                            className: F().moodEnergyButtonImage,
                                        }),
                                    }),
                                    (0, m.jsx)('span', { 'aria-hidden': !0, children: _ }),
                                ],
                            });
                        case o.LANGUAGE:
                            return (0, m.jsxs)(S.$, {
                                radius: 'xxxl',
                                className: (0, B.$)(F().button, F().textButton, { [F().button_selected]: s, [F().button_applying]: l }),
                                onClick: u,
                                withRipple: !1,
                                'aria-disabled': n.isApplying,
                                'aria-pressed': c,
                                ...(0, b.Am)(b.Kq.vibeSettings.VIBE_SETTINGS_LANGUAGE_BUTTON),
                                children: [_, (0, m.jsx)('div', { className: F().rippleContainer, ref: r })],
                            });
                        default:
                            return null;
                    }
                });
            var z = a(90875),
                U = a.n(z);
            let W = (0, p.PA)(() => {
                let { vibeSettings: e } = (0, i.Pjs)(),
                    { formatMessage: t } = (0, h.A)();
                return (
                    e.isNeededToLoad && e.getData(),
                    (0, m.jsxs)('div', {
                        className: U().root,
                        children: [
                            e.contextItems.length > 0 &&
                                (0, m.jsx)(M.m, {
                                    title: t({ id: 'interface-actions.my-vibe-context-settings' }),
                                    restrictionsClassName: U().contextItems,
                                    ...(0, b.Am)(b.Kq.vibeSettings.VIBE_SETTINGS_CONTEXT_BLOCK),
                                    children: e.contextItems.map((e) => (0, m.jsx)(V, { item: e, ...(0, b.Am)(b.Kq.vibeSettings.VIBE_SETTINGS_CONTEXT_BUTTON) }, e.seed)),
                                }),
                            e.diversity &&
                                (0, m.jsx)(M.m, {
                                    title: e.diversity.title,
                                    restrictionsClassName: U().diversity,
                                    ...(0, b.Am)(b.Kq.vibeSettings.VIBE_SETTINGS_DIVERSITY_BLOCK),
                                    children: e.diversity.values.map((t) => {
                                        var a;
                                        return (0, m.jsx)(K, { type: null == (a = e.diversity) ? void 0 : a.type, restrictionValue: t }, t.value);
                                    }),
                                }),
                            e.moodEnergy &&
                                (0, m.jsx)(M.m, {
                                    title: e.moodEnergy.title,
                                    restrictionsClassName: U().moodEnergy,
                                    ...(0, b.Am)(b.Kq.vibeSettings.VIBE_SETTINGS_MOOD_ENERGY_BLOCK),
                                    children: e.moodEnergy.values.map((t) => {
                                        var a;
                                        return (0, m.jsx)(K, { type: null == (a = e.moodEnergy) ? void 0 : a.type, restrictionValue: t }, t.value);
                                    }),
                                }),
                            e.language &&
                                (0, m.jsx)(M.m, {
                                    title: e.language.title,
                                    restrictionsClassName: U().contextItems,
                                    ...(0, b.Am)(b.Kq.vibeSettings.VIBE_SETTINGS_LANGUAGE_BLOCK),
                                    children: e.language.values.map((t) => {
                                        var a;
                                        return (0, m.jsx)(K, { type: null == (a = e.language) ? void 0 : a.type, restrictionValue: t }, t.value);
                                    }),
                                }),
                        ],
                    })
                );
            });
            var G = a(49723),
                q = a.n(G);
            let Q = (0, p.PA)(() => {
                var e, t, a, n;
                let { formatMessage: r } = (0, h.A)(),
                    {
                        vibe: l,
                        settings: { isMobile: s },
                        vibeSettings: o,
                    } = (0, i.Pjs)(),
                    { pageId: c } = (0, i.$au)(),
                    { blockIdForFrom: d } = (0, i.N8n)(),
                    u = (0, v.useRef)(null),
                    _ = (0, v.useRef)(null),
                    p = (0, v.useRef)(null),
                    { resetSettings: y } = (0, i.B0S)({ seeds: null != (n = null == (e = l.meta) ? void 0 : e.seeds) ? n : [], pageIdForFrom: c, blockIdForFrom: d }),
                    { contentRef: A } = (0, i.gKY)(),
                    { contentHeight: f } = L(0),
                    { state: C, setState: k, toggleFalse: M } = (0, N.e)(!1);
                (0, v.useEffect)(
                    () => () => {
                        o.reset();
                    },
                    [o],
                );
                let B = (0, v.useMemo)(
                        () => (s ? { height: '88vh', transitionProperty: 'opacity' } : A ? { insetInlineEnd: 7, insetBlockStart: A.offsetTop + 7, height: f - 16 } : {}),
                        [f, A, s],
                    ),
                    O = !!(l.isApplying || l.isMyVibe),
                    R = (0, x.c)((e) => {
                        if (!l.isApplying) {
                            var t;
                            u.current && (0, j.P)(e, q().ripple, u.current), y(), null == (t = _.current) || t.focus();
                        }
                    }),
                    D = (0, v.useMemo)(() => {
                        var e, t;
                        if (
                            ((e) =>
                                !!e &&
                                e.some((e) => {
                                    let [t] = (null == e ? void 0 : e.split(':')) || [];
                                    return e === i.M19 || (t && i.UMA.includes(t));
                                }))(null == (e = l.meta) ? void 0 : e.seeds)
                        )
                            return (null == (t = l.meta) ? void 0 : t.context)
                                ? (0, m.jsx)(S.$, {
                                      className: q().toggleSettingsButton,
                                      size: 'm',
                                      radius: 'round',
                                      icon: (0, m.jsx)(E.Icon, { variant: 'filter', size: 'xs' }),
                                      'aria-label': r({ id: 'vibe-actions.aria-label-settings' }),
                                      ...(0, b.Am)(b.Kq.vibeSettings.VIBE_SETTINGS_BUTTON),
                                  })
                                : (0, m.jsx)(S.$, {
                                      className: q().toggleSettingsButton,
                                      size: 'default',
                                      radius: 'xxxl',
                                      icon: (0, m.jsx)(E.Icon, { variant: 'filter', size: 'xxs' }),
                                      'aria-label': r({ id: 'vibe-actions.aria-label-settings' }),
                                      ...(0, b.Am)(b.Kq.vibeSettings.VIBE_SETTINGS_BUTTON),
                                      children: (0, m.jsx)(w.Caption, {
                                          variant: 'span',
                                          type: 'controls',
                                          size: 'm',
                                          weight: 'medium',
                                          children: (0, m.jsx)(g.A, { id: 'interface-actions.configure-my-vibe' }),
                                      }),
                                  });
                    }, [r, null == (t = l.meta) ? void 0 : t.context, null == (a = l.meta) ? void 0 : a.seeds]),
                    { handlers: F } = P({ ref: p, onClose: M, placement: 'bottom', disableSwipe: !s, swipeableProps: { preventScrollOnSwipe: !0 } });
                return (0, m.jsxs)(T.AM, {
                    placement: s ? 'bottom' : 'right',
                    isMobile: s,
                    strategy: 'fixed',
                    transform: !1,
                    portalNode: A,
                    positionElement: A,
                    disableFloatingStyles: !s,
                    open: C,
                    onOpenChange: k,
                    style: B,
                    overlayClassName: q().overlay,
                    popoverContentRef: p,
                    children: [
                        D,
                        (0, m.jsx)(T.hl, {
                            className: q().popover,
                            ref: p,
                            ...(0, b.Am)(b.Kq.vibeSettings.VIBE_SETTINGS_BLOCK),
                            children: (0, m.jsxs)('div', {
                                className: q().root,
                                children: [
                                    s && (0, m.jsx)('div', { ref: F.ref, onMouseDown: F.onMouseDown, className: q().swipeableArea }),
                                    (0, m.jsxs)('div', {
                                        className: q().header,
                                        children: [
                                            (0, m.jsx)(w.Heading, {
                                                variant: 'h3',
                                                size: 's',
                                                weight: 'bold',
                                                ...(0, b.Am)(b.Kq.vibeSettings.VIBE_SETTINGS_TITLE),
                                                children: (0, m.jsx)(g.A, { id: 'interface-actions.my-vibe-settings' }),
                                            }),
                                            (0, m.jsxs)('div', {
                                                className: q().actions,
                                                children: [
                                                    (0, m.jsx)(I.m_, {
                                                        offsetOptions: 4,
                                                        placement: 'left',
                                                        text: r({ id: 'interface-actions.reset-my-vibe-settings' }),
                                                        children: (0, m.jsx)(S.$, {
                                                            variant: 'outline',
                                                            radius: 'round',
                                                            size: 'xxxs',
                                                            icon: (0, m.jsx)(E.Icon, { variant: 'reset', size: 'xxxs' }),
                                                            onClick: R,
                                                            disabled: !!l.isMyVibe,
                                                            'aria-hidden': !!l.isMyVibe,
                                                            'aria-disabled': O,
                                                            'aria-label': r({ id: 'interface-actions.reset-my-vibe-settings' }),
                                                            ref: u,
                                                            ...(0, b.Am)(b.Kq.vibeSettings.VIBE_SETTINGS_RESET_BUTTON),
                                                        }),
                                                    }),
                                                    (0, m.jsx)(S.$, {
                                                        radius: 'round',
                                                        color: 'secondary',
                                                        size: 'xxs',
                                                        icon: (0, m.jsx)(E.Icon, { variant: 'close', size: 'xxs' }),
                                                        onClick: M,
                                                        'aria-label': r({ id: 'interface-actions.close-my-vibe-settings' }),
                                                        ref: _,
                                                        ...(0, b.Am)(b.Kq.vibeSettings.VIBE_SETTINGS_CLOSE_BUTTON),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, m.jsx)(W, {}),
                                ],
                            }),
                        }),
                    ],
                });
            });
            var Y = a(84638),
                H = a(5619),
                $ = a.n(H);
            let X = (0, p.PA)(() => {
                var e, t;
                let { formatMessage: a } = (0, h.A)(),
                    {
                        vibe: n,
                        settings: { isMobile: r },
                        vibeSettings: l,
                    } = (0, i.Pjs)(),
                    { pageId: s } = (0, i.$au)(),
                    { blockIdForFrom: o } = (0, i.N8n)(),
                    c = (0, v.useRef)(null),
                    d = (0, v.useRef)(null),
                    { resetSettings: u } = (0, i.B0S)({ seeds: null != (t = null == (e = n.meta) ? void 0 : e.seeds) ? t : [], pageIdForFrom: s, blockIdForFrom: o }),
                    { contentRef: _ } = (0, i.gKY)();
                (0, v.useEffect)(
                    () => () => {
                        l.reset();
                    },
                    [l],
                );
                let p = !!(n.isApplying || n.isMyVibe),
                    y = (0, x.c)((e) => {
                        var t;
                        n.isApplying || (c.current && (0, j.P)(e, $().ripple, c.current), u(), null == (t = d.current) || t.focus());
                    });
                return (0, m.jsx)(Y.a, {
                    size: 'fitContent',
                    placement: r ? 'default' : 'right',
                    open: l.modal.isOpened,
                    onOpenChange: l.modal.onOpenChange,
                    onClose: l.modal.close,
                    className: $().root,
                    contentClassName: $().modalContent,
                    overlayClassName: $().overlay,
                    portalNode: r ? null : _,
                    showHeader: !1,
                    restoreFocus: !0,
                    closeOnOutsidePress: !0,
                    containerProps: (0, b.Am)(b.Kq.vibeSettings.VIBE_SETTINGS_BLOCK),
                    children: (0, m.jsxs)('div', {
                        className: $().content,
                        children: [
                            (0, m.jsxs)('div', {
                                className: $().header,
                                children: [
                                    (0, m.jsx)(w.Heading, {
                                        variant: 'h3',
                                        size: 's',
                                        weight: 'bold',
                                        ...(0, b.Am)(b.Kq.vibeSettings.VIBE_SETTINGS_TITLE),
                                        children: (0, m.jsx)(g.A, { id: 'interface-actions.my-vibe-settings' }),
                                    }),
                                    (0, m.jsxs)('div', {
                                        className: $().actions,
                                        children: [
                                            (0, m.jsx)(I.m_, {
                                                offsetOptions: 4,
                                                placement: 'left',
                                                text: a({ id: 'interface-actions.reset-my-vibe-settings' }),
                                                children: (0, m.jsx)(S.$, {
                                                    variant: 'outline',
                                                    radius: 'round',
                                                    size: 'xxxs',
                                                    icon: (0, m.jsx)(E.Icon, { variant: 'reset', size: 'xxxs' }),
                                                    onClick: y,
                                                    disabled: !!n.isMyVibe,
                                                    'aria-hidden': !!n.isMyVibe,
                                                    'aria-disabled': p,
                                                    'aria-label': a({ id: 'interface-actions.reset-my-vibe-settings' }),
                                                    ref: c,
                                                    ...(0, b.Am)(b.Kq.vibeSettings.VIBE_SETTINGS_RESET_BUTTON),
                                                }),
                                            }),
                                            (0, m.jsx)(S.$, {
                                                radius: 'round',
                                                color: 'secondary',
                                                size: 'xxs',
                                                icon: (0, m.jsx)(E.Icon, { variant: 'close', size: 'xxs' }),
                                                onClick: l.modal.close,
                                                'aria-label': a({ id: 'interface-actions.close-my-vibe-settings' }),
                                                ref: d,
                                                ...(0, b.Am)(b.Kq.vibeSettings.VIBE_SETTINGS_CLOSE_BUTTON),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, m.jsx)(W, {}),
                        ],
                    }),
                });
            });
        },
        78648: (e) => {
            e.exports = {
                root: 'BrandedPlayerModal_root__hejJx',
                modalContent: 'BrandedPlayerModal_modalContent__xcXKK',
                image: 'BrandedPlayerModal_image__paBEA',
                closeButton: 'BrandedPlayerModal_closeButton__W3QRx',
                content: 'BrandedPlayerModal_content__b9e2P',
                actions: 'BrandedPlayerModal_actions__6aeD7',
                button: 'BrandedPlayerModal_button__WZTH7',
            };
        },
        81020: (e, t, a) => {
            'use strict';
            a.d(t, { rM: () => r, S0: () => n, sr: () => i, D7: () => _, hY: () => C, CT: () => Y, mx: () => ea, KA: () => eu });
            let i = { minFontSize: 24, maxFontSize: 64, maxLines: 2, lineHeight: 0.9 },
                n = { minFontSize: 48, maxFontSize: 104, maxLines: 4, lineHeight: 0.9 },
                r = { minFontSize: 48, maxFontSize: 104, maxLines: void 0, lineHeight: 1.1 },
                l = { maxFontSize: 24, minFontSize: 14, lineHeight: 1 };
            var s,
                o = a(60754);
            (s || (s = {})).OK = 'ok';
            var c = a(57318),
                d = a(49574),
                u = a(95428);
            let _ = o.gK
                .compose(
                    o.gK.model('VibeActions', {
                        meta: o.gK.maybeNull(c.Gh),
                        applyingSetting: o.gK.maybeNull(o.gK.string),
                        isApplying: o.gK.boolean,
                        vibeResetLoadingState: o.gK.enumeration(Object.values(d.GuX)),
                    }),
                    u.XT,
                )
                .views((e) => ({
                    get isMyVibe() {
                        return e.meta && 1 === e.meta.seeds.length && e.meta.seeds[0] === d.M19;
                    },
                    get isShuffleVibe() {
                        var t;
                        return e.meta && 1 === e.meta.seeds.length && (null == (t = e.meta.seeds[0]) ? void 0 : t.includes(d.yxZ));
                    },
                }))
                .actions((e) => ({
                    getLastVibe: (0, o.L3)(function* () {
                        let { rotorResource: t, modelActionsLogger: a } = (0, o._$)(e);
                        if (e.loadingState !== d.GuX.PENDING)
                            try {
                                e.loadingState = d.GuX.PENDING;
                                let a = yield t.waveLast();
                                (e.meta = (0, c.lb)(a)), (e.loadingState = d.GuX.RESOLVE);
                            } catch (t) {
                                a.error(t), (e.loadingState = d.GuX.REJECT);
                            }
                    }),
                    vibeReset: (0, o.L3)(function* () {
                        let { rotorResource: t, modelActionsLogger: a } = (0, o._$)(e);
                        if (e.vibeResetLoadingState !== d.GuX.PENDING)
                            try {
                                (e.vibeResetLoadingState = d.GuX.PENDING),
                                    (yield t.waveLastReset()) === s.OK && (e.meta = (0, c.lb)({ name: '', seeds: [d.M19] })),
                                    (e.vibeResetLoadingState = d.GuX.RESOLVE);
                            } catch (t) {
                                a.error(t), (e.vibeResetLoadingState = d.GuX.REJECT);
                            }
                    }),
                    setApplyingSetting(t) {
                        t ? (e.applyingSetting = (0, o.wg)(t)) : (e.applyingSetting = null);
                    },
                    setIsApplying(t) {
                        e.isApplying = t;
                    },
                    setVibe(t) {
                        e.meta = (0, c.lb)(t);
                    },
                    reset() {
                        (e.meta = null), (e.vibeResetLoadingState = d.GuX.IDLE), (e.loadingState = d.GuX.IDLE);
                    },
                }));
            var m = a(32290),
                p = a(96103),
                v = a(60900),
                y = a(16172),
                h = a(59824),
                g = a(91027),
                b = a(50162),
                x = a(44574),
                A = a(43315),
                f = a.n(A);
            let C = (0, p.PA)((e) => {
                var t;
                let { artist: a, withLink: i, onClick: n } = e,
                    { formatMessage: r } = (0, v.A)(),
                    l = (0, d.NKK)(),
                    s = null == (t = a.cutoutCover) ? void 0 : t.uri,
                    o = r({ id: 'entity-names.artist-name' }, { artistName: a.name }),
                    c = (0, g.c)(() => {
                        l({ to: y.QT.ArtistScreen });
                    }),
                    u = (0, m.jsx)(b.Image, {
                        className: f().cover,
                        fit: 'contain',
                        src: s,
                        size: 'orig',
                        withAvatarReplace: !0,
                        alt: o,
                        'aria-hidden': !0,
                        withLoadingIndicator: !1,
                    });
                return i
                    ? (0, m.jsx)(x.N_, { className: f().root, href: a.url, onClick: c, 'aria-hidden': !0, ...(0, h.Am)(h.e8.vibe.VIBE_ARTIST_COVER), children: u })
                    : (0, m.jsx)('div', { className: f().root, onClick: n, 'aria-hidden': !0, ...(0, h.Am)(h.e8.vibe.VIBE_ARTIST_COVER), children: u });
            });
            var k = a(63618),
                P = a(21916),
                N = a(55178),
                j = a.t(N, 2),
                S = a(39407),
                E = a(54862),
                T = a(42406),
                I = a(63423),
                w = a(71926),
                L = a(41854),
                M = a(82586),
                B = a(66007),
                O = a.n(B);
            let R = !0,
                D = (0, p.PA)((e) => {
                    let { isPlaying: t, onClick: a, ariaDisabled: i, className: n } = e,
                        { vibe: r } = (0, d.Pjs)(),
                        { formatMessage: l } = (0, v.A)(),
                        s = (0, d.W6M)(),
                        o = (0, d.D60)(),
                        c = t ? 'pauseVibe' : 'playVibe',
                        u = t ? h.e8.vibe.MY_VIBE_PAUSE_BUTTON : h.e8.vibe.MY_VIBE_PLAY_BUTTON,
                        _ = (0, N.useMemo)(() => (t ? l({ id: 'vibe-actions.aria-label-pause' }) : l({ id: 'vibe-actions.aria-label-play' })), [l, t]),
                        p = (0, N.useCallback)(
                            (e) => {
                                r.isApplying || null == a || a(), e.stopPropagation(), e.preventDefault();
                            },
                            [a, r.isApplying],
                        );
                    return (
                        (0, N.useEffect)(() => {
                            if ('production' === o && 1 === s.length && R) {
                                var e, t;
                                let a = Math.round(performance.now());
                                null == (t = window.Ya) || null == (e = t.Rum) || e.sendTimeMark('my-vibe-button-loading-time', a), (R = !1);
                            }
                        }, []),
                        (0, m.jsx)(I.$, {
                            className: (0, k.$)(O().root, { [O().root_isVibeLoading]: r.isApplying }, n),
                            withRipple: !1,
                            withHover: !1,
                            onClick: p,
                            variant: 'text',
                            'aria-disabled': r.isApplying || i,
                            'aria-label': _,
                            icon: (0, m.jsx)(M.Icon, { size: 's', className: O().icon, variant: c }),
                            ...(0, h.Am)(u),
                            children: (0, m.jsx)(S.A, { id: 'entity-names.my-vibe' }),
                        })
                    );
                });
            D.displayName = 'PlayButton';
            var F = a(88751),
                V = a.n(F),
                K = a(6752),
                z = a(76464),
                U = a(75225),
                W = a.n(U);
            let G = (0, p.PA)((e) => {
                    var t;
                    let { context: a, onResetClick: i, className: n } = e,
                        {
                            vibe: r,
                            settings: { isMobile: l },
                            experiments: s,
                        } = (0, d.Pjs)(),
                        { formatMessage: o } = (0, v.A)(),
                        u = (0, c.A7)(r.meta),
                        _ = a && !l,
                        p = (0, K.L)(() => {
                            var e;
                            return s.checkExperiment(d.zal.WebNextVibeDescription, 'on') && (null == (e = r.meta) ? void 0 : e.isMix)
                                ? o({ id: 'vibe-actions.vibe-context' }, { type: r.meta.type, name: a })
                                : a;
                        });
                    return (0, m.jsxs)('div', {
                        className: (0, k.$)(W().root, n),
                        children: [
                            _ &&
                                (0, m.jsx)(x.O0, {
                                    size: 'm',
                                    iconSize: 'xs',
                                    withScaleAnimation: !1,
                                    isPinned: null == (t = r.meta) ? void 0 : t.isPinned,
                                    onClick: u,
                                    className: W().pinButton,
                                }),
                            (0, m.jsx)(z.s$, {}),
                            a &&
                                (0, m.jsxs)('div', {
                                    className: (0, k.$)(W().context),
                                    ...(0, h.Am)(h.e8.vibe.VIBE_CONTEXT),
                                    children: [
                                        (0, m.jsx)(w.Caption, { variant: 'span', type: 'controls', size: 'm', weight: 'medium', lineClamp: 1, children: p }),
                                        (0, m.jsx)(I.$, {
                                            className: W().resetButton,
                                            variant: 'text',
                                            radius: 'round',
                                            withRipple: !1,
                                            icon: (0, m.jsx)(M.Icon, { variant: 'close', size: 'xxs' }),
                                            onClick: i,
                                            'aria-label': ''.concat(o({ id: 'vibe-actions.reset-settings' }), ' ').concat(p),
                                            ...(0, h.Am)(h.e8.vibe.RESET_VIBE_CONTEXT_BUTTON),
                                        }),
                                    ],
                                }),
                        ],
                    });
                }),
                q = 'vibe-block',
                Q = 'vibe-block-controls',
                Y = (0, p.PA)((e) => {
                    var t, a, i, n;
                    let { className: r } = e,
                        l = (0, P.useRouter)(),
                        { vibe: s, experiments: o, user: c } = (0, d.Pjs)(),
                        u = (0, N.useRef)(null),
                        [_, p] = (0, E.d)(),
                        { pageId: v } = (0, d.$au)(),
                        { blockIdForFrom: y } = (0, d.N8n)(),
                        { isFreemium: b, withFreemiumCloseListening: A } = (0, d.XCI)(),
                        {
                            openPaymentWidgetModal: f,
                            saveOfferAndAuthorize: C,
                            isShimmerActive: j,
                            isShimmerVisible: M,
                            mainText: B,
                            mainTextA11y: O,
                            additionText: R,
                        } = (0, d.DpZ)({ storeName: 'music', isEnabled: b || A, offerElement: { element: _, intersectionPropertyId: Q } }),
                        { isIntersecting: F } = null != (i = (0, T.BL)([u], { preflightCheck: !1 }, !u.current)[q]) ? i : {},
                        K = (0, d.NFA)().get(d.QGx),
                        {
                            isVibeContext: z,
                            isPlaying: U,
                            togglePlay: W,
                            resetSettings: Y,
                        } = (0, d.B0S)({ seeds: null != (n = null == (t = s.meta) ? void 0 : t.seeds) ? n : [], pageIdForFrom: v, blockIdForFrom: y }),
                        H = o.checkExperiment(d.zal.WebNextDisableVibeSettings, 'on') || b || !c.isAuthorized || A,
                        $ = (0, N.useCallback)(() => {
                            z ? Y() : s.vibeResetLoadingState !== d.GuX.PENDING && s.vibeReset();
                        }, [z, s, Y]),
                        X = (0, N.useCallback)(() => {
                            if (!c.isAuthorized) {
                                if (!K.authorizationUrl) return;
                                l.push(K.authorizationUrl);
                                return;
                            }
                            (b || A) && f();
                        }, [c.isAuthorized, K.authorizationUrl, l, b, A, f]),
                        Z = (0, N.useCallback)(
                            (e) => {
                                e.stopPropagation(), e.preventDefault(), X();
                            },
                            [X],
                        ),
                        J = (0, N.useCallback)(() => {
                            if (b || !c.isAuthorized || A) return void X();
                            W();
                        }, [b, A, c.isAuthorized, W, X]),
                        ee = (0, N.useMemo)(
                            () =>
                                o.checkExperiment(d.zal.WebNextShaderFallbackEnabled, 'on')
                                    ? (0, m.jsx)(L.t$, { className: V().vibeAnimation })
                                    : (0, m.jsx)(L.NY, { isIntersecting: F, className: V().vibeAnimation }),
                            [o, F],
                        ),
                        et = (0, g.c)(() => {
                            if (!c.isAuthorized) return void C();
                            f();
                        }),
                        ea = (0, N.useMemo)(
                            () =>
                                o.checkExperiment(d.zal.WebNextUnauthorizedSubscriptionButton, 'on')
                                    ? (0, m.jsxs)(I.$, {
                                          isBlock: !0,
                                          radius: 'xxxl',
                                          size: 'l',
                                          color: 'plus',
                                          className: V().button,
                                          onClick: et,
                                          ...(0, h.Am)(h.e8.vibe.MY_VIBE_SUBSCRIPTION_BUTTON_UNAUTH),
                                          children: [
                                              (0, m.jsx)(w.Caption, { className: V().text_main, variant: 'div', size: 'l', children: B }),
                                              R && (0, m.jsx)(w.Caption, { className: V().text_addition, variant: 'div', size: 'm', children: R }),
                                          ],
                                      })
                                    : (0, m.jsx)(x.Hi, { size: 'l', className: V().button }),
                            [R, o, et, B],
                        );
                    return (
                        (0, N.useEffect)(
                            () => () => {
                                s.reset();
                            },
                            [s],
                        ),
                        c.isAuthorized && s.isNeededToLoad && (0, N.use)(s.getLastVibe()),
                        (0, m.jsxs)('div', {
                            className: (0, k.$)(V().root, { [V().root_freemium]: b || !c.isAuthorized || A }, r),
                            ref: u,
                            'data-intersection-property-id': q,
                            ...(0, h.Am)(h.e8.vibe.VIBE_BLOCK),
                            children: [
                                ee,
                                (0, m.jsxs)('div', {
                                    className: V().controls,
                                    onClick: Z,
                                    ref: p,
                                    'data-intersection-property-id': Q,
                                    children: [
                                        (0, m.jsx)(D, { className: V().playButton, isPlaying: U, ariaDisabled: b || !c.isAuthorized || A, onClick: J }),
                                        !H && (0, m.jsx)(G, { className: V().settingsButton, context: null == (a = s.meta) ? void 0 : a.context, onResetClick: $ }),
                                        (b || !c.isAuthorized || A) &&
                                            (0, m.jsx)(w.Caption, {
                                                className: V().subscriptionText,
                                                variant: 'div',
                                                size: 'l',
                                                ...(0, h.Am)(h.e8.vibe.MY_VIBE_SUBSCRIPTION_TEXT),
                                                children: (0, m.jsx)(S.A, { id: 'vibe-freemium.available-in-plus', values: { br: (0, m.jsx)('br', {}) } }),
                                            }),
                                        !c.isAuthorized && ea,
                                        c.isAuthorized &&
                                            (b || A) &&
                                            (0, m.jsx)(x.b4, {
                                                isShimmerActive: j,
                                                isShimmerVisible: M,
                                                onClick: f,
                                                mainText: B,
                                                ariaLabel: O,
                                                additionText: R,
                                                className: V().button,
                                                ...(0, h.Am)(h.e8.vibe.MY_VIBE_SUBSCRIPTION_BUTTON),
                                            }),
                                    ],
                                }),
                            ],
                        })
                    );
                });
            Y.displayName = 'VibeBlock';
            var H = {
                    5969: (e, t, a) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useDynamicText = t.findOptimalFontSize = void 0);
                        let i = a(810),
                            n = (e) => {
                                (e.style.wordBreak = 'keep-all'),
                                    (e.style.overflowWrap = 'normal'),
                                    (e.style.maxHeight = 'none'),
                                    (e.style.height = 'auto'),
                                    (e.style.overflow = 'visible'),
                                    Array.from(e.children).forEach((e) => {
                                        e instanceof HTMLElement && n(e);
                                    });
                            };
                        (t.findOptimalFontSize = (e) => {
                            let { container: t, containerWidth: a, containerHeight: i, minFontSize: r, maxFontSize: l, lineHeight: s, maxLines: o } = e,
                                c = ((e, t, a) => {
                                    let i = e.cloneNode(!0);
                                    return (
                                        (i.style.cssText =
                                            '\n        position: absolute !important;\n        visibility: hidden !important;\n        pointer-events: none !important;\n        width: '.concat(
                                                t,
                                                'px !important;\n    ',
                                            )),
                                        n(i),
                                        i.style.setProperty('--dynamic-line-height', String(a)),
                                        document.body.appendChild(i),
                                        i
                                    );
                                })(t, a, s);
                            try {
                                let e = r,
                                    t = l,
                                    n = r;
                                for (; e <= t; ) {
                                    let r = Math.floor((e + t) / 2);
                                    c.style.setProperty('--dynamic-font-size', ''.concat(r, 'px'));
                                    let l = 'number' == typeof o ? c.scrollHeight <= Math.min(o * r * s, i) : c.scrollHeight <= i,
                                        d = c.scrollWidth <= a + 1;
                                    l && d ? ((n = r), (e = r + 1)) : (t = r - 1);
                                }
                                return n - 1;
                            } finally {
                                c.remove();
                            }
                        }),
                            (t.useDynamicText = (e, a, n) => {
                                let { minFontSize: r, maxFontSize: l, lineHeight: s, maxLines: o, fallbackMaxLines: c } = a;
                                (0, i.useLayoutEffect)(() => {
                                    if (null === e) return;
                                    e.style.setProperty('--dynamic-line-height', String(s));
                                    let a = () => {
                                            let { width: a, height: i } = e.getBoundingClientRect(),
                                                d = e.childNodes.length > 0;
                                            if (0 === a || 0 === i || !d) return;
                                            let { maxLines: u, fontSize: _ } = ((e) => {
                                                let { fallbackMaxLines: a, maxLines: i, minFontSize: n } = e,
                                                    r = (0, t.findOptimalFontSize)({ ...e, maxLines: i });
                                                return void 0 === a || r >= n
                                                    ? { maxLines: i, fontSize: r }
                                                    : { maxLines: a, fontSize: (0, t.findOptimalFontSize)({ ...e, maxLines: a }) };
                                            })({
                                                container: e,
                                                containerWidth: a,
                                                containerHeight: i,
                                                minFontSize: r,
                                                maxFontSize: l,
                                                lineHeight: s,
                                                maxLines: o,
                                                fallbackMaxLines: c,
                                            });
                                            null == n || n(u), e.style.setProperty('--dynamic-font-size', ''.concat(_, 'px'));
                                        },
                                        i = new ResizeObserver(a),
                                        d = new MutationObserver(a);
                                    return (
                                        i.observe(e),
                                        d.observe(e, { childList: !0, characterData: !0, subtree: !0 }),
                                        document.fonts.ready.then(a),
                                        a(),
                                        () => {
                                            i.disconnect(), d.disconnect();
                                        }
                                    );
                                }, [e, n, c, s, l, o, r]);
                            });
                    },
                    810: (e) => {
                        e.exports = j;
                    },
                },
                $ = {},
                X = (function e(t) {
                    var a = $[t];
                    if (void 0 !== a) return a.exports;
                    var i = ($[t] = { exports: {} });
                    return H[t](i, i.exports, e), i.exports;
                })(5969);
            X.__esModule, X.findOptimalFontSize;
            var Z = X.useDynamicText;
            let J = (e) => {
                var t;
                return null != (t = e.fallbackMaxLines) ? t : e.maxLines;
            };
            var ee = a(53255),
                et = a.n(ee);
            let ea = (e) => {
                    let { textOptions: t, children: a } = e,
                        { setContainerRef: i, lineClamp: n } = ((e) => {
                            let [t, a] = (0, E.d)(),
                                [i, n] = (0, N.useState)(() => J(e));
                            return (
                                (0, N.useEffect)(() => {
                                    n(J(e));
                                }, [e.fallbackMaxLines, e.maxLines]),
                                Z(t, e, n),
                                { setContainerRef: a, lineClamp: i }
                            );
                        })(t);
                    return (0, m.jsx)('div', {
                        ref: i,
                        className: et().root,
                        ...(0, h.Am)(h.e8.vibe.VIBE_DYNAMIC_ARTISTS),
                        children: (0, N.cloneElement)(a, { lineClamp: n }),
                    });
                },
                ei = {
                    src: '/_next/static/media/q2v-glow-w120.1677f964.png',
                    height: 256,
                    width: 400,
                    blurDataURL:
                        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAJ1BMVEX/e//qkv/7XPX4vv/0UO/nYPj6UO7sP+beSvr6Ren/VvL8k/nrff8yHG/VAAAADHRSTlMBZCkReHVo/v3OUx1DIc6HAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAHklEQVR4nGNggANmRlYWNiYGBgZGHg52Ti5kESgAAAflAFodTC0aAAAAAElFTkSuQmCC',
                    blurWidth: 8,
                    blurHeight: 5,
                },
                en = {
                    src: '/_next/static/media/q2v-glow-w160.81b6098e.png',
                    height: 256,
                    width: 480,
                    blurDataURL:
                        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAGFBMVEVMaXH/cf30Quf+Tu7ZTvDNZPvhlP/vdPdHyLt4AAAACHRSTlMADLtextdqZIlEHsoAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAdSURBVHicY2BgYGBgZGRkYGBgY2VhYmJmRGJApQAD1gA1KQvxbwAAAABJRU5ErkJggg==',
                    blurWidth: 8,
                    blurHeight: 4,
                },
                er = {
                    src: '/_next/static/media/q2v-glow-w200.3dd3deeb.png',
                    height: 256,
                    width: 560,
                    blurDataURL:
                        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAGFBMVEX/eftMaXH4P+X/T+3UUvTHZ/vflP/lS+7LLK/gAAAACHRSTlMIALNXwM9gvU78oPkAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAdSURBVHicY2BkZGRkYGBgZGBjZWFnYmJmQDBgUgAFNABFuS+NPAAAAABJRU5ErkJggg==',
                    blurWidth: 8,
                    blurHeight: 4,
                },
                el = {
                    src: '/_next/static/media/q2v-glow-w240.520a1100.png',
                    height: 256,
                    width: 640,
                    blurDataURL:
                        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAIVBMVEX6UfH/Vf/haPn0P+bZjf/6RefTVPX///7NfP79Qub/X/R17Zh8AAAAC3RSTlMtAyrZGzfsB8+eGFOiud8AAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAdSURBVHicY2BkYWJiYGVgZGDnYGNjZubkYoCJAAAEdABTyJLycgAAAABJRU5ErkJggg==',
                    blurWidth: 8,
                    blurHeight: 3,
                },
                es = {
                    src: '/_next/static/media/q2v-glow-w280.b6e7b279.png',
                    height: 256,
                    width: 720,
                    blurDataURL:
                        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAIVBMVEX/Su7kZfryVfLyP+bUUvXZf/v/ZvXjqv/9POLfof/Fb/xpkARsAAAAC3RSTlMvJCrT4R4MBLkx67AUSkUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAdSURBVHicY2BnZWRkYmBgY+DkYmFhZuZgYICJAAAE3wBW+41RHAAAAABJRU5ErkJggg==',
                    blurWidth: 8,
                    blurHeight: 3,
                },
                eo = (e, t) => ({ '--q2v-glow-image': 'url('.concat(e.src, ')'), '--q2v-glow-aspect-ratio': t });
            var ec = a(29207),
                ed = a.n(ec);
            let eu = (0, p.PA)((e) => {
                var t;
                let { context: a, isResetAvailable: i, isHidden: n, onClick: r, className: s } = e,
                    { vibe: o, sonataState: c, experiments: u } = (0, d.Pjs)(),
                    { formatMessage: _ } = (0, v.A)(),
                    [p, y] = (0, E.d)(),
                    [b, x] = (0, E.d)(),
                    [A, f] = (0, N.useState)(null);
                Z(p, l);
                let C = (0, d.brA)(),
                    P = _({ id: 'interface-actions.reset-context' }, { context: a }),
                    j = (0, g.c)(() => {
                        r(), C(!0);
                    }),
                    S = o.isShuffleVibe && c.isVibeContext,
                    T = !!(null == (t = o.meta) ? void 0 : t.isQ2V) && c.isVibeContext && u.checkExperiment(d.zal.WebNextQ2VContextColor, 'on'),
                    L = (0, K.L)(() => (S ? _({ id: 'entity-names.my-vibe' }) : a));
                (0, N.useLayoutEffect)(() => {
                    if (!T || !i || null === b) return void f(null);
                    let e = () => {
                        let { width: e } = b.getBoundingClientRect();
                        e > 0 && f(e);
                    };
                    e();
                    let t = new ResizeObserver(e);
                    return (
                        t.observe(b),
                        () => {
                            t.disconnect();
                        }
                    );
                }, [b, a, T, i, L]);
                let B = (0, K.L)(() => {
                        if (A)
                            return ((e) =>
                                e < 120
                                    ? eo(ei, '200 / 128')
                                    : e < 160
                                      ? eo(en, '240 / 128')
                                      : e < 200
                                        ? eo(er, '280 / 128')
                                        : e < 240
                                          ? eo(el, '320 / 128')
                                          : eo(es, '360 / 128'))(A);
                    }),
                    O = (0, K.L)(() =>
                        a
                            ? i
                                ? (0, m.jsxs)(I.$, {
                                      ref: x,
                                      className: (0, k.$)(ed().button, { [ed().button_q2v]: T }),
                                      radius: 'xxxl',
                                      withHover: !0,
                                      withRipple: !T,
                                      onClick: j,
                                      'aria-label': P,
                                      ...(0, h.Am)(h.e8.vibe.RESET_VIBE_CONTEXT_BUTTON),
                                      children: [
                                          (0, m.jsx)(w.Caption, {
                                              variant: 'span',
                                              className: (0, k.$)(ed().context, { [ed().context_q2v]: T }),
                                              lineClamp: 2,
                                              children: L,
                                          }),
                                          (0, m.jsx)(M.Icon, {
                                              variant: 'close_filled',
                                              size: 'xs',
                                              className: ed().icon,
                                              ...(0, h.Am)(h.e8.vibe.RESET_VIBE_CONTEXT_BUTTON_ICON),
                                          }),
                                      ],
                                  })
                                : (0, m.jsx)('div', {
                                      className: ed().container,
                                      children: (0, m.jsx)(w.Caption, {
                                          variant: 'span',
                                          className: ed().context,
                                          lineClamp: 2,
                                          ...(0, h.Am)(h.e8.vibe.RESET_VIBE_CONTEXT_STATIC_TEXT),
                                          children: L,
                                      }),
                                  })
                            : null,
                    );
                return (0, m.jsx)('div', {
                    className: (0, k.$)(ed().root, s, { [ed().root_visible]: !n, [ed().root_q2v]: T && null !== A }),
                    style: B,
                    ref: y,
                    'aria-hidden': !!n,
                    children: O,
                });
            });
        },
        85303: (e, t, a) => {
            'use strict';
            a.d(t, { UG: () => ex, LO: () => h });
            var i,
                n,
                r,
                l,
                s,
                o,
                c,
                d,
                u = a(60754),
                _ = a(49574);
            !(function (e) {
                (e.DONATION = 'DONATION'), (e.CONCERT = 'CONCERT'), (e.FACT = 'FACT');
            })(i || (i = {}));
            let m = (e) => {
                var t;
                return { title: e.title, url: e.url, faviconUrl: null != (t = e.faviconUrl) ? t : null };
            };
            !(function (e) {
                (e.LIKE = 'like'), (e.DISLIKE = 'dislike'), (e.NEUTRAL = 'neutral');
            })(n || (n = {}));
            let p = u.gK.model('WordsCardAction', { title: u.gK.string, url: u.gK.string }),
                v = u.gK.model('WordsCardSource', { title: u.gK.string, url: u.gK.string, faviconUrl: u.gK.maybeNull(u.gK.string) }),
                y = u.gK
                    .model('WordsCard', {
                        id: u.gK.string,
                        text: u.gK.string,
                        tags: u.gK.maybe(u.gK.array(u.gK.string)),
                        action: u.gK.maybe(p),
                        sources: u.gK.maybe(u.gK.array(v)),
                        feedbackState: u.gK.maybe(u.gK.string),
                        analyticObjectType: u.gK.maybe(u.gK.string),
                        analyticObjectId: u.gK.maybe(u.gK.string),
                    })
                    .views((e) => ({
                        get isFact() {
                            var t;
                            if (!(0, u._n)(e)) return !1;
                            return null == (t = e.tags) ? void 0 : t.includes(i.FACT);
                        },
                        get isLiked() {
                            return e.feedbackState === n.LIKE;
                        },
                        get isDisliked() {
                            return e.feedbackState === n.DISLIKE;
                        },
                    }))
                    .actions((e) => ({
                        sendFeedback: (0, u.L3)(function* (t) {
                            if (!(0, u._n)(e)) return;
                            let { wordsResource: a } = (0, u._$)(e);
                            yield a.cardsFeedback({ feedback: [{ id: e.id, feedbackState: t }] }), (0, u._n)(e) && (e.feedbackState = t);
                        }),
                    })),
                h = u.gK
                    .model('Words', { cards: u.gK.map(y), loadingState: u.gK.enumeration(Object.values(_.GuX)), loadingTrackIds: u.gK.map(u.gK.boolean) })
                    .volatile(() => ({ requestedTrackIds: new Set(), viewedCardIds: new Set(), viewedStore: void 0, resolvedEmptyTrackIds: new Set() }))
                    .views((e) => ({
                        getCardForTrack(t) {
                            if (t) return e.cards.get(String(t));
                        },
                        isTrackRequested: (t) => e.requestedTrackIds.has(t),
                        isTrackResolvedWithoutCard: (t) => e.resolvedEmptyTrackIds.has(t),
                        isLoading: (t) => e.loadingTrackIds.has(t),
                    }))
                    .actions((e) => ({
                        setWordsViewedStore(t) {
                            e.viewedStore = t;
                        },
                        markCardViewed(t) {
                            var a;
                            e.viewedCardIds.add(t), null == (a = e.viewedStore) || a.addViewedIds([t]);
                        },
                        evict(t) {
                            Array.from(e.cards.keys()).forEach((a) => {
                                t.has(a) || (e.cards.delete(a), e.requestedTrackIds.delete(a), e.loadingTrackIds.delete(a), e.resolvedEmptyTrackIds.delete(a));
                            });
                        },
                        loadCards: (0, u.L3)(function* (t) {
                            let { wordsResource: a, modelActionsLogger: n } = (0, u._$)(e),
                                r = t.filter((t) => !e.requestedTrackIds.has(t));
                            if (0 !== r.length) {
                                r.forEach((t) => {
                                    e.requestedTrackIds.add(t), e.loadingTrackIds.set(t, !0);
                                });
                                try {
                                    var l, s, o;
                                    e.loadingState = _.GuX.PENDING;
                                    let t = yield null != (s = null == (l = e.viewedStore) ? void 0 : l.getViewedIds()) ? s : Promise.resolve([]),
                                        n = Array.from(new Set([...e.viewedCardIds, ...t])),
                                        { concerts: c } = (0, u.Zn)(e),
                                        d = c.concertsLocationForRequest,
                                        p = yield a.cards({ trackIds: r, viewedCards: n, locations: d });
                                    e.viewedCardIds.clear(),
                                        n.length > 0 && (null == (o = e.viewedStore) || o.clearSentIds(n)),
                                        p.forEach((t) => {
                                            let a = t.cards[0];
                                            a &&
                                                e.cards.set(
                                                    t.id,
                                                    ((e) => {
                                                        var t, a, n, r, l, s;
                                                        let { card: o, feedbackState: c } = e,
                                                            d = o.action
                                                                ? ((r = o.action),
                                                                  (null == (t = o.tags) ? void 0 : t.includes(i.DONATION))
                                                                      ? (0, _.Kgy)(r.link)
                                                                          ? { title: r.title, url: r.link }
                                                                          : void 0
                                                                      : { title: r.title, url: null != (s = null != (l = r.weblink) ? l : r.link) ? s : '' })
                                                                : void 0,
                                                            p = Array.isArray(o.tags) ? o.tags.filter((e) => 'string' == typeof e) : void 0,
                                                            v = Array.isArray(o.sources) ? o.sources.map(m) : void 0,
                                                            y = null == (a = o.analyticPayload) ? void 0 : a.objectType,
                                                            h = null == (n = o.analyticPayload) ? void 0 : n.objectId;
                                                        return (0, u.wg)({
                                                            id: o.id,
                                                            text: o.text,
                                                            tags: p,
                                                            action: d,
                                                            sources: v,
                                                            feedbackState: c,
                                                            analyticObjectId: h,
                                                            analyticObjectType: y,
                                                        });
                                                    })(a),
                                                );
                                        }),
                                        r.forEach((t) => {
                                            e.cards.has(t) ? e.resolvedEmptyTrackIds.delete(t) : e.resolvedEmptyTrackIds.add(t);
                                        }),
                                        r.forEach((t) => e.loadingTrackIds.delete(t)),
                                        (e.loadingState = _.GuX.RESOLVE);
                                } catch (t) {
                                    (e.loadingState = _.GuX.REJECT),
                                        r.forEach((t) => {
                                            e.requestedTrackIds.delete(t), e.loadingTrackIds.delete(t), e.resolvedEmptyTrackIds.delete(t);
                                        }),
                                        n.error(t);
                                }
                            }
                        }),
                    }));
            var g = a(32290),
                b = a(63618),
                x = a(96103),
                A = a(59824),
                f = a(6752),
                C = a(50162),
                k = a(24372),
                P = a.n(k),
                N = a(55178);
            function j() {
                return (j = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var a = arguments[t];
                              for (var i in a) ({}).hasOwnProperty.call(a, i) && (e[i] = a[i]);
                          }
                          return e;
                      }).apply(null, arguments);
            }
            let S = function (e) {
                return N.createElement(
                    'svg',
                    j({ viewBox: '0 0 20 20', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, e),
                    r ||
                        (r = N.createElement('path', {
                            d: 'M10.0002 0.3125C7.25741 0.3125 4.69896 2.90254 2.43499 6.67723C0.171015 10.4519 -0.760012 14.016 0.707594 16.2922C2.17517 18.5683 5.69374 19.6874 9.99984 19.6875L10.0002 19.6875C14.3063 19.6874 17.8248 18.5683 19.2924 16.2922C20.76 14.016 19.829 10.4519 17.565 6.67723C15.3011 2.90269 12.7429 0.3125 10.0002 0.3125Z',
                            fill: 'currentColor',
                        })),
                );
            };
            function E() {
                return (E = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var a = arguments[t];
                              for (var i in a) ({}).hasOwnProperty.call(a, i) && (e[i] = a[i]);
                          }
                          return e;
                      }).apply(null, arguments);
            }
            let T = function (e) {
                return N.createElement(
                    'svg',
                    E({ width: 28, height: 28, viewBox: '0 0 28 28', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, e),
                    l ||
                        (l = N.createElement('path', {
                            fillRule: 'evenodd',
                            clipRule: 'evenodd',
                            d: 'M9.42032 25.4019C9.14037 21.0934 5.66809 17.6882 1.42578 17.6882V16.5741C5.8511 16.5741 9.43853 12.8687 9.43853 8.29785H10.5171C10.5171 12.8687 14.1045 16.5741 18.5299 16.5741V17.6882C14.2876 17.6882 10.8153 21.0934 10.5353 25.4019H9.42032Z',
                            fill: 'currentColor',
                        })),
                    s ||
                        (s = N.createElement('path', {
                            d: 'M19.8267 3.83H21.4167L23.9567 11H22.7067L22.0467 9.12H19.0267L18.3667 11H17.2967L19.8267 3.83ZM21.6767 8.08L20.5367 4.85L19.3967 8.08H21.6767ZM27.0991 3.83V11H25.8891V3.83H27.0991Z',
                            fill: 'currentColor',
                        })),
                );
            };
            function I() {
                return (I = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var a = arguments[t];
                              for (var i in a) ({}).hasOwnProperty.call(a, i) && (e[i] = a[i]);
                          }
                          return e;
                      }).apply(null, arguments);
            }
            let w = function (e) {
                return N.createElement(
                    'svg',
                    I({ viewBox: '0 0 12 12', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, e),
                    o || (o = N.createElement('path', { d: 'M6 0C6 3.31 3.31 6 0 6C3.31 6 6 8.69 6 12C6 8.69 8.69 6 12 6C8.69 6 6 3.31 6 0Z', fill: 'currentColor' })),
                );
            };
            function L() {
                return (L = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var a = arguments[t];
                              for (var i in a) ({}).hasOwnProperty.call(a, i) && (e[i] = a[i]);
                          }
                          return e;
                      }).apply(null, arguments);
            }
            let M = function (e) {
                    return N.createElement(
                        'svg',
                        L({ width: 28, height: 28, viewBox: '0 0 28 28', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, e),
                        c ||
                            (c = N.createElement('path', {
                                fillRule: 'evenodd',
                                clipRule: 'evenodd',
                                d: 'M9.42032 25.4029C9.14037 21.0944 5.66809 17.6891 1.42578 17.6891V16.5751C5.8511 16.5751 9.43853 12.8697 9.43853 8.29883H10.5171C10.5171 12.8697 14.1045 16.5751 18.5299 16.5751V17.6891C14.2876 17.6891 10.8153 21.0944 10.5353 25.4029H9.42032Z',
                                fill: 'currentColor',
                            })),
                        d ||
                            (d = N.createElement('path', {
                                fillRule: 'evenodd',
                                clipRule: 'evenodd',
                                d: 'M22.4961 12.0999C22.3406 9.70631 20.4115 7.81449 18.0547 7.81449V7.19557C20.5132 7.19557 22.5062 5.13701 22.5062 2.59766H23.1054C23.1054 5.13701 25.0984 7.19557 27.5569 7.19557V7.81449C25.2001 7.81449 23.2711 9.70631 23.1155 12.0999H22.4961Z',
                                fill: 'currentColor',
                            })),
                    );
                },
                B = (0, x.PA)((e) => {
                    let { className: t, dimmed: a, isFact: i } = e,
                        { experiments: n } = (0, _.Pjs)(),
                        r = n.checkExperiment(_.zal.WebNextWaveScreenWordsInWave, 'on_with_onyx'),
                        l = n.checkExperiment(_.zal.WebNextWaveScreenWordsInWave, 'on'),
                        s = r && a,
                        o = (0, f.L)(() =>
                            r
                                ? (0, g.jsx)(S, { className: (0, b.$)(P().icon, P().icon_okniks) })
                                : l
                                  ? i && !a
                                      ? (0, g.jsx)(T, { className: (0, b.$)(P().icon, P().icon_sparkles) })
                                      : (0, g.jsx)(M, { className: (0, b.$)(P().icon, P().icon_sparkles) })
                                  : void 0,
                        );
                    return (0, g.jsxs)('div', {
                        ...(0, A.Am)(A.Kq.words.WORDS_AI_BADGE),
                        className: (0, b.$)(P().root, { [P().root_dimmed]: a }, t),
                        'aria-hidden': !0,
                        children: [
                            (0, g.jsx)(C.Image, {
                                src: 'avatars.mds.yandex.net/get-music-misc/2413828/img.69c13075ab25d7410604f669/%%',
                                size: 200,
                                withAvatarReplace: !0,
                                withLoadingIndicator: !1,
                                className: P().glow,
                            }),
                            o,
                            s &&
                                (0, g.jsxs)('div', {
                                    className: P().sparkles,
                                    children: [
                                        (0, g.jsx)(w, { className: P().sparkle }),
                                        (0, g.jsx)(w, { className: P().sparkle }),
                                        (0, g.jsx)(w, { className: P().sparkle }),
                                        (0, g.jsx)(w, { className: P().sparkle }),
                                    ],
                                }),
                        ],
                    });
                });
            var O = a(16172);
            let R = (e) => ((0, _.g2s)(e) ? e : void 0);
            var D = (function (e) {
                    return (e.SleepingAlice = 'sleeping_alice'), (e.SleepTech = 'sleep_tech'), e;
                })({}),
                F = a(72676);
            let V = (e) => {
                    let { queueState: t, direction: a, batchSize: i } = e,
                        { trackIds: n, currentIndex: r } = t,
                        l = [],
                        s = 0,
                        o = 0;
                    'forward' === a ? ((s = r + 1), (o = Math.min(n.length - 1, s + i - 1))) : (s = Math.max(0, (o = r - 1) - i + 1));
                    for (let e = s; e <= o; e++) {
                        let t = n[e];
                        t && l.push(t);
                    }
                    return l;
                },
                K = (e) => {
                    let { queueState: t, backwardSize: a, forwardSize: i } = e,
                        n = Math.max(0, t.currentIndex - a),
                        r = Math.min(t.trackIds.length - 1, t.currentIndex + i),
                        l = [];
                    for (let e = n; e <= r; e++) {
                        let a = t.trackIds[e];
                        a && l.push(a);
                    }
                    return l;
                },
                z = (e) => {
                    let { queueState: t, direction: a, isRequested: i } = e,
                        n = 'forward' === a ? 1 : -1,
                        r = 0;
                    for (let e = t.currentIndex + n; e >= 0 && e < t.trackIds.length; e += n) {
                        let a = t.trackIds[e];
                        if (a && i(a)) r++;
                        else break;
                    }
                    return r <= 3;
                };
            var U = a(91945),
                W = a(16839);
            let G = 'viewedCards';
            class q extends _.Fjw {
                async addViewedIds(e) {
                    return this.executeTransaction((t) => {
                        let a = t.transaction([G], 'readwrite').objectStore(G);
                        return Promise.all(e.map((e) => a.put({ uid: this.uid, cardId: e }))).then(() => a.index('uid').count(this.uid));
                    })
                        .then((e) => ('number' == typeof e && e > 30 ? this.evictOverLimit() : Promise.resolve()))
                        .catch(W.A);
                }
                async getViewedIds() {
                    return this.executeTransaction((e) => e.getAllFromIndex(G, 'uid', this.uid).then((e) => e.map((e) => e.cardId)), { defaultValue: [] }).catch(
                        () => [],
                    );
                }
                async clearSentIds(e) {
                    return this.executeTransaction((t) => {
                        let a = t.transaction([G], 'readwrite').objectStore(G);
                        return Promise.all(e.map((e) => a.delete([this.uid, e]))).then(W.A);
                    }).catch(W.A);
                }
                async evictOverLimit() {
                    return this.executeTransaction((e) => {
                        let t = e.transaction([G], 'readwrite').objectStore(G).index('uid');
                        return t.count(this.uid).then((e) => {
                            if (e <= 30) return Promise.resolve();
                            let a = e - 30,
                                i = 0,
                                n = (e) =>
                                    !e || i >= a
                                        ? Promise.resolve()
                                        : (i++,
                                          e
                                              .delete()
                                              .then(() => e.continue())
                                              .then(n));
                            return t.openCursor(this.uid).then(n);
                        });
                    }).catch(W.A);
                }
                constructor(e) {
                    super({
                        dbName: 'music_words',
                        dbVersion: 1,
                        onUpgrade: (e) => {
                            e.createObjectStore(G, { keyPath: ['uid', 'cardId'] }).createIndex('uid', 'uid', { unique: !1 });
                        },
                    }),
                        (0, U._)(this, 'uid', void 0),
                        (this.uid = e);
                }
            }
            var Q = a(91027),
                Y = a(48454),
                H = a(71926),
                $ = a(60900),
                X = a(44574),
                Z = a(15248),
                J = a.n(Z);
            let ee = (e) => {
                let { children: t } = e;
                return (0, g.jsx)('div', {
                    className: J().root,
                    children: (0, g.jsx)(H.Caption, { variant: 'span', type: 'text', size: 'l', weight: 'medium', className: J().text, children: t }),
                });
            };
            var et = a(39407),
                ea = a(82586),
                ei = a(63423);
            let en = (e) => {
                    let { actionType: t, onClick: a, children: i, ...n } = e,
                        r = (0, _.mFl)(),
                        l = (0, Q.c)((e) => {
                            r({ actionType: t }), null == a || a(e);
                        });
                    return (0, g.jsx)(ei.$, { onClick: l, ...n, children: i });
                },
                er = (e) => {
                    let { url: t, className: a, children: i } = e,
                        n = (0, _.NKK)(),
                        r = (0, Q.c)(() => {
                            n({ to: O.QT.Link, deepLink: t });
                        });
                    return (0, g.jsx)(X.N_, { ...(0, A.Am)(A.Kq.words.WORDS_CARD_LINK), href: t, className: a, onClick: r, children: i });
                };
            var el = a(29025),
                es = a.n(el);
            let eo = () =>
                (0, g.jsx)('div', {
                    className: es().root,
                    ...(0, A.Am)(A.Kq.words.WORDS_CARD_POPOVER_DISCLAIMER),
                    children: (0, g.jsx)(H.Caption, {
                        variant: 'div',
                        type: 'text',
                        size: 's',
                        weight: 'medium',
                        className: es().description,
                        ...(0, A.Am)(A.Kq.words.WORDS_CARD_POPOVER_DISCLAIMER_AI_TEXT),
                        children: (0, g.jsx)(et.A, { id: 'words.ai-description' }),
                    }),
                });
            var ec = a(4529),
                ed = a.n(ec);
            let eu = (0, x.PA)((e) => {
                let { card: t, onLike: a, onDislike: i } = e,
                    n = (0, _.l$t)({ mainObjectType: O.ky.Fact });
                return (
                    (0, N.useEffect)(
                        () => (
                            n(!0),
                            () => {
                                n(!1);
                            }
                        ),
                        [n],
                    ),
                    (0, g.jsxs)('div', {
                        ...(0, A.Am)(A.Kq.words.WORDS_CARD_POPOVER_DESKTOP),
                        className: ed().root,
                        children: [
                            t.sources &&
                                t.sources.length > 0 &&
                                (0, g.jsxs)(g.Fragment, {
                                    children: [
                                        t.sources.map((e, a) => {
                                            var i, n;
                                            return (0, g.jsx)(
                                                _.FoH,
                                                {
                                                    blockId: O.LA.WordsInWave,
                                                    blockType: O.LA.WordsInWave,
                                                    blockPosX: 1,
                                                    blockPosY: 1,
                                                    mainObjectType: O.ky.Fact,
                                                    mainObjectId: t.id,
                                                    children: (0, g.jsx)(_.Bki, {
                                                        objectType: O.ky.Link,
                                                        objectId: e.url,
                                                        objectPosX: a + 1,
                                                        objectPosY: 1,
                                                        objectsCount: null != (n = null == (i = t.sources) ? void 0 : i.length) ? n : 0,
                                                        children: (0, g.jsxs)(er, {
                                                            url: e.url,
                                                            className: (0, b.$)(ed().item, ed().actionItem, ed().sourceItem),
                                                            children: [
                                                                e.faviconUrl &&
                                                                    (0, g.jsx)(C.Image, {
                                                                        ...(0, A.Am)(A.Kq.words.WORDS_CARD_LINK_SOURCE_ICON),
                                                                        src: e.faviconUrl,
                                                                        fit: 'cover',
                                                                        'aria-hidden': !0,
                                                                        className: ed().sourceIcon,
                                                                    }),
                                                                (0, g.jsx)(H.Caption, {
                                                                    ...(0, A.Am)(A.Kq.words.WORDS_CARD_LINK_SOURCE_TEXT),
                                                                    variant: 'span',
                                                                    type: 'text',
                                                                    size: 'l',
                                                                    weight: 'medium',
                                                                    lineClamp: 1,
                                                                    children: e.title,
                                                                }),
                                                            ],
                                                        }),
                                                    }),
                                                },
                                                e.url,
                                            );
                                        }),
                                        (0, g.jsx)('div', { className: ed().divider }),
                                    ],
                                }),
                            (0, g.jsxs)(_.FoH, {
                                blockId: O.LA.WordsInWave,
                                blockType: O.LA.WordsInWave,
                                blockPosX: 1,
                                blockPosY: 2,
                                mainObjectType: O.ky.Fact,
                                mainObjectId: t.id,
                                children: [
                                    (0, g.jsx)(_.Bki, {
                                        objectType: O.ky.Fact,
                                        objectId: t.id,
                                        objectsCount: 2,
                                        objectPosX: 1,
                                        objectPosY: 1,
                                        children: (0, g.jsxs)(en, {
                                            ...(0, A.Am)(A.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_UP),
                                            actionType: t.isLiked ? O.X2.Unlike : O.X2.Like,
                                            variant: 'text',
                                            withHover: !1,
                                            className: (0, b.$)(ed().item, ed().actionItem, { [ed().actionItem_active]: t.isLiked }),
                                            onClick: a,
                                            children: [
                                                (0, g.jsx)(ea.Icon, {
                                                    ...(0, A.Am)(A.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_UP_ICON),
                                                    variant: 'thumbUp',
                                                    size: 'xs',
                                                }),
                                                (0, g.jsx)(H.Caption, {
                                                    ...(0, A.Am)(A.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_UP_TEXT),
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 'l',
                                                    weight: 'medium',
                                                    children: (0, g.jsx)(et.A, { id: 'words.like' }),
                                                }),
                                            ],
                                        }),
                                    }),
                                    (0, g.jsx)(_.Bki, {
                                        objectType: O.ky.Fact,
                                        objectId: t.id,
                                        objectsCount: 2,
                                        objectPosX: 1,
                                        objectPosY: 2,
                                        children: (0, g.jsxs)(en, {
                                            ...(0, A.Am)(A.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_DOWN),
                                            actionType: O.X2.Dislike,
                                            variant: 'text',
                                            withHover: !1,
                                            className: (0, b.$)(ed().item, ed().actionItem, { [ed().actionItem_active]: t.isDisliked }),
                                            onClick: i,
                                            children: [
                                                (0, g.jsx)(ea.Icon, {
                                                    ...(0, A.Am)(A.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_DOWN_ICON),
                                                    variant: 'thumbDown',
                                                    size: 'xs',
                                                }),
                                                (0, g.jsx)(H.Caption, {
                                                    ...(0, A.Am)(A.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_DOWN_TEXT),
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 'l',
                                                    weight: 'medium',
                                                    children: (0, g.jsx)(et.A, { id: 'words.dislike' }),
                                                }),
                                            ],
                                        }),
                                    }),
                                ],
                            }),
                            t.isFact && (0, g.jsxs)(g.Fragment, { children: [(0, g.jsx)('div', { className: ed().divider }), (0, g.jsx)(eo, {})] }),
                        ],
                    })
                );
            });
            var e_ = a(13591),
                em = a.n(e_);
            let ep = (0, x.PA)((e) => {
                let { card: t, onLike: a, onDislike: i } = e,
                    { formatMessage: n } = (0, $.A)(),
                    r = (0, _.l$t)({ mainObjectType: O.ky.Fact }),
                    l = n({ id: 'words.like' }),
                    s = n({ id: 'words.dislike' });
                return (
                    (0, N.useEffect)(
                        () => (
                            r(!0),
                            () => {
                                r(!1);
                            }
                        ),
                        [r],
                    ),
                    (0, g.jsxs)('div', {
                        ...(0, A.Am)(A.Kq.words.WORDS_CARD_POPOVER_MOBILE),
                        className: em().root,
                        children: [
                            (0, g.jsxs)('div', {
                                className: em().container,
                                children: [
                                    (0, g.jsx)(H.Heading, { variant: 'div', size: 'xs', weight: 'bold', lineClamp: 5, className: em().text, children: t.text }),
                                    t.action &&
                                        t.action.url &&
                                        (0, g.jsx)(_.FoH, {
                                            blockId: O.LA.WordsInWave,
                                            blockType: O.LA.WordsInWave,
                                            blockPosX: 1,
                                            blockPosY: 1,
                                            mainObjectType: O.ky.Fact,
                                            mainObjectId: t.id,
                                            children: (0, g.jsx)(_.Bki, {
                                                objectType: O.ky.Link,
                                                objectId: t.action.url,
                                                objectPosX: 1,
                                                objectPosY: 1,
                                                objectsCount: 1,
                                                children: (0, g.jsx)(er, {
                                                    url: t.action.url,
                                                    className: em().action,
                                                    children: (0, g.jsx)(H.Caption, {
                                                        variant: 'span',
                                                        type: 'text',
                                                        size: 'l',
                                                        weight: 'medium',
                                                        lineClamp: 2,
                                                        children: t.action.title,
                                                    }),
                                                }),
                                            }),
                                        }),
                                    t.sources &&
                                        t.sources.length > 0 &&
                                        (0, g.jsx)('div', {
                                            className: em().sources,
                                            children: t.sources.map((e, a) => {
                                                var i, n;
                                                return (0, g.jsx)(
                                                    _.FoH,
                                                    {
                                                        blockId: O.LA.WordsInWave,
                                                        blockType: O.LA.WordsInWave,
                                                        blockPosX: 1,
                                                        blockPosY: 2,
                                                        mainObjectType: O.ky.Fact,
                                                        mainObjectId: t.id,
                                                        children: (0, g.jsx)(_.Bki, {
                                                            objectType: O.ky.Link,
                                                            objectId: e.url,
                                                            objectPosX: a + 1,
                                                            objectPosY: 1,
                                                            objectsCount: null != (n = null == (i = t.sources) ? void 0 : i.length) ? n : 0,
                                                            children: (0, g.jsxs)(er, {
                                                                url: e.url,
                                                                className: em().sourceItem,
                                                                children: [
                                                                    e.faviconUrl &&
                                                                        (0, g.jsx)(C.Image, {
                                                                            ...(0, A.Am)(A.Kq.words.WORDS_CARD_LINK_SOURCE_ICON),
                                                                            src: e.faviconUrl,
                                                                            fit: 'cover',
                                                                            'aria-hidden': !0,
                                                                            className: em().sourceIcon,
                                                                        }),
                                                                    (0, g.jsx)(H.Caption, {
                                                                        ...(0, A.Am)(A.Kq.words.WORDS_CARD_LINK_SOURCE_TEXT),
                                                                        variant: 'span',
                                                                        type: 'text',
                                                                        size: 'm',
                                                                        weight: 'medium',
                                                                        lineClamp: 1,
                                                                        children: e.title,
                                                                    }),
                                                                ],
                                                            }),
                                                        }),
                                                    },
                                                    e.url,
                                                );
                                            }),
                                        }),
                                ],
                            }),
                            (0, g.jsxs)('div', {
                                children: [
                                    (0, g.jsxs)('div', {
                                        className: em().feedbackSection,
                                        children: [
                                            (0, g.jsx)(H.Caption, {
                                                variant: 'div',
                                                type: 'text',
                                                size: 'l',
                                                weight: 'medium',
                                                className: em().feedbackQuestion,
                                                children: (0, g.jsx)(et.A, { id: 'words.show-more' }),
                                            }),
                                            (0, g.jsx)('div', {
                                                className: em().feedbackButtons,
                                                children: (0, g.jsxs)(_.FoH, {
                                                    blockId: O.LA.WordsInWave,
                                                    blockType: O.LA.WordsInWave,
                                                    blockPosX: 1,
                                                    blockPosY: 3,
                                                    mainObjectType: O.ky.Fact,
                                                    mainObjectId: t.id,
                                                    children: [
                                                        (0, g.jsx)(_.Bki, {
                                                            objectType: O.ky.Fact,
                                                            objectId: t.id,
                                                            objectsCount: 2,
                                                            objectPosX: 1,
                                                            objectPosY: 1,
                                                            children: (0, g.jsx)(en, {
                                                                ...(0, A.Am)(A.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_UP),
                                                                actionType: t.isLiked ? O.X2.Unlike : O.X2.Like,
                                                                variant: 'text',
                                                                color: 'secondary',
                                                                size: 'l',
                                                                radius: 'round',
                                                                withRipple: !1,
                                                                className: (0, b.$)(em().feedbackButton, { [em().feedbackButton_active]: t.isLiked }),
                                                                'aria-label': l,
                                                                onClick: a,
                                                                children: (0, g.jsx)(ea.Icon, {
                                                                    ...(0, A.Am)(A.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_UP_ICON),
                                                                    variant: 'thumbUp',
                                                                    size: 'xs',
                                                                }),
                                                            }),
                                                        }),
                                                        (0, g.jsx)(_.Bki, {
                                                            objectType: O.ky.Fact,
                                                            objectId: t.id,
                                                            objectsCount: 2,
                                                            objectPosX: 1,
                                                            objectPosY: 2,
                                                            children: (0, g.jsx)(en, {
                                                                ...(0, A.Am)(A.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_DOWN),
                                                                actionType: O.X2.Dislike,
                                                                variant: 'text',
                                                                size: 'l',
                                                                radius: 'round',
                                                                withRipple: !1,
                                                                className: (0, b.$)(em().feedbackButton, { [em().feedbackButton_active]: t.isDisliked }),
                                                                'aria-label': s,
                                                                onClick: i,
                                                                children: (0, g.jsx)(ea.Icon, {
                                                                    ...(0, A.Am)(A.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_DOWN_ICON),
                                                                    variant: 'thumbDown',
                                                                    size: 'xs',
                                                                }),
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                            }),
                                        ],
                                    }),
                                    t.isFact && (0, g.jsx)(eo, {}),
                                ],
                            }),
                        ],
                    })
                );
            });
            var ev = a(95180),
                ey = a.n(ev);
            let eh = (e) => {
                    let { url: t, title: a, prevTitle: i, className: n, analyticObjectId: r } = e,
                        l = (0, _.D5X)(),
                        s = (0, _.NKK)();
                    (0, N.useEffect)(() => {
                        i.current !== a && ((i.current = a), l(!0, ''));
                    }, [i, l, a]);
                    let o = (0, Q.c)((e) => {
                        e.stopPropagation(), s({ to: O.QT.Link, deepLink: t, objectId: r, objectPosY: 1 });
                    });
                    return (0, g.jsx)(X.N_, {
                        ...(0, A.Am)(A.Kq.words.WORDS_CARD_ACTION),
                        href: t,
                        className: n,
                        onClick: o,
                        onKeyDown: o,
                        children: (0, g.jsx)(H.Caption, { variant: 'span', type: 'text', size: 'l', weight: 'medium', children: a }),
                    });
                },
                eg = (e) => {
                    let { text: t, prevText: a, className: i } = e,
                        n = (0, _.D5X)();
                    return (
                        (0, N.useEffect)(() => {
                            a.current !== t && ((a.current = t), n(!0, ''));
                        }, [a, n, t]),
                        (0, g.jsx)(H.Caption, {
                            ...(0, A.Am)(A.Kq.words.WORDS_CARD_TEXT),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'medium',
                            lineClamp: 3,
                            className: i,
                            children: t,
                        })
                    );
                },
                eb = (0, x.PA)((e) => {
                    let { card: t, isLoading: a, className: i } = e,
                        {
                            settings: { isMobile: r },
                            experiments: l,
                        } = (0, _.Pjs)(),
                        s = (0, _.NKK)(),
                        o = (0, _.D5X)(),
                        c = (0, N.useRef)(null),
                        d = (0, N.useRef)(null),
                        [u, m] = (0, N.useState)(!1),
                        [p, v] = (0, N.useState)(void 0),
                        y = (0, N.useRef)(null),
                        h = ((e) => {
                            let { formatMessage: t } = (0, $.A)(),
                                a = (0, N.useMemo)(
                                    () => [
                                        t({ id: 'words.loading-phrase-collecting-interesting' }),
                                        t({ id: 'words.loading-phrase-tuning' }),
                                        t({ id: 'words.loading-phrase-catching' }),
                                        t({ id: 'words.loading-phrase-reading' }),
                                        t({ id: 'words.loading-phrase-studying' }),
                                    ],
                                    [t],
                                ),
                                i = (0, N.useRef)(0),
                                [n, r] = (0, N.useState)(() => {
                                    var t;
                                    if (!e) return null;
                                    let n = Math.floor(Math.random() * a.length);
                                    return (i.current = n), null != (t = a[n]) ? t : null;
                                }),
                                l = (0, N.useRef)(e),
                                s = (0, N.useRef)(null),
                                o = (0, N.useRef)(e);
                            if (((l.current = e), e && !o.current)) {
                                var c;
                                let e = Math.floor(Math.random() * a.length);
                                (i.current = e), r(null != (c = a[e]) ? c : null);
                            }
                            return (
                                (o.current = e),
                                (0, N.useEffect)(() => {
                                    if (null !== n && !s.current)
                                        return (
                                            (s.current = setTimeout(() => {
                                                if (((s.current = null), l.current)) {
                                                    var e;
                                                    (i.current = (i.current + 1) % a.length), r(null != (e = a[i.current]) ? e : a[0]);
                                                    return;
                                                }
                                                r(null);
                                            }, 2500)),
                                            () => {
                                                s.current && (clearTimeout(s.current), (s.current = null));
                                            }
                                        );
                                }, [a, n]),
                                n
                            );
                        })(!!a),
                        x = null !== h,
                        {
                            handleLike: C,
                            handleDislike: k,
                            feedbackMessage: P,
                        } = ((e) => {
                            let { card: t, onClose: a } = e,
                                { notify: i } = (0, _.lkh)(),
                                [r, l] = (0, N.useState)(!1),
                                [s, o] = (0, N.useState)(null),
                                { formatMessage: c } = (0, $.A)(),
                                d = (0, Q.c)((e) => {
                                    o(e), setTimeout(() => o(null), 3e3);
                                }),
                                u = (0, Q.c)(async (e, n) => {
                                    if (t && !r) {
                                        l(!0);
                                        try {
                                            await t.sendFeedback(e), a(), n && d(n);
                                        } catch (e) {
                                            i((0, g.jsx)(X.hT, { error: c({ id: 'error-messages.error-during-action' }) }), { containerId: _.uQT.ERROR });
                                        } finally {
                                            l(!1);
                                        }
                                    }
                                });
                            return {
                                handleLike: (0, Q.c)(async () => {
                                    (null == t ? void 0 : t.isLiked) ? await u(n.NEUTRAL) : await u(n.LIKE, c({ id: 'words.like-feedback' }));
                                }),
                                handleDislike: (0, Q.c)(async () => {
                                    await u(n.DISLIKE, c({ id: 'words.dislike-feedback' }));
                                }),
                                feedbackMessage: s,
                            };
                        })({
                            card: t,
                            onClose: (0, Q.c)(() => {
                                m(!1);
                            }),
                        }),
                        j = !(t && (!(null == t ? void 0 : t.isDisliked) || P)) && !x,
                        S = !t || (null == t ? void 0 : t.isDisliked) || !!P || x,
                        E = x ? 'loading' : 'content-'.concat(null == t ? void 0 : t.id),
                        T = l.checkExperiment(_.zal.WebNextWaveScreenWordsInWave, 'on');
                    (0, N.useEffect)(() => {
                        t || a || o(!0, '');
                    }, [t, a, o]);
                    let I = (0, Q.c)((e) => {
                            (e && S) || (e && r && y.current && v(y.current.getBoundingClientRect().top + 12), e && s({ to: O.QT.FactScreen }), m(e));
                        }),
                        w = (0, f.L)(() => {
                            var e, a;
                            if (x) return (0, g.jsx)(ee, { children: h });
                            if (P)
                                return (0, g.jsx)(H.Caption, {
                                    ...(0, A.Am)(A.Kq.words.WORDS_CARD_FEEDBACK_MESSAGE),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'medium',
                                    lineClamp: 3,
                                    className: ey().text,
                                    children: P,
                                });
                            if (null == t ? void 0 : t.isDisliked) return;
                            let i = R(null == t ? void 0 : t.analyticObjectType);
                            return (0, g.jsxs)(g.Fragment, {
                                children: [
                                    (null == t ? void 0 : t.text) &&
                                        (0, g.jsx)(
                                            _.Bki,
                                            {
                                                objectType: null != i ? i : O.ky.Fact,
                                                objectId: null != (e = null == t ? void 0 : t.analyticObjectId) ? e : '',
                                                objectPosX: 1,
                                                objectPosY: 1,
                                                objectsCount: (null == t ? void 0 : t.action) ? 2 : 1,
                                                children: (0, g.jsx)(eg, { text: t.text, prevText: c, className: ey().text }, E),
                                            },
                                            null == t ? void 0 : t.id,
                                        ),
                                    (null == t ? void 0 : t.action) &&
                                        t.action.url &&
                                        (0, g.jsx)(
                                            _.Bki,
                                            {
                                                objectType: null != i ? i : O.ky.Link,
                                                objectId: t.action.url,
                                                objectPosX: 1,
                                                objectPosY: 2,
                                                objectsCount: (null == t ? void 0 : t.action) ? 2 : 1,
                                                children: (0, g.jsx)(
                                                    eh,
                                                    {
                                                        url: t.action.url,
                                                        title: t.action.title,
                                                        prevTitle: d,
                                                        className: ey().action,
                                                        analyticObjectId: null != (a = null == t ? void 0 : t.analyticObjectId) ? a : '',
                                                    },
                                                    ''.concat(E, '-action'),
                                                ),
                                            },
                                            t.action.url,
                                        ),
                                ],
                            });
                        }),
                        L = (0, f.L)(() => {
                            if (r && p) return { '--words-popover-height': ''.concat(p, 'px') };
                        }),
                        M = r ? ep : eu;
                    return (0, g.jsxs)(Y.AM, {
                        isMobile: r,
                        placement: r ? 'bottom' : 'top',
                        open: u,
                        onOpenChange: I,
                        positionElement: r ? void 0 : y.current,
                        offsetOptions: r ? void 0 : 12,
                        style: L,
                        children: [
                            (0, g.jsxs)('div', {
                                ...(0, A.Am)(A.Kq.words.WORDS_CARD),
                                className: (0, b.$)(ey().root, { [ey().root_disabled]: S }, i),
                                role: 'button',
                                tabIndex: 0,
                                children: [
                                    (0, g.jsx)(B, {
                                        className: (0, b.$)(ey().badge, { [ey().badge_centered]: j, [ey().badge_centeredSparkles]: j && T, [ey().badge_loading]: x }),
                                        dimmed: j,
                                        isFact: (null == t ? void 0 : t.isFact) && !S,
                                    }),
                                    (0, g.jsx)('div', {
                                        ...(j ? (0, A.Am)(A.Kq.words.WORDS_IDLE_TEXT) : {}),
                                        className: (0, b.$)(ey().content, { [ey().content_hidden]: j }),
                                        ref: y,
                                        children: w,
                                    }),
                                ],
                            }),
                            (0, g.jsx)(Y.hl, {
                                className: ey().popoverContent,
                                children: (0, g.jsx)(_.nVz, {
                                    pageId: _._Q$.FACT_SCREEN,
                                    pageEntityId: null == t ? void 0 : t.id,
                                    pageStyle: r ? O.QL.Sheet : O.QL.Popup,
                                    pagePlacement: r ? O.c4.Bottom : O.c4.Floating,
                                    children: t && (0, g.jsx)(M, { card: t, onLike: C, onDislike: k }),
                                }),
                            }),
                        ],
                    });
                }),
                ex = (0, x.PA)((e) => {
                    var t, a;
                    let { className: i, trackId: n } = e,
                        { words: r } = (0, _.Pjs)(),
                        l = (() => {
                            let e = (0, _.NFA)();
                            return (0, N.useMemo)(() => {
                                let t = e.get(_.WA$),
                                    a = null == t ? void 0 : t.getPassportUid();
                                if (!a) return;
                                let i = new q(String(a));
                                return i.openDatabase(), i;
                            }, [e]);
                        })();
                    (() => {
                        let e = (0, _.eGp)(),
                            { words: t } = (0, _.Pjs)();
                        (0, N.useEffect)(() => {
                            if (!e) return;
                            let a = e.state.queueState,
                                i = () => {
                                    let e = a.entityList.value,
                                        t = a.order.value,
                                        i = a.index.value;
                                    return e && null != i
                                        ? ((e, t, a) => ({
                                              trackIds: Array.from({ length: t.length > 0 ? t.length : e.length }, (a, i) => {
                                                  var n, r, l, s, o;
                                                  let c =
                                                      null == (s = e[t.length > 0 && null != (o = t[i]) ? o : i]) ||
                                                      null == (l = s.entity) ||
                                                      null == (r = l.data) ||
                                                      null == (n = r.meta)
                                                          ? void 0
                                                          : n.id;
                                                  return void 0 !== c ? String(c) : void 0;
                                              }),
                                              currentIndex: a,
                                          }))(e, t || [], i)
                                        : null;
                                },
                                n = a.currentEntity.onChange((e) => {
                                    ((e) => {
                                        let a = i();
                                        if (!a) return;
                                        let n = K({ queueState: a, backwardSize: 3, forwardSize: 17 });
                                        t.evict(new Set(n));
                                        let r = e === F.So.MOVE_FORWARD || e === F.So.AUTO_MOVE_FORWARD || e === F.So.ERROR_MOVE_FORWARD,
                                            l = e === F.So.MOVE_BACKWARD,
                                            s = [];
                                        r && z({ queueState: a, direction: 'forward', isRequested: t.isTrackRequested })
                                            ? (s = V({ queueState: a, direction: 'forward', batchSize: 17 }))
                                            : l && z({ queueState: a, direction: 'backward', isRequested: t.isTrackRequested })
                                              ? (s = V({ queueState: a, direction: 'backward', batchSize: 3 }))
                                              : r || l || (s = n),
                                            s.length > 0 && t.loadCards(s);
                                    })(null == e ? void 0 : e.lastChangeMethod);
                                }),
                                r = a.entityList.onChange(() => {
                                    (() => {
                                        let e = i();
                                        if (!e) return;
                                        let a = K({ queueState: e, backwardSize: 3, forwardSize: 17 });
                                        a.length > 0 && t.loadCards(a);
                                    })();
                                });
                            return () => {
                                null == n || n(), null == r || r();
                            };
                        }, [e, t]);
                    })();
                    let s = r.getCardForTrack(n);
                    if (
                        ((0, N.useEffect)(() => {
                            r.setWordsViewedStore(l);
                        }, [r, l]),
                        (0, N.useEffect)(() => {
                            s && r.markCardViewed(s.id);
                        }, [s, r]),
                        !n)
                    )
                        return null;
                    let o = String(n),
                        c = !s && r.isLoading(o),
                        d = r.isTrackResolvedWithoutCard(o) ? D.SleepingAlice : D.SleepTech,
                        u = !s && !c,
                        m = null != (t = R(null == s ? void 0 : s.analyticObjectType)) ? t : O.ky.SleepingAlice,
                        p = null != (a = null == s ? void 0 : s.analyticObjectId) ? a : O.ky.SleepingAlice;
                    return (0, g.jsx)(_.FoH, {
                        blockId: O.LA.WordsInWave,
                        blockType: O.LA.WordsInWave,
                        blockPosX: 1,
                        blockPosY: 2,
                        mainObjectType: O.ky.Track,
                        mainObjectId: null != n ? n : void 0,
                        displayReasonId: u ? d : void 0,
                        children: (0, g.jsx)(_.Bki, {
                            objectType: m,
                            objectId: p,
                            objectPosX: 1,
                            objectPosY: (null == s ? void 0 : s.action) && s.action.url ? 2 : 1,
                            objectsCount: (null == s ? void 0 : s.action) ? 2 : 1,
                            children: (0, g.jsx)(eb, { card: s, isLoading: c, className: i }),
                        }),
                    });
                });
        },
        86323: (e) => {
            e.exports = {
                button: 'RestrictionButton_button__eLMkU',
                button_selected: 'RestrictionButton_button_selected__LHD20',
                button_applying: 'RestrictionButton_button_applying___ik5f',
                'applying-setting': 'RestrictionButton_applying-setting__utqyc',
                diversityButton: 'RestrictionButton_diversityButton__uclSi',
                diversityButtonImage: 'RestrictionButton_diversityButtonImage__21oME',
                moodEnergy: 'RestrictionButton_moodEnergy__q_I4y',
                moodEnergyButton: 'RestrictionButton_moodEnergyButton__yKkaS',
                moodEnergyButtonImage: 'RestrictionButton_moodEnergyButtonImage__zxT2C',
                textButton: 'RestrictionButton_textButton__HC_AE',
                title: 'RestrictionButton_title__UZn0O',
                specialButton: 'RestrictionButton_specialButton__Di6B9',
                specialImage: 'RestrictionButton_specialImage__0E3x2',
                rippleContainer: 'RestrictionButton_rippleContainer__xPANO',
                ripple: 'RestrictionButton_ripple__Rsu8b',
            };
        },
        86771: (e, t, a) => {
            'use strict';
            a.d(t, { F: () => n });
            var i = a(71483);
            function n(e) {
                return (null == e ? void 0 : e.data.type) === i.K.Album;
            }
        },
        88386: (e) => {
            e.exports = {
                imageContainer: 'AudioAd_imageContainer__ZmZsg',
                image: 'AudioAd_image__f6DJR',
                image_fallback: 'AudioAd_image_fallback__7ufC3',
                backgroundImage: 'AudioAd_backgroundImage__aqvQd',
                contextMenuButton: 'AudioAd_contextMenuButton__fbb47',
                contextMenuIcon: 'AudioAd_contextMenuIcon__KTxE1',
                contextMenuHeader: 'AudioAd_contextMenuHeader__97XqU',
            };
        },
        88751: (e) => {
            e.exports = {
                vibeAnimation: 'VibeBlock_vibeAnimation__XVEE6',
                controls: 'VibeBlock_controls__BpDFL',
                root: 'VibeBlock_root__z7LtR',
                root_freemium: 'VibeBlock_root_freemium__4i2rV',
                playButton: 'VibeBlock_playButton__6xU55',
                settingsButton: 'VibeBlock_settingsButton__GeMtO',
                subscriptionText: 'VibeBlock_subscriptionText__ODUZN',
                button: 'VibeBlock_button__fWXM_',
            };
        },
        90558: (e) => {
            e.exports = {
                root: 'PlayQueueNowPlayingBlock_root__aJSb8',
                important: 'PlayQueueNowPlayingBlock_important__sxxvA',
                track: 'PlayQueueNowPlayingBlock_track__ClZLs',
                track_withDnD: 'PlayQueueNowPlayingBlock_track_withDnD__D8h0r',
                track_moveFromTop: 'PlayQueueNowPlayingBlock_track_moveFromTop__pBBJt',
                'move-from-top': 'PlayQueueNowPlayingBlock_move-from-top__O5e0S',
                track_moveFromBottom: 'PlayQueueNowPlayingBlock_track_moveFromBottom__Jj2UO',
                'move-from-bottom': 'PlayQueueNowPlayingBlock_move-from-bottom__Cz7lV',
            };
        },
        90593: (e) => {
            e.exports = { divider: 'VibeContextMenu_divider__45urL', item_active: 'VibeContextMenu_item_active__DnFoW' };
        },
        90875: (e) => {
            e.exports = {
                root: 'VibeRestrictions_root__efJez',
                diversity: 'VibeRestrictions_diversity__qfOls',
                moodEnergy: 'VibeRestrictions_moodEnergy__Le0Cy',
                contextItems: 'VibeRestrictions_contextItems__JrF7D',
            };
        },
        91311: (e) => {
            e.exports = {
                root: 'VibePageFreemiumBlock_root__HCPuh',
                button: 'VibePageFreemiumBlock_button__ULD2Z',
                description: 'VibePageFreemiumBlock_description__AaZUt',
            };
        },
        92382: (e, t, a) => {
            'use strict';
            a.d(t, { K: () => n });
            var i = a(71483);
            function n(e) {
                return (null == e ? void 0 : e.data.type) === i.K.Playlist;
            }
        },
        95114: (e) => {
            e.exports = {
                message: 'NotificationChangeQuality_message__coCvn',
                changeButton: 'NotificationChangeQuality_changeButton__Hzc3y',
                icon: 'NotificationChangeQuality_icon__bOfQO',
            };
        },
        95180: (e) => {
            e.exports = {
                root: 'WordsCard_root__6r3u2',
                root_disabled: 'WordsCard_root_disabled__Kgxb_',
                badge: 'WordsCard_badge__Y5HRe',
                badge_centered: 'WordsCard_badge_centered__7GMKP',
                badge_centeredSparkles: 'WordsCard_badge_centeredSparkles__sebgi',
                badge_loading: 'WordsCard_badge_loading__pDoTb',
                pulse: 'WordsCard_pulse__sKXAl',
                content: 'WordsCard_content__AUDsR',
                content_hidden: 'WordsCard_content_hidden__WhUsT',
                text: 'WordsCard_text__ZquMQ',
                appear: 'WordsCard_appear__AISMP',
                action: 'WordsCard_action__v4Jp1',
                popoverContent: 'WordsCard_popoverContent__NHYuc',
            };
        },
        95520: (e) => {
            e.exports = {
                root: 'SyncLyricsLoader_root__I2hTe',
                element: 'SyncLyricsLoader_element___Luwv',
                pulse: 'SyncLyricsLoader_pulse__5AqRf',
                'change-opacity': 'SyncLyricsLoader_change-opacity__vscya',
                element_withIcon: 'SyncLyricsLoader_element_withIcon__iiSBo',
                element_withDefaultElement: 'SyncLyricsLoader_element_withDefaultElement__WmP80',
                element_paused: 'SyncLyricsLoader_element_paused__LFpD0',
            };
        },
        95731: (e) => {
            e.exports = {
                timecode: 'TimecodeGroup_timecode__IJXpy',
                timecode_current: 'TimecodeGroup_timecode_current__wv9pb',
                timecode_current_animation: 'TimecodeGroup_timecode_current_animation__kZUW_',
                timecode_current_hidden: 'TimecodeGroup_timecode_current_hidden__D88_K',
                timecode_end: 'TimecodeGroup_timecode_end__kzP5g',
                timecode_end_hidden: 'TimecodeGroup_timecode_end_hidden__BxQ5h',
            };
        },
        95897: (e, t, a) => {
            'use strict';
            a.d(t, { r: () => b, q: () => i });
            var i = (function (e) {
                    return (e.VERTICAL = 'vertical'), (e.HORIZONTAL = 'horizontal'), e;
                })({}),
                n = a(32290),
                r = a(63618),
                l = a(96103),
                s = a(55178),
                o = a(60900),
                c = a(59824),
                d = a(91027),
                u = a(6752),
                _ = a(44989),
                m = a(63423),
                p = a(82586),
                v = a(378),
                y = a(49574),
                h = a(60070),
                g = a.n(h);
            let b = (0, l.PA)((e) => {
                let {
                        className: t,
                        horizontalSliderClassName: a,
                        verticalSliderClassName: l,
                        variant: h = i.HORIZONTAL,
                        playbackId: b,
                        onVolumeClick: x,
                        onVolumeSet: A,
                        sonataVolume: f,
                        buttonClassName: C,
                        style: rootStyle,
                    } = e,
                    [k, P] = (0, s.useState)(void 0),
                    { formatMessage: N } = (0, o.A)(),
                    j = (0, y.eGp)(),
                    { theme: G } = (0, y.DPo)(),
                    { state: S, toggleTrue: E, toggleFalse: T } = (0, _.e)(!1);
                (0, s.useEffect)(() => {
                    'number' == typeof f && P(f);
                }, [f]);
                let I = Math.round((null != k ? k : 1) * 100) / 100,
                    w = (0, d.c)((e) => {
                        null == j || j.setExponentVolume(e, b);
                    });
                (0, s.useEffect)(() => {
                    let e = () => {
                            T(), document.activeElement instanceof HTMLElement && document.activeElement.blur();
                        },
                        t = () => {
                            document.hidden && e();
                        };
                    return (
                        document.addEventListener('visibilitychange', t),
                        window.addEventListener('blur', e),
                        () => {
                            document.removeEventListener('visibilitychange', t), window.removeEventListener('blur', e);
                        }
                    );
                }, [T]);
                let L = (0, d.c)((e) => {
                        P(e), w(e), null == A || A(e);
                    }),
                    M = (0, d.c)(async (e) => {
                        await x(I, e);
                    }),
                    B = 0 === I ? 'volumeOff' : 'volume',
                    O = 0 === I ? N({ id: 'player-actions.volume-on' }) : N({ id: 'player-actions.volume-off' }),
                    R = (0, d.c)((e) => {
                        L(Math.max(0, Math.min(1, Math.round(100 * (I + (e.deltaY > 0 ? -1 : 1) * 0.01)) / 100)));
                    }),
                    D = (0, u.L)(() => {
                        if (h === i.HORIZONTAL)
                            return (0, n.jsx)(v.A, {
                                onWheel: R,
                                className: a,
                                thumbSize: 's',
                                trackSize: 's',
                                value: I,
                                maxValue: 1,
                                step: 0.01,
                                onChange: L,
                                'aria-label': N({ id: 'player-actions.volume-control' }),
                                ...(0, c.Am)(c.Kq.changeVolume.CHANGE_VOLUME_SLIDER),
                            });
                    }),
                    F = (0, u.L)(() => {
                        if (h === i.VERTICAL)
                            return (0, n.jsx)('div', {
                                onWheel: R,
                                className: (0, r.$)(g().sliderContainer, { [g().sliderContainer_focusVisible]: S }),
                                children: [
                                    (0, n.jsx)('span', {
                                        children: `${Math.round(I.toFixed(2) * 100)}%`,
                                        style: {
                                            position: 'absolute',
                                            left: 0,
                                            right: 0,
                                            'margin-inline': 'auto',
                                            width: 'fit-content',
                                            top: '0.7rem',
                                            textShadow:
                                                G === y.Sxu.Dark
                                                    ? '-1px -1px 0 #000,\n' +
                                                      '1px -1px 0 #000,\n' +
                                                      '-1px 1px 0 #000,\n' +
                                                      '1px 1px 0 #000,\n' +
                                                      '-1px 0px 0 #000,\n' +
                                                      '0px 0px 0 #000,\n' +
                                                      '0px -1px 0 #000,\n' +
                                                      '0px 1px 0 #000'
                                                    : void 0,
                                        },
                                    }),
                                    (0, n.jsx)('div', {
                                        className: (0, r.$)(g().wrapperSlider, l),
                                        children: (0, n.jsx)(v.A, {
                                            onMouseLeave: T,
                                            className: (0, r.$)(g().slider, g().important),
                                            thumbSize: 's',
                                            onFocus: E,
                                            onBlur: T,
                                            trackSize: 's',
                                            value: I,
                                            maxValue: 1,
                                            step: 0.01,
                                            onChange: L,
                                            'aria-label': N({ id: 'player-actions.volume-control' }),
                                            ...(0, c.Am)(c.Kq.changeVolume.CHANGE_VOLUME_SLIDER),
                                        }),
                                    }),
                                ],
                            });
                    });
                return (0, n.jsxs)('div', {
                    className: (0, r.$)(g().root, t),
                    style: rootStyle,
                    children: [
                        F,
                        (0, n.jsx)(m.$, {
                            onWheel: R,
                            radius: 'round',
                            size: 'xxxs',
                            variant: 'text',
                            withRipple: !1,
                            onClick: M,
                            'aria-label': O,
                            icon: (0, n.jsx)(p.Icon, { size: 'xs', className: g().icon, variant: B }),
                            className: (0, r.$)(g().button, C),
                            ...(0, c.Am)(c.Kq.changeVolume.CHANGE_VOLUME_BUTTON),
                        }),
                        D,
                    ],
                });
            });
        },
        98602: (e) => {
            e.exports = {
                root: 'QualitySettings_root__bsEFH',
                root_withEqualizer: 'QualitySettings_root_withEqualizer__KF0Ng',
                root_withNewQuality: 'QualitySettings_root_withNewQuality__wP_x5',
                header: 'QualitySettings_header__azQ0H',
                list: 'QualitySettings_list__ggzI6',
                equalizer: 'QualitySettings_equalizer__bt11k',
                headerWithCloseButton: 'QualitySettings_headerWithCloseButton__VHskw',
                itemWrapper: 'QualitySettings_itemWrapper__3KKwt',
                item: 'QualitySettings_item__2SGU_',
                item_option: 'QualitySettings_item_option__KuE4e',
                item_type: 'QualitySettings_item_type___96WF',
                expandedItem: 'QualitySettings_expandedItem__kCxQb',
                itemSubTitle: 'QualitySettings_itemSubTitle__rNJL_',
                menuContent: 'QualitySettings_menuContent__SzqoC',
                button_active: 'QualitySettings_button_active__Nivv_',
            };
        },
        99622: (e) => {
            e.exports = { root: 'FullscreenPlayerDesktopButton_root__qGgoC', button: 'FullscreenPlayerDesktopButton_button__7NEl6' };
        },
        99711: (e) => {
            e.exports = {
                playButtonContainer: 'AlbumCover_playButtonContainer__rC_Wa',
                playButtonContainer_playing: 'AlbumCover_playButtonContainer_playing__mL2J3',
                playButtonContainer_withoutBackground: 'AlbumCover_playButtonContainer_withoutBackground__ChM8o',
                root: 'AlbumCover_root__hkDPz',
                root_withYellowPlayButton: 'AlbumCover_root_withYellowPlayButton__lK9nW',
                coverContainer: 'AlbumCover_coverContainer__NOd_o',
                cover: 'AlbumCover_cover__bif8b',
                cover_visible: 'AlbumCover_cover_visible___8hK9',
                'fade-in': 'AlbumCover_fade-in__5kJy7',
                cover_generative: 'AlbumCover_cover_generative__5siVB',
                button: 'AlbumCover_button__mX59n',
                ripple: 'AlbumCover_ripple__q41JO',
                playButtonIcon: 'AlbumCover_playButtonIcon__2b7_R',
                playButton: 'AlbumCover_playButton__N2FOS',
                playButton_playing: 'AlbumCover_playButton_playing__W9Uib',
            };
        },
    },
]);
