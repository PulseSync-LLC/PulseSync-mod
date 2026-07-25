(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8915],
    {
        4008: (e, t, n) => {
            'use strict';
            n.d(t, { WithOffline: () => l });
            var r = n(96103),
                o = n(70204),
                i = n(34186),
                a = n(11541),
                s = n(57594);
            let l = (0, r.PA)((e) => {
                let { fallback: t, children: n } = e,
                    r = (0, i.N)(),
                    { slam: l } = (0, s.g)(),
                    c = r.get(o.U2);
                return (0, a.g)(c) || l.isOfflineModeEnabled ? n : t;
            });
        },
        4914: (e, t, n) => {
            'use strict';
            n.d(t, { H: () => m });
            var r = n(32290),
                o = n(60900),
                i = n(39407),
                a = n(21732),
                s = n(91027),
                l = n(82586),
                c = n(19740),
                u = n(45477),
                d = n(75582),
                f = n(57594),
                p = n(51675),
                v = n(4008),
                b = n(59833);
            let m = (e) => {
                let { shareLink: t, entityMeta: n, disabled: m, className: g } = e,
                    {
                        settings: { isMobile: h },
                        shareIframe: y,
                    } = (0, f.g)(),
                    { formatMessage: O } = (0, o.A)(),
                    { notify: w } = (0, d.l)(),
                    E = (0, s.c)(async () => {
                        await window.navigator.clipboard.writeText(t), w((0, r.jsx)(b.D, { entityVariant: n.variant, entityTitle: n.title }), { containerId: u.u.INFO });
                    }),
                    S = (0, s.c)(() => {
                        n.id && y.openModal(n);
                    }),
                    x = n.id && n.variant !== p.Y.ARTIST && n.variant !== p.Y.CLIP;
                return (0, r.jsxs)(c.W1, {
                    offsetOptions: 3,
                    isMobile: h,
                    className: g,
                    label: O({ id: 'interface-actions.share' }),
                    icon: (0, r.jsx)(l.I, { variant: 'share', size: 'xxs' }),
                    disabled: m,
                    submenuProps: { 'data-test-id': a.S7.CONTEXT_MENU_SHARE },
                    'data-test-id': a.S7.CONTEXT_MENU_SHARE_BUTTON,
                    children: [
                        (0, r.jsx)(c.Dr, {
                            onClick: E,
                            icon: (0, r.jsx)(l.I, { variant: 'chain', size: 'xxs' }),
                            'data-test-id': a.S7.CONTEXT_MENU_SHARE_COPY_LINK_BUTTON,
                            children: (0, r.jsx)(i.A, { id: 'interface-actions.copy-link' }),
                        }),
                        x &&
                            (0, r.jsx)(v.WithOffline, {
                                fallback: (0, r.jsx)(c.Dr, {
                                    onClick: S,
                                    icon: (0, r.jsx)(l.I, { variant: 'code', size: 'xxs' }),
                                    'data-test-id': a.S7.CONTEXT_MENU_SHARE_IFRAME_BUTTON,
                                    children: (0, r.jsx)(i.A, { id: 'interface-actions.copy-iframe' }),
                                }),
                            }),
                    ],
                });
            };
        },
        8322: (e, t, n) => {
            'use strict';
            n.d(t, { M1: () => r, UM: () => o, yx: () => i });
            let r = 'user:onyourwave',
                o = ['activity'],
                i = 'diversity:reshuffle';
        },
        11541: (e, t, n) => {
            'use strict';
            n.d(t, { g: () => o });
            var r = n(19379);
            let o = (e) => {
                let t = e.get(r.c.OfflineMode);
                return 'boolean' == typeof t && t;
            };
        },
        19053: (e, t, n) => {
            'use strict';
            n.d(t, { B: () => r });
            let r = '{tld}';
        },
        21263: (e, t, n) => {
            'use strict';
            n.d(t, { f: () => r });
            let r = (e) => String([...e].sort());
        },
        25160: (e, t, n) => {
            'use strict';
            n.d(t, { C: () => b });
            var r = n(32290),
                o = n(96103),
                i = n(55178),
                a = n(39407),
                s = n(21732),
                l = n(82586),
                c = n(19740),
                u = n(74196),
                d = n(7697),
                f = n(57594),
                p = n(32156);
            let v = {
                    album: (0, r.jsx)(a.A, { id: 'vibe-actions.vibe-by-album' }),
                    artist: (0, r.jsx)(a.A, { id: 'vibe-actions.vibe-by-artist' }),
                    playlist: (0, r.jsx)(a.A, { id: 'vibe-actions.vibe-by-playlist' }),
                    track: (0, r.jsx)(a.A, { id: 'vibe-actions.vibe-by-track' }),
                },
                b = (0, o.PA)((e) => {
                    let { variant: t, className: n, onClick: o, disabled: a, onOpenMenuChange: b } = e,
                        {
                            settings: { isMobile: m },
                            user: g,
                        } = (0, f.g)(),
                        { withPlusPopoverWeb: h } = (0, d.X)(),
                        y = (0, i.useCallback)(
                            (e) => {
                                let { isPopoverEnabled: i, popoverText: d } = e;
                                return (0, r.jsxs)(c.Dr, {
                                    onClick: o,
                                    disabled: a || i || !g.isAuthorized,
                                    className: n,
                                    icon: (0, r.jsx)(l.I, { variant: 'vibe', size: 'xxs' }),
                                    'data-test-id': s.S7.CONTEXT_MENU_VIBE_BUTTON,
                                    children: [v[t], ' ', (0, r.jsx)(u.q, { children: d })],
                                });
                            },
                            [o, a, n, t, g.isAuthorized],
                        );
                    return (0, r.jsx)(p.S, {
                        isNested: !0,
                        isEnabled: h && !m,
                        placement: 'right',
                        textVariant: 'vibe',
                        vibeTextVariant: t,
                        renderChildren: y,
                        onOpenMenuChange: b,
                    });
                });
        },
        32156: (e, t, n) => {
            'use strict';
            n.d(t, { S: () => p });
            var r = n(32290),
                o = n(55178),
                i = n(60900),
                a = n(21732),
                s = n(64605),
                l = n(63423),
                c = n(71926),
                u = n(57594),
                d = n(48027),
                f = n(32562);
            let p = (e) => {
                let { textVariant: t, vibeTextVariant: n, albumTextVariant: p, buttonText: v, customButtons: b, onOpenMenuChange: m, ...g } = e,
                    h = (0, o.useId)(),
                    { formatMessage: y } = (0, i.A)(),
                    {
                        paywall: { modal: O },
                    } = (0, u.g)(),
                    w = y({ id: 'payment.try-button' }),
                    E = (0, o.useMemo)(() => {
                        switch (n) {
                            case d.I.ALBUM:
                                return y({ id: 'onboarding.try-plus-to-listen-vibe-by-album' }, { br: '\n', nbsp: ' ' });
                            case d.I.ARTIST:
                                return y({ id: 'onboarding.try-plus-to-listen-vibe-by-artist' }, { br: '\n', nbsp: ' ' });
                            case d.I.PLAYLIST:
                                return y({ id: 'onboarding.try-plus-to-listen-vibe-by-playlist' }, { br: '\n', nbsp: ' ' });
                            case d.I.TRACK:
                                return y({ id: 'onboarding.try-plus-to-listen-vibe-by-track' }, { br: '\n', nbsp: ' ' });
                            case d.I.GENRE:
                            case d.I.MICRO_GENRE:
                                return y({ id: 'onboarding.try-plus-to-listen-vibe-by-genre' }, { br: '\n', nbsp: ' ' });
                            case d.I.MOOD:
                                return y({ id: 'onboarding.try-plus-to-listen-vibe-by-mood' }, { br: '\n', nbsp: ' ' });
                            case d.I.ACTIVITY:
                                return y({ id: 'onboarding.try-plus-to-listen-vibe-by-activity' }, { br: '\n', nbsp: ' ' });
                            default:
                                return y({ id: 'onboarding.try-plus-to-listen-vibe' }, { br: '\n', nbsp: ' ' });
                        }
                    }, [n, y]),
                    S = (0, o.useMemo)(() => {
                        switch (p) {
                            case s._.SINGLE:
                                return y({ id: 'entity-names.single-available-with-plus' });
                            case s._.PODCAST:
                                return y({ id: 'non-music.podcast-available-with-plus' });
                            case s._.AUDIOBOOK:
                                return y({ id: 'non-music.book-available-with-plus' });
                            case s._.FAIRY_TALE:
                                return y({ id: 'non-music.fairy-tale-available-with-plus' });
                            default:
                                return y({ id: 'entity-names.album-available-with-plus' });
                        }
                    }, [p, y]),
                    x = (0, o.useMemo)(() => {
                        switch (t) {
                            case 'fullTracks':
                                return y({ id: 'onboarding.try-plus-to-listen-full' }, { br: '\n', nbsp: ' ' });
                            case 'highQuality':
                                return y({ id: 'onboarding.try-plus-to-enable-high-quality' }, { br: '\n', nbsp: ' ' });
                            case 'sync-lyrics':
                                return y({ id: 'onboarding.try-plus-to-view-sync-lyrics' }, { br: '\n' });
                            case 'collectionFreemium':
                                return y({ id: 'onboarding.try-plus-to-open-collection' }, { nbsp: ' ' });
                            case 'vibe':
                                return E;
                            case 'album':
                                return S;
                            default:
                                return '';
                        }
                    }, [t, y, E, S]),
                    T = (0, o.useCallback)(() => {
                        O.open(), null == m || m(!1);
                    }, [O, m]),
                    P = (0, o.useMemo)(
                        () => [
                            (0, r.jsx)(
                                l.$,
                                { color: 'plus', size: 'xxs', radius: 'xxxl', onClick: T, children: (0, r.jsx)(c.HL, { variant: 'div', size: 'm', children: v || w }) },
                                h,
                            ),
                        ],
                        [h, T, v, w],
                    );
                return (0, r.jsx)(f.z, {
                    contentElement: (0, r.jsx)(c.HL, { variant: 'div', size: 'l', weight: 'bold', children: x }),
                    renderChildrenText: x,
                    buttons: null != b ? b : P,
                    contentProps: { 'data-test-id': a.S7.BUY_PLUS_POPOVER },
                    ...g,
                });
            };
        },
        32562: (e, t, n) => {
            'use strict';
            n.d(t, { z: () => b });
            var r = n(32290),
                o = n(63618),
                i = n(55178),
                a = n(60900),
                s = n(21732),
                l = n(63423),
                c = n(82586),
                u = n(48454),
                d = n(54262),
                f = n.n(d);
            let p = { mainAxis: 10 },
                v = { isEnabled: !0, width: 20, height: 8, tipRadius: 2, className: f().arrow },
                b = (e) => {
                    let {
                            contentElement: t,
                            buttons: n,
                            className: d,
                            popoverContentClassName: b,
                            renderChildren: m,
                            renderChildrenText: g,
                            isOpened: h,
                            onOpenChange: y,
                            arrowProps: O,
                            offsetOptions: w,
                            isNested: E,
                            isEnabled: S = !0,
                            contentProps: x,
                            ...T
                        } = e,
                        [P, C] = (0, i.useState)(!1),
                        _ = null != y ? y : C,
                        [j, M] = (0, i.useState)(!0),
                        { formatMessage: R } = (0, a.A)(),
                        A = (0, i.useCallback)(() => {
                            M(!0), _(!1);
                        }, [M, _]),
                        I = (0, i.useCallback)((e) => {
                            e.stopPropagation();
                        }, []),
                        k = (0, i.useCallback)(
                            (e) => (t) => {
                                var n;
                                t.stopPropagation(), M(null != (n = null == e ? void 0 : e(t)) && n), _(!1);
                            },
                            [M, _],
                        ),
                        N = (0, i.useMemo)(() => ({ ...v, ...O }), [O]),
                        L = (0, i.useMemo)(
                            () =>
                                n.map((e) => {
                                    let t = {
                                        className: (0, o.$)(f().button, e.props.className),
                                        onClick: k(e.props.onClick),
                                        'data-test-id': s.S7.POPOVER_WITH_ACTIONS_ACTION_BUTTON,
                                    };
                                    return (0, i.cloneElement)(e, t);
                                }),
                            [n, k],
                        ),
                        D = (0, i.useMemo)(() => {
                            let e = { isPopoverEnabled: S };
                            return S && (e.popoverText = g), m(e);
                        }, [m, S, g]);
                    return S
                        ? (0, r.jsxs)(u.AM, {
                              open: null != h ? h : P,
                              onOpenChange: _,
                              arrowProps: N,
                              offsetOptions: w || p,
                              isNested: E,
                              returnFocus: j,
                              ...T,
                              children: [
                                  D,
                                  (0, r.jsx)(u.hl, {
                                      className: (0, o.$)(f().popoverContent, b),
                                      onClick: I,
                                      ...x,
                                      children: (0, r.jsxs)('div', {
                                          className: (0, o.$)(f().root, d),
                                          children: [
                                              !E &&
                                                  (0, r.jsx)(l.$, {
                                                      className: f().closeButton,
                                                      color: 'primary',
                                                      variant: 'text',
                                                      radius: 'round',
                                                      size: 'xxs',
                                                      onClick: A,
                                                      icon: (0, r.jsx)(c.I, { variant: 'close', size: 'xs' }),
                                                      'aria-label': R({ id: 'interface-actions.close' }),
                                                      'data-test-id': s.S7.POPOVER_WITH_ACTIONS_CLOSE_BUTTON,
                                                  }),
                                              (0, r.jsxs)('div', {
                                                  className: f().content,
                                                  'data-test-id': s.S7.POPOVER_WITH_ACTIONS_TEXT,
                                                  children: [t, (0, r.jsx)('div', { className: f().buttons, children: L })],
                                              }),
                                          ],
                                      }),
                                  }),
                              ],
                          })
                        : D;
                };
        },
        39927: (e) => {
            e.exports = { message: 'NotificationCopy_message__zVlYi', icon: 'NotificationCopy_icon__FTmM9', title: 'NotificationCopy_title__UEiU0' };
        },
        43564: (e, t, n) => {
            'use strict';
            n.d(t, { B: () => w });
            var r = n(32290),
                o = n(55178),
                i = n(60900),
                a = n(62386),
                s = n(71483),
                l = n(21263),
                c = n(91027),
                u = n(72676),
                d = n(90357),
                f = n(72396),
                p = n(7697),
                v = n(45477),
                b = n(75582),
                m = n(57594),
                g = n(8322);
            let h = 'radio';
            var y = n(77156),
                O = n(44128);
            let w = (e) => {
                var t, n;
                let { seeds: w = [g.M1], pageIdForFrom: E, blockIdForFrom: S, onPlayInterrupted: x, parentContextId: T } = e,
                    { from: P } = (0, f.f)(
                        ((e, t) =>
                            !t || (null == e ? void 0 : e.includes(h)) || t.includes(h)
                                ? { pageId: e, blockId: t }
                                : { pageId: e, blockId: ''.concat(t, '-').concat(h) })(E, S),
                    ),
                    { formatMessage: C } = (0, i.A)(),
                    _ = (0, O.e)(),
                    { notify: j } = (0, b.l)(),
                    { sonataState: M, vibe: R, fullscreenPlayer: A, user: I } = (0, m.g)(),
                    { isFreemium: k } = (0, p.X)(),
                    [N, L] = (0, o.useState)(null),
                    D = (0, c.c)(() => (A.modal.isOpened ? v.u.FULLSCREEN_ERROR : v.u.ERROR));
                (0, o.useEffect)(() => {
                    let e =
                        null == _
                            ? void 0
                            : _.state.currentContext.onChange(() => {
                                  (0, a.i)(_.state.currentContext.value) ? L(_.state.currentContext.value) : L(null);
                              });
                    return () => {
                        null == e || e();
                    };
                }, [_]),
                    (0, o.useEffect)(() => {
                        let e =
                            null == N
                                ? void 0
                                : N.observableActiveSession.onChange(() => {
                                      var e, t;
                                      (null == N || null == (e = N.observableActiveSession.value) ? void 0 : e.wave) &&
                                          R.setVibe(null == N || null == (t = N.observableActiveSession.value) ? void 0 : t.wave);
                                  });
                        return () => {
                            null == e || e();
                        };
                    }, [N, R]);
                let F = (0, c.c)(async (e) => {
                        try {
                            await (null == _
                                ? void 0
                                : _.playContext({
                                      contextData: {
                                          type: s.K.Vibe,
                                          meta: { id: (0, l.f)(e) },
                                          seeds: e,
                                          from: P,
                                          includeTracksInResponse: !0,
                                          interactive: !0,
                                          parentContextId: T,
                                      },
                                      loadContextMeta: !0,
                                  }));
                        } catch (e) {
                            j((0, r.jsx)(d.h, { error: C({ id: 'vibe-errors.start-vibe' }) }), { containerId: D() });
                        }
                    }),
                    U = (0, c.c)(async (e) => {
                        if (_ && N)
                            try {
                                await N.setSettings({ seeds: e, queueState: _.state.queueState, interactive: !0, from: P });
                            } catch (e) {
                                j((0, r.jsx)(d.h, { error: C({ id: 'vibe-errors.apply-vibe-setting' }) }), { containerId: D() });
                            }
                    }),
                    B = (0, c.c)(async (e) => {
                        if (_)
                            try {
                                await _.restartContext({ playAfterRestart: e });
                            } catch (e) {
                                j((0, r.jsx)(d.h, { error: C({ id: 'error-messages.something-went-wrong' }) }), { containerId: D() });
                            }
                    }),
                    z = !!N,
                    H = z && (0, y._)(null != (n = null == (t = R.meta) ? void 0 : t.seeds) ? n : [], w),
                    Y = H && M.status === u.MT.PLAYING,
                    W = H && M.status === u.MT.PAUSED;
                (0, o.useEffect)(() => {
                    Y && R.setIsApplying(!1);
                }, [Y, R]);
                let V = (0, c.c)(async () => {
                        if (!Y && (k || !I.isAuthorized)) {
                            null == x || x();
                            return;
                        }
                        R.setIsApplying(!0), await F(w), R.setIsApplying(!1);
                    }),
                    X = (0, c.c)(async (e, t) => {
                        var n;
                        R.setIsApplying(!0);
                        let r = [];
                        if (R.meta && Array.isArray(null == (n = R.meta) ? void 0 : n.seeds))
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
                        N ? (await U(r), await B(!0)) : await F(r), R.setIsApplying(!1);
                    });
                return {
                    isVibeContext: z,
                    isPlaying: Y,
                    isPaused: W,
                    isCurrent: H,
                    togglePlay: V,
                    resetContext: (0, c.c)(async function () {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [g.M1];
                        R.setIsApplying(!0), N ? (await U(e), await B(!0)) : await F(e), R.setIsApplying(!1);
                    }),
                    applySetting: X,
                    playSeeds: (0, c.c)(async (e) => {
                        let t = Array.isArray(e) && e.length > 0 ? e : w;
                        if (k || !I.isAuthorized) {
                            null == x || x();
                            return;
                        }
                        R.setIsApplying(!0), N ? (await U(t), await B(!0)) : await F(t), R.setIsApplying(!1);
                    }),
                };
            };
        },
        48027: (e, t, n) => {
            'use strict';
            n.d(t, { I: () => r });
            var r = (function (e) {
                return (
                    (e.ALBUM = 'album'),
                    (e.ARTIST = 'artist'),
                    (e.PLAYLIST = 'playlist'),
                    (e.TRACK = 'track'),
                    (e.GENRE = 'genre'),
                    (e.ACTIVITY = 'activity'),
                    (e.MOOD = 'mood'),
                    (e.MICRO_GENRE = 'micro-genre'),
                    e
                );
            })({});
        },
        48454: (e, t, n) => {
            'use strict';
            n.d(t, { AM: () => d, hl: () => f });
            var r,
                o = n(78035),
                i = n(72812),
                a = n(55178),
                s = {
                    5881: (e, t, n) => {
                        function r() {
                            for (var e, t, n = 0, r = ''; n < arguments.length; )
                                (e = arguments[n++]) &&
                                    (t = (function e(t) {
                                        var n,
                                            r,
                                            o = '';
                                        if ('string' == typeof t || 'number' == typeof t) o += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (n = 0; n < t.length; n++) t[n] && (r = e(t[n])) && (o && (o += ' '), (o += r));
                                            else for (n in t) t[n] && (o && (o += ' '), (o += n));
                                        return o;
                                    })(e)) &&
                                    (r && (r += ' '), (r += t));
                            return r;
                        }
                        n.r(t), n.d(t, { clsx: () => r, default: () => o });
                        let o = r;
                    },
                    5250: (e, t, n) => {
                        n.r(t), n.d(t, { default: () => r });
                        let r = { overlay: 'ZSjQrniulol6xKOq2Bou' };
                    },
                    310: (e, t, n) => {
                        n.r(t), n.d(t, { default: () => r });
                        let r = { root: 'TYgwct6DZLAMvvFaBZ7z' };
                    },
                    6283: (e, t, n) => {
                        n.r(t), n.d(t, { default: () => r });
                        let r = { root: 'dJZf0Flxzx7PR15g7zqM' };
                    },
                    6544: (e, t, n) => {
                        n.r(t), n.d(t, { RemoveScroll: () => V });
                        var r,
                            o,
                            i = function () {
                                return (i =
                                    Object.assign ||
                                    function (e) {
                                        for (var t, n = 1, r = arguments.length; n < r; n++)
                                            for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                                        return e;
                                    }).apply(this, arguments);
                            };
                        function a(e, t) {
                            var n = {};
                            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
                            if (null != e && 'function' == typeof Object.getOwnPropertySymbols)
                                for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
                                    0 > t.indexOf(r[o]) && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
                            return n;
                        }
                        Object.create;
                        Object.create;
                        var s = ('function' == typeof SuppressedError && SuppressedError, n(810)),
                            l = 'right-scroll-bar-position',
                            c = 'width-before-scroll-bar';
                        function u(e, t) {
                            return 'function' == typeof e ? e(t) : e && (e.current = t), e;
                        }
                        var d = s.useLayoutEffect,
                            f = new WeakMap();
                        function p(e) {
                            return e;
                        }
                        var v = (function (e) {
                                void 0 === e && (e = {});
                                var t,
                                    n,
                                    r,
                                    o =
                                        (void 0 === t && (t = p),
                                        (n = []),
                                        (r = !1),
                                        {
                                            read: function () {
                                                if (r) throw Error('Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.');
                                                return n.length ? n[n.length - 1] : null;
                                            },
                                            useMedium: function (e) {
                                                var o = t(e, r);
                                                return (
                                                    n.push(o),
                                                    function () {
                                                        n = n.filter(function (e) {
                                                            return e !== o;
                                                        });
                                                    }
                                                );
                                            },
                                            assignSyncMedium: function (e) {
                                                for (r = !0; n.length; ) {
                                                    var t = n;
                                                    (n = []), t.forEach(e);
                                                }
                                                n = {
                                                    push: function (t) {
                                                        return e(t);
                                                    },
                                                    filter: function () {
                                                        return n;
                                                    },
                                                };
                                            },
                                            assignMedium: function (e) {
                                                r = !0;
                                                var t = [];
                                                if (n.length) {
                                                    var o = n;
                                                    (n = []), o.forEach(e), (t = n);
                                                }
                                                var i = function () {
                                                        var n = t;
                                                        (t = []), n.forEach(e);
                                                    },
                                                    a = function () {
                                                        return Promise.resolve().then(i);
                                                    };
                                                a(),
                                                    (n = {
                                                        push: function (e) {
                                                            t.push(e), a();
                                                        },
                                                        filter: function (e) {
                                                            return (t = t.filter(e)), n;
                                                        },
                                                    });
                                            },
                                        });
                                return (o.options = i({ async: !0, ssr: !1 }, e)), o;
                            })(),
                            b = function () {},
                            m = s.forwardRef(function (e, t) {
                                var n,
                                    r,
                                    o,
                                    l,
                                    c = s.useRef(null),
                                    p = s.useState({ onScrollCapture: b, onWheelCapture: b, onTouchMoveCapture: b }),
                                    m = p[0],
                                    g = p[1],
                                    h = e.forwardProps,
                                    y = e.children,
                                    O = e.className,
                                    w = e.removeScrollBar,
                                    E = e.enabled,
                                    S = e.shards,
                                    x = e.sideCar,
                                    T = e.noIsolation,
                                    P = e.inert,
                                    C = e.allowPinchZoom,
                                    _ = e.as,
                                    j = e.gapMode,
                                    M = a(e, [
                                        'forwardProps',
                                        'children',
                                        'className',
                                        'removeScrollBar',
                                        'enabled',
                                        'shards',
                                        'sideCar',
                                        'noIsolation',
                                        'inert',
                                        'allowPinchZoom',
                                        'as',
                                        'gapMode',
                                    ]),
                                    R =
                                        ((n = [c, t]),
                                        (r = function (e) {
                                            return n.forEach(function (t) {
                                                return u(t, e);
                                            });
                                        }),
                                        ((o = (0, s.useState)(function () {
                                            return {
                                                value: null,
                                                callback: r,
                                                facade: {
                                                    get current() {
                                                        return o.value;
                                                    },
                                                    set current(value) {
                                                        var e = o.value;
                                                        e !== value && ((o.value = value), o.callback(value, e));
                                                    },
                                                },
                                            };
                                        })[0]).callback = r),
                                        (l = o.facade),
                                        d(
                                            function () {
                                                var e = f.get(l);
                                                if (e) {
                                                    var t = new Set(e),
                                                        r = new Set(n),
                                                        o = l.current;
                                                    t.forEach(function (e) {
                                                        r.has(e) || u(e, null);
                                                    }),
                                                        r.forEach(function (e) {
                                                            t.has(e) || u(e, o);
                                                        });
                                                }
                                                f.set(l, n);
                                            },
                                            [n],
                                        ),
                                        l),
                                    A = i(i({}, M), m);
                                return s.createElement(
                                    s.Fragment,
                                    null,
                                    E &&
                                        s.createElement(x, {
                                            sideCar: v,
                                            removeScrollBar: w,
                                            shards: S,
                                            noIsolation: T,
                                            inert: P,
                                            setCallbacks: g,
                                            allowPinchZoom: !!C,
                                            lockRef: c,
                                            gapMode: j,
                                        }),
                                    h
                                        ? s.cloneElement(s.Children.only(y), i(i({}, A), { ref: R }))
                                        : s.createElement(void 0 === _ ? 'div' : _, i({}, A, { className: O, ref: R }), y),
                                );
                            });
                        (m.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }), (m.classNames = { fullWidth: c, zeroRight: l });
                        var g = function (e) {
                            var t = e.sideCar,
                                n = a(e, ['sideCar']);
                            if (!t) throw Error('Sidecar: please provide `sideCar` property to import the right car');
                            var r = t.read();
                            if (!r) throw Error('Sidecar medium not found');
                            return s.createElement(r, i({}, n));
                        };
                        g.isSideCarExport = !0;
                        var h = function () {
                                var e = 0,
                                    t = null;
                                return {
                                    add: function (r) {
                                        if (
                                            0 == e &&
                                            (t = (function () {
                                                if (!document) return null;
                                                var e = document.createElement('style');
                                                e.type = 'text/css';
                                                var t = o || n.nc;
                                                return t && e.setAttribute('nonce', t), e;
                                            })())
                                        ) {
                                            var i, a;
                                            (i = t).styleSheet ? (i.styleSheet.cssText = r) : i.appendChild(document.createTextNode(r)),
                                                (a = t),
                                                (document.head || document.getElementsByTagName('head')[0]).appendChild(a);
                                        }
                                        e++;
                                    },
                                    remove: function () {
                                        --e || !t || (t.parentNode && t.parentNode.removeChild(t), (t = null));
                                    },
                                };
                            },
                            y = function () {
                                var e = h();
                                return function (t, n) {
                                    s.useEffect(
                                        function () {
                                            return (
                                                e.add(t),
                                                function () {
                                                    e.remove();
                                                }
                                            );
                                        },
                                        [t && n],
                                    );
                                };
                            },
                            O = function () {
                                var e = y();
                                return function (t) {
                                    return e(t.styles, t.dynamic), null;
                                };
                            },
                            w = function (e) {
                                return parseInt(e || '', 10) || 0;
                            },
                            E = function (e) {
                                var t = window.getComputedStyle(document.body),
                                    n = t['padding' === e ? 'paddingLeft' : 'marginLeft'],
                                    r = t['padding' === e ? 'paddingTop' : 'marginTop'],
                                    o = t['padding' === e ? 'paddingRight' : 'marginRight'];
                                return [w(n), w(r), w(o)];
                            },
                            S = function (e) {
                                void 0 === e && (e = 'margin');
                                var t = E(e),
                                    n = document.documentElement.clientWidth,
                                    r = window.innerWidth;
                                return { left: t[0], top: t[1], right: t[2], gap: Math.max(0, r - n + t[2] - t[0]) };
                            },
                            x = O(),
                            T = 'data-scroll-locked',
                            P = function (e, t, n, r) {
                                var o = e.left,
                                    i = e.top,
                                    a = e.right,
                                    s = e.gap;
                                return (
                                    void 0 === n && (n = 'margin'),
                                    '\n  .'
                                        .concat('with-scroll-bars-hidden', ' {\n   overflow: hidden ')
                                        .concat(r, ';\n   padding-right: ')
                                        .concat(s, 'px ')
                                        .concat(r, ';\n  }\n  body[')
                                        .concat(T, '] {\n    overflow: hidden ')
                                        .concat(r, ';\n    overscroll-behavior: contain;\n    ')
                                        .concat(
                                            [
                                                t && 'position: relative '.concat(r, ';'),
                                                'margin' === n &&
                                                    '\n    padding-left: '
                                                        .concat(o, 'px;\n    padding-top: ')
                                                        .concat(i, 'px;\n    padding-right: ')
                                                        .concat(a, 'px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ')
                                                        .concat(s, 'px ')
                                                        .concat(r, ';\n    '),
                                                'padding' === n && 'padding-right: '.concat(s, 'px ').concat(r, ';'),
                                            ]
                                                .filter(Boolean)
                                                .join(''),
                                            '\n  }\n  \n  .',
                                        )
                                        .concat(l, ' {\n    right: ')
                                        .concat(s, 'px ')
                                        .concat(r, ';\n  }\n  \n  .')
                                        .concat(c, ' {\n    margin-right: ')
                                        .concat(s, 'px ')
                                        .concat(r, ';\n  }\n  \n  .')
                                        .concat(l, ' .')
                                        .concat(l, ' {\n    right: 0 ')
                                        .concat(r, ';\n  }\n  \n  .')
                                        .concat(c, ' .')
                                        .concat(c, ' {\n    margin-right: 0 ')
                                        .concat(r, ';\n  }\n  \n  body[')
                                        .concat(T, '] {\n    ')
                                        .concat('--removed-body-scroll-bar-size', ': ')
                                        .concat(s, 'px;\n  }\n')
                                );
                            },
                            C = function () {
                                var e = parseInt(document.body.getAttribute(T) || '0', 10);
                                return isFinite(e) ? e : 0;
                            },
                            _ = function () {
                                s.useEffect(function () {
                                    return (
                                        document.body.setAttribute(T, (C() + 1).toString()),
                                        function () {
                                            var e = C() - 1;
                                            e <= 0 ? document.body.removeAttribute(T) : document.body.setAttribute(T, e.toString());
                                        }
                                    );
                                }, []);
                            },
                            j = function (e) {
                                var t = e.noRelative,
                                    n = e.noImportant,
                                    r = e.gapMode,
                                    o = void 0 === r ? 'margin' : r;
                                _();
                                var i = s.useMemo(
                                    function () {
                                        return S(o);
                                    },
                                    [o],
                                );
                                return s.createElement(x, { styles: P(i, !t, o, n ? '' : '!important') });
                            },
                            M = !1;
                        try {
                            var R = Object.defineProperty({}, 'passive', {
                                get: function () {
                                    return (M = !0), !0;
                                },
                            });
                            window.addEventListener('test', R, R), window.removeEventListener('test', R, R);
                        } catch (e) {
                            M = !1;
                        }
                        var A = !!M && { passive: !1 },
                            I = function (e, t) {
                                if (!(e instanceof Element)) return !1;
                                var n = window.getComputedStyle(e);
                                return 'hidden' !== n[t] && (n.overflowY !== n.overflowX || 'TEXTAREA' === e.tagName || 'visible' !== n[t]);
                            },
                            k = function (e, t) {
                                var n = t.ownerDocument,
                                    r = t;
                                do {
                                    if (('undefined' != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), N(e, r))) {
                                        var o = L(e, r);
                                        if (o[1] > o[2]) return !0;
                                    }
                                    r = r.parentNode;
                                } while (r && r !== n.body);
                                return !1;
                            },
                            N = function (e, t) {
                                return 'v' === e ? I(t, 'overflowY') : I(t, 'overflowX');
                            },
                            L = function (e, t) {
                                return 'v' === e ? [t.scrollTop, t.scrollHeight, t.clientHeight] : [t.scrollLeft, t.scrollWidth, t.clientWidth];
                            },
                            D = function (e, t, n, r, o) {
                                var i,
                                    a = ((i = window.getComputedStyle(t).direction), 'h' === e && 'rtl' === i ? -1 : 1),
                                    s = a * r,
                                    l = n.target,
                                    c = t.contains(l),
                                    u = !1,
                                    d = s > 0,
                                    f = 0,
                                    p = 0;
                                do {
                                    var v = L(e, l),
                                        b = v[0],
                                        m = v[1] - v[2] - a * b;
                                    (b || m) && N(e, l) && ((f += m), (p += b)), (l = l instanceof ShadowRoot ? l.host : l.parentNode);
                                } while ((!c && l !== document.body) || (c && (t.contains(l) || t === l)));
                                return d && ((o && 1 > Math.abs(f)) || (!o && s > f)) ? (u = !0) : !d && ((o && 1 > Math.abs(p)) || (!o && -s > p)) && (u = !0), u;
                            },
                            F = function (e) {
                                return 'changedTouches' in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
                            },
                            U = function (e) {
                                return [e.deltaX, e.deltaY];
                            },
                            B = function (e) {
                                return e && 'current' in e ? e.current : e;
                            },
                            z = 0,
                            H = [];
                        let Y =
                            ((r = function (e) {
                                var t = s.useRef([]),
                                    n = s.useRef([0, 0]),
                                    r = s.useRef(),
                                    o = s.useState(z++)[0],
                                    i = s.useState(O)[0],
                                    a = s.useRef(e);
                                s.useEffect(
                                    function () {
                                        a.current = e;
                                    },
                                    [e],
                                ),
                                    s.useEffect(
                                        function () {
                                            if (e.inert) {
                                                document.body.classList.add('block-interactivity-'.concat(o));
                                                var t = (function (e, t, n) {
                                                    if (n || 2 == arguments.length)
                                                        for (var r, o = 0, i = t.length; o < i; o++)
                                                            (!r && o in t) || (r || (r = Array.prototype.slice.call(t, 0, o)), (r[o] = t[o]));
                                                    return e.concat(r || Array.prototype.slice.call(t));
                                                })([e.lockRef.current], (e.shards || []).map(B), !0).filter(Boolean);
                                                return (
                                                    t.forEach(function (e) {
                                                        return e.classList.add('allow-interactivity-'.concat(o));
                                                    }),
                                                    function () {
                                                        document.body.classList.remove('block-interactivity-'.concat(o)),
                                                            t.forEach(function (e) {
                                                                return e.classList.remove('allow-interactivity-'.concat(o));
                                                            });
                                                    }
                                                );
                                            }
                                        },
                                        [e.inert, e.lockRef.current, e.shards],
                                    );
                                var l = s.useCallback(function (e, t) {
                                        if (('touches' in e && 2 === e.touches.length) || ('wheel' === e.type && e.ctrlKey)) return !a.current.allowPinchZoom;
                                        var o,
                                            i = F(e),
                                            s = n.current,
                                            l = 'deltaX' in e ? e.deltaX : s[0] - i[0],
                                            c = 'deltaY' in e ? e.deltaY : s[1] - i[1],
                                            u = e.target,
                                            d = Math.abs(l) > Math.abs(c) ? 'h' : 'v';
                                        if ('touches' in e && 'h' === d && 'range' === u.type) return !1;
                                        var f = k(d, u);
                                        if (!f) return !0;
                                        if ((f ? (o = d) : ((o = 'v' === d ? 'h' : 'v'), (f = k(d, u))), !f)) return !1;
                                        if ((!r.current && 'changedTouches' in e && (l || c) && (r.current = o), !o)) return !0;
                                        var p = r.current || o;
                                        return D(p, t, e, 'h' === p ? l : c, !0);
                                    }, []),
                                    c = s.useCallback(function (e) {
                                        if (H.length && H[H.length - 1] === i) {
                                            var n = 'deltaY' in e ? U(e) : F(e),
                                                r = t.current.filter(function (t) {
                                                    var r;
                                                    return (
                                                        t.name === e.type &&
                                                        (t.target === e.target || e.target === t.shadowParent) &&
                                                        ((r = t.delta), r[0] === n[0] && r[1] === n[1])
                                                    );
                                                })[0];
                                            if (r && r.should) {
                                                e.cancelable && e.preventDefault();
                                                return;
                                            }
                                            if (!r) {
                                                var o = (a.current.shards || [])
                                                    .map(B)
                                                    .filter(Boolean)
                                                    .filter(function (t) {
                                                        return t.contains(e.target);
                                                    });
                                                (o.length > 0 ? l(e, o[0]) : !a.current.noIsolation) && e.cancelable && e.preventDefault();
                                            }
                                        }
                                    }, []),
                                    u = s.useCallback(function (e, n, r, o) {
                                        var i = {
                                            name: e,
                                            delta: n,
                                            target: r,
                                            should: o,
                                            shadowParent: (function (e) {
                                                for (var t = null; null !== e; ) e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode);
                                                return t;
                                            })(r),
                                        };
                                        t.current.push(i),
                                            setTimeout(function () {
                                                t.current = t.current.filter(function (e) {
                                                    return e !== i;
                                                });
                                            }, 1);
                                    }, []),
                                    d = s.useCallback(function (e) {
                                        (n.current = F(e)), (r.current = void 0);
                                    }, []),
                                    f = s.useCallback(function (t) {
                                        u(t.type, U(t), t.target, l(t, e.lockRef.current));
                                    }, []),
                                    p = s.useCallback(function (t) {
                                        u(t.type, F(t), t.target, l(t, e.lockRef.current));
                                    }, []);
                                s.useEffect(function () {
                                    return (
                                        H.push(i),
                                        e.setCallbacks({ onScrollCapture: f, onWheelCapture: f, onTouchMoveCapture: p }),
                                        document.addEventListener('wheel', c, A),
                                        document.addEventListener('touchmove', c, A),
                                        document.addEventListener('touchstart', d, A),
                                        function () {
                                            (H = H.filter(function (e) {
                                                return e !== i;
                                            })),
                                                document.removeEventListener('wheel', c, A),
                                                document.removeEventListener('touchmove', c, A),
                                                document.removeEventListener('touchstart', d, A);
                                        }
                                    );
                                }, []);
                                var v = e.removeScrollBar,
                                    b = e.inert;
                                return s.createElement(
                                    s.Fragment,
                                    null,
                                    b
                                        ? s.createElement(i, {
                                              styles: '\n  .block-interactivity-'
                                                  .concat(o, ' {pointer-events: none;}\n  .allow-interactivity-')
                                                  .concat(o, ' {pointer-events: all;}\n'),
                                          })
                                        : null,
                                    v ? s.createElement(j, { gapMode: e.gapMode }) : null,
                                );
                            }),
                            v.useMedium(r),
                            g);
                        var W = s.forwardRef(function (e, t) {
                            return s.createElement(m, i({}, e, { ref: t, sideCar: Y }));
                        });
                        W.classNames = m.classNames;
                        let V = W;
                    },
                    4490: (e, t, n) => {
                        n.r(t), n.d(t, { DOWN: () => s, LEFT: () => o, RIGHT: () => i, UP: () => a, useSwipeable: () => p });
                        var r = n(810);
                        let o = 'Left',
                            i = 'Right',
                            a = 'Up',
                            s = 'Down',
                            l = {
                                delta: 10,
                                preventScrollOnSwipe: !1,
                                rotationAngle: 0,
                                trackMouse: !1,
                                trackTouch: !0,
                                swipeDuration: 1 / 0,
                                touchEventOptions: { passive: !0 },
                            },
                            c = { first: !0, initial: [0, 0], start: 0, swiping: !1, xy: [0, 0] },
                            u = 'mousemove',
                            d = 'mouseup';
                        function f(e, t) {
                            if (0 === t) return e;
                            let n = (Math.PI / 180) * t;
                            return [e[0] * Math.cos(n) + e[1] * Math.sin(n), e[1] * Math.cos(n) - e[0] * Math.sin(n)];
                        }
                        function p(e) {
                            var t, n, p;
                            let v,
                                { trackMouse: b } = e,
                                m = r.useRef(Object.assign({}, c)),
                                g = r.useRef(Object.assign({}, l)),
                                h = r.useRef(Object.assign({}, g.current));
                            for (v in ((h.current = Object.assign({}, g.current)), (g.current = Object.assign(Object.assign({}, l), e)), l))
                                void 0 === g.current[v] && (g.current[v] = l[v]);
                            let [y, O] = r.useMemo(
                                () =>
                                    (function (e, t) {
                                        let n = (t) => {
                                                let n = 'touches' in t;
                                                (n && t.touches.length > 1) ||
                                                    e((e, o) => {
                                                        o.trackMouse && !n && (document.addEventListener(u, r), document.addEventListener(d, v));
                                                        let { clientX: i, clientY: a } = n ? t.touches[0] : t,
                                                            s = f([i, a], o.rotationAngle);
                                                        return (
                                                            o.onTouchStartOrOnMouseDown && o.onTouchStartOrOnMouseDown({ event: t }),
                                                            Object.assign(Object.assign(Object.assign({}, e), c), { initial: s.slice(), xy: s, start: t.timeStamp || 0 })
                                                        );
                                                    });
                                            },
                                            r = (t) => {
                                                e((e, n) => {
                                                    var r, c, u, d;
                                                    let p = 'touches' in t;
                                                    if (p && t.touches.length > 1) return e;
                                                    if (t.timeStamp - e.start > n.swipeDuration)
                                                        return e.swiping ? Object.assign(Object.assign({}, e), { swiping: !1 }) : e;
                                                    let { clientX: v, clientY: b } = p ? t.touches[0] : t,
                                                        [m, g] = f([v, b], n.rotationAngle),
                                                        h = m - e.xy[0],
                                                        y = g - e.xy[1],
                                                        O = Math.abs(h),
                                                        w = Math.abs(y),
                                                        E = (t.timeStamp || 0) - e.start,
                                                        S = Math.sqrt(O * O + w * w) / (E || 1),
                                                        x = [h / (E || 1), y / (E || 1)],
                                                        T = ((r = O), (c = w), (u = h), (d = y), r > c ? (u > 0 ? i : o) : d > 0 ? s : a),
                                                        P = 'number' == typeof n.delta ? n.delta : n.delta[T.toLowerCase()] || l.delta;
                                                    if (O < P && w < P && !e.swiping) return e;
                                                    let C = {
                                                        absX: O,
                                                        absY: w,
                                                        deltaX: h,
                                                        deltaY: y,
                                                        dir: T,
                                                        event: t,
                                                        first: e.first,
                                                        initial: e.initial,
                                                        velocity: S,
                                                        vxvy: x,
                                                    };
                                                    C.first && n.onSwipeStart && n.onSwipeStart(C), n.onSwiping && n.onSwiping(C);
                                                    let _ = !1;
                                                    return (
                                                        (n.onSwiping || n.onSwiped || n['onSwiped'.concat(T)]) && (_ = !0),
                                                        _ && n.preventScrollOnSwipe && n.trackTouch && t.cancelable && t.preventDefault(),
                                                        Object.assign(Object.assign({}, e), { first: !1, eventData: C, swiping: !0 })
                                                    );
                                                });
                                            },
                                            p = (t) => {
                                                e((e, n) => {
                                                    let r;
                                                    if (e.swiping && e.eventData) {
                                                        if (t.timeStamp - e.start < n.swipeDuration) {
                                                            (r = Object.assign(Object.assign({}, e.eventData), { event: t })), n.onSwiped && n.onSwiped(r);
                                                            let o = n['onSwiped'.concat(r.dir)];
                                                            o && o(r);
                                                        }
                                                    } else n.onTap && n.onTap({ event: t });
                                                    return (
                                                        n.onTouchEndOrOnMouseUp && n.onTouchEndOrOnMouseUp({ event: t }),
                                                        Object.assign(Object.assign(Object.assign({}, e), c), { eventData: r })
                                                    );
                                                });
                                            },
                                            v = (e) => {
                                                document.removeEventListener(u, r), document.removeEventListener(d, v), p(e);
                                            },
                                            b = (e, t) => {
                                                let o = () => {};
                                                if (e && e.addEventListener) {
                                                    let i = Object.assign(Object.assign({}, l.touchEventOptions), t.touchEventOptions),
                                                        a = [
                                                            ['touchstart', n, i],
                                                            ['touchmove', r, Object.assign(Object.assign({}, i), t.preventScrollOnSwipe ? { passive: !1 } : {})],
                                                            ['touchend', p, i],
                                                        ];
                                                    a.forEach((t) => {
                                                        let [n, r, o] = t;
                                                        return e.addEventListener(n, r, o);
                                                    }),
                                                        (o = () =>
                                                            a.forEach((t) => {
                                                                let [n, r] = t;
                                                                return e.removeEventListener(n, r);
                                                            }));
                                                }
                                                return o;
                                            },
                                            m = {
                                                ref: (t) => {
                                                    null !== t &&
                                                        e((e, n) => {
                                                            if (e.el === t) return e;
                                                            let r = {};
                                                            return (
                                                                e.el && e.el !== t && e.cleanUpTouch && (e.cleanUpTouch(), (r.cleanUpTouch = void 0)),
                                                                n.trackTouch && t && (r.cleanUpTouch = b(t, n)),
                                                                Object.assign(Object.assign(Object.assign({}, e), { el: t }), r)
                                                            );
                                                        });
                                                },
                                            };
                                        return t.trackMouse && (m.onMouseDown = n), [m, b];
                                    })((e) => (m.current = e(m.current, g.current)), { trackMouse: b }),
                                [b],
                            );
                            return (
                                (t = m.current),
                                (n = g.current),
                                (p = h.current),
                                (m.current =
                                    n.trackTouch && t.el
                                        ? t.cleanUpTouch
                                            ? n.preventScrollOnSwipe !== p.preventScrollOnSwipe || n.touchEventOptions.passive !== p.touchEventOptions.passive
                                                ? (t.cleanUpTouch(), Object.assign(Object.assign({}, t), { cleanUpTouch: O(t.el, n) }))
                                                : t
                                            : Object.assign(Object.assign({}, t), { cleanUpTouch: O(t.el, n) })
                                        : (t.cleanUpTouch && t.cleanUpTouch(), Object.assign(Object.assign({}, t), { cleanUpTouch: void 0 }))),
                                y
                            );
                        }
                    },
                    9097: (e, t) => {
                        var n = Symbol.for('react.transitional.element');
                        function r(e, t, r) {
                            var o = null;
                            if ((void 0 !== r && (o = '' + r), void 0 !== t.key && (o = '' + t.key), 'key' in t))
                                for (var i in ((r = {}), t)) 'key' !== i && (r[i] = t[i]);
                            else r = t;
                            return { $$typeof: n, type: e, key: o, ref: void 0 !== (t = r.ref) ? t : null, props: r };
                        }
                        (t.Fragment = Symbol.for('react.fragment')), (t.jsx = r), (t.jsxs = r);
                    },
                    4377: (e, t, n) => {
                        e.exports = n(9097);
                    },
                    9110: (e, t, n) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.useDynamicText =
                                t.usePopoverSwipeable =
                                t.useReturnValue =
                                t.useCallbackRef =
                                t.useDebouncedToggle =
                                t.useResize =
                                t.useIsomorphicEffect =
                                t.useForceUpdateRef =
                                t.useElementOffsetY =
                                t.getElementNameByDataAttribute =
                                t.createIntersectionObserver =
                                t.useIntersectionObserver =
                                t.useKeyboardNavigation =
                                t.useScroll =
                                t.useForwardRef =
                                    void 0);
                        var r = n(245);
                        Object.defineProperty(t, 'useForwardRef', {
                            enumerable: !0,
                            get: function () {
                                return r.useForwardRef;
                            },
                        });
                        var o = n(2067);
                        Object.defineProperty(t, 'useScroll', {
                            enumerable: !0,
                            get: function () {
                                return o.useScroll;
                            },
                        });
                        var i = n(5188);
                        Object.defineProperty(t, 'useKeyboardNavigation', {
                            enumerable: !0,
                            get: function () {
                                return i.useKeyboardNavigation;
                            },
                        });
                        var a = n(5663);
                        Object.defineProperty(t, 'useIntersectionObserver', {
                            enumerable: !0,
                            get: function () {
                                return a.useIntersectionObserver;
                            },
                        }),
                            Object.defineProperty(t, 'createIntersectionObserver', {
                                enumerable: !0,
                                get: function () {
                                    return a.createIntersectionObserver;
                                },
                            }),
                            Object.defineProperty(t, 'getElementNameByDataAttribute', {
                                enumerable: !0,
                                get: function () {
                                    return a.getElementNameByDataAttribute;
                                },
                            });
                        var s = n(2101);
                        Object.defineProperty(t, 'useElementOffsetY', {
                            enumerable: !0,
                            get: function () {
                                return s.useElementOffsetY;
                            },
                        });
                        var l = n(2767);
                        Object.defineProperty(t, 'useForceUpdateRef', {
                            enumerable: !0,
                            get: function () {
                                return l.useForceUpdateRef;
                            },
                        });
                        var c = n(9019);
                        Object.defineProperty(t, 'useIsomorphicEffect', {
                            enumerable: !0,
                            get: function () {
                                return c.useIsomorphicEffect;
                            },
                        });
                        var u = n(2947);
                        Object.defineProperty(t, 'useResize', {
                            enumerable: !0,
                            get: function () {
                                return u.useResize;
                            },
                        });
                        var d = n(6699);
                        Object.defineProperty(t, 'useDebouncedToggle', {
                            enumerable: !0,
                            get: function () {
                                return d.useDebouncedToggle;
                            },
                        });
                        var f = n(8691);
                        Object.defineProperty(t, 'useCallbackRef', {
                            enumerable: !0,
                            get: function () {
                                return f.useCallbackRef;
                            },
                        });
                        var p = n(998);
                        Object.defineProperty(t, 'useReturnValue', {
                            enumerable: !0,
                            get: function () {
                                return p.useReturnValue;
                            },
                        });
                        var v = n(4395);
                        Object.defineProperty(t, 'usePopoverSwipeable', {
                            enumerable: !0,
                            get: function () {
                                return v.usePopoverSwipeable;
                            },
                        });
                        var b = n(5969);
                        Object.defineProperty(t, 'useDynamicText', {
                            enumerable: !0,
                            get: function () {
                                return b.useDynamicText;
                            },
                        });
                    },
                    8691: (e, t, n) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useCallbackRef = void 0);
                        let r = n(810);
                        t.useCallbackRef = function (e) {
                            let t = (0, r.useRef)({
                                stableFn: function () {
                                    for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                                    return t.current.callback(...n);
                                },
                                callback: e,
                            });
                            return (
                                (0, r.useInsertionEffect)(() => {
                                    t.current.callback = e;
                                }),
                                t.current.stableFn
                            );
                        };
                    },
                    1381: (e, t, n) => {
                        var r;
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useComponentSwipeable = t.SwipeablePlacement = void 0);
                        let o = n(4490),
                            i = n(8691);
                        !(function (e) {
                            (e.TOP = 'top'), (e.BOTTOM = 'bottom'), (e.RIGHT = 'right'), (e.LEFT = 'left');
                        })(r || (t.SwipeablePlacement = r = {}));
                        let a = (e) => {
                                let { ref: t, deltaY: n, deltaX: o, placement: i } = e;
                                requestAnimationFrame(() => {
                                    t.current &&
                                        ((t.current.style.willChange = 'transform'),
                                        (t.current.style.transform =
                                            i === r.TOP || i === r.BOTTOM ? 'translateY('.concat(n || 0, 'px)') : 'translateX('.concat(o || 0, 'px)')));
                                });
                            },
                            s = (e) => {
                                requestAnimationFrame(() => {
                                    e.current && ((e.current.style.transition = 'none'), (e.current.style.willChange = ''), (e.current.style.transform = ''));
                                });
                            };
                        t.useComponentSwipeable = (e) => {
                            let { ref: t, swipeableProps: n = {}, onClose: l, disableSwipe: c, placement: u, threshold: d } = e,
                                f = (0, i.useCallbackRef)(() => {
                                    l && (s(t), l());
                                }),
                                p = (0, i.useCallbackRef)((e) => {
                                    c ||
                                        ((e) => {
                                            let { ref: t, deltaY: n, deltaX: o, placement: i } = e;
                                            switch (i) {
                                                case r.TOP:
                                                    n <= 0 && a({ ref: t, deltaY: n, deltaX: o, placement: i });
                                                    break;
                                                case r.RIGHT:
                                                    o >= 0 && a({ ref: t, deltaY: n, deltaX: o, placement: i });
                                                    break;
                                                case r.LEFT:
                                                    o <= 0 && a({ ref: t, deltaY: n, deltaX: o, placement: i });
                                                    break;
                                                default:
                                                    n >= 0 && a({ ref: t, deltaY: n, deltaX: o, placement: i });
                                            }
                                        })({ ref: t, deltaY: e.deltaY, deltaX: e.deltaX, placement: u });
                                }),
                                v = (0, i.useCallbackRef)((e) => {
                                    !c &&
                                        (((e) => {
                                            let { ref: t, deltaY: n, deltaX: o, placement: i, threshold: a = 25 } = e;
                                            if (!t.current) return !1;
                                            let s = (a / 100) * (i === r.TOP || i === r.BOTTOM ? t.current.offsetHeight : t.current.offsetWidth);
                                            switch (i) {
                                                case r.TOP:
                                                    return n < 0 && Math.abs(n) >= s;
                                                case r.RIGHT:
                                                    return o > 0 && o >= s;
                                                case r.LEFT:
                                                    return o < 0 && Math.abs(o) >= s;
                                                default:
                                                    return n > 0 && n >= s;
                                            }
                                        })({ ref: t, deltaY: e.deltaY, deltaX: e.deltaX, placement: u, threshold: d })
                                            ? l && (s(t), l())
                                            : s(t));
                                });
                            return { handlers: (0, o.useSwipeable)({ onSwiped: v, onSwiping: p, trackMouse: !0, trackTouch: !0, ...n }), onCloseCallback: f };
                        };
                    },
                    6699: (e, t, n) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useDebouncedToggle = void 0);
                        let r = n(352),
                            o = n(810);
                        t.useDebouncedToggle = (e) => {
                            let { delay: t, initialState: n, throttleTimeout: i } = e,
                                a = (0, o.useRef)(null),
                                [s, l] = (0, o.useState)(!!n),
                                c = (0, o.useMemo)(
                                    () =>
                                        (0, r.throttle)(() => {
                                            l(!n),
                                                a.current && window.clearTimeout(a.current),
                                                (a.current = window.setTimeout(() => {
                                                    l(!!n);
                                                }, t));
                                        }, i),
                                    [t, n, i],
                                ),
                                u = (0, o.useCallback)(() => {
                                    l(!!n), a.current && window.clearTimeout(a.current);
                                }, [n]);
                            return (
                                (0, o.useEffect)(
                                    () => () => {
                                        a.current && window.clearTimeout(a.current);
                                    },
                                    [],
                                ),
                                { state: s, handleDebouncedToggle: c, reset: u }
                            );
                        };
                    },
                    5969: (e, t, n) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useDynamicText = t.findOptimalFontSize = void 0);
                        let r = n(810),
                            o = (e) => {
                                (e.style.wordBreak = 'keep-all'),
                                    (e.style.overflowWrap = 'normal'),
                                    (e.style.maxHeight = 'none'),
                                    (e.style.height = 'auto'),
                                    (e.style.overflow = 'visible'),
                                    Array.from(e.children).forEach((e) => {
                                        e instanceof HTMLElement && o(e);
                                    });
                            };
                        (t.findOptimalFontSize = (e) => {
                            let { container: t, containerWidth: n, containerHeight: r, minFontSize: i, maxFontSize: a, lineHeight: s, maxLines: l } = e,
                                c = ((e, t, n) => {
                                    let r = e.cloneNode(!0);
                                    return (
                                        (r.style.cssText =
                                            '\n        position: absolute !important;\n        visibility: hidden !important;\n        pointer-events: none !important;\n        width: '.concat(
                                                t,
                                                'px !important;\n    ',
                                            )),
                                        o(r),
                                        r.style.setProperty('--dynamic-line-height', String(n)),
                                        document.body.appendChild(r),
                                        r
                                    );
                                })(t, n, s);
                            try {
                                let e = i,
                                    t = a,
                                    o = i;
                                for (; e <= t; ) {
                                    let i = Math.floor((e + t) / 2);
                                    c.style.setProperty('--dynamic-font-size', ''.concat(i, 'px'));
                                    let a = 'number' == typeof l ? c.scrollHeight <= Math.min(l * i * s, r) : c.scrollHeight <= r,
                                        u = c.scrollWidth <= n + 1;
                                    a && u ? ((o = i), (e = i + 1)) : (t = i - 1);
                                }
                                return o - 1;
                            } finally {
                                c.remove();
                            }
                        }),
                            (t.useDynamicText = (e, n, o) => {
                                let { minFontSize: i, maxFontSize: a, lineHeight: s, maxLines: l, fallbackMaxLines: c } = n;
                                (0, r.useLayoutEffect)(() => {
                                    if (null === e) return;
                                    e.style.setProperty('--dynamic-line-height', String(s));
                                    let n = () => {
                                            let { width: n, height: r } = e.getBoundingClientRect(),
                                                u = e.childNodes.length > 0;
                                            if (0 === n || 0 === r || !u) return;
                                            let { maxLines: d, fontSize: f } = ((e) => {
                                                let { fallbackMaxLines: n, maxLines: r, minFontSize: o } = e,
                                                    i = (0, t.findOptimalFontSize)({ ...e, maxLines: r });
                                                return void 0 === n || i >= o
                                                    ? { maxLines: r, fontSize: i }
                                                    : { maxLines: n, fontSize: (0, t.findOptimalFontSize)({ ...e, maxLines: n }) };
                                            })({
                                                container: e,
                                                containerWidth: n,
                                                containerHeight: r,
                                                minFontSize: i,
                                                maxFontSize: a,
                                                lineHeight: s,
                                                maxLines: l,
                                                fallbackMaxLines: c,
                                            });
                                            null == o || o(d), e.style.setProperty('--dynamic-font-size', ''.concat(f, 'px'));
                                        },
                                        r = new ResizeObserver(n),
                                        u = new MutationObserver(n);
                                    return (
                                        r.observe(e),
                                        u.observe(e, { childList: !0, characterData: !0, subtree: !0 }),
                                        document.fonts.ready.then(n),
                                        n(),
                                        () => {
                                            r.disconnect(), u.disconnect();
                                        }
                                    );
                                }, [e, o, c, s, a, l, i]);
                            });
                    },
                    2101: (e, t, n) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useElementOffsetY = void 0);
                        let r = n(810),
                            o = n(2067),
                            i = n(2767);
                        t.useElementOffsetY = (e) => {
                            let [t, n] = (0, i.useForceUpdateRef)(),
                                [a, s] = (0, r.useState)(),
                                l = (0, r.useCallback)(() => {
                                    let e = null == t ? void 0 : t.getBoundingClientRect();
                                    e && s(e.y);
                                }, [t]);
                            return (0, r.useLayoutEffect)(l), (0, o.useScroll)({ onScroll: l, elementRef: e }), { forceUpdateRefCallback: n, offsetY: a };
                        };
                    },
                    2767: (e, t, n) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useForceUpdateRef = void 0);
                        let r = n(810);
                        t.useForceUpdateRef = () => {
                            let [e, t] = (0, r.useState)(null);
                            return [
                                e,
                                (0, r.useCallback)((e) => {
                                    t((t) => (t !== e ? e : t));
                                }, []),
                            ];
                        };
                    },
                    245: (e, t, n) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useForwardRef = void 0);
                        let r = n(810);
                        t.useForwardRef = function (e, t) {
                            let n = (0, r.useRef)(t);
                            return (
                                (0, r.useEffect)(() => {
                                    e && ('function' == typeof e ? e(n.current) : (e.current = n.current));
                                }, [e]),
                                n
                            );
                        };
                    },
                    5663: (e, t, n) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.useIntersectionObserver = t.createIntersectionObserver = t.getElementNameByDataAttribute = t.isInViewportNow = t.defaultOptions = void 0);
                        let r = n(810),
                            { innerWidth: o = 0, innerHeight: i = 0 } = window;
                        function a(e) {
                            let { top: t, right: n, bottom: r, left: a } = e.getBoundingClientRect();
                            return ((t >= 0 && t <= i) || (r >= 0 && r <= i)) && ((a >= 0 && a <= o) || (n >= 0 && n <= o));
                        }
                        function s(e) {
                            var t, n;
                            let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'data-intersection-property-id';
                            return null != (n = null == e || null == (t = e.getAttribute) ? void 0 : t.call(e, r)) ? n : e.attributes[0];
                        }
                        function l(e, t) {
                            let n = new IntersectionObserver((t) => {
                                t.forEach((t) => {
                                    e(t, n);
                                });
                            }, t);
                            return n;
                        }
                        (t.defaultOptions = { threshold: 0, preflightCheck: !0 }),
                            (t.isInViewportNow = a),
                            (t.getElementNameByDataAttribute = s),
                            (t.createIntersectionObserver = l),
                            (t.useIntersectionObserver = function (e, n, o) {
                                let [{ freezeOnceVisible: i, preflightCheck: c, ...u }, d = !1] =
                                        'boolean' == typeof n || void 0 === n ? [t.defaultOptions, n] : [{ ...t.defaultOptions, ...n }, o],
                                    [f, p] = (0, r.useState)({}),
                                    v = (0, r.useRef)(new Set()),
                                    b = (0, r.useMemo)(
                                        () =>
                                            d
                                                ? null
                                                : l((e) => {
                                                      let t = s(e.target);
                                                      if (t && b) {
                                                          if (v.current.has(t)) return;
                                                          p((n) => ({ ...n, [t]: { isIntersecting: e.isIntersecting } })),
                                                              i && e.isIntersecting && (v.current.add(t), b.unobserve(e.target));
                                                      }
                                                  }, u),
                                        [d],
                                    );
                                return (
                                    (0, r.useLayoutEffect)(
                                        () => (
                                            b &&
                                                !d &&
                                                e.forEach((e) => {
                                                    if (e.current) {
                                                        let t = !1;
                                                        if (c && (t = a(e.current))) {
                                                            let t = s(e.current);
                                                            p((e) => ({ ...e, [t]: { isIntersecting: !0 } }));
                                                        }
                                                        t || b.observe(e.current);
                                                    }
                                                }),
                                            () => {
                                                b && b.disconnect();
                                            }
                                        ),
                                        [d, b, e.length],
                                    ),
                                    f
                                );
                            });
                    },
                    9019: (e, t, n) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useIsomorphicEffect = void 0);
                        let r = n(810);
                        t.useIsomorphicEffect = 'undefined' != typeof document ? r.useLayoutEffect : r.useEffect;
                    },
                    5188: (e, t, n) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useKeyboardNavigation = void 0);
                        let r = n(810);
                        function o(e, t) {
                            return e.current ? Array.from(t ? e.current.querySelectorAll(t) : e.current.children) : [];
                        }
                        t.useKeyboardNavigation = function (e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                { navigationItemsSelector: n, activeAttributeName: i = 'aria-selected' } = t,
                                a = (0, r.useCallback)(
                                    (t) => {
                                        let r = o(e, n);
                                        if (!r.length) return;
                                        let i = t.target,
                                            a = r.indexOf(i);
                                        if (-1 === a) return;
                                        let [s] = r,
                                            l = r.at(-1),
                                            c = null;
                                        switch (t.key) {
                                            case 'ArrowLeft':
                                            case 'ArrowUp':
                                                c = r[a - 1] || l;
                                                break;
                                            case 'ArrowRight':
                                            case 'ArrowDown':
                                                c = r[a + 1] || s;
                                                break;
                                            case 'Home':
                                                c = s;
                                                break;
                                            case 'End':
                                                c = l;
                                        }
                                        null !== c && (c.focus(), t.preventDefault());
                                    },
                                    [n, e],
                                );
                            (0, r.useEffect)(() => {
                                let t = e.current;
                                return null == t || t.addEventListener('keydown', a), () => (null == t ? void 0 : t.removeEventListener('keydown', a));
                            }, [e, a]),
                                (0, r.useEffect)(() => {
                                    o(e, n).forEach((e) => {
                                        e.hasAttribute(i) && ('true' === e.getAttribute(i) ? (e.tabIndex = 0) : (e.tabIndex = -1));
                                    });
                                });
                        };
                    },
                    4395: (e, t, n) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.usePopoverSwipeable = void 0);
                        let r = n(810),
                            o = n(1381);
                        t.usePopoverSwipeable = (e) => {
                            let { ref: t, swipeableProps: n = {}, onClose: i, disableSwipe: a, placement: s, threshold: l } = e,
                                c = (0, r.useMemo)(() => {
                                    switch (s) {
                                        case 'top':
                                        case 'top-end':
                                        case 'top-start':
                                            return o.SwipeablePlacement.TOP;
                                        case 'right':
                                        case 'right-end':
                                        case 'right-start':
                                            return o.SwipeablePlacement.RIGHT;
                                        case 'left':
                                        case 'left-end':
                                        case 'left-start':
                                            return o.SwipeablePlacement.LEFT;
                                        default:
                                            return o.SwipeablePlacement.BOTTOM;
                                    }
                                }, [s]);
                            return (0, o.useComponentSwipeable)({ ref: t, swipeableProps: n, onClose: i, disableSwipe: a, placement: c, threshold: l });
                        };
                    },
                    2947: (e, t, n) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useResize = void 0);
                        let r = n(810),
                            o = n(361);
                        t.useResize = (e, t) => {
                            (0, r.useEffect)(() => {
                                let n = (0, o.getElementFromRefOrElement)(t);
                                if (null === n) return;
                                let r = null != n ? n : document.documentElement,
                                    i = new ResizeObserver(e);
                                return i.observe(r), () => i.disconnect();
                            }, [t, e]);
                        };
                    },
                    998: (e, t) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useReturnValue = void 0), (t.useReturnValue = (e) => e());
                    },
                    2067: (e, t, n) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useScroll = void 0);
                        let r = n(810),
                            o = n(361),
                            i = n(6699);
                        t.useScroll = (e) => {
                            let { onScroll: t, listenIsScrolling: n, elementRef: a } = e,
                                { state: s, handleDebouncedToggle: l } = (0, i.useDebouncedToggle)({ delay: 1e3, throttleTimeout: 100 }),
                                c = (0, r.useCallback)(() => {
                                    n && l(), null == t || t();
                                }, [n, l, t]);
                            return (
                                (0, r.useEffect)(() => {
                                    let e = (0, o.getElementFromRefOrElement)(a);
                                    if (null === e) return;
                                    let t = null != e ? e : window,
                                        n = { capture: !0, passive: !0 };
                                    return t.addEventListener('scroll', c, n), () => t.removeEventListener('scroll', c, n);
                                }, [a, c]),
                                s
                            );
                        };
                    },
                    4601: (e, t, n) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useToggle = void 0);
                        let r = n(810);
                        t.useToggle = (e) => {
                            let [t, n] = (0, r.useState)(e);
                            (0, r.useEffect)(() => {
                                n(e);
                            }, [e]);
                            let o = (0, r.useCallback)(() => {
                                    n((e) => !e);
                                }, []),
                                i = (0, r.useCallback)(() => {
                                    n(!0);
                                }, []),
                                a = (0, r.useCallback)(() => {
                                    n(!1);
                                }, []);
                            return { state: t, toggle: o, setState: n, toggleTrue: i, toggleFalse: a };
                        };
                    },
                    361: (e, t) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.getElementFromRefOrElement = void 0),
                            (t.getElementFromRefOrElement = (e) => {
                                if (void 0 !== e) {
                                    if (null === e || e instanceof HTMLElement) return e;
                                    if (null === e.current || e.current instanceof HTMLElement) return e.current;
                                }
                            });
                    },
                    9430: function (e, t, n) {
                        var r =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Popover = void 0);
                        let o = n(4377),
                            i = n(810),
                            a = n(1964),
                            s = n(5881),
                            l = n(6544),
                            c = n(5853),
                            u = n(7601),
                            d = n(4395),
                            f = r(n(5250));
                        t.Popover = (e) => {
                            var t;
                            let {
                                    children: n,
                                    offsetOptions: r,
                                    strategy: p,
                                    placement: v,
                                    isMobile: b,
                                    visuallyHiddenDismiss: m,
                                    positionElement: g,
                                    transform: h,
                                    initialOpen: y = !1,
                                    open: O,
                                    onOpenChange: w,
                                    disableFloatingStyles: E = !1,
                                    overlayClassName: S,
                                    style: x,
                                    returnFocus: T,
                                    isNested: P = !1,
                                    onShow: C,
                                    customRoleProps: _,
                                    portalNode: j,
                                    isEnabled: M = !0,
                                    arrowProps: R,
                                    lockScroll: A = !0,
                                    popoverContentRef: I,
                                    transitionDuration: k = 150,
                                } = e,
                                [N, L] = n,
                                [D, F] = (0, i.useState)(y),
                                [U, B] = (0, i.useState)(null),
                                z = (0, i.useRef)([]),
                                H = (0, i.useRef)([]),
                                Y = (0, a.useFloatingNodeId)(),
                                W = (0, a.useFloatingParentNodeId)(),
                                V = (0, a.useListItem)(),
                                X = (0, a.useFloatingTree)(),
                                K = (0, i.useRef)(null),
                                G = w || F,
                                q = void 0 !== O,
                                Z = (0, i.useCallback)(() => {
                                    G(!1);
                                }, [G]),
                                {
                                    refs: $,
                                    floatingStyles: Q,
                                    context: J,
                                } = (0, a.useFloating)({
                                    nodeId: Y,
                                    open: q ? O : D,
                                    onOpenChange: G,
                                    placement: v,
                                    middleware: [
                                        (0, a.offset)(r),
                                        (0, a.flip)({ crossAxis: null == v ? void 0 : v.includes('end') }),
                                        (0, a.shift)({ padding: 5 }),
                                        ...((null == R ? void 0 : R.isEnabled) ? [(0, a.arrow)({ element: K })] : []),
                                    ],
                                    whileElementsMounted: a.autoUpdate,
                                    strategy: p,
                                    transform: h,
                                }),
                                ee = (0, i.useId)(),
                                et = (0, i.useId)(),
                                en = (0, a.useListNavigation)(J, { listRef: z, activeIndex: U, nested: P, onNavigate: B }),
                                er = (0, a.useTypeahead)(J, { listRef: H, onMatch: D ? B : void 0, activeIndex: U });
                            (0, i.useEffect)(() => {
                                if (!X) return;
                                let e = () => {
                                        F(!1);
                                    },
                                    t = (e) => {
                                        e.nodeId !== Y && e.parentId === W && F(!1);
                                    };
                                return (
                                    X.events.on('click', e),
                                    X.events.on('menuopen', t),
                                    () => {
                                        X.events.off('click', e), X.events.off('menuopen', t);
                                    }
                                );
                            }, [X, Y, W, F]),
                                (0, i.useEffect)(() => {
                                    D && (null == C || C());
                                }, [C, D]),
                                (0, i.useEffect)(() => {
                                    D && X && X.events.emit('menuopen', { parentId: W, nodeId: Y });
                                }, [X, D, Y, W]),
                                (0, i.useLayoutEffect)(() => {
                                    g && $.setPositionReference(g);
                                }, [$, g]);
                            let { handlers: eo } = (0, d.usePopoverSwipeable)({
                                    ref: $.floating,
                                    onClose: Z,
                                    placement: v,
                                    disableSwipe: !b,
                                    swipeableProps: { preventScrollOnSwipe: !0 },
                                }),
                                ei = I ? [$.setFloating, I] : [$.setFloating, null == eo ? void 0 : eo.ref],
                                ea = (0, a.useMergeRefs)(ei),
                                es = (0, a.useRole)(J, _),
                                el = (0, a.useDismiss)(J, { referencePress: !0 }),
                                ec = (0, a.useClick)(J, { enabled: M, toggle: !P, ignoreMouse: P }),
                                eu = (0, a.useHover)(J, { enabled: P && M, handleClose: (0, a.safePolygon)({ blockPointerEvents: !0 }) }),
                                ed = (0, i.useCallback)((e) => {
                                    e.stopPropagation();
                                }, []),
                                { getReferenceProps: ef, getFloatingProps: ep, getItemProps: ev } = (0, a.useInteractions)([es, el, ec, eu, en, er]),
                                [eb, em] = (() => {
                                    switch (v) {
                                        case 'bottom':
                                        default:
                                            return ['translate(0, 10%)', 'translate(0, 0)'];
                                        case 'right':
                                            if ('undefined' != typeof document && 'rtl' === document.dir) return ['translateX(-5%)', 'translateX(0)'];
                                            return ['translateX(5%)', 'translateX(0)'];
                                    }
                                })(),
                                { isMounted: eg, styles: eh } = (0, a.useTransitionStyles)(J, {
                                    initial: { opacity: 0, transform: eb },
                                    open: { opacity: 1, transform: em },
                                    duration: k,
                                }),
                                ey = (0, a.useMergeRefs)([$.setReference, V.ref]),
                                eO = N && (0, i.cloneElement)(N, { ref: ey, ...ef({ onClick: null == (t = N.props) ? void 0 : t.onClick }), key: ee }),
                                ew = (0, i.useMemo)(
                                    () => (b ? { ...(E ? {} : Q), ...x, bottom: 0, left: 0, right: 0, top: 'auto', transform: 'none' } : { ...(E ? {} : Q), ...x }),
                                    [b, E, Q, x],
                                ),
                                eE = (0, i.useMemo)(() => {
                                    if (null == R ? void 0 : R.isEnabled) return (0, o.jsx)(u.PopoverArrow, { ref: K, context: J, ...R });
                                }, [R, J]),
                                eS = {
                                    ref: ea,
                                    style: { ...eh, ...ew },
                                    ...ep(),
                                    onMouseDown: I || null == eo ? void 0 : eo.onMouseDown,
                                    arrow: eE,
                                    children: (0, i.cloneElement)(L.props.children, { onClose: Z, key: et }),
                                },
                                ex = (0, i.cloneElement)(L, eS),
                                eT = (0, i.useMemo)(() => ({ activeIndex: U, setActiveIndex: B, getItemProps: ev, isOpen: D }), [U, ev, D]),
                                eP = P ? -1 : 0;
                            return (0, o.jsxs)(c.PopoverContext.Provider, {
                                value: eT,
                                children: [
                                    eO,
                                    (0, o.jsx)(a.FloatingList, {
                                        elementsRef: z,
                                        children:
                                            eg &&
                                            (0, o.jsxs)(a.FloatingPortal, {
                                                root: j,
                                                children: [
                                                    (0, o.jsx)(a.FloatingOverlay, { className: (0, s.clsx)(f.default.overlay, S), onClick: ed }),
                                                    (0, o.jsx)(a.FloatingFocusManager, {
                                                        context: J,
                                                        returnFocus: T,
                                                        initialFocus: eP,
                                                        visuallyHiddenDismiss: m,
                                                        children: (0, o.jsx)(l.RemoveScroll, { enabled: A && D, children: ex }),
                                                    }),
                                                ],
                                            }),
                                    }),
                                ],
                            });
                        };
                    },
                    7601: function (e, t, n) {
                        var r =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.PopoverArrow = t.PopoverArrowComponent = void 0);
                        let o = n(4377),
                            i = n(5881),
                            a = n(810),
                            s = n(9110),
                            l = n(4601),
                            c = r(n(310)),
                            u = { top: '', left: 'rotate(-90deg)', bottom: 'rotate(180deg)', right: 'rotate(90deg)' };
                        (t.PopoverArrowComponent = (e) => {
                            let {
                                    forwardRef: t,
                                    className: n,
                                    context: r,
                                    width: a = 14,
                                    height: d = 7,
                                    tipRadius: f = 0,
                                    customClipPath: p,
                                    staticOffset: v,
                                    style: { transform: b, ...m } = {},
                                    isEnabled: g,
                                    ...h
                                } = e,
                                {
                                    placement: y,
                                    elements: { floating: O },
                                    middlewareData: { arrow: w },
                                } = r,
                                { state: E, toggleTrue: S } = (0, l.useToggle)(!1);
                            if (
                                ((0, s.useIsomorphicEffect)(() => {
                                    O && 'rtl' === getComputedStyle(O).direction && S();
                                }, [O, S]),
                                !O || !g)
                            )
                                return null;
                            let x = (a / 2) * (-(f / 8) + 1),
                                T = ((d / 2) * f) / 4,
                                [P, C] = y.split('-'),
                                _ = v && 'end' === C ? 'right' : 'left';
                            v && E && (_ = 'end' === C ? 'left' : 'right');
                            let j = (null == w ? void 0 : w.x) ? v || w.x : '',
                                M = (null == w ? void 0 : w.y) ? v || w.y : '',
                                R = u[P],
                                A =
                                    p ||
                                    '"M0,0' +
                                        ' H'.concat(a) +
                                        ' L'.concat(a - x, ',').concat(d - T) +
                                        ' Q'
                                            .concat(a / 2, ',')
                                            .concat(d, ' ')
                                            .concat(x, ',')
                                            .concat(d - T) +
                                        ' Z"',
                                I = {
                                    [_]: j,
                                    [v && 'end' === C ? 'bottom' : 'top']: M,
                                    [P]: '100%',
                                    transform: ''.concat(R).concat(null != b ? b : ''),
                                    '--arrow-width': ''.concat(a, 'px'),
                                    '--arrow-clip-path': A,
                                    ...m,
                                };
                            return (0, o.jsx)('div', { ...h, className: (0, i.clsx)(c.default.root, n), ref: t, style: I });
                        }),
                            (t.PopoverArrow = (0, a.forwardRef)((e, n) => (0, o.jsx)(t.PopoverArrowComponent, { forwardRef: n, ...e })));
                    },
                    1688: function (e, t, n) {
                        var r =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.PopoverContent = t.PopoverContentComponent = void 0);
                        let o = n(4377),
                            i = n(810),
                            a = n(5881),
                            s = r(n(6283));
                        (t.PopoverContentComponent = (e) => {
                            let { className: t, children: n, forwardRef: r, arrow: l, ...c } = e;
                            return (0, o.jsxs)('div', { className: (0, a.clsx)(s.default.root, t), ref: r, ...c, children: [n, (0, i.isValidElement)(l) && l] });
                        }),
                            (t.PopoverContent = (0, i.forwardRef)((e, n) => (0, o.jsx)(t.PopoverContentComponent, { forwardRef: n, ...e })));
                    },
                    5853: (e, t, n) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.PopoverContext = void 0),
                            (t.PopoverContext = (0, n(810).createContext)({ getItemProps: () => ({}), activeIndex: null, setActiveIndex: () => {}, isOpen: !1 }));
                    },
                    1964: (e) => {
                        e.exports = o;
                    },
                    352: (e) => {
                        e.exports = i;
                    },
                    810: (e) => {
                        e.exports = r || (r = n.t(a, 2));
                    },
                },
                l = {};
            function c(e) {
                var t = l[e];
                if (void 0 !== t) return t.exports;
                var n = (l[e] = { exports: {} });
                return s[e].call(n.exports, n, n.exports, c), n.exports;
            }
            (c.d = (e, t) => {
                for (var n in t) c.o(t, n) && !c.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
            }),
                (c.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (c.r = (e) => {
                    'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 });
                }),
                (c.nc = void 0);
            var u = {};
            (() => {
                Object.defineProperty(u, '__esModule', { value: !0 }), (u.PopoverContent = u.Popover = void 0);
                var e = c(9430);
                Object.defineProperty(u, 'Popover', {
                    enumerable: !0,
                    get: function () {
                        return e.Popover;
                    },
                });
                var t = c(1688);
                Object.defineProperty(u, 'PopoverContent', {
                    enumerable: !0,
                    get: function () {
                        return t.PopoverContent;
                    },
                });
            })();
            var d = u.Popover,
                f = u.PopoverContent;
            u.__esModule;
        },
        51675: (e, t, n) => {
            'use strict';
            n.d(t, { Y: () => r });
            var r = (function (e) {
                return (
                    (e.ALBUM = 'album'),
                    (e.ARTIST = 'artist'),
                    (e.PLAYLIST = 'playlist'),
                    (e.TRACK = 'track'),
                    (e.CLIP = 'clip'),
                    (e.LABEL = 'label'),
                    (e.CONCERT = 'concert'),
                    e
                );
            })({});
        },
        54262: (e) => {
            e.exports = {
                root: 'PopoverWithActions_root__g2_xV',
                arrow: 'PopoverWithActions_arrow__LOVdU',
                popoverContent: 'PopoverWithActions_popoverContent__uPXzG',
                content: 'PopoverWithActions_content__FwBlK',
                closeButton: 'PopoverWithActions_closeButton__c5mHz',
                buttons: 'PopoverWithActions_buttons__kiIc3',
                button: 'PopoverWithActions_button__XDFYY',
            };
        },
        59833: (e, t, n) => {
            'use strict';
            n.d(t, { D: () => f });
            var r = n(32290),
                o = n(55178),
                i = n(39407),
                a = n(82586),
                s = n(71926),
                l = n(58534),
                c = n(39927),
                u = n.n(c);
            let d = {
                    track: (0, r.jsx)(i.A, { id: 'notifications-info.track-link' }),
                    artist: (0, r.jsx)(i.A, { id: 'notifications-info.artist-link' }),
                    album: (0, r.jsx)(i.A, { id: 'notifications-info.album-link' }),
                    playlist: (0, r.jsx)(i.A, { id: 'notifications-info.playlist-link' }),
                    clip: (0, r.jsx)(i.A, { id: 'notifications-info.clip-link' }),
                    label: (0, r.jsx)(i.A, { id: 'notifications-info.label-link' }),
                    concert: (0, r.jsx)(i.A, { id: 'notifications-info.concert-link' }),
                },
                f = (e) => {
                    let { entityVariant: t, entityTitle: n, closeToast: c } = e,
                        f = (0, o.useMemo)(
                            () =>
                                (0, r.jsxs)(s.HL, {
                                    className: u().message,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: [
                                        d[t],
                                        '\xa0',
                                        (0, r.jsx)(s.HL, { className: u().title, variant: 'span', type: 'controls', size: 'm', lineClamp: 1, children: n }),
                                        '\xa0',
                                        (0, r.jsx)(i.A, { id: 'notifications-info.copied' }),
                                    ],
                                }),
                            [t, n],
                        );
                    return (0, r.jsx)(l.$, {
                        closeToast: c,
                        cover: (0, r.jsx)(a.I, { className: u().icon, size: 'xs', variant: 'chain' }),
                        message: f,
                        coverRadius: 's',
                    });
                };
        },
        62386: (e, t, n) => {
            'use strict';
            n.d(t, { i: () => o });
            var r = n(71483);
            function o(e) {
                return (null == e ? void 0 : e.data.type) === r.K.Vibe;
            }
        },
        64605: (e, t, n) => {
            'use strict';
            var r;
            n.d(t, { _: () => r }),
                (function (e) {
                    (e.UNKNOWN = 'unknown'),
                        (e.ALBUM = 'album'),
                        (e.SINGLE = 'single'),
                        (e.COMPILATION = 'compilation'),
                        (e.PODCAST = 'podcast'),
                        (e.FAIRY_TALE = 'fairy-tale'),
                        (e.AUDIOBOOK = 'audiobook'),
                        (e.VIDEO_SINGLE = 'video-single'),
                        (e.VIDEO_ALBUM = 'video-album'),
                        (e.RADIO = 'radio'),
                        (e.ASMR = 'asmr'),
                        (e.NOISE = 'noise');
                })(r || (r = {}));
        },
        77156: (e, t, n) => {
            'use strict';
            n.d(t, { _: () => i });
            var r = n(67893),
                o = n(21263);
            let i = (e, t) => (0, r.A)((0, o.f)(e), (0, o.f)(t));
        },
        82273: (e, t, n) => {
            'use strict';
            n.d(t, { _: () => a });
            var r = n(80451),
                o = n(57594),
                i = n(19053);
            let a = (e) => {
                let { location: t } = (0, o.g)();
                return (0, r.getTldHost)(e, t.tld, i.B);
            };
        },
        89384: (e, t, n) => {
            'use strict';
            n.d(t, { b: () => c });
            var r = n(80451),
                o = n(70204),
                i = n(34186),
                a = n(82273),
                s = (function (e) {
                    return (e.SOURCE = 'utm_source'), (e.MEDIUM = 'utm_medium'), e;
                })(s || {});
            let l = { utm_source: 'desktop', utm_medium: 'copy_link' },
                c = function (e) {
                    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) n[s - 1] = arguments[s];
                    let [c] = n,
                        { params: u } = null != c ? c : {},
                        d = { ...l, ...(null == c ? void 0 : c.query) },
                        f = (0, i.N)().get(o.tw),
                        p = (0, a._)(f.oldWebHost),
                        { href: v } = (0, r.getLinkAttributesBase)(String(e), { params: u, query: d, options: { host: 'https://'.concat(p) } }),
                        { href: b } = (0, r.getLinkAttributesBase)(String(e), { params: u, query: d });
                    return { shareLink: v, pathname: b };
                };
        },
    },
]);
