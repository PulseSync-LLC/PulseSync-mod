(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [621],
    {
        8299: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => a });
            var s = i(58217);
            let a = (e) => {
                let { clip: t, callback: i, disclaimerRejectHandler: a } = e;
                return (0, s.l)({ entity: t, callback: i, onReject: a, modalBehavior: { closeOnOutside: !1, closeOnEscape: !1 }, preventDefaultWhenSafe: !0 });
            };
        },
        12816: (e, t, i) => {
            'use strict';
            i.d(t, { q: () => r, x: () => a });
            var s = i(98427);
            let a = [
                    s.b.HOME,
                    s.b.SIDEBAR,
                    s.b.OWN_COLLECTION,
                    s.b.LANDING,
                    s.b.OWN_ARTISTS,
                    s.b.ARTIST,
                    s.b.ARTIST_CONCERTS,
                    s.b.NON_MUSIC,
                    s.b.PLAYLIST,
                    s.b.SEARCH,
                    s.b.VIDEO_PLAYER,
                    s.b.LABEL,
                    s.b.CONCERTS,
                    s.b.CONCERT,
                    s.b.CONCERT_LOCATION_SELECTOR,
                    s.b.ALBUM,
                    s.b.PLAYLIST,
                    s.b.SLIDES_SCREEN,
                    s.b.PROMOLANDING_ALBUM,
                    s.b.WAVE_LANDING_SCREEN,
                    s.b.FACT_SCREEN,
                    s.b.LUMEN_FACT_SCREEN,
                    s.b.LUMEN_AWAKENING_SCREEN,
                    s.b.COLLECTION_VIBE_ROOMS,
                    s.b.MULTIVIBE_SENDING_INVITATION_SCREEN,
                    s.b.MULTIVIBE_ACTION_SCREEN,
                    s.b.MULTIVIBE_UNIFIED_SCREEN,
                ],
                r = [s.b.HOME, s.b.LANDING, s.b.NON_MUSIC, s.b.OWN_COLLECTION, s.b.SEARCH, s.b.ARTIST, s.b.CONCERTS, s.b.CONCERT, s.b.ALBUM, s.b.PLAYLIST];
        },
        13946: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => V });
            var s = i(88800),
                a = i(65724),
                r = i(84961),
                l = i(53548),
                o = i(79070),
                n = i(17610),
                d = i(24548),
                c = i(29993),
                u = i(72288),
                p = i(35994);
            let _ = (e, t) => {
                let { withLink: i, separator: s } = t,
                    a = i && !e.various ? (0, p.R)(e.id) : null;
                return { artist: e, name: e.name, separator: s, link: a };
            };
            var m = i(21010),
                h = i.n(m),
                f = i(17392),
                v = i(29504),
                b = i(91292),
                C = i(2058),
                x = i(87999),
                g = i(80643),
                A = i(78940),
                S = i(55693),
                j = i(58217);
            let N = (0, r.PA)((e) => {
                    let { item: t, linkClassName: i, captionClassName: a, captionSize: r = 'm', allArtistsTitle: l, withCustomTooltip: o, hoverSettings: d } = e,
                        {
                            name: p,
                            link: _,
                            title: m,
                            ariaLabel: h,
                            tooltipText: N,
                            isTooltipEnabled: T,
                            handleNavigate: I,
                        } = ((e) => {
                            var t, i;
                            let { item: s, allArtistsTitle: a, withCustomTooltip: r } = e,
                                { formatMessage: l } = (0, C.A)(),
                                o = ((e, t) => {
                                    let { item: i, allArtistsTitle: s, withCustomTooltip: a } = e,
                                        r = s || i.name;
                                    return {
                                        ...i,
                                        title: a ? void 0 : r,
                                        ariaLabel: i.link ? t({ id: 'entity-names.artist-name' }, { artistName: i.name }) : void 0,
                                        tooltipText: r,
                                        isTooltipEnabled: !s && a,
                                    };
                                })({ item: s, allArtistsTitle: a, withCustomTooltip: r }, l),
                                {
                                    track: n,
                                    settings: { isMobile: d },
                                } = (0, u.g)(),
                                p = (0, A.Z)(null != (i = null == (t = o.link) ? void 0 : t.href) ? i : o.artist.url),
                                { sendNavigateSearchFeedback: _ } = (0, S.z)(),
                                m = (0, g.S)(),
                                h = (0, c.c)((e) => {
                                    (d && n.isOpened && n.close(), p(e));
                                }),
                                f = ((e) => {
                                    let { artist: t, callback: i } = e,
                                        { currentTrackInfo: s, fullscreenPlayer: a, fullscreenVideoPlayer: r } = (0, u.g)(),
                                        { modal: l } = s;
                                    return (0, j.l)({
                                        entity: t,
                                        callback: i,
                                        onBeforeHandle: (e) => {
                                            (null == e || e.stopPropagation(), l.isOpened && (s.reset(), l.close()), a.modal.isOpened && a.modal.close());
                                        },
                                        onAfterHandled: () => {
                                            r.modal.isOpened && (r.modal.close(), r.reset());
                                        },
                                        preventDefaultWhenSafe: !0,
                                    });
                                })({ artist: o.artist, callback: h }),
                                v = (0, c.c)((e) => {
                                    (m({ to: x.AppScreen.ArtistScreen }), null == _ || _(), f(e));
                                });
                            return { ...o, handleNavigate: v };
                        })({ item: t, allArtistsTitle: l, withCustomTooltip: o });
                    return _
                        ? (0, s.jsx)(b.N, {
                              ..._,
                              'aria-label': h,
                              className: i,
                              onClick: I,
                              title: m,
                              'data-test-id': f.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, s.jsx)(n.m_, {
                                  enabled: T,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: N,
                                  hoverSettings: d,
                                  children: (0, s.jsx)(v.HL, { variant: 'span', type: 'entity', size: r, weight: 'medium', className: a, children: p }),
                              }),
                          })
                        : (0, s.jsx)(n.m_, {
                              enabled: T,
                              offsetOptions: 4,
                              placement: 'top',
                              text: N,
                              hoverSettings: d,
                              children: (0, s.jsx)(v.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: r,
                                  weight: 'medium',
                                  className: a,
                                  title: m,
                                  'data-test-id': f.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: p,
                              }),
                          });
                }),
                T = (e) => {
                    let { group: t, linkClassName: i, captionClassName: a, captionSize: r, allArtistsTitle: o, withCustomTooltip: n, hoverSettings: d } = e;
                    return (0, s.jsxs)(s.Fragment, {
                        children: [
                            t.primary.separator,
                            (0, s.jsx)(N, {
                                item: t.primary,
                                linkClassName: i,
                                captionClassName: a,
                                captionSize: r,
                                allArtistsTitle: o,
                                withCustomTooltip: n,
                                hoverSettings: d,
                            }),
                            t.decomposed.map((e) =>
                                (0, s.jsxs)(
                                    l.Fragment,
                                    {
                                        children: [
                                            e.separator,
                                            (0, s.jsx)(N, {
                                                item: e,
                                                linkClassName: i,
                                                captionClassName: a,
                                                captionSize: r,
                                                allArtistsTitle: o,
                                                withCustomTooltip: n,
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
            var I = i(88969),
                E = i(65453);
            let y = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: i, handleOnSpoilerClick: r } = e;
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        ' ',
                        (0, s.jsx)(E.N, {
                            role: 'button',
                            href: '',
                            className: (0, a.$)(h().spoiler, i),
                            onClick: r,
                            rel: 'nofollow',
                            'data-test-id': f.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, s.jsx)(I.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var O = i(61013),
                L = i(87819),
                R = i(40634),
                k = i(48468),
                w = i.n(k);
            let P = (0, r.PA)((e) => {
                    let { label: t, artists: i, forwardRef: a } = e;
                    return (0, s.jsxs)(n.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, L.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, s.jsx)('div', { ref: a, children: t }),
                            (0, s.jsx)(n.ZI, { className: w().tooltipContent, children: i.map((e) => (0, s.jsx)(R.V, { artist: e, className: w().artistItem }, e.id)) }),
                        ],
                    });
                }),
                M = (0, l.forwardRef)((e, t) => (0, s.jsx)(P, { forwardRef: t, ...e }));
            var D = i(19934),
                U = i(70396),
                W = i.n(U);
            let B = (0, r.PA)((e) => {
                    let { label: t, artists: i } = e,
                        { formatMessage: r } = (0, C.A)();
                    return (0, s.jsx)(D.W1, {
                        isMobile: !0,
                        className: (0, a.$)(W().root, W().important),
                        label: t,
                        ariaLabel: r({ id: 'interface-actions.context-menu-artists' }),
                        children: i.map((e) => (0, s.jsx)(R.V, { artist: e }, e.id)),
                    });
                }),
                z = (0, r.PA)((e) => {
                    let { artists: t = [], label: i, labelRef: a } = e,
                        [r, n] = (0, l.useState)(!1),
                        {
                            settings: { isMobile: d },
                        } = (0, u.g)(),
                        p = (0, c.c)(() => {
                            let e = a.current;
                            e && n(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        _ = (0, o.L)(() =>
                            (0, O.A)(() => {
                                p();
                            }, 100),
                        );
                    if (
                        ((0, l.useEffect)(
                            () => (
                                window.addEventListener('resize', _),
                                p(),
                                () => {
                                    window.removeEventListener('resize', _);
                                }
                            ),
                            [_, p],
                        ),
                        (0, l.useEffect)(() => {
                            p();
                        }, [t, p]),
                        0 !== t.length)
                    )
                        return (r || d) && (!d || 1 !== t.length) ? (d ? (0, s.jsx)(B, { artists: t, label: i }) : (0, s.jsx)(M, { artists: t, label: i })) : i;
                }),
                V = (0, r.PA)((e) => {
                    let {
                            className: t,
                            lineClamp: i,
                            spoilerClassName: r,
                            linkClassName: p,
                            captionClassName: m,
                            captionSize: f,
                            variant: v = 'breakAll',
                            spoilerComponent: b,
                            ...C
                        } = e,
                        x = ((e) => {
                            var t, i, s;
                            let { separator: a, visibleArtistsCount: r, withLink: o, withComposer: n, artistIdWithoutLink: d, withContextMenu: p } = e,
                                m = null != (t = e.artists) ? t : [],
                                h = null == (i = e.withAllArtistsTitle) || i,
                                f = null == (s = e.withCustomTooltip) || s,
                                v = (0, l.useRef)(null),
                                [b, C] = (0, l.useState)(!1),
                                {
                                    settings: { isMobile: x },
                                } = (0, u.g)(),
                                g = ((!x || 1 === m.length) && p) || !p,
                                A = ((e, t) => {
                                    var i, s, a;
                                    let r = null == (i = null == t ? void 0 : t.withComposer) || i,
                                        l = null == (s = null == t ? void 0 : t.withLink) || s,
                                        o = null != (a = null == t ? void 0 : t.separator) ? a : ', ',
                                        n = e
                                            .flatMap((e) => {
                                                var t;
                                                let i = (null != (t = e.decomposed) ? t : []).map((e) => e.name);
                                                return [e.name, ...i];
                                            })
                                            .join(o),
                                        { visibleArtists: d, hiddenArtistsCount: c } = ((e, t) => {
                                            let { visibleArtistsCount: i, withComposer: s } = t;
                                            return {
                                                visibleArtists: (i ? e.slice(0, i) : e).filter((e) => s || !e.isComposer),
                                                hiddenArtistsCount: i && i < e.length ? e.length - i : 0,
                                            };
                                        })(e, { withComposer: r, visibleArtistsCount: null == t ? void 0 : t.visibleArtistsCount });
                                    return {
                                        groups: d.map((e, i) =>
                                            ((e, t) => {
                                                var i;
                                                let { withLink: s, separator: a, isFirst: r } = t;
                                                return {
                                                    primary: _(e, { withLink: s, separator: r ? void 0 : a }),
                                                    decomposed: (null != (i = e.decomposed) ? i : []).map((e) => {
                                                        let t = a ? e.separator : '';
                                                        return _(e, { withLink: s, separator: t });
                                                    }),
                                                };
                                            })(e, { withLink: l && e.id !== (null == t ? void 0 : t.artistIdWithoutLink), separator: o, isFirst: 0 === i }),
                                        ),
                                        allArtistsTitle: n,
                                        hiddenArtistsCount: c,
                                    };
                                })(m, { separator: a, visibleArtistsCount: b ? void 0 : r, withComposer: n, withLink: !!g && o, artistIdWithoutLink: d }),
                                S = h ? A.allArtistsTitle : '',
                                j = (0, c.c)((e) => {
                                    (C(!0), e.preventDefault());
                                });
                            return {
                                artists: m,
                                groups: A.groups,
                                hiddenArtistsCount: A.hiddenArtistsCount,
                                allArtistsTitle: S,
                                withCustomTooltip: f,
                                withContextMenu: p,
                                labelRef: v,
                                handleOnSpoilerClick: j,
                                isTooltipEnabled: !!S && f && !p && !x,
                                title: !S || f || p ? void 0 : S,
                            };
                        })(C),
                        g = (0, o.L)(() =>
                            x.hiddenArtistsCount <= 0
                                ? null
                                : (0, l.isValidElement)(b)
                                  ? b
                                  : (0, s.jsx)(y, { spoilerClassName: r, spoilerArtistsCount: x.hiddenArtistsCount, handleOnSpoilerClick: x.handleOnSpoilerClick }),
                        ),
                        A = (0, s.jsx)(n.m_, {
                            referenceRef: x.labelRef,
                            enabled: x.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: x.allArtistsTitle,
                            hoverSettings: d.V,
                            children: (0, s.jsxs)('div', {
                                style: i ? { WebkitLineClamp: i } : void 0,
                                className: (0, a.$)(h().root, h()['root_variant_'.concat(v)], { [h().root_clamp]: i && i > 0, [h().ellipsis]: !i }, t),
                                title: x.title,
                                children: [
                                    x.groups.map((e) =>
                                        (0, s.jsx)(
                                            T,
                                            {
                                                group: e,
                                                linkClassName: p,
                                                captionClassName: m,
                                                captionSize: f,
                                                allArtistsTitle: x.allArtistsTitle,
                                                withCustomTooltip: x.withCustomTooltip,
                                                hoverSettings: d.V,
                                            },
                                            e.primary.artist.key,
                                        ),
                                    ),
                                    g,
                                ],
                            }),
                        });
                    return x.withContextMenu ? (0, s.jsx)(z, { labelRef: x.labelRef, artists: x.artists, label: A }) : A;
                });
        },
        14567: (e, t) => {
            (e.exports = function (e, t, s, a) {
                return JSON.stringify(e, i(t, a), s);
            }).getSerialize = i;
            function i(e, t) {
                var i = [],
                    s = [];
                return (
                    null == t &&
                        (t = function (e, t) {
                            return i[0] === t ? '[Circular ~]' : '[Circular ~.' + s.slice(0, i.indexOf(t)).join('.') + ']';
                        }),
                    function (a, r) {
                        if (i.length > 0) {
                            var l = i.indexOf(this);
                            (~l ? i.splice(l + 1) : i.push(this), ~l ? s.splice(l, 1 / 0, a) : s.push(a), ~i.indexOf(r) && (r = t.call(this, a, r)));
                        } else i.push(r);
                        return null == e ? r : e.call(this, a, r);
                    }
                );
            }
        },
        16717: (e, t, i) => {
            'use strict';
            i.d(t, { J: () => l });
            var s = i(4370),
                a = i(34303),
                r = i(67174);
            let l = function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    { href: i } = (0, r.u)(s.Z.video.href, { query: { [a.K.IDS]: e.join(','), [a.K.ACTIVE_INDEX]: String(t) } });
                return i;
            };
        },
        17332: (e) => {
            e.exports = { explicitMark: 'ExplicitMarkIcon_explicitMark__0BPeQ' };
        },
        18610: (e, t, i) => {
            'use strict';
            i.d(t, { p: () => a });
            var s = i(53548);
            let a = () =>
                (0, s.useCallback)((e) => {
                    {
                        let t = window.history.state;
                        window.history.pushState(t, '', e);
                    }
                }, []);
        },
        20585: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => s });
            var s = (function (e) {
                return ((e.TRAILER = 'TRAILER'), (e.ADVERT = 'ADVERT'), (e.CLIP = 'CLIP'), (e.PROMO_LANDING = 'PROMO_LANDING'), e);
            })({});
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
            var s;
            (i.d(t, { Q: () => a, c: () => s }),
                (function (e) {
                    ((e[(e.ERROR = 10)] = 'ERROR'),
                        (e[(e.WARNING = 20)] = 'WARNING'),
                        (e[(e.INFO = 30)] = 'INFO'),
                        (e[(e.DEBUG = 40)] = 'DEBUG'),
                        (e[(e.TRACE = 50)] = 'TRACE'));
                })(s || (s = {})));
            let a = { [s.ERROR]: 'error', [s.WARNING]: 'warn', [s.INFO]: 'info', [s.DEBUG]: 'debug', [s.TRACE]: 'trace' };
        },
        24548: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => s });
            let s = { delay: { open: 1e3, close: 0 } };
        },
        29831: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => a });
            var s = i(48987);
            let a = (e, t) => {
                let { seconds: i, hours: a, minutes: r } = (0, s.e)(e);
                return t({ id: 'time.hours-minutes-seconds' }, { hours: a, minutes: r, seconds: i });
            };
        },
        29832: (e, t, i) => {
            'use strict';
            i.d(t, { MN: () => c, hg: () => d });
            var s,
                a = i(53548),
                r = {
                    5881: (e, t, i) => {
                        function s() {
                            for (var e, t, i = 0, s = ''; i < arguments.length;)
                                (e = arguments[i++]) &&
                                    (t = (function e(t) {
                                        var i,
                                            s,
                                            a = '';
                                        if ('string' == typeof t || 'number' == typeof t) a += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (i = 0; i < t.length; i++) t[i] && (s = e(t[i])) && (a && (a += ' '), (a += s));
                                            else for (i in t) t[i] && (a && (a += ' '), (a += i));
                                        return a;
                                    })(e)) &&
                                    (s && (s += ' '), (s += t));
                            return s;
                        }
                        (i.r(t), i.d(t, { clsx: () => s, default: () => a }));
                        let a = s;
                    },
                    8765: (e, t, i) => {
                        (i.r(t), i.d(t, { default: () => s }));
                        let s = {
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
                        (i.r(t), i.d(t, { default: () => s }));
                        let s = {
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
                        (i.r(t), i.d(t, { default: () => s }));
                        let s = { root: 'LizdJ2L0HW7JWOvPrfly' };
                    },
                    7319: (e, t, i) => {
                        (i.r(t), i.d(t, { default: () => s }));
                        let s = { root: 'eaYyesBmJL_NbkgoYR1c', focusable: 'uL1dD5rxgI4bPmfyMMe7' };
                    },
                    1246: (e, t, i) => {
                        (i.r(t), i.d(t, { default: () => s }));
                        let s = {
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
                        (i.r(t), i.d(t, { default: () => s }));
                        let s = {
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
                        (i.r(t), i.d(t, { default: () => s }));
                        let s = {
                            root: '_MWOVuZRvUQdXKTMcOPx',
                            root_clamp: 'LezmJlldtbHWqU7l1950',
                            root_clamp_oneline: 'oyQL2RSmoNbNQf3Vc6YI',
                            root_clamp_multiline: 'jMyoZB5J9iZbzJmWOrF0',
                        };
                    },
                    9097: (e, t) => {
                        var i = Symbol.for('react.transitional.element');
                        function s(e, t, s) {
                            var a = null;
                            if ((void 0 !== s && (a = '' + s), void 0 !== t.key && (a = '' + t.key), 'key' in t))
                                for (var r in ((s = {}), t)) 'key' !== r && (s[r] = t[r]);
                            else s = t;
                            return { $$typeof: i, type: e, key: a, ref: void 0 !== (t = s.ref) ? t : null, props: s };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = s), (t.jsxs = s));
                    },
                    4377: (e, t, i) => {
                        e.exports = i(9097);
                    },
                    7742: function (e, t, i) {
                        var s =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.CardControls = void 0));
                        let a = i(4377),
                            r = i(5881),
                            l = i(8532),
                            o = s(i(8765));
                        t.CardControls = (e) => {
                            let {
                                    className: t,
                                    playControl: i,
                                    likeControl: s,
                                    menuControl: n,
                                    pinControl: d,
                                    trailerControl: c,
                                    isVisible: u,
                                    radius: p = 'default',
                                    bottomContainerClassName: _,
                                    labelText: m,
                                } = e,
                                h = c || i,
                                f = n || s;
                            return (0, a.jsxs)('div', {
                                className: (0, r.clsx)(
                                    o.default.root,
                                    o.default.controls,
                                    { [o.default.controls_visible]: u },
                                    o.default['controls_radius_'.concat(p)],
                                    t,
                                ),
                                children: [
                                    (0, a.jsx)('div', { className: o.default.top, children: d }),
                                    (0, a.jsxs)('div', {
                                        className: (0, r.clsx)(o.default.bottom, _),
                                        children: [
                                            h && (0, a.jsxs)('div', { className: o.default.bottom_left, children: [c, i] }),
                                            f && (0, a.jsxs)('div', { className: o.default.bottom_right, children: [n, s] }),
                                        ],
                                    }),
                                    !!m && (0, a.jsx)(l.Label, { className: o.default.label, children: m }),
                                ],
                            });
                        };
                    },
                    7093: function (e, t, i) {
                        var s =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.EntityCard = void 0));
                        let a = i(4377),
                            r = i(810),
                            l = i(5881),
                            o = i(8903),
                            n = i(6530),
                            d = s(i(3550)),
                            c = (e) => {
                                let {
                                    forwardRef: t,
                                    view: i,
                                    className: s,
                                    textPosition: r = 'left',
                                    contentLinesCount: c = 2,
                                    title: u,
                                    description: p,
                                    explicitMarkComponent: _,
                                    chart: m,
                                    children: h,
                                    srTitle: f,
                                    wrapperClassName: v,
                                    ...b
                                } = e;
                                return (0, a.jsxs)('div', {
                                    className: (0, l.clsx)(d.default.root, s),
                                    ref: t,
                                    ...b,
                                    children: [
                                        (0, a.jsx)(n.SROnly, { children: null != f ? f : u }),
                                        (0, a.jsx)('div', { className: d.default.viewContainer, children: i }),
                                        (0, a.jsxs)('div', {
                                            className: (0, l.clsx)(d.default.wrapper, v),
                                            children: [
                                                m,
                                                (0, a.jsxs)('div', {
                                                    className: (0, l.clsx)(
                                                        d.default.content,
                                                        d.default['content_'.concat(r)],
                                                        d.default['content_linesCount_'.concat(c)],
                                                    ),
                                                    children: [
                                                        u &&
                                                            (0, a.jsxs)('div', {
                                                                className: d.default.titleContainer,
                                                                children: [
                                                                    (0, a.jsx)(o.Caption, {
                                                                        className: d.default.title,
                                                                        variant: 'div',
                                                                        type: 'entity',
                                                                        size: 's',
                                                                        weight: 'medium',
                                                                        lineClamp: 2,
                                                                        children: u,
                                                                    }),
                                                                    _,
                                                                ],
                                                            }),
                                                        p,
                                                        h,
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                });
                            };
                        t.EntityCard = (0, r.forwardRef)((e, t) => (0, a.jsx)(c, { forwardRef: t, ...e }));
                    },
                    2018: function (e, t, i) {
                        var s =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Label = void 0));
                        let a = i(4377),
                            r = i(5881),
                            l = i(8903),
                            o = s(i(4353));
                        t.Label = (e) => {
                            let { children: t, className: i, size: s = 's', ...n } = e;
                            return (0, a.jsx)(l.Caption, {
                                variant: 'div',
                                type: 'text',
                                size: s,
                                lineClamp: 1,
                                className: (0, r.clsx)(o.default.root, i),
                                ...n,
                                children: t,
                            });
                        };
                    },
                    8532: (e, t, i) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Label = void 0));
                        var s = i(2018);
                        Object.defineProperty(t, 'Label', {
                            enumerable: !0,
                            get: function () {
                                return s.Label;
                            },
                        });
                    },
                    5531: function (e, t, i) {
                        var s =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0));
                        let a = i(4377),
                            r = i(5881),
                            l = i(810),
                            o = s(i(7319));
                        t.SROnly = (e) => {
                            let { className: t, focusable: i, children: s, ...n } = e,
                                d = (0, r.clsx)(o.default.root, { [o.default.focusable]: i }, t);
                            return (0, l.isValidElement)(s)
                                ? (0, l.cloneElement)(s, { ...n, className: (0, r.clsx)(d, s.props.className) })
                                : (0, a.jsx)('span', { className: d, ...n, children: s });
                        };
                    },
                    6530: (e, t, i) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0));
                        var s = i(5531);
                        Object.defineProperty(t, 'SROnly', {
                            enumerable: !0,
                            get: function () {
                                return s.SROnly;
                            },
                        });
                    },
                    3412: function (e, t, i) {
                        var s =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Caption = t.CaptionComponent = void 0));
                        let a = i(4377),
                            r = i(5881),
                            l = i(810),
                            o = i(5987),
                            n = s(i(1246));
                        ((t.CaptionComponent = (e) => {
                            let { forwardRef: t, variant: i, type: s = 'text', size: l = 's', className: d, children: c, weight: u = 'medium', ...p } = e;
                            return (0, a.jsx)(o.Typography, {
                                variant: i,
                                ref: t,
                                className: (0, r.clsx)(n.default.root, n.default['root_'.concat(s, '_').concat(l)], n.default['root_weight_'.concat(u)], d),
                                ...p,
                                children: c,
                            });
                        }),
                            (t.Caption = (0, l.forwardRef)((e, i) => (0, a.jsx)(t.CaptionComponent, { forwardRef: i, ...e }))));
                    },
                    1641: function (e, t, i) {
                        var s =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Heading = t.HeadingComponent = void 0));
                        let a = i(4377),
                            r = i(5881),
                            l = i(810),
                            o = i(5987),
                            n = s(i(2445));
                        ((t.HeadingComponent = (e) => {
                            let { forwardRef: t, variant: i, weight: s = 'bold', size: l = 's', className: d, children: c, ...u } = e;
                            return (0, a.jsx)(o.Typography, {
                                variant: i,
                                ref: t,
                                className: (0, r.clsx)(n.default.root, n.default['root_size_'.concat(l)], n.default['root_weight_'.concat(s)], d),
                                ...u,
                                children: c,
                            });
                        }),
                            (t.Heading = (0, l.forwardRef)((e, i) => (0, a.jsx)(t.HeadingComponent, { forwardRef: i, ...e }))));
                    },
                    5987: function (e, t, i) {
                        var s =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Typography = t.TypographyComponent = void 0));
                        let a = i(4377),
                            r = i(5881),
                            l = i(810),
                            o = s(i(61));
                        function n(e) {
                            let { forwardRef: t, style: i, className: s, children: l, variant: n, lineClamp: d, ...c } = e,
                                u = d && 'string' == typeof l ? l : void 0;
                            return (0, a.jsx)(n, {
                                style: { ...i, WebkitLineClamp: d },
                                ref: t,
                                title: u,
                                className: (0, r.clsx)(
                                    o.default.root,
                                    { [o.default.root_clamp]: d && d > 0, [o.default.root_clamp_oneline]: d && 1 === d, [o.default.root_clamp_multiline]: d && d > 1 },
                                    s,
                                ),
                                ...c,
                                children: l,
                            });
                        }
                        ((t.TypographyComponent = n), (t.Typography = (0, l.forwardRef)((e, t) => (0, a.jsx)(n, { forwardRef: t, ...e }))));
                    },
                    8903: (e, t, i) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Heading = t.Caption = void 0));
                        var s = i(3412);
                        Object.defineProperty(t, 'Caption', {
                            enumerable: !0,
                            get: function () {
                                return s.Caption;
                            },
                        });
                        var a = i(1641);
                        Object.defineProperty(t, 'Heading', {
                            enumerable: !0,
                            get: function () {
                                return a.Heading;
                            },
                        });
                    },
                    810: (e) => {
                        e.exports = s || (s = i.t(a, 2));
                    },
                },
                l = {};
            function o(e) {
                var t = l[e];
                if (void 0 !== t) return t.exports;
                var i = (l[e] = { exports: {} });
                return (r[e].call(i.exports, i, i.exports, o), i.exports);
            }
            ((o.d = (e, t) => {
                for (var i in t) o.o(t, i) && !o.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
            }),
                (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (o.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var n = {};
            (() => {
                (Object.defineProperty(n, 'X$', { value: !0 }), (n.kk = n.m7 = void 0));
                var e = o(7093);
                Object.defineProperty(n, 'm7', {
                    enumerable: !0,
                    get: function () {
                        return e.EntityCard;
                    },
                });
                var t = o(7742);
                Object.defineProperty(n, 'kk', {
                    enumerable: !0,
                    get: function () {
                        return t.CardControls;
                    },
                });
            })();
            var d = n.kk,
                c = n.m7;
            n.X$;
        },
        34303: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => s });
            var s = (function (e) {
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
        35994: (e, t, i) => {
            'use strict';
            i.d(t, { R: () => a });
            var s = i(67174);
            let a = (e) => (0, s.u)('/artist/:artistId', { params: { artistId: e } });
        },
        37438: (e) => {
            e.exports = { root: 'TooltipWithTitle_root__7jLY3', text: 'TooltipWithTitle_text__ElBtq', description: 'TooltipWithTitle_description__HsGcR' };
        },
        37670: (e, t, i) => {
            'use strict';
            i.d(t, { J: () => r });
            var s = i(53548);
            i(30282);
            var a = i(58390);
            let r = (e) => {
                let t = (0, a.usePathname)(),
                    [i, r] = (0, s.useState)(!1);
                ((0, s.useEffect)(() => {
                    (window.Ya.Rum.spa.makeSpaSubPage(t), window.Ya.Rum.spa.startDataLoading(t));
                }),
                    (0, s.useEffect)(() => {
                        window.Ya.Rum.spa.getLastSpaSubPage(t) && e && !i && (window.Ya.Rum.spa.finishDataLoading(t), window.Ya.Rum.spa.startDataRendering(t), r(!0));
                    }, [e, i, t]));
            };
        },
        38501: (e, t, i) => {
            'use strict';
            i.d(t, { d: () => a });
            var s = i(72288);
            let a = () => {
                let {
                    settings: { isMobile: e },
                } = (0, s.g)();
                return !e;
            };
        },
        40634: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => C });
            var s = i(88800),
                a = i(65724),
                r = i(84961),
                l = i(53548),
                o = i(87999),
                n = i(80643),
                d = i(17392),
                c = i(29993),
                u = i(90688),
                p = i(19934),
                _ = i(7555),
                m = i(29504),
                h = i(78940),
                f = i(72288),
                v = i(80932),
                b = i.n(v);
            let C = (0, r.PA)((e) => {
                let { artist: t, className: i } = e,
                    { fullscreenPlayer: r } = (0, f.g)(),
                    v = (0, h.Z)(t.url),
                    x = (0, n.S)(),
                    g = (0, l.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, s.jsx)(C, { artist: t, className: i }, t.id)), e), []))
                        );
                    }, [t, i]),
                    A = (0, c.c)((e) => {
                        (r.modal.isOpened && r.modal.close(), x({ to: o.AppScreen.ArtistScreen }), v(e));
                    });
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsxs)(p.Dr, {
                            className: (0, a.$)(b().root, i),
                            onClick: A,
                            'data-test-id': d.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, s.jsx)(_.t, {
                                    radius: 'round',
                                    className: b().cover,
                                    children: (0, s.jsx)(u._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: b().image }),
                                }),
                                (0, s.jsx)(m.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        g,
                    ],
                });
            });
        },
        44084: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => r });
            var s = i(23877),
                a = i(74021);
            class r extends a.q {
                disableLogToConsole;
                constructor(e) {
                    (super(e), (this.disableLogToConsole = e.disableLogToConsole));
                }
                info(e, t) {
                    this.maxLogLevel >= s.c.INFO && this.logToConsole(s.c.INFO, e, t);
                }
                debug(e, t) {
                    this.maxLogLevel >= s.c.DEBUG && this.logToConsole(s.c.DEBUG, e, t);
                }
                trace(e, t) {
                    this.maxLogLevel >= s.c.TRACE && this.logToConsole(s.c.TRACE, e, t);
                }
                warn(e, t) {
                    (this.maxLogLevel >= s.c.WARNING && this.logToConsole(s.c.WARNING, e, t), this.sendToErrorBooster(s.c.WARNING, e, t));
                }
                error(e, t) {
                    (this.maxLogLevel >= s.c.ERROR && this.logToConsole(s.c.ERROR, e, t), this.sendToErrorBooster(s.c.ERROR, e, t));
                }
                log(e, t) {
                    this.logToConsole(s.c.INFO, e, t);
                }
                logToConsole(e, t, i) {
                    if (this.disableLogToConsole) return;
                    let a = s.Q[e];
                    console[a](...this.formatMessage(e, t, i));
                }
                sendToErrorBooster(e, t, i) {
                    window.Ya.Rum.logError({ message: t, level: e, additional: { data: i ? this.obfuscateData({ ...this.additionalData, ...i }) : {} } });
                }
            }
        },
        44318: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => o });
            var s = i(29993),
                a = i(72288),
                r = i(18610),
                l = i(16717);
            let o = () => {
                let { fullscreenVideoPlayer: e } = (0, a.g)(),
                    t = (0, r.p)();
                return (0, s.c)(function (i) {
                    let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    (e.setIds(i), e.setClipIndex(s), t((0, l.J)(i, s)), e.modal.open());
                });
            };
        },
        44599: (e, t, i) => {
            'use strict';
            i.d(t, { _: () => u });
            var s = i(87999),
                a = i(38982),
                r = i(84423),
                l = i(89846),
                o = i(64543),
                n = i(63582),
                d = i(29993),
                c = i(12816);
            let u = (0, n.n)({ event: 'LandingBlock.Navigated', kind: 'hook', requiredScopes: ['screen', 'block', 'object'] }, (e) => {
                let t = (0, r.s)(),
                    { hash: i } = (0, l.g)(),
                    { screen: n, block: u, object: p, tab: _ } = (0, o.j)();
                return (0, d.c)(() => {
                    let r = null == n ? void 0 : n.pageIdForFrom;
                    if (!t || !n || !u || !p || void 0 === p.objectId || !r || !c.x.includes(r) || void 0 === i || !e) return;
                    let l = n.pageId;
                    if (void 0 === l) return;
                    let o = {
                        hash: i,
                        pageId: r,
                        entityType: u.blockType,
                        entityId: u.blockId,
                        entityPosX: u.blockPosX,
                        entityPosY: u.blockPosY,
                        objectId: p.objectId,
                        objectType: p.objectType,
                        objectPosX: p.objectPosX,
                        objectPosY: p.objectPosY,
                        objectsCount: u.objectsCount,
                        from: l,
                        to: s.AppScreen.VideoScreen,
                    };
                    (c.q.some((e) => e === r) &&
                        ((o.tabId = null == _ ? void 0 : _.tabId),
                        (o.tabPos = null == _ ? void 0 : _.tabPos),
                        (o.isTabSelectedByDefault = null == _ ? void 0 : _.isTabSelectedByDefault)),
                        n.skeletonId && (o.skeletonId = n.skeletonId),
                        n.mainObjectType && (o.mainObjectType = n.mainObjectType),
                        n.mainObjectId && (o.mainObjectId = n.mainObjectId),
                        Object.values(o).some((e) => void 0 === e) || (0, a.QS)(t.evgenInstance, o));
                });
            });
        },
        48082: (e) => {
            e.exports = { root: 'TextShimmer_root__qqWug', text: 'TextShimmer_text__z8oN9' };
        },
        48468: (e) => {
            e.exports = {
                tooltipContent: 'SeparatedArtistsWithContextMenuDesktop_tooltipContent___PtDD',
                artistItem: 'SeparatedArtistsWithContextMenuDesktop_artistItem__Ggo_W',
            };
        },
        48987: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => s });
            let s = (e) => {
                let t = Math.round(e);
                return { hours: Math.floor(t / 3600), minutes: Math.floor((t % 3600) / 60), seconds: t % 60 };
            };
        },
        52949: (e) => {
            e.exports = {
                root: 'ArtistClipsPage_root__3efVS',
                scrollContainer: 'ArtistClipsPage_scrollContainer___2pJZ',
                important: 'ArtistClipsPage_important__UBPcN',
                footer: 'ArtistClipsPage_footer__mhu_A',
                item: 'ArtistClipsPage_item__fonRp',
                content: 'ArtistClipsPage_content__GFs51',
            };
        },
        54965: (e, t, i) => {
            'use strict';
            i.d(t, { E: () => a });
            let s = (e, t) => (t > 0 ? Math.floor(e / t) : 0),
                a = (e, t) => {
                    let i = s(e, 3600),
                        a = s(e - 3600 * i, 60),
                        r = e - 3600 * i - 60 * a,
                        l = s(t || e, 3600) > 0,
                        o = [a, r];
                    return (l && o.unshift(i), o.map((e) => String(e).padStart(2, '0')).join(':'));
                };
        },
        64310: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => n });
            var s = i(88800),
                a = i(65724),
                r = i(19994),
                l = i(48082),
                o = i.n(l);
            let n = (e) => {
                let { className: t, textClassName: i, isActive: l } = e;
                return (0, s.jsx)('div', { className: (0, a.$)(o().root, t), children: (0, s.jsx)(r.W, { className: (0, a.$)(o().text, i), isActive: l, radius: 's' }) });
            };
        },
        64420: (e, t, i) => {
            'use strict';
            (i.r(t), i.d(t, { default: () => K }));
            var s = i(88800),
                a = i(58390),
                r = i(65724),
                l = i(84961),
                o = i(53548),
                n = i(2058),
                d = i(87999),
                c = i(76903),
                u = i(17392),
                p = i(29993),
                _ = i(29504),
                m = i(32596),
                h = i(96237),
                f = i(69323),
                v = i(77605),
                b = i(69630),
                C = i(91959),
                x = i(38501),
                g = i(98427),
                A = i(46422),
                S = i(44230),
                j = i(37670),
                N = i(72288),
                T = i(54320),
                I = i(19998),
                E = i(86790),
                y = i(60266),
                O = i(93317),
                L = i(79418),
                R = i(81685),
                k = i(30144),
                w = i(324),
                P = i(53073),
                M = i(83418),
                D = i(46511),
                U = i(57297),
                W = i(2218),
                B = i(77863),
                z = i(45383),
                V = i(98774);
            async function F(e, t) {
                var i, s, a;
                if (!e) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let r = await (0, D.W)(t.locale),
                    l = r({ id: 'metadata.artist-clips-title' }, { artistName: e.artist.name }),
                    o = r({ id: 'metadata.artist-clips-description' }, { artistName: e.artist.name });
                return {
                    robots: (0, V.G)(e.artist),
                    title: l,
                    description: o,
                    openGraph: (0, U.i)({
                        ogTitle: l,
                        ogDescription: o,
                        ogType: 'website',
                        fullUrl: null != (i = t.fullUrl) ? i : '',
                        locale: t.locale,
                        customImage: (0, M.v)({ host: t.host }),
                        siteName: r({ id: 'metadata.yandex-music' }),
                    }),
                    twitter: (0, W.H)({ cardType: B.W.SUMMARY_LARGE_IMAGE, title: l, description: o }),
                    facebook: (0, P.k)(),
                    appLinks: (0, w.X)({
                        additional: { ...t, url: null != (s = t.url) ? s : '', fullUrl: null != (a = t.fullUrl) ? a : '', host: t.host },
                        appName: r({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, z.S)('/artist/:artistId/clips', t.tld, { params: { artistId: e.artist.id } }),
                };
            }
            var H = i(27342),
                G = i(63512),
                Y = i(52949),
                J = i.n(Y);
            let X = (0, l.PA)((e) => {
                var t, i;
                let { artistId: l, preloadedArtist: w, preloadedClips: P } = e,
                    {
                        artist: M,
                        disclaimerModalState: D,
                        settings: { isMobile: U },
                    } = (0, N.g)(),
                    { formatMessage: W } = (0, n.A)(),
                    { contentScrollRef: B, setContentScrollRef: z } = (0, S.g)(),
                    V = (0, A.W)(),
                    Y = (0, x.d)();
                (0, C.S)({ artist: null == (t = M.meta) ? void 0 : t.artist, shouldHistoryBack: !0 });
                let X = (0, p.c)((e) => {
                    M.clipsSubpage.getData({ artistId: l, page: e, pageSize: h.EV });
                });
                ((0, T.X)(M.clipsSubpage.pagesLoader, X),
                    (0, G.G)(l),
                    (0, H._)(M, l),
                    (0, o.useEffect)(
                        () => () => {
                            M.clipsSubpage.reset();
                        },
                        [M, M.clipsSubpage],
                    ),
                    (0, j.J)(M.clipsSubpage.isResolved),
                    ((e) => {
                        var t;
                        let { fullscreenVideoPlayer: i } = (0, N.g)(),
                            s = null == e || null == (t = e.meta) ? void 0 : t.artist,
                            a = null == e ? void 0 : e.infoLoadingState.isLoading,
                            r = null == e ? void 0 : e.infoLoadingState.isRejected,
                            l = (0, o.useCallback)((e) => (r ? {} : s && !a ? F({ artist: (0, R.E)(s) }, e) : void 0), [s, a, r]);
                        (0, k.C)(i.modal.isOpened ? null : l);
                    })(M));
                let q = M.clipsSubpage.isShimmerVisible ? 20 : M.clipsSubpage.items.length,
                    K = (0, o.useMemo)(() => ({ Footer: () => (0, s.jsx)(y.A, { children: (0, s.jsx)(E.w, { className: J().footer }) }) }), []),
                    Z = (0, o.useMemo)(() => W({ id: 'page.artist-clips-header' }, { artistName: M.commonSubPage.artistName }), [M.commonSubPage.artistName, W]),
                    Q = [];
                return (M.clipsSubpage.isNeededToLoad && Q.push(M.clipsSubpage.getData({ artistId: l, page: 0, pageSize: h.EV, preloadedClips: P })),
                M.infoLoadingState.isNeededToLoad && Q.push(M.getInfo({ artistId: l, preloadedArtist: w })),
                Q.length && (0, o.use)(Promise.allSettled(Q)),
                (M.clipsSubpage.isNotFound || !Y) && (0, a.notFound)(),
                null == (i = M.meta) ? void 0 : i.artist.isLegalRejected)
                    ? (0, s.jsx)(I.M, { modalState: D })
                    : M.clipsSubpage.isRejected
                      ? (0, s.jsx)(m.SomethingWentWrong, {})
                      : (0, s.jsx)(c.a, {
                            pageId: d.AppScreen.ArtistClips,
                            pageIdForFrom: g.b.ARTIST_CLIPS,
                            mainObjectId: l,
                            mainObjectType: d.DomainObjectType.Artist,
                            children: (0, s.jsx)(b.h, {
                                scrollElement: B,
                                outerTitle: Z,
                                children: (0, s.jsxs)('div', {
                                    className: J().root,
                                    'data-test-id': u.Xk.artist.ARTIST_CLIPS_PAGE,
                                    children: [
                                        (0, s.jsx)(O.Y, {
                                            variant: O.V.TEXT,
                                            withForwardControl: !1,
                                            withBackwardControl: V.canBack,
                                            children: (0, s.jsx)(_.DZ, { variant: 'h1', weight: 'bold', size: 'xl', lineClamp: 1, children: Z }),
                                        }),
                                        (0, s.jsx)(L.$, {
                                            className: (0, r.$)(J().scrollContainer, J().important),
                                            listClassName: J().content,
                                            itemClassName: J().item,
                                            customComponents: K,
                                            itemContentCallback: (e) => {
                                                let t = M.clipsSubpage.items[e];
                                                return t ? (0, s.jsx)(f.F, { clip: t }, t.clipId) : (0, s.jsx)(v.k, { isActive: !0 });
                                            },
                                            totalCount: q,
                                            onGetDataByPage: X,
                                            pageSize: h.EV,
                                            totalRequests: M.clipsSubpage.requestsCount,
                                            handleRef: z,
                                            context: { listAriaLabel: W({ id: 'entity-names.artist-clips-list' }) },
                                            isMobileLayout: U,
                                            useWindowScroll: U,
                                        }),
                                    ],
                                }),
                            }),
                        });
            });
            var q = i(21438);
            let K = () => {
                let e = (0, a.useSearchParams)().get('artistId');
                return ((e && (0, q.L)(e)) || (0, a.notFound)(), (0, s.jsx)(X, { artistId: e }));
            };
        },
        69323: (e, t, i) => {
            'use strict';
            i.d(t, { F: () => D });
            var s = i(88800),
                a = i(65724),
                r = i(55482),
                l = i(84961),
                o = i(53548),
                n = i(2058),
                d = i(35412),
                c = i(62414),
                u = i(17392),
                p = i(18593),
                _ = i(29993),
                m = i(29832),
                h = i(90688),
                f = i(7555),
                v = i(29504),
                b = i(13946),
                C = i(44599),
                x = i(16717),
                g = i(44318),
                A = i(64284),
                S = i(98427),
                j = i(84384),
                N = i(54965),
                T = i(97361),
                I = i(99313),
                E = i(20585),
                y = i(39079),
                O = i(72288),
                L = i(90224),
                R = i(91292),
                k = i(16704),
                w = i(8299),
                P = i(90865),
                M = i.n(P);
            let D = (0, l.PA)((e) => {
                var t;
                let {
                        titleClassName: i,
                        artistLinkClassName: l,
                        clip: P,
                        withVideo: D = !0,
                        artistIdWithoutLink: U,
                        viewUuid: W,
                        shouldOpenModalOnCardClick: B = !0,
                    } = e,
                    { fullscreenVideoPlayer: z } = (0, O.g)(),
                    { formatMessage: V } = (0, n.A)(),
                    F = (0, g.C)(),
                    { from: H } = (0, j.f)({ pageId: S.b.VIDEO_PLAYER, contextId: z.state.contextId, contextType: p.K.Various, blockId: A.U.CLIPS }),
                    G = (0, T.P)(null != (t = P.duration) ? t : 0),
                    Y = (0, C._)(W),
                    J = (0, c.D)(),
                    X = (0, o.useRef)(null),
                    q = D && P.previewUrl,
                    K = (0, _.c)(() => {
                        X.current && ((X.current.currentTime = 0), X.current.play());
                    }),
                    Z = (0, o.useMemo)(() => (0, r.A)(K, 500), [K]),
                    Q = (0, _.c)(() => {
                        var e;
                        null == (e = X.current) || e.pause();
                    }),
                    $ = (0, o.useMemo)(() => z.ids.indexOf(P.clipId), [z, P.clipId]),
                    { isPlaying: ee, togglePlay: et } = (0, y.D)({
                        playContextParams: {
                            contextData: { type: p.K.Various, meta: { id: I.H.VARIOUS_CLIP_CONTEXT }, from: H },
                            queueParams: { index: $ },
                            entitiesData: z.entitiesData,
                            loadContextMeta: !1,
                        },
                        entityId: String(P.clipId),
                        sonataState: z.state,
                        playbackId: E.V.CLIP,
                    }),
                    ei = B ? P.url : (0, x.J)(z.ids, $),
                    es = (0, _.c)(() => {
                        B ? (F([P.clipId]), Y()) : ee || et();
                    }),
                    ea = (0, w.X)({ clip: P, callback: es }),
                    er = V({ id: 'entity-names.clip-name' }, { clipName: P.title }),
                    el = (0, o.useMemo)(
                        () =>
                            P.isAvailable
                                ? (0, s.jsxs)(f.t, {
                                      radius: 'm',
                                      className: (0, a.$)(M().view, M().cover),
                                      onMouseEnter: Z,
                                      onMouseLeave: Q,
                                      onClick: ea,
                                      children: [
                                          q &&
                                              (0, s.jsx)('video', {
                                                  className: M().media,
                                                  ref: X,
                                                  poster: P.thumbnail && (0, d.oZ)(P.thumbnail, 1280),
                                                  playsInline: !0,
                                                  muted: !0,
                                                  loop: !0,
                                                  'aria-hidden': !0,
                                                  children: (0, s.jsx)('source', { src: P.previewUrl, type: 'video/mp4' }),
                                              }),
                                          P.thumbnail &&
                                              (0, s.jsx)(h._V, {
                                                  className: M().image,
                                                  'aria-hidden': !0,
                                                  src: P.thumbnail,
                                                  fit: 'cover',
                                                  withAvatarReplace: !0,
                                                  size: 1280,
                                                  createUrlReplacer: d.oZ,
                                              }),
                                          void 0 !== P.duration &&
                                              (0, s.jsx)(v.HL, {
                                                  role: 'text',
                                                  'aria-label': G,
                                                  variant: 'span',
                                                  className: M().duration,
                                                  type: 'entity',
                                                  size: 'xs',
                                                  weight: 'medium',
                                                  children: (0, s.jsx)('span', { 'aria-hidden': 'true', children: (0, N.E)(P.duration, P.duration) }),
                                              }),
                                          (0, s.jsx)(k.D, { variant: 'filled', className: M().playButton, onClick: ea, iconSize: 'xl' }),
                                      ],
                                  })
                                : (0, s.jsx)(f.t, {
                                      radius: 'm',
                                      className: M().unavailableCover,
                                      children: (0, s.jsx)(h.Ab, { className: M().image, iconVariant: 'unavailable', 'data-test-id': u.S7.ENTITY_COVER_FALLBACK_IMAGE }),
                                  }),
                        [G, P.isAvailable, P.thumbnail, P.previewUrl, P.duration, Z, Q, ea, q],
                    ),
                    eo = (0, o.useMemo)(
                        () =>
                            P.hasArtists
                                ? (0, s.jsx)(
                                      b.i,
                                      { linkClassName: (0, a.$)(M().artistLink, l), artists: P.artists, lineClamp: 1, withAllArtistsTitle: !0, artistIdWithoutLink: U },
                                      P.getKey('SeparatedArtists'),
                                  )
                                : null,
                        [U, P, l],
                    );
                return (0, s.jsx)(m.MN, {
                    ref: J,
                    className: M().root,
                    explicitMarkComponent:
                        P.explicitDisclaimer &&
                        (0, s.jsx)(L.N, { getDescriptionTexts: P.getDescriptionTexts, variant: P.explicitDisclaimer, size: 'xxs' }, P.getKey('ExplicitMarkIcon')),
                    'aria-label': er,
                    srTitle: (0, s.jsx)(R.N, { className: M().srTitleLink, href: ei, onClick: ea, children: er }),
                    title: (0, s.jsxs)(
                        v.HL,
                        {
                            className: (0, a.$)(M().title, i),
                            variant: 'div',
                            type: 'entity',
                            size: 'm',
                            weight: 'medium',
                            lineClamp: 1,
                            'aria-hidden': !0,
                            children: [
                                (0, s.jsx)(R.N, {
                                    className: M().titleLink,
                                    href: ei,
                                    tabIndex: -1,
                                    'aria-label': er,
                                    onClick: ea,
                                    'data-test-id': u.Kq.clip.CLIP_META_TITLE,
                                    children: P.title,
                                }),
                                P.version && (0, s.jsx)(v.HL, { className: M().version, variant: 'span', children: ' '.concat(P.version) }),
                            ],
                        },
                        P.getKey('Title'),
                    ),
                    view: el,
                    description: eo,
                    'data-test-id': u.Kq.clip.CLIP_CARD,
                });
            });
        },
        70396: (e) => {
            e.exports = { root: 'SeparatedArtistsWithContextMenuMobile_root__4BiJL', important: 'SeparatedArtistsWithContextMenuMobile_important__fSF1h' };
        },
        74021: (e, t, i) => {
            'use strict';
            i.d(t, { q: () => n });
            var s = i(14567),
                a = i(243),
                r = i(62151),
                l = i(33396);
            let o = () => 'SECRET';
            class n {
                maxLogLevel;
                secureFields;
                additionalData;
                constructor({ additionalData: e, maxLogLevel: t, secureFields: i }) {
                    ((this.maxLogLevel = t), (this.secureFields = i), (this.additionalData = e));
                }
                formatMessage(e, t, i = {}, a) {
                    let r,
                        o = String(t instanceof Error && t.stack ? t.stack : t),
                        n = (0, l.A)({ ...this.additionalData, ...i });
                    return (Object.keys(n).length && (r = this.obfuscateData(n)), a) ? `${o} ${s(r)}` : [o, r];
                }
                obfuscateData(e) {
                    if (this.secureFields?.length) for (let t of this.secureFields) void 0 !== (0, a.A)(e, t) && (0, r.A)(e, t, o());
                    return e;
                }
            }
        },
        75510: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 64420));
        },
        76827: (e) => {
            e.exports = {
                root: 'ClipCardShimmer_root__sIvNr',
                cover: 'ClipCardShimmer_cover__yA4jz',
                title: 'ClipCardShimmer_title__MCApK',
                text: 'ClipCardShimmer_text__ajZGv',
            };
        },
        76903: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => u });
            var s = i(88800),
                a = i(53548),
                r = i(53534),
                l = i(63582),
                o = i(245);
            let n = new WeakMap();
            class d {
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
                        n.get(t) ??
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
                    (n.set(t, i), (this.queue = i));
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
            var c = i(87999);
            let u = (0, l.B)(
                { kind: 'provider', requiredProps: ['pageId'], pendingProps: ['mainObjectType', 'mainObjectId'], scope: 'screen' },
                ({ children: e, ...t }) => {
                    let i = (0, o.N)(),
                        l = ((e) =>
                            (!Object.hasOwn(e, 'mainObjectType') || void 0 !== e.mainObjectType) &&
                            ('string' == typeof e.mainObjectId ||
                                (!Object.hasOwn(e, 'mainObjectId') && (!Object.hasOwn(e, 'mainObjectType') || e.mainObjectType === c.DomainObjectType.NonApplicable))))(
                            t,
                        ),
                        [n, u] = (0, a.useState)(() => {
                            let e = new d(i.createScreenSession().screenViewUuid, i);
                            return { client: i, input: t, isReady: l, scope: l ? i.createScreenScope(t, e) : null, session: e };
                        });
                    if (
                        n.client !== i ||
                        n.input.pageId !== t.pageId ||
                        n.input.skeletonId !== t.skeletonId ||
                        n.input.mainObjectType !== t.mainObjectType ||
                        n.input.mainObjectId !== t.mainObjectId
                    ) {
                        let a = new d(i.createScreenSession().screenViewUuid, i),
                            o = { client: i, input: t, isReady: l, scope: l ? i.createScreenScope(t, a) : null, session: a };
                        return (u(o), (0, s.jsx)(r.k, { value: o, children: e }));
                    }
                    if (
                        n.isReady !== l ||
                        n.input.displayReasonId !== t.displayReasonId ||
                        n.input.pageIdForFrom !== t.pageIdForFrom ||
                        n.input.pagePlacement !== t.pagePlacement ||
                        n.input.pageStyle !== t.pageStyle
                    ) {
                        let a = { ...n, input: t, isReady: l, scope: l ? i.createScreenScope(t, n.session) : null };
                        return (u(a), (0, s.jsx)(r.k, { value: a, children: e }));
                    }
                    return (0, s.jsx)(r.k, { value: n, children: e });
                },
            );
        },
        77605: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => n });
            var s = i(88800),
                a = i(19994),
                r = i(64310),
                l = i(76827),
                o = i.n(l);
            let n = (e) => {
                let { isActive: t } = e;
                return (0, s.jsxs)('div', {
                    className: o().root,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    children: [
                        (0, s.jsx)(a.W, { isActive: t, className: o().cover, radius: 'l' }),
                        (0, s.jsx)(r.n, { isActive: t, className: o().title }),
                        (0, s.jsx)(r.n, { isActive: t, className: o().text }),
                    ],
                });
            };
        },
        80932: (e) => {
            e.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        90224: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => h });
            var s = i(88800),
                a = i(65724),
                r = i(84961),
                l = i(53548),
                o = i(2058),
                n = i(17392),
                d = i(52300),
                c = i(62837),
                u = i(72288),
                p = i(94398),
                _ = i(17332),
                m = i.n(_);
            let h = (0, r.PA)((e) => {
                let { className: t, getDescriptionTexts: i, trackId: r, containerClassName: _, variant: h, size: f = 'xxxs', ...v } = e,
                    { formatMessage: b } = (0, o.A)(),
                    {
                        settings: { isMobile: C },
                    } = (0, u.g)(),
                    [x, g] = (0, l.useState)(null);
                (0, l.useEffect)(() => {
                    i && i().then(g);
                }, [i, r]);
                let {
                    iconVariant: A,
                    descriptionText: S,
                    isTooltipEnabled: j,
                    ariaLabel: N,
                } = ((e, t) => {
                    let { variant: i, descriptionTexts: s, isMobile: a } = e,
                        r = (null == s ? void 0 : s.join('\n')) || '';
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
                        descriptionText: r,
                        isTooltipEnabled: !!(null == s ? void 0 : s.length) && !a,
                        ariaLabel: r.length > 0 ? r : t({ id: 'extra-explicit.explicit-mark' }),
                    };
                })({ variant: h, descriptionTexts: x, isMobile: C }, b);
                return (0, s.jsx)(p.k, {
                    description: S,
                    placement: 'bottom-start',
                    enabled: j,
                    children: (0, s.jsx)('span', {
                        className: _,
                        children: (0, s.jsx)(d.I, {
                            className: (0, a.$)(m().explicitMark, t),
                            'aria-label': N,
                            variant: A,
                            size: f,
                            ...v,
                            'data-test-id': n.S7.EXPLICIT_MARK_ICON,
                        }),
                    }),
                });
            });
        },
        90865: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                view: 'ClipCard_view__MYSwA',
                playButton: 'ClipCard_playButton__0Wyss',
                duration: 'ClipCard_duration__89ZCx',
                image: 'ClipCard_image__hSUud',
                media: 'ClipCard_media__dU4RM',
                unavailableCover: 'ClipCard_unavailableCover__Zd9jl',
                cover: 'ClipCard_cover__ztEok',
                cover_withoutOffset: 'ClipCard_cover_withoutOffset__aasE2',
                root: 'ClipCard_root__kzWjg',
                srTitleLink: 'ClipCard_srTitleLink__0tQdz',
                title: 'ClipCard_title__I1s7Q',
                artistLink: 'ClipCard_artistLink__t6oPP',
                titleLink: 'ClipCard_titleLink__g3HDM',
                version: 'ClipCard_version__w9PM7',
            };
        },
        94398: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => c });
            var s = i(88800),
                a = i(17392),
                r = i(17610),
                l = i(29504),
                o = i(37438),
                n = i.n(o);
            let d = { padding: 8 },
                c = (e) => {
                    let { description: t, enabled: i, title: o, placement: c = 'top', children: u } = e;
                    return (0, s.jsxs)(r.m_, {
                        enabled: i,
                        offsetOptions: 4,
                        shiftOptions: d,
                        flipOptions: d,
                        placement: c,
                        children: [
                            u,
                            (0, s.jsx)(r.ZI, {
                                className: n().root,
                                'data-test-id': a.S7.TOOLTIP_WITH_TITLE,
                                children: (0, s.jsxs)('div', {
                                    className: n().text,
                                    children: [
                                        o && (0, s.jsx)(l.HL, { variant: 'span', type: 'text', size: 's', weight: 'bold', children: o }),
                                        (0, s.jsx)(l.HL, { variant: 'span', type: 'text', size: 's', weight: 'normal', className: n().description, children: t }),
                                    ],
                                }),
                            }),
                        ],
                    });
                };
        },
        97361: (e, t, i) => {
            'use strict';
            i.d(t, { P: () => r });
            var s = i(2058),
                a = i(29831);
            let r = (e) => {
                let { formatMessage: t } = (0, s.A)();
                return (0, a.j)(e, t);
            };
        },
        99313: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => s });
            var s = (function (e) {
                return ((e.VARIOUS_CLIP_CONTEXT = 'various-clip-context'), e);
            })({});
        },
    },
    (e) => {
        (e.O(
            0,
            [
                4700, 7908, 4555, 7065, 527, 8655, 6220, 6706, 4771, 8832, 6904, 4495, 2058, 3578, 8628, 4975, 4827, 8283, 1800, 5151, 2837, 9202, 4732, 9087, 3979, 1928,
                9091, 9124, 900, 9934, 2470, 7670, 2889, 763, 2670, 7358,
            ],
            () => e((e.s = 75510)),
        ),
            (_N_E = e.O()));
    },
]);
