(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [621],
    {
        1344: (e, t, r) => {
            'use strict';
            r.d(t, { Z: () => l });
            let i = [
                    { queryKey: 'utm_campaign', resultKey: 'utmCampaign' },
                    { queryKey: 'utm_medium', resultKey: 'utmMedium' },
                    { queryKey: 'utm_source', resultKey: 'utmSource' },
                    { queryKey: 'utm_term', resultKey: 'utmTerm' },
                    { queryKey: 'yclid', resultKey: 'yclid' },
                ],
                l = (e) =>
                    i.reduce((t, r) => {
                        let { queryKey: i, resultKey: l } = r;
                        return ('string' == typeof e[i] && (t[l] = e[i]), t);
                    }, {});
        },
        8299: (e, t, r) => {
            'use strict';
            r.d(t, { X: () => l });
            var i = r(58217);
            let l = (e) => {
                let { clip: t, callback: r, disclaimerRejectHandler: l } = e;
                return (0, i.l)({ entity: t, callback: r, onReject: l, modalBehavior: { closeOnOutside: !1, closeOnEscape: !1 }, preventDefaultWhenSafe: !0 });
            };
        },
        9630: (e, t, r) => {
            'use strict';
            r.d(t, { G: () => l, e: () => a });
            var i = r(53548);
            let l = (0, i.createContext)(null);
            function a() {
                return (0, i.useContext)(l);
            }
        },
        13946: (e, t, r) => {
            'use strict';
            r.d(t, { i: () => K });
            var i = r(88800),
                l = r(65724),
                a = r(84961),
                o = r(53548),
                s = r(79070),
                n = r(17610),
                d = r(24548),
                u = r(29993),
                c = r(72288),
                p = r(35994);
            let _ = (e, t) => {
                let { withLink: r, separator: i } = t,
                    l = r && !e.various ? (0, p.R)(e.id) : null;
                return { artist: e, name: e.name, separator: i, link: l };
            };
            var m = r(21010),
                f = r.n(m),
                v = r(17392),
                x = r(29504),
                h = r(91292),
                C = r(2058),
                g = r(92716),
                y = r(96527),
                b = r(78940),
                A = r(55693),
                S = r(58217);
            let T = (0, a.PA)((e) => {
                    let { item: t, linkClassName: r, captionClassName: l, captionSize: a = 'm', allArtistsTitle: o, withCustomTooltip: s, hoverSettings: d } = e,
                        {
                            name: p,
                            link: _,
                            title: m,
                            ariaLabel: f,
                            tooltipText: T,
                            isTooltipEnabled: I,
                            handleNavigate: j,
                        } = ((e) => {
                            var t, r;
                            let { item: i, allArtistsTitle: l, withCustomTooltip: a } = e,
                                { formatMessage: o } = (0, C.A)(),
                                s = ((e, t) => {
                                    let { item: r, allArtistsTitle: i, withCustomTooltip: l } = e,
                                        a = i || r.name;
                                    return {
                                        ...r,
                                        title: l ? void 0 : a,
                                        ariaLabel: r.link ? t({ id: 'entity-names.artist-name' }, { artistName: r.name }) : void 0,
                                        tooltipText: a,
                                        isTooltipEnabled: !i && l,
                                    };
                                })({ item: i, allArtistsTitle: l, withCustomTooltip: a }, o),
                                {
                                    track: n,
                                    settings: { isMobile: d },
                                } = (0, c.g)(),
                                p = (0, b.Z)(null != (r = null == (t = s.link) ? void 0 : t.href) ? r : s.artist.url),
                                { sendNavigateSearchFeedback: _ } = (0, A.z)(),
                                m = (0, y.N)(),
                                f = (0, u.c)((e) => {
                                    (d && n.isOpened && n.close(), p(e));
                                }),
                                v = ((e) => {
                                    let { artist: t, callback: r } = e,
                                        { currentTrackInfo: i, fullscreenPlayer: l, fullscreenVideoPlayer: a } = (0, c.g)(),
                                        { modal: o } = i;
                                    return (0, S.l)({
                                        entity: t,
                                        callback: r,
                                        onBeforeHandle: (e) => {
                                            (null == e || e.stopPropagation(), o.isOpened && (i.reset(), o.close()), l.modal.isOpened && l.modal.close());
                                        },
                                        onAfterHandled: () => {
                                            a.modal.isOpened && (a.modal.close(), a.reset());
                                        },
                                        preventDefaultWhenSafe: !0,
                                    });
                                })({ artist: s.artist, callback: f }),
                                x = (0, u.c)((e) => {
                                    (m({ to: g.AppScreen.ArtistScreen }), null == _ || _(), v(e));
                                });
                            return { ...s, handleNavigate: x };
                        })({ item: t, allArtistsTitle: o, withCustomTooltip: s });
                    return _
                        ? (0, i.jsx)(h.N, {
                              ..._,
                              'aria-label': f,
                              className: r,
                              onClick: j,
                              title: m,
                              'data-test-id': v.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, i.jsx)(n.m_, {
                                  enabled: I,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: T,
                                  hoverSettings: d,
                                  children: (0, i.jsx)(x.HL, { variant: 'span', type: 'entity', size: a, weight: 'medium', className: l, children: p }),
                              }),
                          })
                        : (0, i.jsx)(n.m_, {
                              enabled: I,
                              offsetOptions: 4,
                              placement: 'top',
                              text: T,
                              hoverSettings: d,
                              children: (0, i.jsx)(x.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: a,
                                  weight: 'medium',
                                  className: l,
                                  title: m,
                                  'data-test-id': v.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: p,
                              }),
                          });
                }),
                I = (e) => {
                    let { group: t, linkClassName: r, captionClassName: l, captionSize: a, allArtistsTitle: s, withCustomTooltip: n, hoverSettings: d } = e;
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            t.primary.separator,
                            (0, i.jsx)(T, {
                                item: t.primary,
                                linkClassName: r,
                                captionClassName: l,
                                captionSize: a,
                                allArtistsTitle: s,
                                withCustomTooltip: n,
                                hoverSettings: d,
                            }),
                            t.decomposed.map((e) =>
                                (0, i.jsxs)(
                                    o.Fragment,
                                    {
                                        children: [
                                            e.separator,
                                            (0, i.jsx)(T, {
                                                item: e,
                                                linkClassName: r,
                                                captionClassName: l,
                                                captionSize: a,
                                                allArtistsTitle: s,
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
            var j = r(88969),
                E = r(65453);
            let N = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: r, handleOnSpoilerClick: a } = e;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        ' ',
                        (0, i.jsx)(E.N, {
                            role: 'button',
                            href: '',
                            className: (0, l.$)(f().spoiler, r),
                            onClick: a,
                            rel: 'nofollow',
                            'data-test-id': v.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, i.jsx)(j.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var R = r(61013),
                L = r(87819),
                P = r(40634),
                O = r(48468),
                M = r.n(O);
            let k = (0, a.PA)((e) => {
                    let { label: t, artists: r, forwardRef: l } = e;
                    return (0, i.jsxs)(n.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, L.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, i.jsx)('div', { ref: l, children: t }),
                            (0, i.jsx)(n.ZI, { className: M().tooltipContent, children: r.map((e) => (0, i.jsx)(P.V, { artist: e, className: M().artistItem }, e.id)) }),
                        ],
                    });
                }),
                w = (0, o.forwardRef)((e, t) => (0, i.jsx)(k, { forwardRef: t, ...e }));
            var D = r(19934),
                U = r(70396),
                W = r.n(U);
            let B = (0, a.PA)((e) => {
                    let { label: t, artists: r } = e,
                        { formatMessage: a } = (0, C.A)();
                    return (0, i.jsx)(D.W1, {
                        isMobile: !0,
                        className: (0, l.$)(W().root, W().important),
                        label: t,
                        ariaLabel: a({ id: 'interface-actions.context-menu-artists' }),
                        children: r.map((e) => (0, i.jsx)(P.V, { artist: e }, e.id)),
                    });
                }),
                V = (0, a.PA)((e) => {
                    let { artists: t = [], label: r, labelRef: l } = e,
                        [a, n] = (0, o.useState)(!1),
                        {
                            settings: { isMobile: d },
                        } = (0, c.g)(),
                        p = (0, u.c)(() => {
                            let e = l.current;
                            e && n(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        _ = (0, s.L)(() =>
                            (0, R.A)(() => {
                                p();
                            }, 100),
                        );
                    if (
                        ((0, o.useEffect)(
                            () => (
                                window.addEventListener('resize', _),
                                p(),
                                () => {
                                    window.removeEventListener('resize', _);
                                }
                            ),
                            [_, p],
                        ),
                        (0, o.useEffect)(() => {
                            p();
                        }, [t, p]),
                        0 !== t.length)
                    )
                        return (a || d) && (!d || 1 !== t.length) ? (d ? (0, i.jsx)(B, { artists: t, label: r }) : (0, i.jsx)(w, { artists: t, label: r })) : r;
                }),
                K = (0, a.PA)((e) => {
                    let {
                            className: t,
                            lineClamp: r,
                            spoilerClassName: a,
                            linkClassName: p,
                            captionClassName: m,
                            captionSize: v,
                            variant: x = 'breakAll',
                            spoilerComponent: h,
                            ...C
                        } = e,
                        g = ((e) => {
                            var t, r, i;
                            let { separator: l, visibleArtistsCount: a, withLink: s, withComposer: n, artistIdWithoutLink: d, withContextMenu: p } = e,
                                m = null != (t = e.artists) ? t : [],
                                f = null == (r = e.withAllArtistsTitle) || r,
                                v = null == (i = e.withCustomTooltip) || i,
                                x = (0, o.useRef)(null),
                                [h, C] = (0, o.useState)(!1),
                                {
                                    settings: { isMobile: g },
                                } = (0, c.g)(),
                                y = ((!g || 1 === m.length) && p) || !p,
                                b = ((e, t) => {
                                    var r, i, l;
                                    let a = null == (r = null == t ? void 0 : t.withComposer) || r,
                                        o = null == (i = null == t ? void 0 : t.withLink) || i,
                                        s = null != (l = null == t ? void 0 : t.separator) ? l : ', ',
                                        n = e
                                            .flatMap((e) => {
                                                var t;
                                                let r = (null != (t = e.decomposed) ? t : []).map((e) => e.name);
                                                return [e.name, ...r];
                                            })
                                            .join(s),
                                        { visibleArtists: d, hiddenArtistsCount: u } = ((e, t) => {
                                            let { visibleArtistsCount: r, withComposer: i } = t;
                                            return {
                                                visibleArtists: (r ? e.slice(0, r) : e).filter((e) => i || !e.isComposer),
                                                hiddenArtistsCount: r && r < e.length ? e.length - r : 0,
                                            };
                                        })(e, { withComposer: a, visibleArtistsCount: null == t ? void 0 : t.visibleArtistsCount });
                                    return {
                                        groups: d.map((e, r) =>
                                            ((e, t) => {
                                                var r;
                                                let { withLink: i, separator: l, isFirst: a } = t;
                                                return {
                                                    primary: _(e, { withLink: i, separator: a ? void 0 : l }),
                                                    decomposed: (null != (r = e.decomposed) ? r : []).map((e) => {
                                                        let t = l ? e.separator : '';
                                                        return _(e, { withLink: i, separator: t });
                                                    }),
                                                };
                                            })(e, { withLink: o && e.id !== (null == t ? void 0 : t.artistIdWithoutLink), separator: s, isFirst: 0 === r }),
                                        ),
                                        allArtistsTitle: n,
                                        hiddenArtistsCount: u,
                                    };
                                })(m, { separator: l, visibleArtistsCount: h ? void 0 : a, withComposer: n, withLink: !!y && s, artistIdWithoutLink: d }),
                                A = f ? b.allArtistsTitle : '',
                                S = (0, u.c)((e) => {
                                    (C(!0), e.preventDefault());
                                });
                            return {
                                artists: m,
                                groups: b.groups,
                                hiddenArtistsCount: b.hiddenArtistsCount,
                                allArtistsTitle: A,
                                withCustomTooltip: v,
                                withContextMenu: p,
                                labelRef: x,
                                handleOnSpoilerClick: S,
                                isTooltipEnabled: !!A && v && !p && !g,
                                title: !A || v || p ? void 0 : A,
                            };
                        })(C),
                        y = (0, s.L)(() =>
                            g.hiddenArtistsCount <= 0
                                ? null
                                : (0, o.isValidElement)(h)
                                  ? h
                                  : (0, i.jsx)(N, { spoilerClassName: a, spoilerArtistsCount: g.hiddenArtistsCount, handleOnSpoilerClick: g.handleOnSpoilerClick }),
                        ),
                        b = (0, i.jsx)(n.m_, {
                            referenceRef: g.labelRef,
                            enabled: g.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: g.allArtistsTitle,
                            hoverSettings: d.V,
                            children: (0, i.jsxs)('div', {
                                style: r ? { WebkitLineClamp: r } : void 0,
                                className: (0, l.$)(f().root, f()['root_variant_'.concat(x)], { [f().root_clamp]: r && r > 0, [f().ellipsis]: !r }, t),
                                title: g.title,
                                children: [
                                    g.groups.map((e) =>
                                        (0, i.jsx)(
                                            I,
                                            {
                                                group: e,
                                                linkClassName: p,
                                                captionClassName: m,
                                                captionSize: v,
                                                allArtistsTitle: g.allArtistsTitle,
                                                withCustomTooltip: g.withCustomTooltip,
                                                hoverSettings: d.V,
                                            },
                                            e.primary.artist.key,
                                        ),
                                    ),
                                    y,
                                ],
                            }),
                        });
                    return g.withContextMenu ? (0, i.jsx)(V, { labelRef: g.labelRef, artists: g.artists, label: b }) : b;
                });
        },
        16704: (e, t, r) => {
            'use strict';
            r.d(t, { D: () => _ });
            var i = r(88800),
                l = r(84961),
                a = r(53548),
                o = r(2058),
                s = r(17392),
                n = r(29993),
                d = r(96817),
                u = r(52300),
                c = r(76675);
            let p = (0, l.PA)((e) => {
                    let {
                            iconSize: t,
                            className: r,
                            size: l,
                            variant: a = 'default',
                            isPlaying: p = !1,
                            onClick: _,
                            iconClassName: m,
                            disabled: f,
                            color: v,
                            buttonVariant: x = 'text',
                            children: h,
                            radius: C = 'round',
                            withHover: g,
                            withRipple: y = !1,
                            ariaDescribedBy: b,
                            forwardRef: A,
                            tabIndex: S,
                            ariaHidden: T,
                            shouldSendAnalyticsOnPlayClick: I,
                        } = e,
                        j = (0, c.b)(),
                        { formatMessage: E } = (0, o.A)(),
                        N = ''.concat(p ? 'pause' : 'play').concat('filled' === a ? '_filled' : ''),
                        R = p ? s.S7.PAUSE_BUTTON : s.S7.PLAY_BUTTON,
                        L = E(p ? { id: 'player-actions.pause' } : { id: 'player-actions.play' }),
                        P = (0, n.c)((e) => {
                            (e.stopPropagation(), e.preventDefault(), null == _ || _(e), I && j(!p));
                        });
                    return (0, i.jsx)(d.$, {
                        className: r,
                        variant: x,
                        color: v,
                        radius: C,
                        size: l,
                        flexIcon: !0,
                        withRipple: y,
                        'aria-label': L,
                        onClick: P,
                        icon: (0, i.jsx)(u.I, { variant: N, size: t, className: m }),
                        disabled: f,
                        withHover: g,
                        'aria-describedby': b,
                        ref: A,
                        tabIndex: S,
                        'aria-hidden': T,
                        'data-test-id': R,
                        children: h,
                    });
                }),
                _ = (0, a.forwardRef)((e, t) => (0, i.jsx)(p, { forwardRef: t, ...e }));
        },
        16717: (e, t, r) => {
            'use strict';
            r.d(t, { J: () => o });
            var i = r(4370),
                l = r(34303),
                a = r(67174);
            let o = function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    { href: r } = (0, a.u)(i.Z.video.href, { query: { [l.K.IDS]: e.join(','), [l.K.ACTIVE_INDEX]: String(t) } });
                return r;
            };
        },
        17332: (e) => {
            e.exports = { explicitMark: 'ExplicitMarkIcon_explicitMark__0BPeQ' };
        },
        17610: (e, t, r) => {
            'use strict';
            r.d(t, { ZI: () => p, m_: () => c });
            var i,
                l = r(87819),
                a = r(68211),
                o = r(53548),
                s = {
                    5881: (e, t, r) => {
                        function i() {
                            for (var e, t, r = 0, i = ''; r < arguments.length;)
                                (e = arguments[r++]) &&
                                    (t = (function e(t) {
                                        var r,
                                            i,
                                            l = '';
                                        if ('string' == typeof t || 'number' == typeof t) l += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (i = e(t[r])) && (l && (l += ' '), (l += i));
                                            else for (r in t) t[r] && (l && (l += ' '), (l += r));
                                        return l;
                                    })(e)) &&
                                    (i && (i += ' '), (i += t));
                            return i;
                        }
                        (r.r(t), r.d(t, { clsx: () => i, default: () => l }));
                        let l = i;
                    },
                    4295: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => i }));
                        let i = { root: 'QhR4J536RmNHBB5bZYwF', text: 'Fqg1VWCJUfasVVxqICeO' };
                    },
                    1246: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => i }));
                        let i = {
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
                    61: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => i }));
                        let i = {
                            root: '_MWOVuZRvUQdXKTMcOPx',
                            root_clamp: 'LezmJlldtbHWqU7l1950',
                            root_clamp_oneline: 'oyQL2RSmoNbNQf3Vc6YI',
                            root_clamp_multiline: 'jMyoZB5J9iZbzJmWOrF0',
                        };
                    },
                    9097: (e, t) => {
                        var r = Symbol.for('react.transitional.element');
                        function i(e, t, i) {
                            var l = null;
                            if ((void 0 !== i && (l = '' + i), void 0 !== t.key && (l = '' + t.key), 'key' in t))
                                for (var a in ((i = {}), t)) 'key' !== a && (i[a] = t[a]);
                            else i = t;
                            return { $$typeof: r, type: e, key: l, ref: void 0 !== (t = i.ref) ? t : null, props: i };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = i), (t.jsxs = i));
                    },
                    4377: (e, t, r) => {
                        e.exports = r(9097);
                    },
                    853: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Tooltip = void 0));
                        let i = r(4377),
                            l = r(810),
                            a = r(1964),
                            o = r(2660),
                            s = r(3343),
                            n = r(1229);
                        t.Tooltip = (e) => {
                            let { enableAriaDescribedby: t = !1, text: r, children: d, referenceRef: u, ...c } = e,
                                [p, _] = Array.isArray(d) ? d : [d],
                                m = (0, n.useTooltip)(c),
                                f = (0, l.useId)(),
                                v = (0, l.useId)(),
                                x = (0, l.useId)(),
                                h = (0, a.useMergeRefs)([m.refs.setReference, u]);
                            return (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, l.cloneElement)(p, {
                                        ref: h,
                                        ...(t ? { 'aria-describedby': f } : {}),
                                        ...m.getReferenceProps(),
                                        ...(0, o.getDataAttrFromProps)(c),
                                        key: v,
                                    }),
                                    m.context.open
                                        ? (0, l.cloneElement)(null != _ ? _ : (0, i.jsx)(s.TooltipContent, {}), {
                                              ref: m.refs.setFloating,
                                              style: { ...m.floatingStyles, visibility: m.referenceHidden ? 'hidden' : 'visible' },
                                              text: r,
                                              arrow: m.arrow,
                                              ...(t ? { id: f } : {}),
                                              ...m.getFloatingProps(),
                                              key: x,
                                          })
                                        : null,
                                ],
                            });
                        };
                    },
                    3343: function (e, t, r) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.TooltipContent = t.TooltipContentComponent = void 0));
                        let l = r(4377),
                            a = r(5881),
                            o = r(810),
                            s = r(1964),
                            n = r(3412),
                            d = i(r(4295));
                        ((t.TooltipContentComponent = (e) => {
                            let { className: t, children: r, arrow: i, rootNode: u, forwardRef: c, text: p, ..._ } = e;
                            return (0, l.jsx)(s.FloatingPortal, {
                                root: u,
                                children: (0, l.jsxs)('div', {
                                    className: (0, a.clsx)(d.default.root, t),
                                    ref: c,
                                    ..._,
                                    children: [
                                        (0, o.isValidElement)(i) && i,
                                        (0, l.jsx)(n.Caption, {
                                            variant: 'div',
                                            type: 'text',
                                            size: 's',
                                            weight: 'medium',
                                            className: d.default.text,
                                            children: null != r ? r : p,
                                        }),
                                    ],
                                }),
                            });
                        }),
                            (t.TooltipContent = (0, o.forwardRef)((e, r) => (0, l.jsx)(t.TooltipContentComponent, { forwardRef: r, ...e }))));
                    },
                    1229: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useTooltip = void 0));
                        let i = r(4377),
                            l = r(810),
                            a = r(1964),
                            o = { delay: { open: 200, close: 0 } };
                        t.useTooltip = function (e) {
                            let {
                                    initialOpen: t = !1,
                                    placement: r = 'top',
                                    open: s,
                                    onOpenChange: n,
                                    isHoverEnabled: d = !0,
                                    isFocusEnabled: u = !0,
                                    offsetOptions: c,
                                    flipOptions: p = {},
                                    shiftOptions: _ = {},
                                    hoverSettings: m = o,
                                    enabled: f = !0,
                                    arrowProps: v,
                                } = e,
                                [x, h] = (0, l.useState)(t),
                                C = (0, l.useRef)(null),
                                g = null != s ? s : x,
                                y = null != n ? n : h,
                                b = (0, a.useFloating)({
                                    placement: r,
                                    open: g,
                                    onOpenChange: y,
                                    whileElementsMounted: a.autoUpdate,
                                    middleware: [
                                        (0, a.offset)(c),
                                        (0, a.flip)({ crossAxis: r.includes('-'), ...p }),
                                        (0, a.shift)(_),
                                        (0, a.arrow)({ element: C }),
                                        (0, a.hide)(),
                                    ],
                                }),
                                A = b.context,
                                S = (0, a.useHover)(A, { move: !1, enabled: d && f, ...m }),
                                T = (0, a.useFocus)(A, { enabled: u && f }),
                                I = (0, a.useDismiss)(A),
                                j = (0, a.useRole)(A, { role: 'tooltip' }),
                                E = (0, a.useInteractions)([S, T, I, j]),
                                N = (0, l.useMemo)(() => {
                                    if (v) return (0, i.jsx)(a.FloatingArrow, { ref: C, context: b.context, ...v });
                                }, [v, b.context]);
                            return (0, l.useMemo)(() => {
                                var e;
                                return { open: g, setOpen: y, arrow: N, referenceHidden: null == (e = b.middlewareData.hide) ? void 0 : e.referenceHidden, ...E, ...b };
                            }, [g, y, N, E, b]);
                        };
                    },
                    3412: function (e, t, r) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Caption = t.CaptionComponent = void 0));
                        let l = r(4377),
                            a = r(5881),
                            o = r(810),
                            s = r(5987),
                            n = i(r(1246));
                        ((t.CaptionComponent = (e) => {
                            let { forwardRef: t, variant: r, type: i = 'text', size: o = 's', className: d, children: u, weight: c = 'medium', ...p } = e;
                            return (0, l.jsx)(s.Typography, {
                                variant: r,
                                ref: t,
                                className: (0, a.clsx)(n.default.root, n.default['root_'.concat(i, '_').concat(o)], n.default['root_weight_'.concat(c)], d),
                                ...p,
                                children: u,
                            });
                        }),
                            (t.Caption = (0, o.forwardRef)((e, r) => (0, l.jsx)(t.CaptionComponent, { forwardRef: r, ...e }))));
                    },
                    5987: function (e, t, r) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Typography = t.TypographyComponent = void 0));
                        let l = r(4377),
                            a = r(5881),
                            o = r(810),
                            s = i(r(61));
                        function n(e) {
                            let { forwardRef: t, style: r, className: i, children: o, variant: n, lineClamp: d, ...u } = e,
                                c = d && 'string' == typeof o ? o : void 0;
                            return (0, l.jsx)(n, {
                                style: { ...r, WebkitLineClamp: d },
                                ref: t,
                                title: c,
                                className: (0, a.clsx)(
                                    s.default.root,
                                    { [s.default.root_clamp]: d && d > 0, [s.default.root_clamp_oneline]: d && 1 === d, [s.default.root_clamp_multiline]: d && d > 1 },
                                    i,
                                ),
                                ...u,
                                children: o,
                            });
                        }
                        ((t.TypographyComponent = n), (t.Typography = (0, o.forwardRef)((e, t) => (0, l.jsx)(n, { forwardRef: t, ...e }))));
                    },
                    1964: (e) => {
                        e.exports = l;
                    },
                    2660: (e) => {
                        e.exports = a;
                    },
                    810: (e) => {
                        e.exports = i || (i = r.t(o, 2));
                    },
                },
                n = {};
            function d(e) {
                var t = n[e];
                if (void 0 !== t) return t.exports;
                var r = (n[e] = { exports: {} });
                return (s[e].call(r.exports, r, r.exports, d), r.exports);
            }
            ((d.d = (e, t) => {
                for (var r in t) d.o(t, r) && !d.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            }),
                (d.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (d.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var u = {};
            (() => {
                (Object.defineProperty(u, 'X$', { value: !0 }), (u._v = u.u = void 0));
                var e = d(853);
                Object.defineProperty(u, 'u', {
                    enumerable: !0,
                    get: function () {
                        return e.Tooltip;
                    },
                });
                var t = d(3343);
                Object.defineProperty(u, '_v', {
                    enumerable: !0,
                    get: function () {
                        return t.TooltipContent;
                    },
                });
            })();
            var c = u.u,
                p = u._v;
            u.X$;
        },
        18610: (e, t, r) => {
            'use strict';
            r.d(t, { p: () => l });
            var i = r(53548);
            let l = () =>
                (0, i.useCallback)((e) => {
                    {
                        let t = window.history.state;
                        window.history.pushState(t, '', e);
                    }
                }, []);
        },
        20585: (e, t, r) => {
            'use strict';
            r.d(t, { V: () => i });
            var i = (function (e) {
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
        24548: (e, t, r) => {
            'use strict';
            r.d(t, { V: () => i });
            let i = { delay: { open: 1e3, close: 0 } };
        },
        29215: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 64420));
        },
        29831: (e, t, r) => {
            'use strict';
            r.d(t, { j: () => l });
            var i = r(48987);
            let l = (e, t) => {
                let { seconds: r, hours: l, minutes: a } = (0, i.e)(e);
                return t({ id: 'time.hours-minutes-seconds' }, { hours: l, minutes: a, seconds: r });
            };
        },
        29832: (e, t, r) => {
            'use strict';
            r.d(t, { MN: () => u, hg: () => d });
            var i,
                l = r(53548),
                a = {
                    5881: (e, t, r) => {
                        function i() {
                            for (var e, t, r = 0, i = ''; r < arguments.length;)
                                (e = arguments[r++]) &&
                                    (t = (function e(t) {
                                        var r,
                                            i,
                                            l = '';
                                        if ('string' == typeof t || 'number' == typeof t) l += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (i = e(t[r])) && (l && (l += ' '), (l += i));
                                            else for (r in t) t[r] && (l && (l += ' '), (l += r));
                                        return l;
                                    })(e)) &&
                                    (i && (i += ' '), (i += t));
                            return i;
                        }
                        (r.r(t), r.d(t, { clsx: () => i, default: () => l }));
                        let l = i;
                    },
                    8765: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => i }));
                        let i = {
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
                    3550: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => i }));
                        let i = {
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
                    4353: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => i }));
                        let i = { root: 'LizdJ2L0HW7JWOvPrfly' };
                    },
                    7319: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => i }));
                        let i = { root: 'eaYyesBmJL_NbkgoYR1c', focusable: 'uL1dD5rxgI4bPmfyMMe7' };
                    },
                    1246: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => i }));
                        let i = {
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
                    2445: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => i }));
                        let i = {
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
                    61: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => i }));
                        let i = {
                            root: '_MWOVuZRvUQdXKTMcOPx',
                            root_clamp: 'LezmJlldtbHWqU7l1950',
                            root_clamp_oneline: 'oyQL2RSmoNbNQf3Vc6YI',
                            root_clamp_multiline: 'jMyoZB5J9iZbzJmWOrF0',
                        };
                    },
                    9097: (e, t) => {
                        var r = Symbol.for('react.transitional.element');
                        function i(e, t, i) {
                            var l = null;
                            if ((void 0 !== i && (l = '' + i), void 0 !== t.key && (l = '' + t.key), 'key' in t))
                                for (var a in ((i = {}), t)) 'key' !== a && (i[a] = t[a]);
                            else i = t;
                            return { $$typeof: r, type: e, key: l, ref: void 0 !== (t = i.ref) ? t : null, props: i };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = i), (t.jsxs = i));
                    },
                    4377: (e, t, r) => {
                        e.exports = r(9097);
                    },
                    7742: function (e, t, r) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.CardControls = void 0));
                        let l = r(4377),
                            a = r(5881),
                            o = r(8532),
                            s = i(r(8765));
                        t.CardControls = (e) => {
                            let {
                                    className: t,
                                    playControl: r,
                                    likeControl: i,
                                    menuControl: n,
                                    pinControl: d,
                                    trailerControl: u,
                                    isVisible: c,
                                    radius: p = 'default',
                                    bottomContainerClassName: _,
                                    labelText: m,
                                } = e,
                                f = u || r,
                                v = n || i;
                            return (0, l.jsxs)('div', {
                                className: (0, a.clsx)(
                                    s.default.root,
                                    s.default.controls,
                                    { [s.default.controls_visible]: c },
                                    s.default['controls_radius_'.concat(p)],
                                    t,
                                ),
                                children: [
                                    (0, l.jsx)('div', { className: s.default.top, children: d }),
                                    (0, l.jsxs)('div', {
                                        className: (0, a.clsx)(s.default.bottom, _),
                                        children: [
                                            f && (0, l.jsxs)('div', { className: s.default.bottom_left, children: [u, r] }),
                                            v && (0, l.jsxs)('div', { className: s.default.bottom_right, children: [n, i] }),
                                        ],
                                    }),
                                    !!m && (0, l.jsx)(o.Label, { className: s.default.label, children: m }),
                                ],
                            });
                        };
                    },
                    7093: function (e, t, r) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.EntityCard = void 0));
                        let l = r(4377),
                            a = r(810),
                            o = r(5881),
                            s = r(8903),
                            n = r(6530),
                            d = i(r(3550)),
                            u = (e) => {
                                let {
                                    forwardRef: t,
                                    view: r,
                                    className: i,
                                    textPosition: a = 'left',
                                    contentLinesCount: u = 2,
                                    title: c,
                                    description: p,
                                    explicitMarkComponent: _,
                                    chart: m,
                                    children: f,
                                    srTitle: v,
                                    wrapperClassName: x,
                                    ...h
                                } = e;
                                return (0, l.jsxs)('div', {
                                    className: (0, o.clsx)(d.default.root, i),
                                    ref: t,
                                    ...h,
                                    children: [
                                        (0, l.jsx)(n.SROnly, { children: null != v ? v : c }),
                                        (0, l.jsx)('div', { className: d.default.viewContainer, children: r }),
                                        (0, l.jsxs)('div', {
                                            className: (0, o.clsx)(d.default.wrapper, x),
                                            children: [
                                                m,
                                                (0, l.jsxs)('div', {
                                                    className: (0, o.clsx)(
                                                        d.default.content,
                                                        d.default['content_'.concat(a)],
                                                        d.default['content_linesCount_'.concat(u)],
                                                    ),
                                                    children: [
                                                        c &&
                                                            (0, l.jsxs)('div', {
                                                                className: d.default.titleContainer,
                                                                children: [
                                                                    (0, l.jsx)(s.Caption, {
                                                                        className: d.default.title,
                                                                        variant: 'div',
                                                                        type: 'entity',
                                                                        size: 's',
                                                                        weight: 'medium',
                                                                        lineClamp: 2,
                                                                        children: c,
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
                        t.EntityCard = (0, a.forwardRef)((e, t) => (0, l.jsx)(u, { forwardRef: t, ...e }));
                    },
                    2018: function (e, t, r) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Label = void 0));
                        let l = r(4377),
                            a = r(5881),
                            o = r(8903),
                            s = i(r(4353));
                        t.Label = (e) => {
                            let { children: t, className: r, size: i = 's', ...n } = e;
                            return (0, l.jsx)(o.Caption, {
                                variant: 'div',
                                type: 'text',
                                size: i,
                                lineClamp: 1,
                                className: (0, a.clsx)(s.default.root, r),
                                ...n,
                                children: t,
                            });
                        };
                    },
                    8532: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Label = void 0));
                        var i = r(2018);
                        Object.defineProperty(t, 'Label', {
                            enumerable: !0,
                            get: function () {
                                return i.Label;
                            },
                        });
                    },
                    5531: function (e, t, r) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0));
                        let l = r(4377),
                            a = r(5881),
                            o = r(810),
                            s = i(r(7319));
                        t.SROnly = (e) => {
                            let { className: t, focusable: r, children: i, ...n } = e,
                                d = (0, a.clsx)(s.default.root, { [s.default.focusable]: r }, t);
                            return (0, o.isValidElement)(i)
                                ? (0, o.cloneElement)(i, { ...n, className: (0, a.clsx)(d, i.props.className) })
                                : (0, l.jsx)('span', { className: d, ...n, children: i });
                        };
                    },
                    6530: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0));
                        var i = r(5531);
                        Object.defineProperty(t, 'SROnly', {
                            enumerable: !0,
                            get: function () {
                                return i.SROnly;
                            },
                        });
                    },
                    3412: function (e, t, r) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Caption = t.CaptionComponent = void 0));
                        let l = r(4377),
                            a = r(5881),
                            o = r(810),
                            s = r(5987),
                            n = i(r(1246));
                        ((t.CaptionComponent = (e) => {
                            let { forwardRef: t, variant: r, type: i = 'text', size: o = 's', className: d, children: u, weight: c = 'medium', ...p } = e;
                            return (0, l.jsx)(s.Typography, {
                                variant: r,
                                ref: t,
                                className: (0, a.clsx)(n.default.root, n.default['root_'.concat(i, '_').concat(o)], n.default['root_weight_'.concat(c)], d),
                                ...p,
                                children: u,
                            });
                        }),
                            (t.Caption = (0, o.forwardRef)((e, r) => (0, l.jsx)(t.CaptionComponent, { forwardRef: r, ...e }))));
                    },
                    1641: function (e, t, r) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Heading = t.HeadingComponent = void 0));
                        let l = r(4377),
                            a = r(5881),
                            o = r(810),
                            s = r(5987),
                            n = i(r(2445));
                        ((t.HeadingComponent = (e) => {
                            let { forwardRef: t, variant: r, weight: i = 'bold', size: o = 's', className: d, children: u, ...c } = e;
                            return (0, l.jsx)(s.Typography, {
                                variant: r,
                                ref: t,
                                className: (0, a.clsx)(n.default.root, n.default['root_size_'.concat(o)], n.default['root_weight_'.concat(i)], d),
                                ...c,
                                children: u,
                            });
                        }),
                            (t.Heading = (0, o.forwardRef)((e, r) => (0, l.jsx)(t.HeadingComponent, { forwardRef: r, ...e }))));
                    },
                    5987: function (e, t, r) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Typography = t.TypographyComponent = void 0));
                        let l = r(4377),
                            a = r(5881),
                            o = r(810),
                            s = i(r(61));
                        function n(e) {
                            let { forwardRef: t, style: r, className: i, children: o, variant: n, lineClamp: d, ...u } = e,
                                c = d && 'string' == typeof o ? o : void 0;
                            return (0, l.jsx)(n, {
                                style: { ...r, WebkitLineClamp: d },
                                ref: t,
                                title: c,
                                className: (0, a.clsx)(
                                    s.default.root,
                                    { [s.default.root_clamp]: d && d > 0, [s.default.root_clamp_oneline]: d && 1 === d, [s.default.root_clamp_multiline]: d && d > 1 },
                                    i,
                                ),
                                ...u,
                                children: o,
                            });
                        }
                        ((t.TypographyComponent = n), (t.Typography = (0, o.forwardRef)((e, t) => (0, l.jsx)(n, { forwardRef: t, ...e }))));
                    },
                    8903: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Heading = t.Caption = void 0));
                        var i = r(3412);
                        Object.defineProperty(t, 'Caption', {
                            enumerable: !0,
                            get: function () {
                                return i.Caption;
                            },
                        });
                        var l = r(1641);
                        Object.defineProperty(t, 'Heading', {
                            enumerable: !0,
                            get: function () {
                                return l.Heading;
                            },
                        });
                    },
                    810: (e) => {
                        e.exports = i || (i = r.t(l, 2));
                    },
                },
                o = {};
            function s(e) {
                var t = o[e];
                if (void 0 !== t) return t.exports;
                var r = (o[e] = { exports: {} });
                return (a[e].call(r.exports, r, r.exports, s), r.exports);
            }
            ((s.d = (e, t) => {
                for (var r in t) s.o(t, r) && !s.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            }),
                (s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (s.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var n = {};
            (() => {
                (Object.defineProperty(n, 'X$', { value: !0 }), (n.kk = n.m7 = void 0));
                var e = s(7093);
                Object.defineProperty(n, 'm7', {
                    enumerable: !0,
                    get: function () {
                        return e.EntityCard;
                    },
                });
                var t = s(7742);
                Object.defineProperty(n, 'kk', {
                    enumerable: !0,
                    get: function () {
                        return t.CardControls;
                    },
                });
            })();
            var d = n.kk,
                u = n.m7;
            n.X$;
        },
        34303: (e, t, r) => {
            'use strict';
            r.d(t, { K: () => i });
            var i = (function (e) {
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
        35994: (e, t, r) => {
            'use strict';
            r.d(t, { R: () => l });
            var i = r(67174);
            let l = (e) => (0, i.u)('/artist/:artistId', { params: { artistId: e } });
        },
        37438: (e) => {
            e.exports = { root: 'TooltipWithTitle_root__7jLY3', text: 'TooltipWithTitle_text__ElBtq', description: 'TooltipWithTitle_description__HsGcR' };
        },
        37670: (e, t, r) => {
            'use strict';
            r.d(t, { J: () => a });
            var i = r(53548);
            r(30282);
            var l = r(58390);
            let a = (e) => {
                let t = (0, l.usePathname)(),
                    [r, a] = (0, i.useState)(!1);
                ((0, i.useEffect)(() => {
                    (window.Ya.Rum.spa.makeSpaSubPage(t), window.Ya.Rum.spa.startDataLoading(t));
                }),
                    (0, i.useEffect)(() => {
                        window.Ya.Rum.spa.getLastSpaSubPage(t) && e && !r && (window.Ya.Rum.spa.finishDataLoading(t), window.Ya.Rum.spa.startDataRendering(t), a(!0));
                    }, [e, r, t]));
            };
        },
        38501: (e, t, r) => {
            'use strict';
            r.d(t, { d: () => l });
            var i = r(72288);
            let l = () => {
                let {
                    settings: { isMobile: e },
                } = (0, i.g)();
                return !e;
            };
        },
        39079: (e, t, r) => {
            'use strict';
            r.d(t, { D: () => s });
            var i = r(29993),
                l = r(7123),
                a = r(72288),
                o = r(9630);
            let s = (e) => {
                let { playContextParams: t, entityId: r, playbackId: s, sonataState: n } = e,
                    d = (0, o.e)(),
                    { sonataState: u } = (0, a.g)(),
                    c = n || u,
                    p = !1,
                    _ = !1,
                    { contextData: m } = t,
                    {
                        type: f,
                        meta: { id: v },
                    } = m,
                    x = c.contextId === String(v) && f === c.contextType;
                if (r) {
                    var h;
                    p = r === (null == (h = c.entityMeta) ? void 0 : h.idWithContext);
                } else p = x;
                return (
                    (_ = p && c.status === l.MT.PLAYING),
                    {
                        isPlaying: _,
                        isCurrent: p,
                        togglePlay: (0, i.c)(() => {
                            var e;
                            if (!d) return Promise.resolve();
                            let i = null == (e = c.entityMeta) ? void 0 : e.idWithContext;
                            return void 0 !== r && r === i ? d.togglePause(s) : d.playContext(t, s);
                        }),
                        restartPlay: (0, i.c)(() => {
                            null == d || d.setProgress(0, s);
                        }),
                    }
                );
            };
        },
        40634: (e, t, r) => {
            'use strict';
            r.d(t, { V: () => C });
            var i = r(88800),
                l = r(65724),
                a = r(84961),
                o = r(53548),
                s = r(92716),
                n = r(17392),
                d = r(29993),
                u = r(90688),
                c = r(19934),
                p = r(7555),
                _ = r(29504),
                m = r(96527),
                f = r(78940),
                v = r(72288),
                x = r(80932),
                h = r.n(x);
            let C = (0, a.PA)((e) => {
                let { artist: t, className: r } = e,
                    { fullscreenPlayer: a } = (0, v.g)(),
                    x = (0, f.Z)(t.url),
                    g = (0, m.N)(),
                    y = (0, o.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, i.jsx)(C, { artist: t, className: r }, t.id)), e), []))
                        );
                    }, [t, r]),
                    b = (0, d.c)((e) => {
                        (a.modal.isOpened && a.modal.close(), g({ to: s.AppScreen.ArtistScreen }), x(e));
                    });
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)(c.Dr, {
                            className: (0, l.$)(h().root, r),
                            onClick: b,
                            'data-test-id': n.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, i.jsx)(p.t, {
                                    radius: 'round',
                                    className: h().cover,
                                    children: (0, i.jsx)(u._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: h().image }),
                                }),
                                (0, i.jsx)(_.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        y,
                    ],
                });
            });
        },
        44318: (e, t, r) => {
            'use strict';
            r.d(t, { C: () => s });
            var i = r(29993),
                l = r(72288),
                a = r(18610),
                o = r(16717);
            let s = () => {
                let { fullscreenVideoPlayer: e } = (0, l.g)(),
                    t = (0, a.p)();
                return (0, i.c)(function (r) {
                    let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    (e.setIds(r), e.setClipIndex(i), t((0, o.J)(r, i)), e.modal.open());
                });
            };
        },
        44599: (e, t, r) => {
            'use strict';
            r.d(t, { _: () => v });
            var i = r(78793),
                l = r(92716),
                a = r(54577),
                o = r(90780),
                s = r(29993),
                n = r(37436),
                d = r(12816),
                u = r(34500),
                c = r(46166),
                p = r(14518),
                _ = r(73442),
                m = r(91248),
                f = r(65523);
            let v = (e) => {
                let t = (0, o.st)(),
                    { hash: r } = (0, o.gf)(),
                    { pageId: v } = (0, p.$)(),
                    { tabId: x, tabPos: h, isTabSelectedByDefault: C } = (0, m.R)(),
                    { skeleton: g } = (0, _.b)(),
                    { blockType: y, blockId: b, blockPosX: A, blockPosY: S, mainObjectType: T, mainObjectId: I } = (0, u.N)(),
                    { objectsCount: j, objectType: E, objectId: N, objectPosX: R, objectPosY: L } = (0, c.J)(),
                    P = (0, f.U)();
                return (0, s.c)(() => {
                    if (!t || !v || !d.xK.includes(v)) return;
                    let o = {
                        hash: r,
                        pageId: v,
                        entityType: y,
                        entityId: b,
                        entityPosX: A,
                        entityPosY: S,
                        objectId: N,
                        objectType: E,
                        objectPosX: R,
                        objectPosY: L,
                        objectsCount: j,
                        from: n.W[v],
                        to: l.AppScreen.VideoScreen,
                    };
                    (d.qG.includes(v) && ((o.tabId = x), (o.tabPos = h), (o.isTabSelectedByDefault = C)),
                        g && (o.skeletonId = g),
                        T && (o.mainObjectType = T),
                        I && (o.mainObjectId = I));
                    let s = (0, i.F)({ params: o, logger: P, context: 'useSendEventOnClipNavigated' });
                    s && e && (0, a.QS)(t.evgenInstance, s);
                });
            };
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
        48987: (e, t, r) => {
            'use strict';
            r.d(t, { e: () => i });
            let i = (e) => {
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
        54965: (e, t, r) => {
            'use strict';
            r.d(t, { E: () => l });
            let i = (e, t) => (t > 0 ? Math.floor(e / t) : 0),
                l = (e, t) => {
                    let r = i(e, 3600),
                        l = i(e - 3600 * r, 60),
                        a = e - 3600 * r - 60 * l,
                        o = i(t || e, 3600) > 0,
                        s = [l, a];
                    return (o && s.unshift(r), s.map((e) => String(e).padStart(2, '0')).join(':'));
                };
        },
        55693: (e, t, r) => {
            'use strict';
            r.d(t, { z: () => o });
            var i = r(53548),
                l = r(63765),
                a = r(91087);
            let o = () => {
                let { sendSearchFeedback: e, id: t, type: r, blockPosition: o, position: s } = (0, i.useContext)(a.N) || {};
                if (void 0 === t || void 0 === r || void 0 === o || void 0 === s) return {};
                let n = null == e ? void 0 : e.bind(null, { feedbackType: l.n.LIKE, id: t, type: r, blockPosition: o, position: s });
                return {
                    sendLikeSearchFeedback: n,
                    sendNavigateSearchFeedback: null == e ? void 0 : e.bind(null, { feedbackType: l.n.NAVIGATE, id: t, type: r, blockPosition: o, position: s }),
                    sendPlaySearchFeedback: null == e ? void 0 : e.bind(null, { feedbackType: l.n.PLAY, id: t, type: r, blockPosition: o, position: s }),
                };
            };
        },
        58217: (e, t, r) => {
            'use strict';
            r.d(t, { l: () => c });
            var i = r(53548),
                l = r(54020),
                a = r(29993),
                o = r(4086),
                s = r(41928),
                n = r(72288),
                d = r(85587),
                u = r(15253);
            let c = (e) => {
                let {
                        entity: t,
                        entityType: r,
                        getStorageKey: c,
                        callback: p,
                        onAfterHandled: _,
                        onBeforeHandle: m,
                        onReject: f,
                        modalBehavior: v,
                        preventDefaultWhenSafe: x,
                    } = e,
                    {
                        disclaimerModalState: h,
                        modals: { disclaimerModal: C },
                    } = (0, n.g)(),
                    g = (0, i.useRef)(String((0, l.A)())),
                    y = (0, i.useRef)(!1),
                    b = (0, i.useRef)(!1),
                    A = (0, i.useRef)(0),
                    S = (0, i.useRef)(!0),
                    T = (0, s.N)().get(o.U2),
                    I = (0, a.c)((e) => {
                        (x && (null == e || e.preventDefault()), p && p(e), _ && _());
                    });
                return (
                    (0, i.useEffect)(() => {
                        h.isUnsafeDisclaimerConfirmed && h.id === g.current && !y.current && (I(), (y.current = !0));
                    }, [h.id, h.isUnsafeDisclaimerConfirmed, I]),
                    (0, i.useEffect)(() => {
                        h.isNeededToLoad && (null == t ? void 0 : t.isLegalRejected) && t.resolvedModalData && h.setModalData(t.resolvedModalData);
                    }, [h, null == t ? void 0 : t.isLegalRejected, null == t ? void 0 : t.resolvedModalData]),
                    (0, i.useEffect)(
                        () => () => {
                            S.current = !1;
                        },
                        [],
                    ),
                    (0, a.c)(async (e) => {
                        if (!b.current) {
                            b.current = !0;
                            try {
                                if ((null == m || m(e), t)) {
                                    var i, l, a;
                                    let o = t.getDisclaimerEntityRef(r),
                                        s = null != (i = null == c ? void 0 : c(t, o)) ? i : ''.concat(o.entityType, '_').concat(o.entityId),
                                        n = t.isLegalRejected || t.isUnsafeLegal;
                                    if (t.isUnsafeLegal) {
                                        let t = T.get(u.c.ExEx);
                                        if (null == t ? void 0 : t.includes(s)) return void I(e);
                                    }
                                    if (n) {
                                        (null == e || e.preventDefault(),
                                            t.isUnsafeLegal && h.setType(d.Z.UNSAFE),
                                            h.setDisclaimerRejectHandler(null != f ? f : null),
                                            h.setId(g.current),
                                            h.setEntityKey(s),
                                            h.setCurrentEntityRef(o.entityType, o.entityId),
                                            h.setShouldHistoryBack(!!(null == v ? void 0 : v.shouldHistoryBack)),
                                            h.setShouldCloseModalOnOutsidePress(null == (l = null == v ? void 0 : v.closeOnOutside) || l),
                                            h.setShouldCloseModalOnEscape(null == (a = null == v ? void 0 : v.closeOnEscape) || a),
                                            (A.current += 1));
                                        let r = A.current,
                                            i = await t.getModalDisclaimerData();
                                        if (A.current !== r || !1 === S.current) return;
                                        (h.setModalData(null != i ? i : null), (y.current = !1), C.open());
                                        return;
                                    }
                                    (x && (null == e || e.preventDefault()), I(e));
                                    return;
                                }
                                (x && (null == e || e.preventDefault()), I(e));
                            } finally {
                                b.current = !1;
                            }
                        }
                    })
                );
            };
        },
        59844: (e, t, r) => {
            'use strict';
            r.d(t, { n: () => o });
            var i = r(88800),
                l = r(53548),
                a = r(90334);
            let o = (e) => {
                let { pageId: t, pageEntityId: r, displayReasonId: o, pageStyle: s, pagePlacement: n, children: d } = e,
                    u = (0, l.useMemo)(() => ({ pageId: t, pageEntityId: r, displayReasonId: o, pageStyle: s, pagePlacement: n }), [t, r, o, s, n]);
                return (0, i.jsx)(a.r.Provider, { value: u, children: d });
            };
        },
        61931: (e, t, r) => {
            'use strict';
            r.d(t, { M: () => m });
            var i = r(78793),
                l = r(54577),
                a = r(90780),
                o = r(29993),
                s = r(12816),
                n = r(34500),
                d = r(46166),
                u = r(14518),
                c = r(73442),
                p = r(91248),
                _ = r(65523);
            let m = (e) => {
                let t = (0, a.st)(),
                    { hash: r } = (0, a.gf)(),
                    { pageId: m } = (0, u.$)(),
                    { tabId: f, tabPos: v, isTabSelectedByDefault: x } = (0, p.R)(),
                    { blockType: h, blockId: C, blockPosX: g, blockPosY: y, mainObjectType: b, mainObjectId: A } = (0, n.N)(),
                    { objectsCount: S, objectType: T, objectId: I, objectPosX: j, objectPosY: E } = (0, d.J)(),
                    N = (0, _.U)(),
                    { skeleton: R } = (0, c.b)();
                return (0, o.c)((a) => {
                    if (!t || !m || !s.xK.includes(m)) return;
                    let o = {
                        hash: r,
                        pageId: m,
                        entityType: h,
                        entityId: C,
                        entityPosX: g,
                        entityPosY: y,
                        objectsCount: S,
                        viewUuid: e,
                        objectType: T,
                        objectId: I,
                        objectPosX: j,
                        objectPosY: E,
                    };
                    (s.qG.includes(m) && ((o.tabId = f), (o.tabPos = v), (o.isTabSelectedByDefault = x)),
                        R && (o.skeletonId = R),
                        b && (o.mainObjectType = b),
                        A && (o.mainObjectId = A));
                    let n = (0, i.F)({ params: o, logger: N, context: 'useSendEventOnClipShowedOrHidden' });
                    if (n) {
                        if (a) return void (0, l.Pf)(t.evgenInstance, n);
                        (0, l.nv)(t.evgenInstance, n);
                    }
                });
            };
        },
        63765: (e, t, r) => {
            'use strict';
            var i, l;
            (r.d(t, { n: () => l, o: () => i }),
                (function (e) {
                    ((e.ARTIST = 'artist'),
                        (e.ALBUM = 'album'),
                        (e.TRACK = 'track'),
                        (e.PLAYLIST = 'playlist'),
                        (e.USER = 'user'),
                        (e.VIDEO = 'video'),
                        (e.CLIP = 'clip'),
                        (e.PODCAST = 'podcast'),
                        (e.PODCAST_EPISODE = 'podcast_episode'),
                        (e.WAVE = 'wave'),
                        (e.GENRE = 'genre'),
                        (e.SEARCH_PAGE = 'search-page'));
                })(i || (i = {})),
                (function (e) {
                    ((e.PLAY = 'play'), (e.FRIDGE = 'fridge'), (e.NAVIGATE = 'navigate'), (e.LIKE = 'like'));
                })(l || (l = {})));
        },
        64284: (e, t, r) => {
            'use strict';
            r.d(t, { U: () => i });
            var i = (function (e) {
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
        64310: (e, t, r) => {
            'use strict';
            r.d(t, { n: () => n });
            var i = r(88800),
                l = r(65724),
                a = r(19994),
                o = r(48082),
                s = r.n(o);
            let n = (e) => {
                let { className: t, textClassName: r, isActive: o } = e;
                return (0, i.jsx)('div', { className: (0, l.$)(s().root, t), children: (0, i.jsx)(a.W, { className: (0, l.$)(s().text, r), isActive: o, radius: 's' }) });
            };
        },
        64420: (e, t, r) => {
            'use strict';
            (r.r(t), r.d(t, { default: () => J }));
            var i = r(88800),
                l = r(58390),
                a = r(65724),
                o = r(84961),
                s = r(53548),
                n = r(2058),
                d = r(17392),
                u = r(29993),
                c = r(29504),
                p = r(32596),
                _ = r(96237),
                m = r(69323),
                f = r(77605),
                v = r(69630),
                x = r(91959),
                h = r(38501),
                C = r(12816),
                g = r(59844),
                y = r(46422),
                b = r(44230),
                A = r(37670),
                S = r(72288),
                T = r(54320),
                I = r(19998),
                j = r(86790),
                E = r(60266),
                N = r(93317),
                R = r(79418),
                L = r(81685),
                P = r(30144),
                O = r(324),
                M = r(53073),
                k = r(83418),
                w = r(46511),
                D = r(57297),
                U = r(2218),
                W = r(77863),
                B = r(45383);
            async function V(e, t) {
                var r, i, l;
                if (!e) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let a = await (0, w.W)(t.locale),
                    o = a({ id: 'metadata.artist-clips-title' }, { artistName: e.artist.name }),
                    s = a({ id: 'metadata.artist-clips-description' }, { artistName: e.artist.name });
                return {
                    title: o,
                    description: s,
                    openGraph: (0, D.i)({
                        ogTitle: o,
                        ogDescription: s,
                        ogType: 'website',
                        fullUrl: null != (r = t.fullUrl) ? r : '',
                        locale: t.locale,
                        customImage: (0, k.v)({ host: t.host }),
                        siteName: a({ id: 'metadata.yandex-music' }),
                    }),
                    twitter: (0, U.H)({ cardType: W.W.SUMMARY_LARGE_IMAGE, title: o, description: s }),
                    facebook: (0, M.k)(),
                    appLinks: (0, O.X)({
                        additional: { ...t, url: null != (i = t.url) ? i : '', fullUrl: null != (l = t.fullUrl) ? l : '', host: t.host },
                        appName: a({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, B.S)('/artist/:artistId/clips', t.tld, { params: { artistId: e.artist.id } }),
                };
            }
            var K = r(27342),
                H = r(63512),
                F = r(52949),
                z = r.n(F);
            let Q = (0, o.PA)((e) => {
                var t, r;
                let { artistId: o, preloadedArtist: O, preloadedClips: M } = e,
                    {
                        artist: k,
                        disclaimerModalState: w,
                        settings: { isMobile: D },
                    } = (0, S.g)(),
                    { formatMessage: U } = (0, n.A)(),
                    { contentScrollRef: W, setContentScrollRef: B } = (0, b.g)(),
                    F = (0, y.W)(),
                    Q = (0, h.d)();
                (0, x.S)({ artist: null == (t = k.meta) ? void 0 : t.artist, shouldHistoryBack: !0 });
                let Y = (0, u.c)((e) => {
                    k.clipsSubpage.getData({ artistId: o, page: e, pageSize: _.EV });
                });
                ((0, T.X)(k.clipsSubpage.pagesLoader, Y),
                    (0, H.G)(o),
                    (0, K._)(k, o),
                    (0, s.useEffect)(
                        () => () => {
                            k.clipsSubpage.reset();
                        },
                        [k, k.clipsSubpage],
                    ),
                    (0, A.J)(k.clipsSubpage.isResolved),
                    ((e) => {
                        var t;
                        let { fullscreenVideoPlayer: r } = (0, S.g)(),
                            i = null == e || null == (t = e.meta) ? void 0 : t.artist,
                            l = null == e ? void 0 : e.infoLoadingState.isLoading,
                            a = null == e ? void 0 : e.infoLoadingState.isRejected,
                            o = (0, s.useCallback)((e) => (a ? {} : i && !l ? V({ artist: (0, L.E)(i) }, e) : void 0), [i, l, a]);
                        (0, P.C)(r.modal.isOpened ? null : o);
                    })(k));
                let J = k.clipsSubpage.isShimmerVisible ? 20 : k.clipsSubpage.items.length,
                    G = (0, s.useMemo)(() => ({ Footer: () => (0, i.jsx)(E.A, { children: (0, i.jsx)(j.w, { className: z().footer }) }) }), []),
                    Z = (0, s.useMemo)(() => U({ id: 'page.artist-clips-header' }, { artistName: k.commonSubPage.artistName }), [k.commonSubPage.artistName, U]),
                    X = [];
                return (k.clipsSubpage.isNeededToLoad && X.push(k.clipsSubpage.getData({ artistId: o, page: 0, pageSize: _.EV, preloadedClips: M })),
                k.infoLoadingState.isNeededToLoad && X.push(k.getInfo({ artistId: o, preloadedArtist: O })),
                X.length && (0, s.use)(Promise.allSettled(X)),
                (k.clipsSubpage.isNotFound || !Q) && (0, l.notFound)(),
                null == (r = k.meta) ? void 0 : r.artist.isLegalRejected)
                    ? (0, i.jsx)(I.M, { modalState: w })
                    : k.clipsSubpage.isRejected
                      ? (0, i.jsx)(p.SomethingWentWrong, {})
                      : (0, i.jsx)(g.n, {
                            pageId: C._Q.ARTIST_CLIPS,
                            pageEntityId: o,
                            children: (0, i.jsx)(v.h, {
                                scrollElement: W,
                                outerTitle: Z,
                                children: (0, i.jsxs)('div', {
                                    className: z().root,
                                    'data-test-id': d.Xk.artist.ARTIST_CLIPS_PAGE,
                                    children: [
                                        (0, i.jsx)(N.Y, {
                                            variant: N.V.TEXT,
                                            withForwardControl: !1,
                                            withBackwardControl: F.canBack,
                                            children: (0, i.jsx)(c.DZ, { variant: 'h1', weight: 'bold', size: 'xl', lineClamp: 1, children: Z }),
                                        }),
                                        (0, i.jsx)(R.$, {
                                            className: (0, a.$)(z().scrollContainer, z().important),
                                            listClassName: z().content,
                                            itemClassName: z().item,
                                            customComponents: G,
                                            itemContentCallback: (e) => {
                                                let t = k.clipsSubpage.items[e];
                                                return t ? (0, i.jsx)(m.F, { clip: t }, t.clipId) : (0, i.jsx)(f.k, { isActive: !0 });
                                            },
                                            totalCount: J,
                                            onGetDataByPage: Y,
                                            pageSize: _.EV,
                                            totalRequests: k.clipsSubpage.requestsCount,
                                            handleRef: B,
                                            context: { listAriaLabel: U({ id: 'entity-names.artist-clips-list' }) },
                                            isMobileLayout: D,
                                            useWindowScroll: D,
                                        }),
                                    ],
                                }),
                            }),
                        });
            });
            var Y = r(21438);
            let J = () => {
                let e = (0, l.useSearchParams)().get('artistId');
                return ((e && (0, Y.L)(e)) || (0, l.notFound)(), (0, i.jsx)(Q, { artistId: e }));
            };
        },
        69323: (e, t, r) => {
            'use strict';
            r.d(t, { F: () => U });
            var i = r(88800),
                l = r(65724),
                a = r(55482),
                o = r(84961),
                s = r(53548),
                n = r(2058),
                d = r(35412),
                u = r(17392),
                c = r(18593),
                p = r(29993),
                _ = r(29832),
                m = r(90688),
                f = r(7555),
                v = r(29504),
                x = r(13946),
                h = r(44599),
                C = r(61931),
                g = r(16717),
                y = r(44318),
                b = r(64284),
                A = r(12816),
                S = r(28830),
                T = r(84384),
                I = r(54965),
                j = r(97361),
                E = r(99313),
                N = r(20585),
                R = r(39079),
                L = r(72288),
                P = r(90224),
                O = r(91292),
                M = r(16704),
                k = r(8299),
                w = r(90865),
                D = r.n(w);
            let U = (0, o.PA)((e) => {
                var t;
                let {
                        titleClassName: r,
                        artistLinkClassName: o,
                        clip: w,
                        withVideo: U = !0,
                        artistIdWithoutLink: W,
                        viewUuid: B,
                        shouldOpenModalOnCardClick: V = !0,
                    } = e,
                    { fullscreenVideoPlayer: K } = (0, L.g)(),
                    { formatMessage: H } = (0, n.A)(),
                    F = (0, y.C)(),
                    { from: z } = (0, T.f)({ pageId: A._Q.VIDEO_PLAYER, contextId: K.state.contextId, contextType: c.K.Various, blockId: b.U.CLIPS }),
                    Q = (0, j.P)(null != (t = w.duration) ? t : 0),
                    Y = (0, C.M)(B),
                    J = (0, h._)(B),
                    { ref: G, intersectionPropertyId: Z } = (0, S.n)({ callback: Y }),
                    X = (0, s.useRef)(null),
                    q = U && w.previewUrl,
                    $ = (0, p.c)(() => {
                        X.current && ((X.current.currentTime = 0), X.current.play());
                    }),
                    ee = (0, s.useMemo)(() => (0, a.A)($, 500), [$]),
                    et = (0, p.c)(() => {
                        var e;
                        null == (e = X.current) || e.pause();
                    }),
                    er = (0, s.useMemo)(() => K.ids.indexOf(w.clipId), [K, w.clipId]),
                    { isPlaying: ei, togglePlay: el } = (0, R.D)({
                        playContextParams: {
                            contextData: { type: c.K.Various, meta: { id: E.H.VARIOUS_CLIP_CONTEXT }, from: z },
                            queueParams: { index: er },
                            entitiesData: K.entitiesData,
                            loadContextMeta: !1,
                        },
                        entityId: String(w.clipId),
                        sonataState: K.state,
                        playbackId: N.V.CLIP,
                    }),
                    ea = V ? w.url : (0, g.J)(K.ids, er),
                    eo = (0, p.c)(() => {
                        V ? (F([w.clipId]), J()) : ei || el();
                    }),
                    es = (0, k.X)({ clip: w, callback: eo }),
                    en = H({ id: 'entity-names.clip-name' }, { clipName: w.title }),
                    ed = (0, s.useMemo)(
                        () =>
                            w.isAvailable
                                ? (0, i.jsxs)(f.t, {
                                      radius: 'm',
                                      className: (0, l.$)(D().view, D().cover),
                                      onMouseEnter: ee,
                                      onMouseLeave: et,
                                      onClick: es,
                                      children: [
                                          q &&
                                              (0, i.jsx)('video', {
                                                  className: D().media,
                                                  ref: X,
                                                  poster: w.thumbnail && (0, d.oZ)(w.thumbnail, 1280),
                                                  playsInline: !0,
                                                  muted: !0,
                                                  loop: !0,
                                                  'aria-hidden': !0,
                                                  children: (0, i.jsx)('source', { src: w.previewUrl, type: 'video/mp4' }),
                                              }),
                                          w.thumbnail &&
                                              (0, i.jsx)(m._V, {
                                                  className: D().image,
                                                  'aria-hidden': !0,
                                                  src: w.thumbnail,
                                                  fit: 'cover',
                                                  withAvatarReplace: !0,
                                                  size: 1280,
                                                  createUrlReplacer: d.oZ,
                                              }),
                                          void 0 !== w.duration &&
                                              (0, i.jsx)(v.HL, {
                                                  role: 'text',
                                                  'aria-label': Q,
                                                  variant: 'span',
                                                  className: D().duration,
                                                  type: 'entity',
                                                  size: 'xs',
                                                  weight: 'medium',
                                                  children: (0, i.jsx)('span', { 'aria-hidden': 'true', children: (0, I.E)(w.duration, w.duration) }),
                                              }),
                                          (0, i.jsx)(M.D, { variant: 'filled', className: D().playButton, onClick: es, iconSize: 'xl' }),
                                      ],
                                  })
                                : (0, i.jsx)(f.t, {
                                      radius: 'm',
                                      className: D().unavailableCover,
                                      children: (0, i.jsx)(m.Ab, { className: D().image, iconVariant: 'unavailable', 'data-test-id': u.S7.ENTITY_COVER_FALLBACK_IMAGE }),
                                  }),
                        [Q, w.isAvailable, w.thumbnail, w.previewUrl, w.duration, ee, et, es, q],
                    ),
                    eu = (0, s.useMemo)(
                        () =>
                            w.hasArtists
                                ? (0, i.jsx)(
                                      x.i,
                                      { linkClassName: (0, l.$)(D().artistLink, o), artists: w.artists, lineClamp: 1, withAllArtistsTitle: !0, artistIdWithoutLink: W },
                                      w.getKey('SeparatedArtists'),
                                  )
                                : null,
                        [W, w, o],
                    );
                return (0, i.jsx)(_.MN, {
                    ref: G,
                    className: D().root,
                    explicitMarkComponent:
                        w.explicitDisclaimer &&
                        (0, i.jsx)(P.N, { getDescriptionTexts: w.getDescriptionTexts, variant: w.explicitDisclaimer, size: 'xxs' }, w.getKey('ExplicitMarkIcon')),
                    'aria-label': en,
                    srTitle: (0, i.jsx)(O.N, { className: D().srTitleLink, href: ea, onClick: es, children: en }),
                    title: (0, i.jsxs)(
                        v.HL,
                        {
                            className: (0, l.$)(D().title, r),
                            variant: 'div',
                            type: 'entity',
                            size: 'm',
                            weight: 'medium',
                            lineClamp: 1,
                            'aria-hidden': !0,
                            children: [
                                (0, i.jsx)(O.N, {
                                    className: D().titleLink,
                                    href: ea,
                                    tabIndex: -1,
                                    'aria-label': en,
                                    onClick: es,
                                    'data-test-id': u.Kq.clip.CLIP_META_TITLE,
                                    children: w.title,
                                }),
                                w.version && (0, i.jsx)(v.HL, { className: D().version, variant: 'span', children: ' '.concat(w.version) }),
                            ],
                        },
                        w.getKey('Title'),
                    ),
                    'data-intersection-property-id': Z,
                    view: ed,
                    description: eu,
                    'data-test-id': u.Kq.clip.CLIP_CARD,
                });
            });
        },
        70396: (e) => {
            e.exports = { root: 'SeparatedArtistsWithContextMenuMobile_root__4BiJL', important: 'SeparatedArtistsWithContextMenuMobile_important__fSF1h' };
        },
        76675: (e, t, r) => {
            'use strict';
            r.d(t, { b: () => h });
            var i = r(53548),
                l = r(78793),
                a = r(54577),
                o = r(90780),
                s = r(79070),
                n = r(65523),
                d = r(42139),
                u = r(12816),
                c = r(34500),
                p = r(57649),
                _ = r(46166),
                m = r(14518),
                f = r(73442),
                v = r(91248);
            let x = [
                    u._Q.HOME,
                    u._Q.LANDING,
                    u._Q.NON_MUSIC,
                    u._Q.OWN_COLLECTION,
                    u._Q.SEARCH,
                    u._Q.CONCERTS,
                    u._Q.ALBUM,
                    u._Q.PLAYLIST,
                    u._Q.SLIDES_SCREEN,
                    u._Q.PROMOLANDING_ALBUM,
                    u._Q.WAVE_LANDING_SCREEN,
                    u._Q.COLLECTION_VIBE_ROOMS,
                    u._Q.MULTIVIBE_SENDING_INVITATION_SCREEN,
                    u._Q.MULTIVIBE_ACTION_SCREEN,
                    u._Q.MULTIVIBE_UNIFIED_SCREEN,
                ],
                h = () => {
                    let e = (0, o.st)(),
                        t = (0, n.U)(),
                        { hash: r } = (0, o.gf)(),
                        { pageId: h } = (0, m.$)(),
                        { tabId: C, tabPos: g, isTabSelectedByDefault: y } = (0, v.R)(),
                        { offsetBlockPosY: b } = (0, p.u)(),
                        { blockId: A, blockType: S, blockPosX: T, blockPosY: I, mainObjectId: j, mainObjectType: E } = (0, c.N)(),
                        { objectId: N, objectPosX: R, objectPosY: L, objectType: P, objectsCount: O } = (0, _.J)(),
                        { skeleton: M } = (0, f.b)(),
                        k = (0, s.L)(() => (void 0 !== b && void 0 !== I ? b + I : I));
                    return (0, i.useCallback)(
                        (i, o) => {
                            if (!e || !h || !u.xK.includes(h) || !i || !x.includes(h)) return;
                            let s = d.F[h];
                            if (!s) return;
                            let n = {
                                hash: r,
                                pageId: s,
                                entityType: S,
                                entityId: A,
                                entityPosX: T,
                                entityPosY: k,
                                objectId: null != o ? o : N,
                                objectType: P,
                                objectPosX: R,
                                objectPosY: L,
                                objectsCount: O,
                            };
                            (u.qG.includes(h) && ((n.tabId = C), (n.tabPos = g), (n.isTabSelectedByDefault = y)),
                                M && (n.skeletonId = M),
                                j && E && ((n.mainObjectType = E), (n.mainObjectId = j)));
                            let c = (0, l.F)({ params: n, logger: t, context: 'useSendEventOnBlockStarted' });
                            c && (0, a.er)(e.evgenInstance, c);
                        },
                        [e, h, r, S, A, T, k, N, P, R, L, O, M, j, E, t, C, g, y],
                    );
                };
        },
        76827: (e) => {
            e.exports = {
                root: 'ClipCardShimmer_root__sIvNr',
                cover: 'ClipCardShimmer_cover__yA4jz',
                title: 'ClipCardShimmer_title__MCApK',
                text: 'ClipCardShimmer_text__ajZGv',
            };
        },
        77605: (e, t, r) => {
            'use strict';
            r.d(t, { k: () => n });
            var i = r(88800),
                l = r(19994),
                a = r(64310),
                o = r(76827),
                s = r.n(o);
            let n = (e) => {
                let { isActive: t } = e;
                return (0, i.jsxs)('div', {
                    className: s().root,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    children: [
                        (0, i.jsx)(l.W, { isActive: t, className: s().cover, radius: 'l' }),
                        (0, i.jsx)(a.n, { isActive: t, className: s().title }),
                        (0, i.jsx)(a.n, { isActive: t, className: s().text }),
                    ],
                });
            };
        },
        80932: (e) => {
            e.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        84384: (e, t, r) => {
            'use strict';
            r.d(t, { f: () => p });
            var i = r(53548);
            r(30282);
            var l = r(34500),
                a = r(14518),
                o = r(58390),
                s = r(64284),
                n = r(18593),
                d = r(12816),
                u = r(1344);
            let c = [s.U.TRAILER],
                p = (e) => {
                    let t = ((e) => {
                            let t = null == e ? void 0 : e.pageId,
                                r = null == e ? void 0 : e.blockId,
                                o = null == e ? void 0 : e.pageEntityId,
                                { pageId: s, pageEntityId: n } = (0, a.$)(),
                                { blockId: d } = (0, l.N)();
                            return (0, i.useMemo)(() => ({ pageId: null != t ? t : s, blockId: null != r ? r : d, pageEntityId: null != o ? o : n }), [r, d, t, o, s, n]);
                        })(e),
                        r = ((e) => {
                            let { pageId: t, blockId: r } = e;
                            return (0, i.useMemo)(() => {
                                let e = ['desktop'];
                                return (t && e.push(t.toLowerCase()), r && e.push(r.toLowerCase()), e.push('default'), e.join('-'));
                            }, [r, t]);
                        })(t),
                        s = ((e) => {
                            let { pageId: t, blockId: r, pageEntityId: l, contextType: a, contextId: s, utmForPageIds: p } = e,
                                _ = (0, o.useSearchParams)();
                            return (0, i.useMemo)(
                                () =>
                                    ((e) => {
                                        let { searchParams: t, pageId: r, pageEntityId: i, utmForPageIds: l, contextId: a, contextType: o, blockId: s } = e,
                                            p = t && Object.fromEntries(t),
                                            _ = ((e) => {
                                                switch (e) {
                                                    case d._Q.ALBUM:
                                                    case d._Q.PROMOLANDING_ALBUM:
                                                    case d._Q.AUDIOBOOK:
                                                    case d._Q.PODCAST:
                                                        return n.K.Album;
                                                    case d._Q.ARTIST:
                                                    case d._Q.ARTIST_TRACKS:
                                                    case d._Q.ARTIST_ALBUMS:
                                                    case d._Q.ARTIST_DISCOGRAPHY:
                                                        return n.K.Artist;
                                                    case d._Q.PLAYLIST:
                                                        return n.K.Playlist;
                                                    default:
                                                        return null;
                                                }
                                            })(r);
                                        return !_ || !p || !i || c.includes(s)
                                            ? null
                                            : (Array.isArray(l) ? l.map((e) => String(e)).includes(String(i)) : !!a && _ === o && String(a) === String(i)) && p
                                              ? (0, u.Z)(p)
                                              : null;
                                    })({ searchParams: _, pageId: t, pageEntityId: l, utmForPageIds: p, contextId: s, contextType: a, blockId: r }),
                                [_, t, l, s, a, r, p],
                            );
                        })({
                            ...t,
                            contextType: null == e ? void 0 : e.contextType,
                            contextId: null == e ? void 0 : e.contextId,
                            utmForPageIds: null == e ? void 0 : e.utmForPageIds,
                        });
                    return (0, i.useMemo)(() => ({ from: r, utmLink: s || void 0 }), [r, s]);
                };
        },
        85587: (e, t, r) => {
            'use strict';
            r.d(t, { Z: () => i, n: () => l });
            var i = (function (e) {
                    return ((e.REJECT = 'REJECT'), (e.UNSAFE = 'UNSAFE'), e);
                })({}),
                l = (function (e) {
                    return ((e.ALBUM = 'album'), (e.PODCAST = 'podcast'), (e.AUDIOBOOK = 'audiobook'), (e.ARTIST = 'artist'), (e.TRACK = 'track'), (e.CLIP = 'clip'), e);
                })({});
        },
        90224: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => f });
            var i = r(88800),
                l = r(65724),
                a = r(84961),
                o = r(53548),
                s = r(2058),
                n = r(17392),
                d = r(52300),
                u = r(62837),
                c = r(72288),
                p = r(94398),
                _ = r(17332),
                m = r.n(_);
            let f = (0, a.PA)((e) => {
                let { className: t, getDescriptionTexts: r, trackId: a, containerClassName: _, variant: f, iconVariant: iconOverride, size: v = 'xxxs', ...x } = e,
                    { formatMessage: h } = (0, s.A)(),
                    {
                        settings: { isMobile: C },
                    } = (0, c.g)(),
                    [g, y] = (0, o.useState)(null);
                (0, o.useEffect)(() => {
                    r && r().then(y);
                }, [r, a]);
                let {
                    iconVariant: b,
                    descriptionText: A,
                    isTooltipEnabled: S,
                    ariaLabel: T,
                } = ((e, t) => {
                    let { variant: r, descriptionTexts: i, isMobile: l } = e,
                        a = (null == i ? void 0 : i.join('\n')) || '';
                    return {
                        iconVariant: ((e) => {
                            switch (e) {
                                case u.JU.E:
                                    return 'explicit';
                                case u.JU.AGE_12:
                                case u.JU.AGE_16:
                                case u.JU.AGE_18:
                                    return 'adult';
                                case u.JU.EXCLAMATION:
                            }
                            return 'exclamation';
                        })(r),
                        descriptionText: a,
                        isTooltipEnabled: !!(null == i ? void 0 : i.length) && !l,
                        ariaLabel: a.length > 0 ? a : t({ id: 'extra-explicit.explicit-mark' }),
                    };
                })({ variant: f, descriptionTexts: g, isMobile: C }, h);
                return (0, i.jsx)(p.k, {
                    description: A,
                    placement: 'bottom-start',
                    enabled: S,
                    children: (0, i.jsx)('span', {
                        className: _,
                        children:
                        // for PulseSync: BEGIN render substituted-track badges and custom native disclaimer icons
                        f === u.JU.SUBSTITUTED ? (0, i.jsxs)('svg', {
                            className: (0, l.$)(m().explicitMark, t),
                            viewBox: '0 0 16 16',
                            role: 'img',
                            'aria-label': T,
                            style: { width: 'var(--ym-icon-size-'.concat(v, ')'), height: 'var(--ym-icon-size-'.concat(v, ')') },
                            ...x,
                            'data-test-id': n.S7.EXPLICIT_MARK_ICON,
                            children: [
                                (0, i.jsx)('circle', { cx: '8', cy: '8', r: '5.5', fill: 'none', stroke: 'currentColor', strokeWidth: '1.5' }),
                                (0, i.jsx)('text', {
                                    x: '8', y: '9', fill: 'currentColor', fontSize: '7', fontWeight: '700', textAnchor: 'middle', dominantBaseline: 'middle', children: 'S',
                                }),
                            ],
                        }) : (0, i.jsx)(d.I, {
                            className: (0, l.$)(m().explicitMark, t),
                            'aria-label': T,
                            variant: iconOverride ? d.resolveIcon(iconOverride)?.variant ?? 'exclamation' : b,
                            size: iconOverride ? d.resolveIcon(iconOverride)?.size ?? v : v,
                            style: iconOverride ? { width: `var(--ym-icon-size-${v})`, height: `var(--ym-icon-size-${v})` } : undefined,
                            ...x,
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
        91087: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => i });
            let i = (0, r(53548).createContext)(null);
        },
        94398: (e, t, r) => {
            'use strict';
            r.d(t, { k: () => u });
            var i = r(88800),
                l = r(17392),
                a = r(17610),
                o = r(29504),
                s = r(37438),
                n = r.n(s);
            let d = { padding: 8 },
                u = (e) => {
                    let { description: t, enabled: r, title: s, placement: u = 'top', children: c } = e;
                    return (0, i.jsxs)(a.m_, {
                        enabled: r,
                        offsetOptions: 4,
                        shiftOptions: d,
                        flipOptions: d,
                        placement: u,
                        children: [
                            c,
                            (0, i.jsx)(a.ZI, {
                                className: n().root,
                                'data-test-id': l.S7.TOOLTIP_WITH_TITLE,
                                children: (0, i.jsxs)('div', {
                                    className: n().text,
                                    children: [
                                        s && (0, i.jsx)(o.HL, { variant: 'span', type: 'text', size: 's', weight: 'bold', children: s }),
                                        (0, i.jsx)(o.HL, { variant: 'span', type: 'text', size: 's', weight: 'normal', className: n().description, children: t }),
                                    ],
                                }),
                            }),
                        ],
                    });
                };
        },
        97361: (e, t, r) => {
            'use strict';
            r.d(t, { P: () => a });
            var i = r(2058),
                l = r(29831);
            let a = (e) => {
                let { formatMessage: t } = (0, i.A)();
                return (0, l.j)(e, t);
            };
        },
        99313: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => i });
            var i = (function (e) {
                return ((e.VARIOUS_CLIP_CONTEXT = 'various-clip-context'), e);
            })({});
        },
    },
    (e) => {
        (e.O(
            0,
            [
                8752, 7435, 127, 8380, 100, 7617, 6220, 6706, 4771, 8832, 6904, 5977, 2058, 2881, 8628, 9693, 6326, 8283, 2824, 5151, 2837, 9202, 4732, 1195, 1598, 1928,
                7627, 9124, 7967, 900, 9934, 6387, 8130, 763, 2670, 7358,
            ],
            () => e((e.s = 29215)),
        ),
            (_N_E = e.O()));
    },
]);
