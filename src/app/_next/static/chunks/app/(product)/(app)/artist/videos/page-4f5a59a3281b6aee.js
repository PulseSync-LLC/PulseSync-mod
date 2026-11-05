(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [621],
    {
        8299: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => r });
            var a = i(58217);
            let r = (e) => {
                let { clip: t, callback: i, disclaimerRejectHandler: r } = e;
                return (0, a.l)({ entity: t, callback: i, onReject: r, modalBehavior: { closeOnOutside: !1, closeOnEscape: !1 }, preventDefaultWhenSafe: !0 });
            };
        },
        12816: (e, t, i) => {
            'use strict';
            i.d(t, { q: () => s, x: () => r });
            var a = i(98427);
            let r = [
                    a.b.HOME,
                    a.b.SIDEBAR,
                    a.b.OWN_COLLECTION,
                    a.b.LANDING,
                    a.b.OWN_ARTISTS,
                    a.b.ARTIST,
                    a.b.ARTIST_CONCERTS,
                    a.b.NON_MUSIC,
                    a.b.PLAYLIST,
                    a.b.SEARCH,
                    a.b.VIDEO_PLAYER,
                    a.b.LABEL,
                    a.b.CONCERTS,
                    a.b.CONCERT,
                    a.b.CONCERT_LOCATION_SELECTOR,
                    a.b.ALBUM,
                    a.b.PLAYLIST,
                    a.b.SLIDES_SCREEN,
                    a.b.PROMOLANDING_ALBUM,
                    a.b.WAVE_LANDING_SCREEN,
                    a.b.FACT_SCREEN,
                    a.b.LUMEN_FACT_SCREEN,
                    a.b.LUMEN_AWAKENING_SCREEN,
                    a.b.COLLECTION_VIBE_ROOMS,
                    a.b.MULTIVIBE_SENDING_INVITATION_SCREEN,
                    a.b.MULTIVIBE_ACTION_SCREEN,
                    a.b.MULTIVIBE_UNIFIED_SCREEN,
                ],
                s = [a.b.HOME, a.b.LANDING, a.b.NON_MUSIC, a.b.OWN_COLLECTION, a.b.SEARCH, a.b.ARTIST, a.b.CONCERTS, a.b.CONCERT, a.b.ALBUM, a.b.PLAYLIST];
        },
        13946: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => B });
            var a = i(88800),
                r = i(65724),
                s = i(84961),
                l = i(53548),
                o = i(79070),
                n = i(17610),
                d = i(24548),
                c = i(29993),
                u = i(72288),
                p = i(35994);
            let _ = (e, t) => {
                let { withLink: i, separator: a } = t,
                    r = i && !e.various ? (0, p.R)(e.id) : null;
                return { artist: e, name: e.name, separator: a, link: r };
            };
            var m = i(21010),
                f = i.n(m),
                v = i(17392),
                b = i(29504),
                x = i(91292),
                h = i(2058),
                C = i(87999),
                g = i(80643),
                A = i(78940),
                S = i(55693),
                j = i(58217);
            let N = (0, s.PA)((e) => {
                    let { item: t, linkClassName: i, captionClassName: r, captionSize: s = 'm', allArtistsTitle: l, withCustomTooltip: o, hoverSettings: d } = e,
                        {
                            name: p,
                            link: _,
                            title: m,
                            ariaLabel: f,
                            tooltipText: N,
                            isTooltipEnabled: I,
                            handleNavigate: T,
                        } = ((e) => {
                            var t, i;
                            let { item: a, allArtistsTitle: r, withCustomTooltip: s } = e,
                                { formatMessage: l } = (0, h.A)(),
                                o = ((e, t) => {
                                    let { item: i, allArtistsTitle: a, withCustomTooltip: r } = e,
                                        s = a || i.name;
                                    return {
                                        ...i,
                                        title: r ? void 0 : s,
                                        ariaLabel: i.link ? t({ id: 'entity-names.artist-name' }, { artistName: i.name }) : void 0,
                                        tooltipText: s,
                                        isTooltipEnabled: !a && r,
                                    };
                                })({ item: a, allArtistsTitle: r, withCustomTooltip: s }, l),
                                {
                                    track: n,
                                    settings: { isMobile: d },
                                } = (0, u.g)(),
                                p = (0, A.Z)(null != (i = null == (t = o.link) ? void 0 : t.href) ? i : o.artist.url),
                                { sendNavigateSearchFeedback: _ } = (0, S.z)(),
                                m = (0, g.S)(),
                                f = (0, c.c)((e) => {
                                    (d && n.isOpened && n.close(), p(e));
                                }),
                                v = ((e) => {
                                    let { artist: t, callback: i } = e,
                                        { currentTrackInfo: a, fullscreenPlayer: r, fullscreenVideoPlayer: s } = (0, u.g)(),
                                        { modal: l } = a;
                                    return (0, j.l)({
                                        entity: t,
                                        callback: i,
                                        onBeforeHandle: (e) => {
                                            (null == e || e.stopPropagation(), l.isOpened && (a.reset(), l.close()), r.modal.isOpened && r.modal.close());
                                        },
                                        onAfterHandled: () => {
                                            s.modal.isOpened && (s.modal.close(), s.reset());
                                        },
                                        preventDefaultWhenSafe: !0,
                                    });
                                })({ artist: o.artist, callback: f }),
                                b = (0, c.c)((e) => {
                                    (m({ to: C.AppScreen.ArtistScreen }), null == _ || _(), v(e));
                                });
                            return { ...o, handleNavigate: b };
                        })({ item: t, allArtistsTitle: l, withCustomTooltip: o });
                    return _
                        ? (0, a.jsx)(x.N, {
                              ..._,
                              'aria-label': f,
                              className: i,
                              onClick: T,
                              title: m,
                              'data-test-id': v.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, a.jsx)(n.m_, {
                                  enabled: I,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: N,
                                  hoverSettings: d,
                                  children: (0, a.jsx)(b.HL, { variant: 'span', type: 'entity', size: s, weight: 'medium', className: r, children: p }),
                              }),
                          })
                        : (0, a.jsx)(n.m_, {
                              enabled: I,
                              offsetOptions: 4,
                              placement: 'top',
                              text: N,
                              hoverSettings: d,
                              children: (0, a.jsx)(b.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: s,
                                  weight: 'medium',
                                  className: r,
                                  title: m,
                                  'data-test-id': v.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: p,
                              }),
                          });
                }),
                I = (e) => {
                    let { group: t, linkClassName: i, captionClassName: r, captionSize: s, allArtistsTitle: o, withCustomTooltip: n, hoverSettings: d } = e;
                    return (0, a.jsxs)(a.Fragment, {
                        children: [
                            t.primary.separator,
                            (0, a.jsx)(N, {
                                item: t.primary,
                                linkClassName: i,
                                captionClassName: r,
                                captionSize: s,
                                allArtistsTitle: o,
                                withCustomTooltip: n,
                                hoverSettings: d,
                            }),
                            t.decomposed.map((e) =>
                                (0, a.jsxs)(
                                    l.Fragment,
                                    {
                                        children: [
                                            e.separator,
                                            (0, a.jsx)(N, {
                                                item: e,
                                                linkClassName: i,
                                                captionClassName: r,
                                                captionSize: s,
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
            var T = i(88969),
                y = i(65453);
            let E = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: i, handleOnSpoilerClick: s } = e;
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        ' ',
                        (0, a.jsx)(y.N, {
                            role: 'button',
                            href: '',
                            className: (0, r.$)(f().spoiler, i),
                            onClick: s,
                            rel: 'nofollow',
                            'data-test-id': v.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, a.jsx)(T.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var L = i(61013),
                O = i(87819),
                R = i(40634),
                P = i(48468),
                k = i.n(P);
            let w = (0, s.PA)((e) => {
                    let { label: t, artists: i, forwardRef: r } = e;
                    return (0, a.jsxs)(n.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, O.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, a.jsx)('div', { ref: r, children: t }),
                            (0, a.jsx)(n.ZI, { className: k().tooltipContent, children: i.map((e) => (0, a.jsx)(R.V, { artist: e, className: k().artistItem }, e.id)) }),
                        ],
                    });
                }),
                M = (0, l.forwardRef)((e, t) => (0, a.jsx)(w, { forwardRef: t, ...e }));
            var D = i(19934),
                U = i(70396),
                W = i.n(U);
            let z = (0, s.PA)((e) => {
                    let { label: t, artists: i } = e,
                        { formatMessage: s } = (0, h.A)();
                    return (0, a.jsx)(D.W1, {
                        isMobile: !0,
                        className: (0, r.$)(W().root, W().important),
                        label: t,
                        ariaLabel: s({ id: 'interface-actions.context-menu-artists' }),
                        children: i.map((e) => (0, a.jsx)(R.V, { artist: e }, e.id)),
                    });
                }),
                V = (0, s.PA)((e) => {
                    let { artists: t = [], label: i, labelRef: r } = e,
                        [s, n] = (0, l.useState)(!1),
                        {
                            settings: { isMobile: d },
                        } = (0, u.g)(),
                        p = (0, c.c)(() => {
                            let e = r.current;
                            e && n(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        _ = (0, o.L)(() =>
                            (0, L.A)(() => {
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
                        return (s || d) && (!d || 1 !== t.length) ? (d ? (0, a.jsx)(z, { artists: t, label: i }) : (0, a.jsx)(M, { artists: t, label: i })) : i;
                }),
                B = (0, s.PA)((e) => {
                    let {
                            className: t,
                            lineClamp: i,
                            spoilerClassName: s,
                            linkClassName: p,
                            captionClassName: m,
                            captionSize: v,
                            variant: b = 'breakAll',
                            spoilerComponent: x,
                            ...h
                        } = e,
                        C = ((e) => {
                            var t, i, a;
                            let { separator: r, visibleArtistsCount: s, withLink: o, withComposer: n, artistIdWithoutLink: d, withContextMenu: p } = e,
                                m = null != (t = e.artists) ? t : [],
                                f = null == (i = e.withAllArtistsTitle) || i,
                                v = null == (a = e.withCustomTooltip) || a,
                                b = (0, l.useRef)(null),
                                [x, h] = (0, l.useState)(!1),
                                {
                                    settings: { isMobile: C },
                                } = (0, u.g)(),
                                g = ((!C || 1 === m.length) && p) || !p,
                                A = ((e, t) => {
                                    var i, a, r;
                                    let s = null == (i = null == t ? void 0 : t.withComposer) || i,
                                        l = null == (a = null == t ? void 0 : t.withLink) || a,
                                        o = null != (r = null == t ? void 0 : t.separator) ? r : ', ',
                                        n = e
                                            .flatMap((e) => {
                                                var t;
                                                let i = (null != (t = e.decomposed) ? t : []).map((e) => e.name);
                                                return [e.name, ...i];
                                            })
                                            .join(o),
                                        { visibleArtists: d, hiddenArtistsCount: c } = ((e, t) => {
                                            let { visibleArtistsCount: i, withComposer: a } = t;
                                            return {
                                                visibleArtists: (i ? e.slice(0, i) : e).filter((e) => a || !e.isComposer),
                                                hiddenArtistsCount: i && i < e.length ? e.length - i : 0,
                                            };
                                        })(e, { withComposer: s, visibleArtistsCount: null == t ? void 0 : t.visibleArtistsCount });
                                    return {
                                        groups: d.map((e, i) =>
                                            ((e, t) => {
                                                var i;
                                                let { withLink: a, separator: r, isFirst: s } = t;
                                                return {
                                                    primary: _(e, { withLink: a, separator: s ? void 0 : r }),
                                                    decomposed: (null != (i = e.decomposed) ? i : []).map((e) => {
                                                        let t = r ? e.separator : '';
                                                        return _(e, { withLink: a, separator: t });
                                                    }),
                                                };
                                            })(e, { withLink: l && e.id !== (null == t ? void 0 : t.artistIdWithoutLink), separator: o, isFirst: 0 === i }),
                                        ),
                                        allArtistsTitle: n,
                                        hiddenArtistsCount: c,
                                    };
                                })(m, { separator: r, visibleArtistsCount: x ? void 0 : s, withComposer: n, withLink: !!g && o, artistIdWithoutLink: d }),
                                S = f ? A.allArtistsTitle : '',
                                j = (0, c.c)((e) => {
                                    (h(!0), e.preventDefault());
                                });
                            return {
                                artists: m,
                                groups: A.groups,
                                hiddenArtistsCount: A.hiddenArtistsCount,
                                allArtistsTitle: S,
                                withCustomTooltip: v,
                                withContextMenu: p,
                                labelRef: b,
                                handleOnSpoilerClick: j,
                                isTooltipEnabled: !!S && v && !p && !C,
                                title: !S || v || p ? void 0 : S,
                            };
                        })(h),
                        g = (0, o.L)(() =>
                            C.hiddenArtistsCount <= 0
                                ? null
                                : (0, l.isValidElement)(x)
                                  ? x
                                  : (0, a.jsx)(E, { spoilerClassName: s, spoilerArtistsCount: C.hiddenArtistsCount, handleOnSpoilerClick: C.handleOnSpoilerClick }),
                        ),
                        A = (0, a.jsx)(n.m_, {
                            referenceRef: C.labelRef,
                            enabled: C.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: C.allArtistsTitle,
                            hoverSettings: d.V,
                            children: (0, a.jsxs)('div', {
                                style: i ? { WebkitLineClamp: i } : void 0,
                                className: (0, r.$)(f().root, f()['root_variant_'.concat(b)], { [f().root_clamp]: i && i > 0, [f().ellipsis]: !i }, t),
                                title: C.title,
                                children: [
                                    C.groups.map((e) =>
                                        (0, a.jsx)(
                                            I,
                                            {
                                                group: e,
                                                linkClassName: p,
                                                captionClassName: m,
                                                captionSize: v,
                                                allArtistsTitle: C.allArtistsTitle,
                                                withCustomTooltip: C.withCustomTooltip,
                                                hoverSettings: d.V,
                                            },
                                            e.primary.artist.key,
                                        ),
                                    ),
                                    g,
                                ],
                            }),
                        });
                    return C.withContextMenu ? (0, a.jsx)(V, { labelRef: C.labelRef, artists: C.artists, label: A }) : A;
                });
        },
        16717: (e, t, i) => {
            'use strict';
            i.d(t, { J: () => l });
            var a = i(4370),
                r = i(34303),
                s = i(67174);
            let l = function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    { href: i } = (0, s.u)(a.Z.video.href, { query: { [r.K.IDS]: e.join(','), [r.K.ACTIVE_INDEX]: String(t) } });
                return i;
            };
        },
        17332: (e) => {
            e.exports = { explicitMark: 'ExplicitMarkIcon_explicitMark__0BPeQ' };
        },
        18610: (e, t, i) => {
            'use strict';
            i.d(t, { p: () => r });
            var a = i(53548);
            let r = () =>
                (0, a.useCallback)((e) => {
                    {
                        let t = window.history.state;
                        window.history.pushState(t, '', e);
                    }
                }, []);
        },
        20585: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => a });
            var a = (function (e) {
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
        24548: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => a });
            let a = { delay: { open: 1e3, close: 0 } };
        },
        29831: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => r });
            var a = i(48987);
            let r = (e, t) => {
                let { seconds: i, hours: r, minutes: s } = (0, a.e)(e);
                return t({ id: 'time.hours-minutes-seconds' }, { hours: r, minutes: s, seconds: i });
            };
        },
        29832: (e, t, i) => {
            'use strict';
            i.d(t, { MN: () => c, hg: () => d });
            var a,
                r = i(53548),
                s = {
                    5881: (e, t, i) => {
                        function a() {
                            for (var e, t, i = 0, a = ''; i < arguments.length;)
                                (e = arguments[i++]) &&
                                    (t = (function e(t) {
                                        var i,
                                            a,
                                            r = '';
                                        if ('string' == typeof t || 'number' == typeof t) r += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (i = 0; i < t.length; i++) t[i] && (a = e(t[i])) && (r && (r += ' '), (r += a));
                                            else for (i in t) t[i] && (r && (r += ' '), (r += i));
                                        return r;
                                    })(e)) &&
                                    (a && (a += ' '), (a += t));
                            return a;
                        }
                        (i.r(t), i.d(t, { clsx: () => a, default: () => r }));
                        let r = a;
                    },
                    8765: (e, t, i) => {
                        (i.r(t), i.d(t, { default: () => a }));
                        let a = {
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
                        (i.r(t), i.d(t, { default: () => a }));
                        let a = {
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
                        (i.r(t), i.d(t, { default: () => a }));
                        let a = { root: 'LizdJ2L0HW7JWOvPrfly' };
                    },
                    7319: (e, t, i) => {
                        (i.r(t), i.d(t, { default: () => a }));
                        let a = { root: 'eaYyesBmJL_NbkgoYR1c', focusable: 'uL1dD5rxgI4bPmfyMMe7' };
                    },
                    1246: (e, t, i) => {
                        (i.r(t), i.d(t, { default: () => a }));
                        let a = {
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
                        (i.r(t), i.d(t, { default: () => a }));
                        let a = {
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
                        (i.r(t), i.d(t, { default: () => a }));
                        let a = {
                            root: '_MWOVuZRvUQdXKTMcOPx',
                            root_clamp: 'LezmJlldtbHWqU7l1950',
                            root_clamp_oneline: 'oyQL2RSmoNbNQf3Vc6YI',
                            root_clamp_multiline: 'jMyoZB5J9iZbzJmWOrF0',
                        };
                    },
                    9097: (e, t) => {
                        var i = Symbol.for('react.transitional.element');
                        function a(e, t, a) {
                            var r = null;
                            if ((void 0 !== a && (r = '' + a), void 0 !== t.key && (r = '' + t.key), 'key' in t))
                                for (var s in ((a = {}), t)) 'key' !== s && (a[s] = t[s]);
                            else a = t;
                            return { $$typeof: i, type: e, key: r, ref: void 0 !== (t = a.ref) ? t : null, props: a };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = a), (t.jsxs = a));
                    },
                    4377: (e, t, i) => {
                        e.exports = i(9097);
                    },
                    7742: function (e, t, i) {
                        var a =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.CardControls = void 0));
                        let r = i(4377),
                            s = i(5881),
                            l = i(8532),
                            o = a(i(8765));
                        t.CardControls = (e) => {
                            let {
                                    className: t,
                                    playControl: i,
                                    likeControl: a,
                                    menuControl: n,
                                    pinControl: d,
                                    trailerControl: c,
                                    isVisible: u,
                                    radius: p = 'default',
                                    bottomContainerClassName: _,
                                    labelText: m,
                                } = e,
                                f = c || i,
                                v = n || a;
                            return (0, r.jsxs)('div', {
                                className: (0, s.clsx)(
                                    o.default.root,
                                    o.default.controls,
                                    { [o.default.controls_visible]: u },
                                    o.default['controls_radius_'.concat(p)],
                                    t,
                                ),
                                children: [
                                    (0, r.jsx)('div', { className: o.default.top, children: d }),
                                    (0, r.jsxs)('div', {
                                        className: (0, s.clsx)(o.default.bottom, _),
                                        children: [
                                            f && (0, r.jsxs)('div', { className: o.default.bottom_left, children: [c, i] }),
                                            v && (0, r.jsxs)('div', { className: o.default.bottom_right, children: [n, a] }),
                                        ],
                                    }),
                                    !!m && (0, r.jsx)(l.Label, { className: o.default.label, children: m }),
                                ],
                            });
                        };
                    },
                    7093: function (e, t, i) {
                        var a =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.EntityCard = void 0));
                        let r = i(4377),
                            s = i(810),
                            l = i(5881),
                            o = i(8903),
                            n = i(6530),
                            d = a(i(3550)),
                            c = (e) => {
                                let {
                                    forwardRef: t,
                                    view: i,
                                    className: a,
                                    textPosition: s = 'left',
                                    contentLinesCount: c = 2,
                                    title: u,
                                    description: p,
                                    explicitMarkComponent: _,
                                    chart: m,
                                    children: f,
                                    srTitle: v,
                                    wrapperClassName: b,
                                    ...x
                                } = e;
                                return (0, r.jsxs)('div', {
                                    className: (0, l.clsx)(d.default.root, a),
                                    ref: t,
                                    ...x,
                                    children: [
                                        (0, r.jsx)(n.SROnly, { children: null != v ? v : u }),
                                        (0, r.jsx)('div', { className: d.default.viewContainer, children: i }),
                                        (0, r.jsxs)('div', {
                                            className: (0, l.clsx)(d.default.wrapper, b),
                                            children: [
                                                m,
                                                (0, r.jsxs)('div', {
                                                    className: (0, l.clsx)(
                                                        d.default.content,
                                                        d.default['content_'.concat(s)],
                                                        d.default['content_linesCount_'.concat(c)],
                                                    ),
                                                    children: [
                                                        u &&
                                                            (0, r.jsxs)('div', {
                                                                className: d.default.titleContainer,
                                                                children: [
                                                                    (0, r.jsx)(o.Caption, {
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
                                                        f,
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                });
                            };
                        t.EntityCard = (0, s.forwardRef)((e, t) => (0, r.jsx)(c, { forwardRef: t, ...e }));
                    },
                    2018: function (e, t, i) {
                        var a =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Label = void 0));
                        let r = i(4377),
                            s = i(5881),
                            l = i(8903),
                            o = a(i(4353));
                        t.Label = (e) => {
                            let { children: t, className: i, size: a = 's', ...n } = e;
                            return (0, r.jsx)(l.Caption, {
                                variant: 'div',
                                type: 'text',
                                size: a,
                                lineClamp: 1,
                                className: (0, s.clsx)(o.default.root, i),
                                ...n,
                                children: t,
                            });
                        };
                    },
                    8532: (e, t, i) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Label = void 0));
                        var a = i(2018);
                        Object.defineProperty(t, 'Label', {
                            enumerable: !0,
                            get: function () {
                                return a.Label;
                            },
                        });
                    },
                    5531: function (e, t, i) {
                        var a =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0));
                        let r = i(4377),
                            s = i(5881),
                            l = i(810),
                            o = a(i(7319));
                        t.SROnly = (e) => {
                            let { className: t, focusable: i, children: a, ...n } = e,
                                d = (0, s.clsx)(o.default.root, { [o.default.focusable]: i }, t);
                            return (0, l.isValidElement)(a)
                                ? (0, l.cloneElement)(a, { ...n, className: (0, s.clsx)(d, a.props.className) })
                                : (0, r.jsx)('span', { className: d, ...n, children: a });
                        };
                    },
                    6530: (e, t, i) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0));
                        var a = i(5531);
                        Object.defineProperty(t, 'SROnly', {
                            enumerable: !0,
                            get: function () {
                                return a.SROnly;
                            },
                        });
                    },
                    3412: function (e, t, i) {
                        var a =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Caption = t.CaptionComponent = void 0));
                        let r = i(4377),
                            s = i(5881),
                            l = i(810),
                            o = i(5987),
                            n = a(i(1246));
                        ((t.CaptionComponent = (e) => {
                            let { forwardRef: t, variant: i, type: a = 'text', size: l = 's', className: d, children: c, weight: u = 'medium', ...p } = e;
                            return (0, r.jsx)(o.Typography, {
                                variant: i,
                                ref: t,
                                className: (0, s.clsx)(n.default.root, n.default['root_'.concat(a, '_').concat(l)], n.default['root_weight_'.concat(u)], d),
                                ...p,
                                children: c,
                            });
                        }),
                            (t.Caption = (0, l.forwardRef)((e, i) => (0, r.jsx)(t.CaptionComponent, { forwardRef: i, ...e }))));
                    },
                    1641: function (e, t, i) {
                        var a =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Heading = t.HeadingComponent = void 0));
                        let r = i(4377),
                            s = i(5881),
                            l = i(810),
                            o = i(5987),
                            n = a(i(2445));
                        ((t.HeadingComponent = (e) => {
                            let { forwardRef: t, variant: i, weight: a = 'bold', size: l = 's', className: d, children: c, ...u } = e;
                            return (0, r.jsx)(o.Typography, {
                                variant: i,
                                ref: t,
                                className: (0, s.clsx)(n.default.root, n.default['root_size_'.concat(l)], n.default['root_weight_'.concat(a)], d),
                                ...u,
                                children: c,
                            });
                        }),
                            (t.Heading = (0, l.forwardRef)((e, i) => (0, r.jsx)(t.HeadingComponent, { forwardRef: i, ...e }))));
                    },
                    5987: function (e, t, i) {
                        var a =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Typography = t.TypographyComponent = void 0));
                        let r = i(4377),
                            s = i(5881),
                            l = i(810),
                            o = a(i(61));
                        function n(e) {
                            let { forwardRef: t, style: i, className: a, children: l, variant: n, lineClamp: d, ...c } = e,
                                u = d && 'string' == typeof l ? l : void 0;
                            return (0, r.jsx)(n, {
                                style: { ...i, WebkitLineClamp: d },
                                ref: t,
                                title: u,
                                className: (0, s.clsx)(
                                    o.default.root,
                                    { [o.default.root_clamp]: d && d > 0, [o.default.root_clamp_oneline]: d && 1 === d, [o.default.root_clamp_multiline]: d && d > 1 },
                                    a,
                                ),
                                ...c,
                                children: l,
                            });
                        }
                        ((t.TypographyComponent = n), (t.Typography = (0, l.forwardRef)((e, t) => (0, r.jsx)(n, { forwardRef: t, ...e }))));
                    },
                    8903: (e, t, i) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Heading = t.Caption = void 0));
                        var a = i(3412);
                        Object.defineProperty(t, 'Caption', {
                            enumerable: !0,
                            get: function () {
                                return a.Caption;
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
                        e.exports = a || (a = i.t(r, 2));
                    },
                },
                l = {};
            function o(e) {
                var t = l[e];
                if (void 0 !== t) return t.exports;
                var i = (l[e] = { exports: {} });
                return (s[e].call(i.exports, i, i.exports, o), i.exports);
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
            i.d(t, { K: () => a });
            var a = (function (e) {
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
            i.d(t, { R: () => r });
            var a = i(67174);
            let r = (e) => (0, a.u)('/artist/:artistId', { params: { artistId: e } });
        },
        37438: (e) => {
            e.exports = { root: 'TooltipWithTitle_root__7jLY3', text: 'TooltipWithTitle_text__ElBtq', description: 'TooltipWithTitle_description__HsGcR' };
        },
        37670: (e, t, i) => {
            'use strict';
            i.d(t, { J: () => s });
            var a = i(53548);
            i(30282);
            var r = i(58390);
            let s = (e) => {
                let t = (0, r.usePathname)(),
                    [i, s] = (0, a.useState)(!1);
                ((0, a.useEffect)(() => {
                    (window.Ya.Rum.spa.makeSpaSubPage(t), window.Ya.Rum.spa.startDataLoading(t));
                }),
                    (0, a.useEffect)(() => {
                        window.Ya.Rum.spa.getLastSpaSubPage(t) && e && !i && (window.Ya.Rum.spa.finishDataLoading(t), window.Ya.Rum.spa.startDataRendering(t), s(!0));
                    }, [e, i, t]));
            };
        },
        38501: (e, t, i) => {
            'use strict';
            i.d(t, { d: () => r });
            var a = i(72288);
            let r = () => {
                let {
                    settings: { isMobile: e },
                } = (0, a.g)();
                return !e;
            };
        },
        40634: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => h });
            var a = i(88800),
                r = i(65724),
                s = i(84961),
                l = i(53548),
                o = i(87999),
                n = i(80643),
                d = i(17392),
                c = i(29993),
                u = i(90688),
                p = i(19934),
                _ = i(7555),
                m = i(29504),
                f = i(78940),
                v = i(72288),
                b = i(80932),
                x = i.n(b);
            let h = (0, s.PA)((e) => {
                let { artist: t, className: i } = e,
                    { fullscreenPlayer: s } = (0, v.g)(),
                    b = (0, f.Z)(t.url),
                    C = (0, n.S)(),
                    g = (0, l.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, a.jsx)(h, { artist: t, className: i }, t.id)), e), []))
                        );
                    }, [t, i]),
                    A = (0, c.c)((e) => {
                        (s.modal.isOpened && s.modal.close(), C({ to: o.AppScreen.ArtistScreen }), b(e));
                    });
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsxs)(p.Dr, {
                            className: (0, r.$)(x().root, i),
                            onClick: A,
                            'data-test-id': d.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, a.jsx)(_.t, {
                                    radius: 'round',
                                    className: x().cover,
                                    children: (0, a.jsx)(u._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: x().image }),
                                }),
                                (0, a.jsx)(m.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        g,
                    ],
                });
            });
        },
        44318: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => o });
            var a = i(29993),
                r = i(72288),
                s = i(18610),
                l = i(16717);
            let o = () => {
                let { fullscreenVideoPlayer: e } = (0, r.g)(),
                    t = (0, s.p)();
                return (0, a.c)(function (i) {
                    let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    (e.setIds(i), e.setClipIndex(a), t((0, l.J)(i, a)), e.modal.open());
                });
            };
        },
        44599: (e, t, i) => {
            'use strict';
            i.d(t, { _: () => u });
            var a = i(87999),
                r = i(38982),
                s = i(84423),
                l = i(89846),
                o = i(64543),
                n = i(63582),
                d = i(29993),
                c = i(12816);
            let u = (0, n.n)({ event: 'LandingBlock.Navigated', kind: 'hook', requiredScopes: ['screen', 'block', 'object'] }, (e) => {
                let t = (0, s.s)(),
                    { hash: i } = (0, l.g)(),
                    { screen: n, block: u, object: p, tab: _ } = (0, o.j)();
                return (0, d.c)(() => {
                    let s = null == n ? void 0 : n.pageIdForFrom;
                    if (!t || !n || !u || !p || void 0 === p.objectId || !s || !c.x.includes(s) || void 0 === i || !e) return;
                    let l = n.pageId;
                    if (void 0 === l) return;
                    let o = {
                        hash: i,
                        pageId: s,
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
                        to: a.AppScreen.VideoScreen,
                    };
                    (c.q.some((e) => e === s) &&
                        ((o.tabId = null == _ ? void 0 : _.tabId),
                        (o.tabPos = null == _ ? void 0 : _.tabPos),
                        (o.isTabSelectedByDefault = null == _ ? void 0 : _.isTabSelectedByDefault)),
                        n.skeletonId && (o.skeletonId = n.skeletonId),
                        n.mainObjectType && (o.mainObjectType = n.mainObjectType),
                        n.mainObjectId && (o.mainObjectId = n.mainObjectId),
                        Object.values(o).some((e) => void 0 === e) || (0, r.QS)(t.evgenInstance, o));
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
            i.d(t, { e: () => a });
            let a = (e) => {
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
            i.d(t, { E: () => r });
            let a = (e, t) => (t > 0 ? Math.floor(e / t) : 0),
                r = (e, t) => {
                    let i = a(e, 3600),
                        r = a(e - 3600 * i, 60),
                        s = e - 3600 * i - 60 * r,
                        l = a(t || e, 3600) > 0,
                        o = [r, s];
                    return (l && o.unshift(i), o.map((e) => String(e).padStart(2, '0')).join(':'));
                };
        },
        64310: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => n });
            var a = i(88800),
                r = i(65724),
                s = i(19994),
                l = i(48082),
                o = i.n(l);
            let n = (e) => {
                let { className: t, textClassName: i, isActive: l } = e;
                return (0, a.jsx)('div', { className: (0, r.$)(o().root, t), children: (0, a.jsx)(s.W, { className: (0, r.$)(o().text, i), isActive: l, radius: 's' }) });
            };
        },
        64420: (e, t, i) => {
            'use strict';
            (i.r(t), i.d(t, { default: () => Z }));
            var a = i(88800),
                r = i(58390),
                s = i(65724),
                l = i(84961),
                o = i(53548),
                n = i(2058),
                d = i(87999),
                c = i(76903),
                u = i(17392),
                p = i(29993),
                _ = i(29504),
                m = i(32596),
                f = i(96237),
                v = i(69323),
                b = i(77605),
                x = i(69630),
                h = i(91959),
                C = i(38501),
                g = i(98427),
                A = i(46422),
                S = i(44230),
                j = i(37670),
                N = i(72288),
                I = i(54320),
                T = i(19998),
                y = i(86790),
                E = i(60266),
                L = i(93317),
                O = i(79418),
                R = i(81685),
                P = i(30144),
                k = i(324),
                w = i(53073),
                M = i(83418),
                D = i(46511),
                U = i(57297),
                W = i(2218),
                z = i(77863),
                V = i(45383),
                B = i(98774);
            async function H(e, t) {
                var i, a, r;
                if (!e) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let s = await (0, D.W)(t.locale),
                    l = s({ id: 'metadata.artist-clips-title' }, { artistName: e.artist.name }),
                    o = s({ id: 'metadata.artist-clips-description' }, { artistName: e.artist.name });
                return {
                    robots: (0, B.G)(e.artist),
                    title: l,
                    description: o,
                    openGraph: (0, U.i)({
                        ogTitle: l,
                        ogDescription: o,
                        ogType: 'website',
                        fullUrl: null != (i = t.fullUrl) ? i : '',
                        locale: t.locale,
                        customImage: (0, M.v)({ host: t.host }),
                        siteName: s({ id: 'metadata.yandex-music' }),
                    }),
                    twitter: (0, W.H)({ cardType: z.W.SUMMARY_LARGE_IMAGE, title: l, description: o }),
                    facebook: (0, w.k)(),
                    appLinks: (0, k.X)({
                        additional: { ...t, url: null != (a = t.url) ? a : '', fullUrl: null != (r = t.fullUrl) ? r : '', host: t.host },
                        appName: s({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, V.S)('/artist/:artistId/clips', t.tld, { params: { artistId: e.artist.id } }),
                };
            }
            var Y = i(27342),
                F = i(63512),
                J = i(52949),
                X = i.n(J);
            let G = (0, l.PA)((e) => {
                var t, i;
                let { artistId: l, preloadedArtist: k, preloadedClips: w } = e,
                    {
                        artist: M,
                        disclaimerModalState: D,
                        settings: { isMobile: U },
                    } = (0, N.g)(),
                    { formatMessage: W } = (0, n.A)(),
                    { contentScrollRef: z, setContentScrollRef: V } = (0, S.g)(),
                    B = (0, A.W)(),
                    J = (0, C.d)();
                (0, h.S)({ artist: null == (t = M.meta) ? void 0 : t.artist, shouldHistoryBack: !0 });
                let G = (0, p.c)((e) => {
                    M.clipsSubpage.getData({ artistId: l, page: e, pageSize: f.EV });
                });
                ((0, I.X)(M.clipsSubpage.pagesLoader, G),
                    (0, F.G)(l),
                    (0, Y._)(M, l),
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
                            a = null == e || null == (t = e.meta) ? void 0 : t.artist,
                            r = null == e ? void 0 : e.infoLoadingState.isLoading,
                            s = null == e ? void 0 : e.infoLoadingState.isRejected,
                            l = (0, o.useCallback)((e) => (s ? {} : a && !r ? H({ artist: (0, R.E)(a) }, e) : void 0), [a, r, s]);
                        (0, P.C)(i.modal.isOpened ? null : l);
                    })(M));
                let K = M.clipsSubpage.isShimmerVisible ? 20 : M.clipsSubpage.items.length,
                    Z = (0, o.useMemo)(() => ({ Footer: () => (0, a.jsx)(E.A, { children: (0, a.jsx)(y.w, { className: X().footer }) }) }), []),
                    Q = (0, o.useMemo)(() => W({ id: 'page.artist-clips-header' }, { artistName: M.commonSubPage.artistName }), [M.commonSubPage.artistName, W]),
                    q = [];
                return (M.clipsSubpage.isNeededToLoad && q.push(M.clipsSubpage.getData({ artistId: l, page: 0, pageSize: f.EV, preloadedClips: w })),
                M.infoLoadingState.isNeededToLoad && q.push(M.getInfo({ artistId: l, preloadedArtist: k })),
                q.length && (0, o.use)(Promise.allSettled(q)),
                (M.clipsSubpage.isNotFound || !J) && (0, r.notFound)(),
                null == (i = M.meta) ? void 0 : i.artist.isLegalRejected)
                    ? (0, a.jsx)(T.M, { modalState: D })
                    : M.clipsSubpage.isRejected
                      ? (0, a.jsx)(m.SomethingWentWrong, {})
                      : (0, a.jsx)(c.a, {
                            pageId: d.AppScreen.ArtistClips,
                            pageIdForFrom: g.b.ARTIST_CLIPS,
                            mainObjectId: l,
                            mainObjectType: d.DomainObjectType.Artist,
                            children: (0, a.jsx)(x.h, {
                                scrollElement: z,
                                outerTitle: Q,
                                children: (0, a.jsxs)('div', {
                                    className: X().root,
                                    'data-test-id': u.Xk.artist.ARTIST_CLIPS_PAGE,
                                    children: [
                                        (0, a.jsx)(L.Y, {
                                            variant: L.V.TEXT,
                                            withForwardControl: !1,
                                            withBackwardControl: B.canBack,
                                            children: (0, a.jsx)(_.DZ, { variant: 'h1', weight: 'bold', size: 'xl', lineClamp: 1, children: Q }),
                                        }),
                                        (0, a.jsx)(O.$, {
                                            className: (0, s.$)(X().scrollContainer, X().important),
                                            listClassName: X().content,
                                            itemClassName: X().item,
                                            customComponents: Z,
                                            itemContentCallback: (e) => {
                                                let t = M.clipsSubpage.items[e];
                                                return t ? (0, a.jsx)(v.F, { clip: t }, t.clipId) : (0, a.jsx)(b.k, { isActive: !0 });
                                            },
                                            totalCount: K,
                                            onGetDataByPage: G,
                                            pageSize: f.EV,
                                            totalRequests: M.clipsSubpage.requestsCount,
                                            handleRef: V,
                                            context: { listAriaLabel: W({ id: 'entity-names.artist-clips-list' }) },
                                            isMobileLayout: U,
                                            useWindowScroll: U,
                                        }),
                                    ],
                                }),
                            }),
                        });
            });
            var K = i(21438);
            let Z = () => {
                let e = (0, r.useSearchParams)().get('artistId');
                return ((e && (0, K.L)(e)) || (0, r.notFound)(), (0, a.jsx)(G, { artistId: e }));
            };
        },
        69323: (e, t, i) => {
            'use strict';
            i.d(t, { F: () => D });
            var a = i(88800),
                r = i(65724),
                s = i(55482),
                l = i(84961),
                o = i(53548),
                n = i(2058),
                d = i(35412),
                c = i(62414),
                u = i(17392),
                p = i(18593),
                _ = i(29993),
                m = i(29832),
                f = i(90688),
                v = i(7555),
                b = i(29504),
                x = i(13946),
                h = i(44599),
                C = i(16717),
                g = i(44318),
                A = i(64284),
                S = i(98427),
                j = i(84384),
                N = i(54965),
                I = i(97361),
                T = i(99313),
                y = i(20585),
                E = i(39079),
                L = i(72288),
                O = i(90224),
                R = i(91292),
                P = i(16704),
                k = i(8299),
                w = i(90865),
                M = i.n(w);
            let D = (0, l.PA)((e) => {
                var t;
                let {
                        titleClassName: i,
                        artistLinkClassName: l,
                        clip: w,
                        withVideo: D = !0,
                        artistIdWithoutLink: U,
                        viewUuid: W,
                        shouldOpenModalOnCardClick: z = !0,
                    } = e,
                    { fullscreenVideoPlayer: V } = (0, L.g)(),
                    { formatMessage: B } = (0, n.A)(),
                    H = (0, g.C)(),
                    { from: Y } = (0, j.f)({ pageId: S.b.VIDEO_PLAYER, contextId: V.state.contextId, contextType: p.K.Various, blockId: A.U.CLIPS }),
                    F = (0, I.P)(null != (t = w.duration) ? t : 0),
                    J = (0, h._)(W),
                    X = (0, c.D)(),
                    G = (0, o.useRef)(null),
                    K = D && w.previewUrl,
                    Z = (0, _.c)(() => {
                        G.current && ((G.current.currentTime = 0), G.current.play());
                    }),
                    Q = (0, o.useMemo)(() => (0, s.A)(Z, 500), [Z]),
                    q = (0, _.c)(() => {
                        var e;
                        null == (e = G.current) || e.pause();
                    }),
                    $ = (0, o.useMemo)(() => V.ids.indexOf(w.clipId), [V, w.clipId]),
                    { isPlaying: ee, togglePlay: et } = (0, E.D)({
                        playContextParams: {
                            contextData: { type: p.K.Various, meta: { id: T.H.VARIOUS_CLIP_CONTEXT }, from: Y },
                            queueParams: { index: $ },
                            entitiesData: V.entitiesData,
                            loadContextMeta: !1,
                        },
                        entityId: String(w.clipId),
                        sonataState: V.state,
                        playbackId: y.V.CLIP,
                    }),
                    ei = z ? w.url : (0, C.J)(V.ids, $),
                    ea = (0, _.c)(() => {
                        z ? (H([w.clipId]), J()) : ee || et();
                    }),
                    er = (0, k.X)({ clip: w, callback: ea }),
                    es = B({ id: 'entity-names.clip-name' }, { clipName: w.title }),
                    el = (0, o.useMemo)(
                        () =>
                            w.isAvailable
                                ? (0, a.jsxs)(v.t, {
                                      radius: 'm',
                                      className: (0, r.$)(M().view, M().cover),
                                      onMouseEnter: Q,
                                      onMouseLeave: q,
                                      onClick: er,
                                      children: [
                                          K &&
                                              (0, a.jsx)('video', {
                                                  className: M().media,
                                                  ref: G,
                                                  poster: w.thumbnail && (0, d.oZ)(w.thumbnail, 1280),
                                                  playsInline: !0,
                                                  muted: !0,
                                                  loop: !0,
                                                  'aria-hidden': !0,
                                                  children: (0, a.jsx)('source', { src: w.previewUrl, type: 'video/mp4' }),
                                              }),
                                          w.thumbnail &&
                                              (0, a.jsx)(f._V, {
                                                  className: M().image,
                                                  'aria-hidden': !0,
                                                  src: w.thumbnail,
                                                  fit: 'cover',
                                                  withAvatarReplace: !0,
                                                  size: 1280,
                                                  createUrlReplacer: d.oZ,
                                              }),
                                          void 0 !== w.duration &&
                                              (0, a.jsx)(b.HL, {
                                                  role: 'text',
                                                  'aria-label': F,
                                                  variant: 'span',
                                                  className: M().duration,
                                                  type: 'entity',
                                                  size: 'xs',
                                                  weight: 'medium',
                                                  children: (0, a.jsx)('span', { 'aria-hidden': 'true', children: (0, N.E)(w.duration, w.duration) }),
                                              }),
                                          (0, a.jsx)(P.D, { variant: 'filled', className: M().playButton, onClick: er, iconSize: 'xl' }),
                                      ],
                                  })
                                : (0, a.jsx)(v.t, {
                                      radius: 'm',
                                      className: M().unavailableCover,
                                      children: (0, a.jsx)(f.Ab, { className: M().image, iconVariant: 'unavailable', 'data-test-id': u.S7.ENTITY_COVER_FALLBACK_IMAGE }),
                                  }),
                        [F, w.isAvailable, w.thumbnail, w.previewUrl, w.duration, Q, q, er, K],
                    ),
                    eo = (0, o.useMemo)(
                        () =>
                            w.hasArtists
                                ? (0, a.jsx)(
                                      x.i,
                                      { linkClassName: (0, r.$)(M().artistLink, l), artists: w.artists, lineClamp: 1, withAllArtistsTitle: !0, artistIdWithoutLink: U },
                                      w.getKey('SeparatedArtists'),
                                  )
                                : null,
                        [U, w, l],
                    );
                return (0, a.jsx)(m.MN, {
                    ref: X,
                    className: M().root,
                    explicitMarkComponent:
                        w.explicitDisclaimer &&
                        (0, a.jsx)(O.N, { getDescriptionTexts: w.getDescriptionTexts, variant: w.explicitDisclaimer, size: 'xxs' }, w.getKey('ExplicitMarkIcon')),
                    'aria-label': es,
                    srTitle: (0, a.jsx)(R.N, { className: M().srTitleLink, href: ei, onClick: er, children: es }),
                    title: (0, a.jsxs)(
                        b.HL,
                        {
                            className: (0, r.$)(M().title, i),
                            variant: 'div',
                            type: 'entity',
                            size: 'm',
                            weight: 'medium',
                            lineClamp: 1,
                            'aria-hidden': !0,
                            children: [
                                (0, a.jsx)(R.N, {
                                    className: M().titleLink,
                                    href: ei,
                                    tabIndex: -1,
                                    'aria-label': es,
                                    onClick: er,
                                    'data-test-id': u.Kq.clip.CLIP_META_TITLE,
                                    children: w.title,
                                }),
                                w.version && (0, a.jsx)(b.HL, { className: M().version, variant: 'span', children: ' '.concat(w.version) }),
                            ],
                        },
                        w.getKey('Title'),
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
        76827: (e) => {
            e.exports = {
                root: 'ClipCardShimmer_root__sIvNr',
                cover: 'ClipCardShimmer_cover__yA4jz',
                title: 'ClipCardShimmer_title__MCApK',
                text: 'ClipCardShimmer_text__ajZGv',
            };
        },
        77605: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => n });
            var a = i(88800),
                r = i(19994),
                s = i(64310),
                l = i(76827),
                o = i.n(l);
            let n = (e) => {
                let { isActive: t } = e;
                return (0, a.jsxs)('div', {
                    className: o().root,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    children: [
                        (0, a.jsx)(r.W, { isActive: t, className: o().cover, radius: 'l' }),
                        (0, a.jsx)(s.n, { isActive: t, className: o().title }),
                        (0, a.jsx)(s.n, { isActive: t, className: o().text }),
                    ],
                });
            };
        },
        80932: (e) => {
            e.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        89557: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 64420));
        },
        90224: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => f });
            var a = i(88800),
                r = i(65724),
                s = i(84961),
                l = i(53548),
                o = i(2058),
                n = i(17392),
                d = i(52300),
                c = i(62837),
                u = i(72288),
                p = i(94398),
                _ = i(17332),
                m = i.n(_);
            let f = (0, s.PA)((e) => {
                let { className: t, getDescriptionTexts: i, trackId: s, containerClassName: _, variant: f, iconVariant: iconOverride, size: v = 'xxxs', ...b } = e,
                    { formatMessage: x } = (0, o.A)(),
                    {
                        settings: { isMobile: h },
                    } = (0, u.g)(),
                    [C, g] = (0, l.useState)(null);
                (0, l.useEffect)(() => {
                    i && i().then(g);
                }, [i, s]);
                let {
                    iconVariant: A,
                    descriptionText: S,
                    isTooltipEnabled: j,
                    ariaLabel: N,
                } = ((e, t) => {
                    let { variant: i, descriptionTexts: a, isMobile: r } = e,
                        s = (null == a ? void 0 : a.join('\n')) || '';
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
                        descriptionText: s,
                        isTooltipEnabled: !!(null == a ? void 0 : a.length) && !r,
                        ariaLabel: s.length > 0 ? s : t({ id: 'extra-explicit.explicit-mark' }),
                    };
                })({ variant: f, descriptionTexts: C, isMobile: h }, x);
                return (0, a.jsx)(p.k, {
                    description: S,
                    placement: 'bottom-start',
                    enabled: j,
                    children: (0, a.jsx)('span', {
                        className: _,
                        children:
                        // for PulseSync: BEGIN render substituted-track badges and custom native disclaimer icons
                        f === c.JU.SUBSTITUTED ? (0, a.jsxs)('svg', {
                            className: (0, r.$)(m().explicitMark, t),
                            viewBox: '0 0 16 16',
                            role: 'img',
                            'aria-label': N,
                            style: { width: 'var(--ym-icon-size-'.concat(v, ')'), height: 'var(--ym-icon-size-'.concat(v, ')') },
                            ...b,
                            'data-test-id': n.S7.EXPLICIT_MARK_ICON,
                            children: [
                                (0, a.jsx)('circle', { cx: '8', cy: '8', r: '5.5', fill: 'none', stroke: 'currentColor', strokeWidth: '1.5' }),
                                (0, a.jsx)('text', {
                                    x: '8', y: '9', fill: 'currentColor', fontSize: '7', fontWeight: '700', textAnchor: 'middle', dominantBaseline: 'middle', children: 'S',
                                }),
                            ],
                        }) : (0, a.jsx)(d.I, {
                            className: (0, r.$)(m().explicitMark, t),
                            'aria-label': N,
                            variant: iconOverride ? d.resolveIcon(iconOverride)?.variant ?? 'exclamation' : A,
                            size: iconOverride ? d.resolveIcon(iconOverride)?.size ?? v : v,
                            style: iconOverride ? { width: `var(--ym-icon-size-${v})`, height: `var(--ym-icon-size-${v})` } : undefined,
                            ...b,
                            'data-test-id': n.S7.EXPLICIT_MARK_ICON,
                        }),
                        // for PulseSync: END render substituted-track badges and custom native disclaimer icons
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
            var a = i(88800),
                r = i(17392),
                s = i(17610),
                l = i(29504),
                o = i(37438),
                n = i.n(o);
            let d = { padding: 8 },
                c = (e) => {
                    let { description: t, enabled: i, title: o, placement: c = 'top', children: u } = e;
                    return (0, a.jsxs)(s.m_, {
                        enabled: i,
                        offsetOptions: 4,
                        shiftOptions: d,
                        flipOptions: d,
                        placement: c,
                        children: [
                            u,
                            (0, a.jsx)(s.ZI, {
                                className: n().root,
                                'data-test-id': r.S7.TOOLTIP_WITH_TITLE,
                                children: (0, a.jsxs)('div', {
                                    className: n().text,
                                    children: [
                                        o && (0, a.jsx)(l.HL, { variant: 'span', type: 'text', size: 's', weight: 'bold', children: o }),
                                        (0, a.jsx)(l.HL, { variant: 'span', type: 'text', size: 's', weight: 'normal', className: n().description, children: t }),
                                    ],
                                }),
                            }),
                        ],
                    });
                };
        },
        97361: (e, t, i) => {
            'use strict';
            i.d(t, { P: () => s });
            var a = i(2058),
                r = i(29831);
            let s = (e) => {
                let { formatMessage: t } = (0, a.A)();
                return (0, r.j)(e, t);
            };
        },
        99313: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => a });
            var a = (function (e) {
                return ((e.VARIOUS_CLIP_CONTEXT = 'various-clip-context'), e);
            })({});
        },
    },
    (e) => {
        (e.O(
            0,
            [
                7437, 4814, 3469, 1833, 917, 8655, 6220, 6706, 4771, 8832, 6904, 4495, 2058, 3578, 8628, 4975, 4827, 8283, 1800, 5151, 9202, 2494, 4732, 9087, 3979, 1928,
                9091, 9124, 900, 9934, 2470, 7670, 2889, 763, 2670, 7358,
            ],
            () => e((e.s = 89557)),
        ),
            (_N_E = e.O()));
    },
]);
