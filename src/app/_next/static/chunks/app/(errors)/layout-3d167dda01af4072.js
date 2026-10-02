(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3358],
    {
        1085: (e, t, a) => {
            'use strict';
            a.d(t, { C: () => s });
            var n = a(74631),
                o = a(84e3),
                r = a(90725);
            let s = () => {
                let e = (0, o.U)();
                return (0, n.useCallback)(
                    (t) => {
                        ((e, t) => {
                            if ('code' in e && e.code === r.lo.MISSING_DATA) return;
                            let a = e && 'object' == typeof e && 'code' in e && e.code,
                                n = 'IntlProviderError';
                            (a && (n += ':'.concat(a)), t.error(n, { error: null == e ? void 0 : e.message, stack: null == e ? void 0 : e.stack }));
                        })(t, e);
                    },
                    [e],
                );
            };
        },
        6923: (e, t, a) => {
            'use strict';
            a.d(t, { W: () => n });
            let n = 'system';
        },
        6969: (e, t, a) => {
            'use strict';
            a.d(t, { K: () => n });
            var n = (function (e) {
                return (
                    (e.TAB = 'tab'),
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
        12714: (e, t, a) => {
            'use strict';
            a.d(t, { J: () => r, o: () => o });
            var n = a(49337);
            let o = { [n.S.Dark]: 'ym-dark-theme', [n.S.Light]: 'ym-light-theme' },
                r = (e) => {
                    switch (e) {
                        case n.S.Light:
                        case n.S.Dark:
                            return o[e];
                        default:
                            return '';
                    }
                };
        },
        15305: (e) => {
            e.exports = {
                root: 'ReleaseNotesModal_root__RSw1p',
                modalOverlay: 'ReleaseNotesModal_modalOverlay__GYUgU',
                modalHeader: 'ReleaseNotesModal_modalHeader__gp9SA',
                modalContent: 'ReleaseNotesModal_modalContent__g8OTu',
                scrollableContent: 'ReleaseNotesModal_scrollableContent__zGdbH',
                important: 'ReleaseNotesModal_important__u8yP4',
                notes: 'ReleaseNotesModal_notes__bVAoa',
                date: 'ReleaseNotesModal_date__s3_ux',
                description: 'ReleaseNotesModal_description__B_yLI',
                paragraph: 'ReleaseNotesModal_paragraph___laDJ',
                note: 'ReleaseNotesModal_note__S9E6z',
                version: 'ReleaseNotesModal_version__4Mcd5',
                item: 'ReleaseNotesModal_item___CYml',
                code: 'ReleaseNotesModal_code__Yv3QD',
            };
        },
        17244: (e, t, a) => {
            'use strict';
            a.d(t, { v: () => n });
            var n = (function (e) {
                return ((e.PLAY_VIBE = 'play-vibe'), e);
            })({});
        },
        17257: (e, t, a) => {
            'use strict';
            a.d(t, { DesktopInitializer: () => z });
            var n,
                o = a(25839),
                r = a(74631);
            (a(93588),
                !(function (e) {
                    ((e.LIGHT = 'light'), (e.DARK = 'dark'));
                })(n || (n = {})));
            var s = a(49337),
                i = a(84059),
                l = a(89288),
                b = a(71035),
                c = a(53712),
                d = a(17244),
                N = a(6969),
                u = a(25895),
                W = a(74310);
            let x = W.b.regexPatterns.map((e) => new RegExp(e)),
                m = [
                    [
                        /^\/home\/([^/?]+)(\?.*)?$/,
                        (e) => {
                            let t = e.match(/^\/home\/([^/?]+)(\?.*)?$/);
                            if (!t) return e;
                            let a = t[1],
                                n = t[2] || '';
                            if (!a) return e;
                            let o = new URLSearchParams(n.startsWith('?') ? n.substring(1) : '');
                            return (o.set('tab', a), '/?'.concat(o.toString()));
                        },
                    ],
                    [/^\/home$/, () => c.Z.main.href],
                    [/^\/users\/(.*)\/playlists$/, () => c.Z.collection.href],
                    [/^\/users\/(.*)\/artists$/, () => c.Z.collection.href],
                    [/^\/users\/(.*)\/albums$/, () => c.Z.collection.href],
                    [/^\/users\/(.*)\/tracks$/, () => c.Z.collection.href],
                    [/^\/users\/(.*)\/podcasts$/, () => c.Z.collection.href],
                    [/^\/users\/(.*)\/kids$/, () => c.Z.collection.href],
                    [/^\/users\/(.*)\/history$/, () => c.Z.musicHistory.href],
                    [
                        /^\/play-vibe/,
                        (e) => {
                            let t = new URLSearchParams(e.split('?')[1]);
                            t.set(N.K.DEEPLINK, d.v.PLAY_VIBE);
                            let a = ((e, t) => {
                                let a = new URLSearchParams();
                                return (
                                    e.forEach((e, t) => {
                                        a.append(t, e);
                                    }),
                                    t.forEach((e, t) => {
                                        a.append(t, e);
                                    }),
                                    a
                                );
                            })(new URLSearchParams(window.location.search), t);
                            return 'landing' === t.get(N.K.SCREEN) ? '/?'.concat(a.toString()) : ''.concat(window.location.pathname, '?').concat(a.toString());
                        },
                    ],
                ];
            var p = a(39004),
                v = a(91149),
                h = a(92942),
                C = a(82298),
                f = a(61493),
                k = a(4071),
                g = a(4254),
                S = a(51790),
                D = a(50175),
                T = a.n(D);
            let P = (e) => {
                let { version: t, formatMessage: a, closeToast: n } = e,
                    s = (0, r.useCallback)(() => {
                        var e;
                        (null == (e = window.musicDesktop) || e.app.installUpdate(), null == n || n());
                    }, [n]),
                    i = (0, r.useMemo)(
                        () =>
                            (0, o.jsxs)('div', {
                                className: T().message,
                                children: [
                                    (0, o.jsx)(g.HL, {
                                        className: T().text,
                                        variant: 'div',
                                        type: 'controls',
                                        size: 'm',
                                        children: a({ id: 'desktop.on-update-available' }, { version: t }),
                                    }),
                                    (0, o.jsx)(k.$, {
                                        className: T().button,
                                        onClick: s,
                                        variant: 'default',
                                        color: 'secondary',
                                        size: 'xs',
                                        radius: 'xxxl',
                                        'data-test-id': f.Kq.appUpdate.APP_UPDATE_NOTIFICATION_BUTTON,
                                        children: (0, o.jsx)(g.HL, { variant: 'div', type: 'controls', size: 'm', children: a({ id: 'desktop.update' }) }),
                                    }),
                                ],
                            }),
                        [a, s, t],
                    );
                return (0, o.jsx)(S.$, { className: (0, C.$)(T().root, T().important), message: i });
            };
            var y = a(36484),
                _ = a(62562),
                E = a(90208),
                L = a(27954),
                A = a(44478),
                w = a(96444),
                I = a(88204),
                R = a(21878),
                O = a(8487),
                M = a(35622),
                V = a(13833);
            a(40637);
            var F = a(1085),
                U = a(96433),
                B = a(15305),
                j = a.n(B);
            let Y = {
                    ul: (e) => (0, o.jsx)('ul', { className: j().description, children: e }),
                    li: (e) => (0, o.jsx)('li', { className: j().item, children: e }),
                    code: (e) => (0, o.jsx)('code', { className: j().code, children: e }),
                    date: (e) => (0, o.jsx)('span', { className: j().date, children: e }),
                    p: (e) => (0, o.jsx)('p', { className: j().paragraph, children: e }),
                    br: (0, o.jsx)('br', {}),
                },
                K = (0, I.PA)(() => {
                    let {
                            releaseNotes: { translations: e, sortedDescReleaseNotesKeys: t, modal: a },
                        } = (0, L.g)(),
                        { formatMessage: n } = (0, p.A)(),
                        { language: r, defaultLanguage: s } = (0, U.h)(),
                        i = (0, F.C)();
                    return (0, o.jsx)(M.a, {
                        title: n({ id: 'desktop.release-notes-modal-title' }),
                        open: a.isOpened,
                        onOpenChange: a.onOpenChange,
                        onClose: a.close,
                        size: 'fitContent',
                        placement: 'center',
                        overlayClassName: j().modalOverlay,
                        overlayColor: 'full',
                        labelClose: n({ id: 'interface-actions.close' }),
                        className: j().root,
                        headerClassName: j().modalHeader,
                        contentClassName: j().modalContent,
                        'data-test-id': f.Kq.releaseNotes.RELEASE_NOTES_MODAL,
                        closeButtonDataTestId: f.Kq.releaseNotes.RELEASE_NOTES_MODAL_CLOSE_BUTTON,
                        children: (0, o.jsx)(R.A, {
                            onError: i,
                            defaultLocale: s,
                            locale: r,
                            messages: null == e ? void 0 : e.data,
                            children: (0, o.jsx)(V.N, {
                                className: (0, C.$)(j().scrollableContent, j().important),
                                containerClassName: (0, C.$)(j().notes, j().important),
                                children:
                                    null == t
                                        ? void 0
                                        : t.map((e) =>
                                              (0, o.jsxs)(
                                                  'div',
                                                  {
                                                      className: j().note,
                                                      children: [
                                                          (0, o.jsx)(g.DZ, {
                                                              variant: 'h4',
                                                              className: (0, C.$)(j().version, j().important),
                                                              'data-test-id': f.Kq.releaseNotes.RELEASE_NOTES_VERSION,
                                                              children: ((e) => {
                                                                  var t;
                                                                  return null != (t = e.split('desktop-release-notes.')[1]) ? t : '';
                                                              })(e),
                                                          }),
                                                          (0, o.jsx)('div', {
                                                              'data-test-id': f.Kq.releaseNotes.RELEASE_NOTES_TEXT,
                                                              children: (0, o.jsx)(O.A, { id: e, values: Y }),
                                                          }),
                                                      ],
                                                  },
                                                  e,
                                              ),
                                          ),
                            }),
                        }),
                    });
                });
            var Q = a(96618);
            let z = () => {
                let { language: e } = (0, U.h)();
                {
                    let { theme: t } = (0, Q.W)(),
                        a = (0, _.N)().get(y.vg);
                    ((() => {
                        let [e, t] = (0, r.useState)(!1),
                            {
                                releaseNotes: { setTranslationsReleaseNotes: a, isReady: n, modal: o, setSortedDescReleaseNotesKeys: s },
                            } = (0, L.g)(),
                            i = (0, r.useCallback)(
                                (e) => {
                                    let { needToShowReleaseNotes: n, sortedDescReleaseNotesKeys: o, translationsReleaseNotes: r } = e;
                                    (a(r), s(o), n && t(!0));
                                },
                                [s, a],
                            );
                        ((0, r.useEffect)(() => {
                            e && n && (o.open(), t(!1));
                        }, [n, o, e]),
                            (0, r.useEffect)(() => {
                                var e;
                                return null == (e = window.musicDesktop) ? void 0 : e.app.onLoadReleaseNotes(i);
                            }, [i]));
                    })(),
                        (() => {
                            let { formatMessage: e } = (0, p.A)(),
                                { notify: t } = (0, h.l)(),
                                a = (0, r.useRef)(''),
                                n = (0, r.useCallback)(
                                    (n) => {
                                        a.current !== n && ((a.current = n), t((0, o.jsx)(P, { formatMessage: e, version: n }), { containerId: v.u.IMPORTANT }));
                                    },
                                    [e, a, t],
                                );
                            (0, r.useEffect)(() => {
                                var e;
                                return null == (e = window.musicDesktop) ? void 0 : e.app.onUpdateAvailable(n);
                            }, [n]);
                        })(),
                        (() => {
                            let { library: e, experiments: t } = (0, L.g)(),
                                a = (0, r.useCallback)(() => {
                                    (t.getData(), e.getData(), (0, A.Q)());
                                }, [t, e]);
                            (0, r.useEffect)(() => {
                                var e;
                                return null == (e = window.musicDesktop) ? void 0 : e.app.onRefreshData(a);
                            }, [a]);
                        })(),
                        (() => {
                            let e = (0, i.useRouter)(),
                                t = (0, b.c)((t) => {
                                    if (!(0, l.X_)(t)) return;
                                    for (let [a, n] of m) if (a.test(t)) return void e.push(n(t));
                                    if (
                                        !((e) => {
                                            let t = (0, l.aK)(e);
                                            return (
                                                x.some((e) => e.test(t)) ||
                                                ((e) => {
                                                    let t = (0, l.aK)(e),
                                                        a = new URLSearchParams(e.split('?')[1]);
                                                    return Object.keys(W.j).some((e) => {
                                                        let n = e
                                                            .split('/')
                                                            .filter(Boolean)
                                                            .filter((e) => e.startsWith(':'))
                                                            .map((e) => e.substring(1));
                                                        return (
                                                            0 !== n.length &&
                                                            ((e) => {
                                                                let t = e
                                                                    .split('/')
                                                                    .filter(Boolean)
                                                                    .filter((e) => !e.startsWith(':'));
                                                                return '/'.concat(t.join('/'));
                                                            })(e) === t &&
                                                            n.every((e) => a.has(e))
                                                        );
                                                    });
                                                })(e)
                                            );
                                        })(t)
                                    )
                                        return;
                                    let { href: a } = (0, u.u)(t);
                                    e.push(a);
                                });
                            (0, r.useEffect)(() => {
                                var e;
                                return null == (e = window.musicDesktop) ? void 0 : e.navigation.onOpenDeeplink(t);
                            }, [t]);
                        })(),
                        (() => {
                            let e = (0, _.N)().get(y.vg),
                                t = (0, r.useCallback)(
                                    (t) => {
                                        t && e.count(t, 'probabilityBucket');
                                    },
                                    [e],
                                );
                            (0, r.useEffect)(() => {
                                var e;
                                return null == (e = window.musicDesktop) ? void 0 : e.app.onProbabilityBucket(t);
                            }, [t]);
                        })(),
                        (() => {
                            let e = (0, _.N)().get(y.vg),
                                t = (0, r.useCallback)(() => {
                                    let t = (0, E.B)();
                                    t && e.count(t, 'installsCount');
                                }, [e]);
                            (0, r.useEffect)(() => {
                                var e;
                                return null == (e = window.musicDesktop) ? void 0 : e.app.onFirstLaunch(t);
                            }, [t]);
                        })(),
                        (() => {
                            let e = (0, w.j)(),
                                t = (0, r.useCallback)(() => {
                                    e.tracksController &&
                                        e.tracksController.refreshTracksMeta().then(() => {
                                            var e;
                                            null == (e = window.musicDesktop) || e.offline.notifyRepositoryMetaUpdated();
                                        });
                                }, [e.tracksController]);
                            (0, r.useEffect)(() => {
                                var e;
                                return null == (e = window.musicDesktop) ? void 0 : e.offline.onRefreshRepositoryMeta(t);
                            }, [t]);
                        })(),
                        (() => {
                            let e = (0, w.j)(),
                                t = (0, r.useCallback)(() => {
                                    e.tracksController &&
                                        e.tracksController.refreshTracksAvailability().then(() => {
                                            var e;
                                            null == (e = window.musicDesktop) || e.offline.notifyTracksAvailabilityUpdated();
                                        });
                                }, [e.tracksController]);
                            (0, r.useEffect)(() => {
                                var e;
                                return null == (e = window.musicDesktop) ? void 0 : e.offline.onRefreshTracksAvailability(t);
                            }, [t]);
                        })(),
                        (0, r.useEffect)(() => {
                            (((e) => {
                                var t;
                                null == (t = window.musicDesktop) || t.app.ready(e);
                            })(e),
                                document.addEventListener('auxclick', (e) => e.preventDefault()),
                                document.addEventListener('click', (e) => {
                                    (e.ctrlKey || e.metaKey || e.shiftKey) && e.preventDefault();
                                }));
                        }, [e]),
                        (0, r.useEffect)(() => {
                            let e = (0, E.B)();
                            e && a.count(e, 'appVersion');
                        }, [a]),
                        (0, r.useEffect)(() => {
                            t &&
                                (((e) => {
                                    var t;
                                    null == (t = window.musicDesktop) || t.app.setTheme(e === s.S.Light ? n.LIGHT : n.DARK);
                                })(t),
                                a.count(t, 'appTheme'));
                        }, [t]));
                }
                return (0, o.jsx)(K, {});
            };
        },
        30389: (e, t, a) => {
            'use strict';
            a.d(t, { Q: () => s });
            var n = a(71035),
                o = a(95067),
                r = a(49337);
            let s = (e) => {
                let t = (0, n.c)((t) => {
                    e.set(o.c.Theme, t, { expires: 180 });
                });
                return {
                    getThemeFromStorage: (0, n.c)(() => {
                        let a = e.get(o.c.Theme);
                        return a && Object.values(r.S).includes(a) ? (t(a), a) : null;
                    }),
                    setThemeToStorage: t,
                };
            };
        },
        31927: (e, t, a) => {
            'use strict';
            a.d(t, { W: () => n });
            let n = { Playing: 'playing', Interrupted: 'interrupted' };
        },
        34656: (e, t, a) => {
            'use strict';
            a.d(t, { Z: () => r });
            var n = a(12714),
                o = a(49337);
            let r = (e) => {
                (document.body.classList.remove(...Object.values(n.o)), e && Object.values(o.S).includes(e) && document.body.classList.add(n.o[e]));
            };
        },
        39187: (e) => {
            e.exports = {
                toastClassName: 'NotificationsInitializer_toastClassName__ZVvrd',
                notificationContainer: 'NotificationsInitializer_notificationContainer__oe1ot',
            };
        },
        44478: (e, t, a) => {
            'use strict';
            a.d(t, { Q: () => r, q: () => o });
            let n = new Set(),
                o = (e) => (
                    n.add(e),
                    () => {
                        n.delete(e);
                    }
                ),
                r = () => {
                    n.forEach((e) => {
                        e();
                    });
                };
        },
        44806: (e, t, a) => {
            'use strict';
            a.d(t, { z: () => n });
            var n = (function (e) {
                return (
                    (e.WebEditorsFeatures = 'WebEditorsFeatures'),
                    (e.WebNext = 'WebNext'),
                    (e.WebNextAuthPerf = 'WebNextAuthPerf'),
                    (e.WebNextUnauthorizedProbe = 'WebNextUnauthorizedProbe'),
                    (e.WebNextBlockFullscreen = 'WebNextBlockFullscreen'),
                    (e.WebNextDisableCollection = 'WebNextDisableCollection'),
                    (e.WebNextDisableVibe = 'WebNextDisableVibe'),
                    (e.WebNextDisableVibeSettings = 'WebNextDisableVibeSettings'),
                    (e.WebNextDisableSearch = 'WebNextDisableSearch'),
                    (e.WebNextDisableKids = 'WebNextDisableKids'),
                    (e.WebNextDisableNonMusic = 'WebNextDisableNonMusic'),
                    (e.WebNextDisablePlus = 'WebNextDisablePlus'),
                    (e.WebNextDisableSendPlaysOnTrackStart = 'WebNextDisableSendPlaysOnTrackStart'),
                    (e.WebNextPlayQueueDnD = 'WebNextPlayQueueDnD'),
                    (e.WebNextCollectionPlaylistsDnD = 'WebNextCollectionPlaylistsDnD'),
                    (e.WebNextCrackdownInterval = 'WebNextCrackdownInterval'),
                    (e.WebNextAdvertTest = 'WebNextAdvertTest'),
                    (e.WebNextConcertsCashback = 'WebNextConcertsCashback'),
                    (e.WebNextBetaLabel = 'WebNextBetaLabel'),
                    (e.WebNextRewind2024 = 'WebNextRewind2024'),
                    (e.WebNextOfflineDegradation = 'WebNextOfflineDegradation'),
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
                    (e.WebNextPaywallSecondButton = 'WebNextPaywallSecondButton'),
                    (e.WebNextPaywallDisclaimer = 'WebNextPaywallDisclaimer'),
                    (e.WebNextSearchConcerts = 'WebNextSearchConcerts'),
                    (e.WebNextConcertsDetailsPage = 'WebNextConcertsDetailsPage'),
                    (e.WebNextYaspSourceLimit = 'WebNextYaspSourceLimit'),
                    (e.WebNextWaveLikesAndShares = 'WebNextWaveLikesAndShares'),
                    (e.WebNextPlayerBarYellowButton = 'WebNextPlayerBarYellowButton'),
                    (e.WebNextNewWaveTab = 'WebNextNewWaveTab'),
                    (e.WebNextMainPlayerAnimation = 'WebNextMainPlayerAnimation'),
                    (e.WebNextNewWaveTabFeedbackForm = 'WebNextNewWaveTabFeedbackForm'),
                    (e.WebNextNdaLabelOnWaveTab = 'WebNextNdaLabelOnWaveTab'),
                    (e.WebNextPaidPerformancePaywallTopSection = 'WebNextPaidPerformancePaywallTopSection'),
                    (e.WebNextPlusOptionsSidebar = 'WebNextPlusOptionsSidebar'),
                    (e.WebNextConcertsIdentityEventType = 'WebNextConcertsIdentityEventType'),
                    (e.WebNextWaveScreenWordsInWave = 'WebNextWaveScreenWordsInWave'),
                    (e.WebNextWaveScreenWordsInWaveBigReplica = 'WebNextWaveScreenWordsInWaveBigReplica'),
                    (e.WebNextReplicsLumenUI = 'WebNextReplicsLumenUI'),
                    (e.WebNextWaveScreenWordsInWaveDirectLinks = 'WebNextWaveScreenWordsInWaveDirectLinks'),
                    (e.WebNextEnableSkipDebounce = 'WebNextEnableSkipDebounce'),
                    (e.WebNextYaspVersion13766 = 'WebNextYaspVersion13766'),
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
                    e
                );
            })({});
        },
        46925: (e, t, a) => {
            'use strict';
            a.d(t, { O: () => n });
            var n = (function (e) {
                return ((e.MACOS = 'darwin'), (e.WINDOWS = 'win32'), (e.LINUX = 'linux'), e);
            })({});
        },
        50175: (e) => {
            e.exports = {
                root: 'NotificationUpdate_root__hpSQi',
                important: 'NotificationUpdate_important___0WHj',
                text: 'NotificationUpdate_text__YylYD',
                button: 'NotificationUpdate_button__F3O16',
                message: 'NotificationUpdate_message__rLYpW',
            };
        },
        50623: (e, t, a) => {
            (Promise.resolve().then(a.bind(a, 4296)),
                Promise.resolve().then(a.t.bind(a, 74266, 23)),
                Promise.resolve().then(a.bind(a, 17257)),
                Promise.resolve().then(a.t.bind(a, 39187, 23)),
                Promise.resolve().then(a.bind(a, 37394)),
                Promise.resolve().then(a.bind(a, 33986)),
                Promise.resolve().then(a.bind(a, 83581)),
                Promise.resolve().then(a.bind(a, 80766)));
        },
        63600: (e, t, a) => {
            'use strict';
            a.d(t, { Q: () => o, V: () => r });
            var n = a(49337);
            let o = () => window.matchMedia('(prefers-color-scheme: light)'),
                r = () => {
                    let e = o();
                    return (null == e ? void 0 : e.matches) ? n.S.Light : n.S.Dark;
                };
        },
        73939: (e, t, a) => {
            'use strict';
            a.d(t, { s: () => n });
            var n = (function (e) {
                return ((e.DIVERSITY = 'diversity'), (e.MOOD_ENERGY = 'moodEnergy'), (e.LANGUAGE = 'language'), e);
            })({});
        },
        74266: () => {},
        78984: (e, t, a) => {
            'use strict';
            var n;
            (a.d(t, { e: () => n }),
                (function (e) {
                    ((e.HIGH_QUALITY = 'high_quality'), (e.BALANCED = 'balanced'), (e.EFFICIENT = 'efficient'), (e.PREVIEW = 'preview'));
                })(n || (n = {})));
        },
        80766: (e, t, a) => {
            'use strict';
            a.d(t, { TranslationsProvider: () => i });
            var n = a(25839),
                o = a(21878),
                r = a(1085),
                s = a(96433);
            let i = (e) => {
                let { children: t } = e,
                    { dictionary: a, language: i, defaultLanguage: l } = (0, s.h)(),
                    b = (0, r.C)();
                return (0, n.jsx)(o.A, { onError: b, defaultLocale: l, locale: i, messages: a, children: t });
            };
        },
        83581: (e, t, a) => {
            'use strict';
            a.d(t, { ThemeProvider: () => W });
            var n = a(25839),
                o = a(74631),
                r = a(71035),
                s = a(36484),
                i = a(62562),
                l = a(34656),
                b = a(6923),
                c = a(63600),
                d = a(30389),
                N = a(96618),
                u = a(16714);
            let W = (e) => {
                let { children: t, predefinedTheme: a } = e,
                    W = (0, i.N)().get(s.oo),
                    { getThemeFromStorage: x, setThemeToStorage: m } = (0, d.Q)(W),
                    [p, v] = (0, o.useState)(() => (null != a ? a : x())),
                    h = (0, r.c)((e) => {
                        x() || a || (m(b.W), v(e));
                    });
                ((0, o.useLayoutEffect)(() => {
                    a || (0, l.Z)(p);
                }, [p, a]),
                    ((e) => {
                        let { onSystemThemeChange: t } = e,
                            a = (0, r.c)(() => {
                                t((0, c.V)());
                            });
                        (0, o.useLayoutEffect)(() => {
                            let e = (0, c.Q)();
                            return (
                                null == e || e.addEventListener('change', a),
                                () => {
                                    null == e || e.removeEventListener('change', a);
                                }
                            );
                        }, [a]);
                    })({ onSystemThemeChange: h }),
                    (0, o.useLayoutEffect)(() => {
                        h((0, c.V)());
                    }, [h]));
                let C = (0, o.useMemo)(() => ({ theme: p, setTheme: v }), [p]);
                return (0, n.jsx)(N.D.Provider, { value: C, children: (0, n.jsx)(o.Suspense, { fallback: (0, n.jsx)(u.MainSuspenseLoader, {}), children: t }) });
            };
        },
        90208: (e, t, a) => {
            'use strict';
            function n() {
                var e;
                return null == (e = window.musicDesktop) ? void 0 : e.runtime.version;
            }
            a.d(t, { B: () => n });
        },
        94860: (e, t, a) => {
            'use strict';
            a.d(t, { h: () => n });
            let n = {
                PlayerAuthorization: 'player-authorization',
                PlayerSubscription: 'player-subscription',
                FullscreenUnauthorized: 'fullscreen-unauthorized',
                FullscreenSubscription: 'fullscreen-subscription',
            };
        },
        96433: (e, t, a) => {
            'use strict';
            a.d(t, { h: () => s });
            var n = a(74631),
                o = a(36484),
                r = a(62562);
            let s = () => {
                let e = (0, r.N)().get(o.Xc),
                    t = e.getLanguage(),
                    a = e.getDefaultLanguage(),
                    s = e.getDictionary(),
                    i = e.getAvailableLanguages(),
                    l = (0, n.useCallback)(
                        (t) => {
                            e.setLanguage(t);
                        },
                        [t],
                    );
                return (0, n.useMemo)(() => ({ dictionary: s, language: t, defaultLanguage: a, availableLanguages: i, setLanguage: l }), [t, l]);
            };
        },
        96444: (e, t, a) => {
            'use strict';
            a.d(t, { j: () => r });
            var n = a(36484),
                o = a(62562);
            function r() {
                return (0, o.N)().get(n.y$);
            }
        },
        96618: (e, t, a) => {
            'use strict';
            a.d(t, { D: () => o, W: () => r });
            var n = a(74631);
            let o = (0, n.createContext)({ theme: null, setTheme: () => {} }),
                r = () => (0, n.useContext)(o);
        },
    },
    (e) => {
        (e.O(
            0,
            [
                1733, 4834, 2877, 3349, 245, 1107, 6706, 1311, 546, 9212, 260, 4512, 9004, 4985, 7839, 9761, 1943, 4245, 2917, 8421, 6930, 3269, 4163, 3246, 4517, 6680,
                5329, 5622, 9333, 2010, 746, 4927, 4475, 5056, 7358,
            ],
            () => e((e.s = 50623)),
        ),
            (_N_E = e.O()));
    },
]);
