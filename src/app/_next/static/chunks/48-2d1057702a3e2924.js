(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [48],
    {
        3163: (e, t, i) => {
            'use strict';
            i.d(t, { O: () => b });
            var o = i(25839),
                a = i(82298),
                n = i(88204),
                r = i(74631),
                l = i(61493),
                s = i(71035),
                c = i(69084),
                d = i(4254),
                u = i(39004),
                f = i(8487),
                p = i(35015),
                y = i(27954),
                m = i(6323),
                _ = i(97522),
                v = i(51790),
                x = i(28767),
                A = i.n(x);
            let b = (0, n.PA)((e) => {
                let { closeToast: t, entityVariant: i, entityUrl: n, collectionUrl: x, entityTitle: b, coverUri: T, isLiked: S, className: g, withLink: I = !0 } = e,
                    { fullscreenPlayer: L, fullscreenVideoPlayer: E } = (0, y.g)(),
                    C = i === p.c.ARTIST,
                    O = (() => {
                        let { formatMessage: e } = (0, u.A)();
                        return (0, r.useCallback)(
                            (t) => {
                                let { entityVariant: i, values: a, entityTitle: n } = t;
                                switch (i) {
                                    case p.c.TRACK:
                                        return {
                                            caption: (0, o.jsx)(f.A, { id: 'notifications-info.track-added-to-collection', values: a }),
                                            ariaLabel: e({ id: 'notifications-info.track-added-to-collection-aria-label' }, { entity: n }),
                                        };
                                    case p.c.PLAYLIST:
                                        return {
                                            caption: (0, o.jsx)(f.A, { id: 'notifications-info.playlist-added-to-collection', values: a }),
                                            ariaLabel: e({ id: 'notifications-info.playlist-added-to-collection-aria-label' }, { entity: n }),
                                        };
                                    case p.c.ALBUM:
                                        return {
                                            caption: (0, o.jsx)(f.A, { id: 'notifications-info.album-added-to-collection', values: a }),
                                            ariaLabel: e({ id: 'notifications-info.album-added-to-collection-aria-label' }, { entity: n }),
                                        };
                                    case p.c.FAIRY_TALE:
                                        return {
                                            caption: (0, o.jsx)(f.A, { id: 'notifications-info.fairytale-added-to-collection', values: a }),
                                            ariaLabel: e({ id: 'notifications-info.fairytale-added-to-collection-aria-label' }, { entity: n }),
                                        };
                                    case p.c.ARTIST:
                                        return {
                                            caption: (0, o.jsx)(f.A, { id: 'notifications-info.artist-added-to-collection', values: a }),
                                            ariaLabel: e({ id: 'notifications-info.artist-added-to-collection-aria-label' }, { entity: n }),
                                        };
                                    case p.c.PODCAST:
                                        return {
                                            caption: (0, o.jsx)(f.A, { id: 'notifications-info.podcast-added-to-collection', values: a }),
                                            ariaLabel: e({ id: 'notifications-info.podcast-added-to-collection-aria-label' }, { entity: n }),
                                        };
                                    case p.c.PODCAST_EPISODE:
                                        return {
                                            caption: (0, o.jsx)(f.A, { id: 'notifications-info.podcast-episode-added-to-collection', values: a }),
                                            ariaLabel: e({ id: 'notifications-info.podcast-episode-added-to-collection-aria-label' }, { entity: n }),
                                        };
                                    case p.c.AUDIOBOOK:
                                        return {
                                            caption: (0, o.jsx)(f.A, { id: 'notifications-info.audiobook-added-to-collection', values: a }),
                                            ariaLabel: e({ id: 'notifications-info.audiobook-added-to-collection-aria-label' }, { entity: n }),
                                        };
                                    case p.c.AUDIOBOOK_EPISODE:
                                        return {
                                            caption: (0, o.jsx)(f.A, { id: 'notifications-info.audiobook-episode-added-to-shelf', values: a }),
                                            ariaLabel: e({ id: 'notifications-info.audiobook-episode-added-to-shelf-aria-label' }, { entity: n }),
                                        };
                                    case p.c.CLIP:
                                        return {
                                            caption: (0, o.jsx)(f.A, { id: 'notifications-info.clip-added-to-collection', values: a }),
                                            ariaLabel: e({ id: 'notifications-info.clip-added-to-collection-aria-label' }, { entity: n }),
                                        };
                                }
                            },
                            [e],
                        );
                    })(),
                    j = (() => {
                        let { formatMessage: e } = (0, u.A)();
                        return (0, r.useCallback)(
                            (t) => {
                                let { entityVariant: i, values: a, entityTitle: n } = t;
                                switch (i) {
                                    case p.c.TRACK:
                                        return {
                                            caption: (0, o.jsx)(f.A, { id: 'notifications-info.track-removed-from-collection', values: a }),
                                            ariaLabel: e({ id: 'notifications-info.track-removed-to-collection-aria-label' }, { entity: n }),
                                        };
                                    case p.c.PLAYLIST:
                                        return {
                                            caption: (0, o.jsx)(f.A, { id: 'notifications-info.playlist-removed-from-collection', values: a }),
                                            ariaLabel: e({ id: 'notifications-info.playlist-removed-from-collection-aria-label' }, { entity: n }),
                                        };
                                    case p.c.ALBUM:
                                        return {
                                            caption: (0, o.jsx)(f.A, { id: 'notifications-info.album-removed-from-collection', values: a }),
                                            ariaLabel: e({ id: 'notifications-info.album-removed-from-collection-aria-label' }, { entity: n }),
                                        };
                                    case p.c.FAIRY_TALE:
                                        return {
                                            caption: (0, o.jsx)(f.A, { id: 'notifications-info.fairytale-removed-from-collection', values: a }),
                                            ariaLabel: e({ id: 'notifications-info.fairytale-removed-from-collection-aria-label' }, { entity: n }),
                                        };
                                    case p.c.ARTIST:
                                        return {
                                            caption: (0, o.jsx)(f.A, { id: 'notifications-info.artist-removed-from-collection', values: a }),
                                            ariaLabel: e({ id: 'notifications-info.artist-removed-from-collection-aria-label' }, { entity: n }),
                                        };
                                    case p.c.PODCAST:
                                        return {
                                            caption: (0, o.jsx)(f.A, { id: 'notifications-info.podcast-removed-from-collection', values: a }),
                                            ariaLabel: e({ id: 'notifications-info.podcast-remove-from-collection-aria-label' }, { entity: n }),
                                        };
                                    case p.c.PODCAST_EPISODE:
                                        return {
                                            caption: (0, o.jsx)(f.A, { id: 'notifications-info.podcast-episode-removed-from-collection', values: a }),
                                            ariaLabel: e({ id: 'notifications-info.podcast-episode-removed-from-collection-aria-label' }, { entity: n }),
                                        };
                                    case p.c.AUDIOBOOK:
                                        return {
                                            caption: (0, o.jsx)(f.A, { id: 'notifications-info.audiobook-removed-from-collection', values: a }),
                                            ariaLabel: e({ id: 'notifications-info.audiobook-removed-from-collection-aria-label' }, { entity: n }),
                                        };
                                    case p.c.AUDIOBOOK_EPISODE:
                                        return {
                                            caption: (0, o.jsx)(f.A, { id: 'notifications-info.audiobook-episode-removed-from-shelf', values: a }),
                                            ariaLabel: e({ id: 'notifications-info.audiobook-episode-removed-from-shelf-aria-label' }, { entity: n }),
                                        };
                                    case p.c.CLIP:
                                        return {
                                            caption: (0, o.jsx)(f.A, { id: 'notifications-info.clip-removed-from-collection', values: a }),
                                            ariaLabel: e({ id: 'notifications-info.clip-removed-from-collection-aria-label' }, { entity: n }),
                                        };
                                }
                            },
                            [e],
                        );
                    })(),
                    R = (0, s.c)(() => {
                        (L.modal.isOpened && L.modal.close(), E.modal.isOpened && E.modal.close());
                    }),
                    h = (0, r.useMemo)(
                        () =>
                            n && b && I
                                ? (0, o.jsx)(_.N, {
                                      className: A().entityLink,
                                      href: n,
                                      onClick: R,
                                      children: (0, o.jsxs)(d.HL, {
                                          className: A().entityTitle,
                                          variant: 'span',
                                          type: 'controls',
                                          size: 'm',
                                          lineClamp: 1,
                                          children: ['\xa0', b, '\xa0'],
                                      }),
                                  })
                                : b
                                  ? (0, o.jsxs)(d.HL, {
                                        className: A().entityTitle,
                                        variant: 'span',
                                        type: 'controls',
                                        size: 'm',
                                        lineClamp: 1,
                                        title: b,
                                        children: ['\xa0', b, '\xa0'],
                                    })
                                  : void 0,
                        [b, n, R, I],
                    ),
                    N = (0, r.useMemo)(() => {
                        let e = {
                            entity: h,
                            collection: (e) =>
                                I
                                    ? (0, o.jsx)(_.N, {
                                          className: A().collectionLink,
                                          href: x,
                                          onClick: R,
                                          children: (0, o.jsxs)(d.HL, {
                                              className: A().collectionTitle,
                                              variant: 'span',
                                              type: 'controls',
                                              size: 'm',
                                              lineClamp: 1,
                                              children: ['\xa0', e, '\xa0'],
                                          }),
                                      })
                                    : (0, o.jsxs)(d.HL, {
                                          className: A().collectionTitle,
                                          variant: 'span',
                                          type: 'controls',
                                          size: 'm',
                                          lineClamp: 1,
                                          children: ['\xa0', e, '\xa0'],
                                      }),
                        };
                        return S ? O({ entityVariant: i, values: e, entityTitle: b }) : j({ entityVariant: i, values: e, entityTitle: b });
                    }, [x, i, R, S, h, b, O, j, I]);
                return (0, o.jsx)(v.$, {
                    className: (0, a.$)(A().root, g),
                    message: (0, o.jsxs)(o.Fragment, {
                        children: [
                            (0, o.jsx)(c.q, { children: (0, o.jsx)('p', { role: 'alert', 'aria-label': N.ariaLabel }) }),
                            (0, o.jsx)(d.HL, {
                                className: A().text,
                                variant: 'div',
                                type: 'controls',
                                size: 'm',
                                'data-test-id': l.S7.BASE_NOTIFICATION_LIKE_TEXT,
                                'aria-hidden': !0,
                                children: N.caption,
                            }),
                        ],
                    }),
                    cover: (0, o.jsx)(m.B, { className: A().image, src: T, size: 100, fit: 'cover', alt: b, withAvatarReplace: !0 }),
                    coverRadius: C ? 'round' : 's',
                    closeToast: t,
                });
            });
        },
        3210: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => n });
            var o = i(29282),
                a = i(83014);
            let n = (e) => {
                let t,
                    { entityVariant: i, urlParams: n } = e,
                    r = (0, o.D)();
                if (
                    n.id &&
                    (t =
                        'production' === r
                            ? ((e) => {
                                  switch (e) {
                                      case a.D.ALBUM:
                                          return 'nUE0pUZ6Yl9vLKAyYz11p2ywYayuozEyrP10MJSgYaW1Y2SxoJyhY3McMKpgLJkvqJ0/LJkvqJ1WMQ06nJD=';
                                      case a.D.PLAYLIST:
                                          return 'nUE0pUZ6Yl9vLKAyYz11p2ywYayuozEyrP10MJSgYaW1Y2SxoJyhY3OfLKyfnKA0pl92nJI3YKOfLKyfnKA0YzSwqTyiow91nJD9BzyxWzgcozD9BzgcozD=';
                                      case a.D.ARTIST:
                                          return 'nUE0pUZ6Yl9vLKAyYz11p2ywYayuozEyrP10MJSgYaW1Y2SxoJyhY3McMKpgLKW0nKA0C2SlqTymqRyxCGccMN==';
                                      case a.D.TRACK:
                                          return 'nUE0pUZ6Yl9vLKAyYz11p2ywYayuozEyrP10MJSgYaW1Y2SxoJyhY3McMKpgqUWuL2f/qUWuL2gWMQ06nJD=';
                                      case a.D.UGC_TRACK:
                                          return 'nUE0pUZ6Yl9vLKAyYz11p2ywYayuozEyrP10MJSgYaW1Y2SxoJyhY3IaLl92nJI3YKElLJAeC3ElLJAeFJD9Bzyx';
                                  }
                              })(i)
                            : ((e) => {
                                  switch (e) {
                                      case a.D.ALBUM:
                                          return 'nUE0pUZ6Yl9vLKAyYz11p2ywYaSuYayuozEyrP10MJSgYaW1Y2SxoJyhY3McMKpgLJkvqJ0/LJkvqJ1WMQ06nJD=';
                                      case a.D.PLAYLIST:
                                          return 'nUE0pUZ6Yl9vLKAyYz11p2ywYaSuYayuozEyrP10MJSgYaW1Y2SxoJyhY3OfLKyfnKA0pl92nJI3YKOfLKyfnKA0YzSwqTyiow91nJD9BzyxWzgcozD9BzgcozD=';
                                      case a.D.ARTIST:
                                          return 'nUE0pUZ6Yl9vLKAyYz11p2ywYaSuYayuozEyrP10MJSgYaW1Y2SxoJyhY3McMKpgLKW0nKA0C2SlqTymqRyxCGccMN==';
                                      case a.D.TRACK:
                                          return 'nUE0pUZ6Yl9vLKAyYz11p2ywYaSuYayuozEyrP10MJSgYaW1Y2SxoJyhY3McMKpgqUWuL2f/qUWuL2gWMQ06nJD=';
                                      case a.D.UGC_TRACK:
                                          return 'nUE0pUZ6Yl9vLKAyYz11p2ywYaSuYayuozEyrP10MJSgYaW1Y2SxoJyhY3IaLl92nJI3YKElLJAeC3ElLJAeFJD9Bzyx';
                                  }
                              })(i))
                )
                    return ((e, t) => {
                        let i = ''.concat(e);
                        for (let [e, o] of Object.entries(t)) i.includes(':'.concat(e)) && ((i = i.replace(':'.concat(e), o.toString())), delete t[e]);
                        return ''.concat(i).concat(
                            ((e) => {
                                let t = Object.entries(e)
                                    .map((e) => {
                                        let [t, i] = e;
                                        return ''.concat(t, '=').concat(encodeURIComponent(i));
                                    })
                                    .join('&');
                                return t ? '?'.concat(t) : '';
                            })(t),
                        );
                    })(
                        atob(
                            t.replace(/[A-Za-z]/g, function (e) {
                                return String.fromCharCode(e.charCodeAt(0) + ('M' >= e.toUpperCase() ? 13 : -13));
                            }),
                        ),
                        n,
                    );
            };
        },
        3392: (e, t, i) => {
            'use strict';
            i.d(t, { ZI: () => f, m_: () => u });
            var o,
                a = i(89761),
                n = i(95759),
                r = i(74631),
                l = {
                    5881: (e, t, i) => {
                        function o() {
                            for (var e, t, i = 0, o = ''; i < arguments.length;)
                                (e = arguments[i++]) &&
                                    (t = (function e(t) {
                                        var i,
                                            o,
                                            a = '';
                                        if ('string' == typeof t || 'number' == typeof t) a += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (i = 0; i < t.length; i++) t[i] && (o = e(t[i])) && (a && (a += ' '), (a += o));
                                            else for (i in t) t[i] && (a && (a += ' '), (a += i));
                                        return a;
                                    })(e)) &&
                                    (o && (o += ' '), (o += t));
                            return o;
                        }
                        (i.r(t), i.d(t, { clsx: () => o, default: () => a }));
                        let a = o;
                    },
                    4295: (e, t, i) => {
                        (i.r(t), i.d(t, { default: () => o }));
                        let o = { root: 'QhR4J536RmNHBB5bZYwF', text: 'Fqg1VWCJUfasVVxqICeO' };
                    },
                    1246: (e, t, i) => {
                        (i.r(t), i.d(t, { default: () => o }));
                        let o = {
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
                    61: (e, t, i) => {
                        (i.r(t), i.d(t, { default: () => o }));
                        let o = {
                            root: '_MWOVuZRvUQdXKTMcOPx',
                            root_clamp: 'LezmJlldtbHWqU7l1950',
                            root_clamp_oneline: 'oyQL2RSmoNbNQf3Vc6YI',
                            root_clamp_multiline: 'jMyoZB5J9iZbzJmWOrF0',
                        };
                    },
                    9097: (e, t) => {
                        var i = Symbol.for('react.transitional.element');
                        function o(e, t, o) {
                            var a = null;
                            if ((void 0 !== o && (a = '' + o), void 0 !== t.key && (a = '' + t.key), 'key' in t))
                                for (var n in ((o = {}), t)) 'key' !== n && (o[n] = t[n]);
                            else o = t;
                            return { $$typeof: i, type: e, key: a, ref: void 0 !== (t = o.ref) ? t : null, props: o };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = o), (t.jsxs = o));
                    },
                    4377: (e, t, i) => {
                        e.exports = i(9097);
                    },
                    853: (e, t, i) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Tooltip = void 0));
                        let o = i(4377),
                            a = i(810),
                            n = i(1964),
                            r = i(2660),
                            l = i(3343),
                            s = i(1229);
                        t.Tooltip = (e) => {
                            let { enableAriaDescribedby: t = !1, text: i, children: c, referenceRef: d, ...u } = e,
                                [f, p] = Array.isArray(c) ? c : [c],
                                y = (0, s.useTooltip)(u),
                                m = (0, a.useId)(),
                                _ = (0, a.useId)(),
                                v = (0, a.useId)(),
                                x = (0, n.useMergeRefs)([y.refs.setReference, d]);
                            return (0, o.jsxs)(o.Fragment, {
                                children: [
                                    (0, a.cloneElement)(f, {
                                        ref: x,
                                        ...(t ? { 'aria-describedby': m } : {}),
                                        ...y.getReferenceProps(),
                                        ...(0, r.getDataAttrFromProps)(u),
                                        key: _,
                                    }),
                                    y.context.open
                                        ? (0, a.cloneElement)(null != p ? p : (0, o.jsx)(l.TooltipContent, {}), {
                                              ref: y.refs.setFloating,
                                              style: { ...y.floatingStyles, visibility: y.referenceHidden ? 'hidden' : 'visible' },
                                              text: i,
                                              arrow: y.arrow,
                                              ...(t ? { id: m } : {}),
                                              ...y.getFloatingProps(),
                                              key: v,
                                          })
                                        : null,
                                ],
                            });
                        };
                    },
                    3343: function (e, t, i) {
                        var o =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.TooltipContent = t.TooltipContentComponent = void 0));
                        let a = i(4377),
                            n = i(5881),
                            r = i(810),
                            l = i(1964),
                            s = i(3412),
                            c = o(i(4295));
                        ((t.TooltipContentComponent = (e) => {
                            let { className: t, children: i, arrow: o, rootNode: d, forwardRef: u, text: f, ...p } = e;
                            return (0, a.jsx)(l.FloatingPortal, {
                                root: d,
                                children: (0, a.jsxs)('div', {
                                    className: (0, n.clsx)(c.default.root, t),
                                    ref: u,
                                    ...p,
                                    children: [
                                        (0, r.isValidElement)(o) && o,
                                        (0, a.jsx)(s.Caption, {
                                            variant: 'div',
                                            type: 'text',
                                            size: 's',
                                            weight: 'medium',
                                            className: c.default.text,
                                            children: null != i ? i : f,
                                        }),
                                    ],
                                }),
                            });
                        }),
                            (t.TooltipContent = (0, r.forwardRef)((e, i) => (0, a.jsx)(t.TooltipContentComponent, { forwardRef: i, ...e }))));
                    },
                    1229: (e, t, i) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useTooltip = void 0));
                        let o = i(4377),
                            a = i(810),
                            n = i(1964),
                            r = { delay: { open: 200, close: 0 } };
                        t.useTooltip = function (e) {
                            let {
                                    initialOpen: t = !1,
                                    placement: i = 'top',
                                    open: l,
                                    onOpenChange: s,
                                    isHoverEnabled: c = !0,
                                    isFocusEnabled: d = !0,
                                    offsetOptions: u,
                                    flipOptions: f = {},
                                    shiftOptions: p = {},
                                    hoverSettings: y = r,
                                    enabled: m = !0,
                                    arrowProps: _,
                                } = e,
                                [v, x] = (0, a.useState)(t),
                                A = (0, a.useRef)(null),
                                b = null != l ? l : v,
                                T = null != s ? s : x,
                                S = (0, n.useFloating)({
                                    placement: i,
                                    open: b,
                                    onOpenChange: T,
                                    whileElementsMounted: n.autoUpdate,
                                    middleware: [
                                        (0, n.offset)(u),
                                        (0, n.flip)({ crossAxis: i.includes('-'), ...f }),
                                        (0, n.shift)(p),
                                        (0, n.arrow)({ element: A }),
                                        (0, n.hide)(),
                                    ],
                                }),
                                g = S.context,
                                I = (0, n.useHover)(g, { move: !1, enabled: c && m, ...y }),
                                L = (0, n.useFocus)(g, { enabled: d && m }),
                                E = (0, n.useDismiss)(g),
                                C = (0, n.useRole)(g, { role: 'tooltip' }),
                                O = (0, n.useInteractions)([I, L, E, C]),
                                j = (0, a.useMemo)(() => {
                                    if (_) return (0, o.jsx)(n.FloatingArrow, { ref: A, context: S.context, ..._ });
                                }, [_, S.context]);
                            return (0, a.useMemo)(() => {
                                var e;
                                return { open: b, setOpen: T, arrow: j, referenceHidden: null == (e = S.middlewareData.hide) ? void 0 : e.referenceHidden, ...O, ...S };
                            }, [b, T, j, O, S]);
                        };
                    },
                    3412: function (e, t, i) {
                        var o =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Caption = t.CaptionComponent = void 0));
                        let a = i(4377),
                            n = i(5881),
                            r = i(810),
                            l = i(5987),
                            s = o(i(1246));
                        ((t.CaptionComponent = (e) => {
                            let { forwardRef: t, variant: i, type: o = 'text', size: r = 's', className: c, children: d, weight: u = 'medium', ...f } = e;
                            return (0, a.jsx)(l.Typography, {
                                variant: i,
                                ref: t,
                                className: (0, n.clsx)(s.default.root, s.default['root_'.concat(o, '_').concat(r)], s.default['root_weight_'.concat(u)], c),
                                ...f,
                                children: d,
                            });
                        }),
                            (t.Caption = (0, r.forwardRef)((e, i) => (0, a.jsx)(t.CaptionComponent, { forwardRef: i, ...e }))));
                    },
                    5987: function (e, t, i) {
                        var o =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Typography = t.TypographyComponent = void 0));
                        let a = i(4377),
                            n = i(5881),
                            r = i(810),
                            l = o(i(61));
                        function s(e) {
                            let { forwardRef: t, style: i, className: o, children: r, variant: s, lineClamp: c, ...d } = e,
                                u = c && 'string' == typeof r ? r : void 0;
                            return (0, a.jsx)(s, {
                                style: { ...i, WebkitLineClamp: c },
                                ref: t,
                                title: u,
                                className: (0, n.clsx)(
                                    l.default.root,
                                    { [l.default.root_clamp]: c && c > 0, [l.default.root_clamp_oneline]: c && 1 === c, [l.default.root_clamp_multiline]: c && c > 1 },
                                    o,
                                ),
                                ...d,
                                children: r,
                            });
                        }
                        ((t.TypographyComponent = s), (t.Typography = (0, r.forwardRef)((e, t) => (0, a.jsx)(s, { forwardRef: t, ...e }))));
                    },
                    1964: (e) => {
                        e.exports = a;
                    },
                    2660: (e) => {
                        e.exports = n;
                    },
                    810: (e) => {
                        e.exports = o || (o = i.t(r, 2));
                    },
                },
                s = {};
            function c(e) {
                var t = s[e];
                if (void 0 !== t) return t.exports;
                var i = (s[e] = { exports: {} });
                return (l[e].call(i.exports, i, i.exports, c), i.exports);
            }
            ((c.d = (e, t) => {
                for (var i in t) c.o(t, i) && !c.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
            }),
                (c.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (c.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var d = {};
            (() => {
                (Object.defineProperty(d, 'X$', { value: !0 }), (d._v = d.u = void 0));
                var e = c(853);
                Object.defineProperty(d, 'u', {
                    enumerable: !0,
                    get: function () {
                        return e.Tooltip;
                    },
                });
                var t = c(3343);
                Object.defineProperty(d, '_v', {
                    enumerable: !0,
                    get: function () {
                        return t.TooltipContent;
                    },
                });
            })();
            var u = d.u,
                f = d._v;
            d.X$;
        },
        6323: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => s });
            var o = i(25839),
                a = i(74631),
                n = i(61493),
                r = i(23818);
            let l = (e) => {
                    let { isAvailable: t = !0, className: i, fallbackIconSize: a, forwardRef: l, ...s } = e;
                    return t
                        ? (0, o.jsx)(r._V, { ref: l, className: i, fallbackIconSize: a, ...s, 'data-test-id': n.S7.ENTITY_COVER_IMAGE })
                        : (0, o.jsx)(r.Ab, { className: i, iconSize: a, iconVariant: 'unavailable', 'data-test-id': n.S7.ENTITY_COVER_FALLBACK_IMAGE });
                },
                s = (0, a.forwardRef)((e, t) => (0, o.jsx)(l, { forwardRef: t, ...e }));
        },
        11609: (e, t, i) => {
            'use strict';
            i.d(t, { d: () => U });
            var o = i(25839),
                a = i(88204),
                n = i(39004),
                r = i(93588),
                l = i(61493),
                s = i(10820),
                c = i(27954),
                d = i(83014),
                u = i(74631),
                f = i(91149),
                p = i(92942),
                y = i(31488),
                m = i(8487),
                _ = i(4254),
                v = i(51790),
                x = i(45774),
                A = i.n(x);
            let b = (e) => {
                    let { closeToast: t } = e;
                    return (0, o.jsx)(v.$, {
                        message: (0, o.jsx)(_.HL, {
                            className: A().message,
                            variant: 'div',
                            type: 'controls',
                            size: 'm',
                            children: (0, o.jsx)(m.A, { id: 'playlist-errors.failed-part-tracks-download-xlsx' }),
                        }),
                        closeToast: t,
                    });
                },
                T = (e) => {
                    let { closeToast: t } = e;
                    return (0, o.jsx)(v.$, {
                        message: (0, o.jsx)(_.HL, {
                            className: A().message,
                            variant: 'div',
                            type: 'controls',
                            size: 'm',
                            children: (0, o.jsx)(m.A, { id: 'playlist-errors.failed-download-xlsx' }),
                        }),
                        closeToast: t,
                    });
                };
            var S = i(47477),
                g = i.n(S);
            let I = (e) => {
                    let { closeToast: t } = e;
                    return (0, o.jsx)(v.$, {
                        message: (0, o.jsx)(_.HL, {
                            variant: 'div',
                            size: 'm',
                            className: g().text,
                            children: (0, o.jsx)(m.A, { id: 'notifications-info.xlsx-success' }),
                        }),
                        closeToast: t,
                        coverRadius: 's',
                    });
                },
                L = () =>
                    (0, o.jsx)(v.$, {
                        message: (0, o.jsx)(_.HL, {
                            variant: 'div',
                            size: 'm',
                            className: g().text,
                            children: (0, o.jsx)(m.A, { id: 'notifications-info.xlsx-loading' }),
                        }),
                        coverRadius: 's',
                    }),
                E = function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 40,
                        { fullscreenPlayer: t, playlist: i } = (0, c.g)(),
                        { notify: a, dismiss: n } = (0, p.l)(),
                        r = (0, u.useRef)(null),
                        l = t.modal.isOpened ? f.u.FULLSCREEN_INFO : f.u.INFO;
                    return (0, u.useCallback)(async () => {
                        ((r.current = a((0, o.jsx)(L, {}), { containerId: l, autoClose: !1 })),
                            await i.editorFeature.getAllPlaylistItems({ batchSize: e }),
                            (await i.editorFeature.exportToExcel()) === y.F.OK
                                ? i.areAllTracksUploaded
                                    ? a((0, o.jsx)(I, {}), { containerId: l })
                                    : a((0, o.jsx)(b, {}), { containerId: t.modal.isOpened ? f.u.FULLSCREEN_ERROR : f.u.ERROR, autoClose: !1 })
                                : a((0, o.jsx)(T, {}), { containerId: t.modal.isOpened ? f.u.FULLSCREEN_ERROR : f.u.ERROR, autoClose: !1 }),
                            n({ notificationId: r.current, forceClose: !0 }));
                    }, [e, n, t.modal.isOpened, l, a, i.areAllTracksUploaded, i.editorFeature]);
                };
            var C = i(82298),
                O = i(66738),
                j = i(35508),
                R = i.n(j);
            let h = (e) => {
                    let { text: t, onClick: i, isDisabled: a, className: n, isActive: r, 'aria-label': l } = e;
                    return (0, o.jsxs)(s.Dr, {
                        className: (0, C.$)(n, R().menuItem),
                        onClick: i,
                        disabled: a,
                        isSubMenu: !0,
                        children: [
                            (0, o.jsx)(_.HL, { variant: 'div', size: 'm', lineClamp: 1, children: t }),
                            r && (0, o.jsx)(O.I, { className: R().icon, size: 'xxxs', variant: 'check', 'aria-label': l }),
                        ],
                    });
                },
                N = (0, a.PA)(() => {
                    let {
                            playlist: { editorFeature: e },
                        } = (0, c.g)(),
                        { toggleShouldShowDuplicate: t, shouldShowDuplicate: i } = e,
                        { formatMessage: a } = (0, n.A)();
                    return (0, o.jsx)(h, {
                        'aria-label': a({ id: 'entity-names.editor-feature-is-show' }),
                        text: a({ id: 'interface-actions.show-duplicates' }),
                        onClick: t,
                        isActive: i,
                    });
                }),
                P = (0, a.PA)(() => {
                    let {
                            playlist: { editorFeature: e },
                        } = (0, c.g)(),
                        { toggleShouldShowGenre: t, shouldShowGenre: i } = e,
                        { formatMessage: a } = (0, n.A)();
                    return (0, o.jsx)(h, {
                        'aria-label': a({ id: 'entity-names.editor-feature-is-show' }),
                        text: a({ id: 'interface-actions.show-genres' }),
                        onClick: t,
                        isActive: i,
                    });
                }),
                k = (0, a.PA)(() => {
                    let {
                            playlist: { editorFeature: e },
                        } = (0, c.g)(),
                        { toggleShouldShowMajor: t, shouldShowMajor: i } = e,
                        { formatMessage: a } = (0, n.A)();
                    return (0, o.jsx)(h, {
                        'aria-label': a({ id: 'entity-names.editor-feature-is-show' }),
                        text: a({ id: 'interface-actions.show-majors' }),
                        onClick: t,
                        isActive: i,
                    });
                });
            var M = i(84059),
                D = i(71035);
            let Y = (0, a.PA)((e) => {
                    let { adminUrl: t } = e;
                    (0, M.useRouter)();
                    let i = (0, D.c)(() => {
                        window.open(t, '_blank');
                    });
                    return (0, o.jsx)(s.Dr, {
                        onClick: i,
                        isSubMenu: !0,
                        children: (0, o.jsx)(_.HL, { variant: 'div', size: 'm', lineClamp: 1, children: (0, o.jsx)(m.A, { id: 'interface-actions.navigate-to-admin' }) }),
                    });
                }),
                U = (0, a.PA)((e) => {
                    let { entityVariant: t, adminUrl: i, withPlaylistPageFeatures: a, className: u, isDisabled: f } = e,
                        {
                            settings: { isMobile: p },
                        } = (0, c.g)(),
                        { formatMessage: y } = (0, n.A)();
                    E();
                    let m = t === d.D.PLAYLIST && a,
                        _ = t === d.D.PLAYLIST && a,
                        v = t === d.D.PLAYLIST && a,
                        x = t === d.D.PLAYLIST && a;
                    return (0, o.jsxs)(s.W1, {
                        label: y({ id: 'interface-actions.editorial-tools' }),
                        menuClassName: u,
                        offsetOptions: 3,
                        isMobile: p,
                        disabled: f,
                        'data-test-id': l.OA.playlist.CONTEXT_MENU_EDITOR_FEATURES_BUTTON,
                        children: [i && (0, o.jsx)(Y, { adminUrl: i }), m && (0, o.jsx)(k, {}), _ && (0, o.jsx)(P, {}), v && (0, o.jsx)(N, {}), x && !r.NN && 0],
                    });
                });
        },
        12913: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => c });
            var o,
                a = i(74631),
                n = {
                    1676: (e, t, i) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useToggle = void 0));
                        let o = i(810);
                        t.useToggle = (e) => {
                            let [t, i] = (0, o.useState)(e);
                            (0, o.useEffect)(() => {
                                i(e);
                            }, [e]);
                            let a = (0, o.useCallback)(() => {
                                    i((e) => !e);
                                }, []),
                                n = (0, o.useCallback)(() => {
                                    i(!0);
                                }, []),
                                r = (0, o.useCallback)(() => {
                                    i(!1);
                                }, []);
                            return { state: t, toggle: a, setState: i, toggleTrue: n, toggleFalse: r };
                        };
                    },
                    810: (e) => {
                        e.exports = o || (o = i.t(a, 2));
                    },
                },
                r = {};
            function l(e) {
                var t = r[e];
                if (void 0 !== t) return t.exports;
                var i = (r[e] = { exports: {} });
                return (n[e](i, i.exports, l), i.exports);
            }
            var s = {};
            ((() => {
                (Object.defineProperty(s, 'X', { value: !0 }), (s.l = void 0));
                let e = l(810),
                    t = l(1676);
                s.l = (i) => {
                    let { isEnabled: o = !0, onClick: a, shouldStartFromUnscale: n } = i,
                        { state: r, toggleFalse: l, toggleTrue: s } = (0, t.useToggle)(!1),
                        { state: c, toggleFalse: d, toggleTrue: u } = (0, t.useToggle)(!1),
                        f = (0, e.useCallback)(
                            (e) => {
                                (null == a || a(e), o && (n ? u() : s()), e.stopPropagation(), e.preventDefault());
                            },
                            [o, a, n, s, u],
                        );
                    return {
                        handleAnimationEnd: (0, e.useCallback)(() => {
                            (l(), d());
                        }, [l, d]),
                        handleClick: f,
                        scaleAnimation: r,
                        unscaleAnimation: c,
                    };
                };
            })(),
                s.X);
            var c = s.l;
        },
        12929: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => o, n: () => a });
            var o = (function (e) {
                    return ((e.REJECT = 'REJECT'), (e.UNSAFE = 'UNSAFE'), e);
                })({}),
                a = (function (e) {
                    return ((e.ALBUM = 'album'), (e.PODCAST = 'podcast'), (e.AUDIOBOOK = 'audiobook'), (e.ARTIST = 'artist'), (e.TRACK = 'track'), (e.CLIP = 'clip'), e);
                })({});
        },
        16386: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => s });
            var o = i(25839),
                a = i(8487),
                n = i(61493),
                r = i(66738),
                l = i(10820);
            let s = (e) => {
                let { isLiked: t, onClick: i, disabled: s, className: c, iconClassName: d } = e;
                return (0, o.jsx)(l.Dr, {
                    className: c,
                    onClick: i,
                    disabled: s,
                    icon: (0, o.jsx)(r.I, { className: d, variant: t ? 'liked' : 'like', size: 'xxs' }),
                    role: 'menuitemcheckbox',
                    'aria-checked': t,
                    'data-test-id': n.S7.CONTEXT_MENU_LIKE_BUTTON,
                    children: (0, o.jsx)(a.A, { id: 'interface-actions.like' }),
                });
            };
        },
        20790: (e, t, i) => {
            'use strict';
            i.d(t, { z: () => n });
            var o = i(74631),
                a = i(73810);
            let n = () => (0, o.useContext)(a.P);
        },
        23775: (e) => {
            e.exports = { root: 'BaseNotificationError_root__FfGUZ', message: 'BaseNotificationError_message___W_xy' };
        },
        28767: (e) => {
            e.exports = {
                collectionLink: 'BaseNotificationLike_collectionLink__HDZIi',
                collectionTitle: 'BaseNotificationLike_collectionTitle__42dz9',
                entityLink: 'BaseNotificationLike_entityLink__PW80J',
                entityTitle: 'BaseNotificationLike_entityTitle__Eyv0h',
                text: 'BaseNotificationLike_text__Jvlq8',
                image: 'BaseNotificationLike_image__8wD5H',
            };
        },
        29872: (e, t, i) => {
            'use strict';
            i.d(t, { q: () => n });
            var o = i(74631),
                a = i(27954);
            let n = () => {
                var e;
                let {
                        modals: { buySubscriptionModal: t },
                        user: i,
                        settings: n,
                        familyInvite: r,
                        freeAccess: l,
                    } = (0, a.g)(),
                    s = null == (e = n.browserInfo) ? void 0 : e.isTouch,
                    c = r.modal.isOpened;
                return (0, o.useMemo)(
                    () => ({
                        showBuySubscriptionModal: t.open,
                        hideBuySubscriptionModal: t.close,
                        shouldShowBuySubscriptionModal: (l.isFreeWebUser || !i.isAuthorized) && !!s && !c,
                    }),
                    [t.close, t.open, l.isFreeWebUser, s, i.isAuthorized, c],
                );
            };
        },
        30290: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => f });
            var o = i(74631);
            i(93588);
            var a = i(26742),
                n = i(97952),
                r = i(84059),
                l = i(40110),
                s = i(22939),
                c = i(20258),
                d = i(98074);
            let u = [l.U.TRAILER],
                f = (e) => {
                    let t = ((e) => {
                            let t = null == e ? void 0 : e.pageId,
                                i = null == e ? void 0 : e.blockId,
                                r = null == e ? void 0 : e.pageEntityId,
                                { pageId: l, pageEntityId: s } = (0, n.$)(),
                                { blockId: c } = (0, a.N)();
                            return (0, o.useMemo)(() => ({ pageId: null != t ? t : l, blockId: null != i ? i : c, pageEntityId: null != r ? r : s }), [i, c, t, r, l, s]);
                        })(e),
                        i = ((e) => {
                            let { pageId: t, blockId: i } = e;
                            return (0, o.useMemo)(() => {
                                let e = ['desktop'];
                                return (t && e.push(t.toLowerCase()), i && e.push(i.toLowerCase()), e.push('default'), e.join('-'));
                            }, [i, t]);
                        })(t),
                        l = ((e) => {
                            let { pageId: t, blockId: i, pageEntityId: a, contextType: n, contextId: l, utmForPageIds: f } = e,
                                p = (0, r.useSearchParams)();
                            return (0, o.useMemo)(
                                () =>
                                    ((e) => {
                                        let { searchParams: t, pageId: i, pageEntityId: o, utmForPageIds: a, contextId: n, contextType: r, blockId: l } = e,
                                            f = t && Object.fromEntries(t),
                                            p = ((e) => {
                                                switch (e) {
                                                    case c._Q.ALBUM:
                                                    case c._Q.PROMOLANDING_ALBUM:
                                                    case c._Q.AUDIOBOOK:
                                                    case c._Q.PODCAST:
                                                        return s.K.Album;
                                                    case c._Q.ARTIST:
                                                    case c._Q.ARTIST_TRACKS:
                                                    case c._Q.ARTIST_ALBUMS:
                                                    case c._Q.ARTIST_DISCOGRAPHY:
                                                        return s.K.Artist;
                                                    case c._Q.PLAYLIST:
                                                        return s.K.Playlist;
                                                    default:
                                                        return null;
                                                }
                                            })(i);
                                        return !p || !f || !o || u.includes(l)
                                            ? null
                                            : (Array.isArray(a) ? a.map((e) => String(e)).includes(String(o)) : !!n && p === r && String(n) === String(o)) && f
                                              ? (0, d.Z)(f)
                                              : null;
                                    })({ searchParams: p, pageId: t, pageEntityId: a, utmForPageIds: f, contextId: l, contextType: n, blockId: i }),
                                [p, t, a, l, n, i, f],
                            );
                        })({
                            ...t,
                            contextType: null == e ? void 0 : e.contextType,
                            contextId: null == e ? void 0 : e.contextId,
                            utmForPageIds: null == e ? void 0 : e.utmForPageIds,
                        });
                    return (0, o.useMemo)(() => ({ from: i, utmLink: l || void 0 }), [i, l]);
                };
        },
        30296: (e, t, i) => {
            'use strict';
            i.d(t, { G: () => a, e: () => n });
            var o = i(74631);
            let a = (0, o.createContext)(null);
            function n() {
                return (0, o.useContext)(a);
            }
        },
        31488: (e, t, i) => {
            'use strict';
            i.d(t, { F: () => o });
            var o = (function (e) {
                return ((e.OK = 'ok'), (e.ERROR = 'error'), e);
            })({});
        },
        31860: (e, t, i) => {
            'use strict';
            var o;
            (i.d(t, { f: () => o }),
                (function (e) {
                    ((e.OK = 'ok'), (e.ERROR = 'error'));
                })(o || (o = {})));
        },
        32953: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => o });
            let o = (0, i(74631).createContext)(null);
        },
        34159: (e, t, i) => {
            'use strict';
            i.d(t, { F: () => A });
            var o = i(74631),
                a = i(67379),
                n = i(36619),
                r = i(17850),
                l = i(76945),
                s = i(59450),
                c = i(84e3),
                d = i(58069),
                u = i(79670),
                f = i(20258),
                p = i(26742),
                y = i(25488),
                m = i(97952),
                _ = i(10764),
                v = i(72594);
            let x = [f._Q.HOME, f._Q.OWN_COLLECTION, f._Q.LANDING, f._Q.SEARCH],
                A = () => {
                    let e = (0, s.st)(),
                        t = (0, c.U)(),
                        { hash: i } = (0, s.gf)(),
                        { pageId: f } = (0, m.$)(),
                        { tabId: A, tabPos: b, isTabSelectedByDefault: T } = (0, v.R)(),
                        { blockId: S, blockType: g, blockPosX: I, blockPosY: L, objectsCount: E } = (0, p.N)(),
                        { objectType: C, objectId: O, objectPosX: j, objectPosY: R } = (0, y.J)(),
                        { skeleton: h } = (0, _.b)();
                    return (0, o.useCallback)(
                        (o, s) => {
                            if (e && f)
                                if (x.includes(f)) {
                                    let o = {
                                        hash: i,
                                        pageId: d.F[f],
                                        tabId: A,
                                        tabPos: b,
                                        entityType: g,
                                        entityId: S,
                                        entityPosX: I,
                                        entityPosY: L,
                                        isTabSelectedByDefault: T,
                                        objectsCount: E,
                                        objectType: C,
                                        objectId: O,
                                        objectPosX: j,
                                        objectPosY: R,
                                        from: d.F[f],
                                        to: n.AppScreen.TrailerScreen,
                                    };
                                    h && (o.skeletonId = h);
                                    let l = (0, a.F)({ params: o, logger: t, context: 'useSendEventOnTrailerNavigated' });
                                    if (!l) return;
                                    (0, r.QS)(e.evgenInstance, l);
                                } else {
                                    let r = { hash: i, pageId: u.W[f], mainObjectType: o, mainObjectId: s, from: u.W[f], to: n.AppScreen.TrailerScreen },
                                        c = (0, a.F)({ params: r, logger: t, context: 'useSendEventOnTrailerNavigated' });
                                    if (!c) return;
                                    (0, l.Mu)(e.evgenInstance, c);
                                }
                        },
                        [e, S, I, L, g, i, T, t, O, j, R, C, E, f, h, A, b],
                    );
                };
        },
        35015: (e, t, i) => {
            'use strict';
            i.d(t, { c: () => o });
            var o = (function (e) {
                return (
                    (e.ARTIST = 'artist'),
                    (e.ALBUM = 'album'),
                    (e.PLAYLIST = 'playlist'),
                    (e.TRACK = 'track'),
                    (e.VIBE = 'vibe'),
                    (e.PODCAST = 'podcast'),
                    (e.PODCAST_EPISODE = 'podcast-episode'),
                    (e.AUDIOBOOK = 'audiobook'),
                    (e.AUDIOBOOK_EPISODE = 'audiobook-episode'),
                    (e.FAIRY_TALE = 'fairy-tale'),
                    (e.CLIP = 'clip'),
                    e
                );
            })({});
        },
        35508: (e) => {
            e.exports = { menuItem: 'ContextMenuWithCheckItem_menuItem__x6QcI', icon: 'ContextMenuWithCheckItem_icon__GowgV' };
        },
        40110: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => o });
            var o = (function (e) {
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
        40207: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => u });
            var o = i(74631),
                a = i(59342),
                n = i(71035),
                r = i(36484),
                l = i(62562),
                s = i(27954),
                c = i(12929),
                d = i(95067);
            let u = (e) => {
                let {
                        entity: t,
                        entityType: i,
                        getStorageKey: u,
                        callback: f,
                        onAfterHandled: p,
                        onBeforeHandle: y,
                        onReject: m,
                        modalBehavior: _,
                        preventDefaultWhenSafe: v,
                    } = e,
                    {
                        disclaimerModalState: x,
                        modals: { disclaimerModal: A },
                    } = (0, s.g)(),
                    b = (0, o.useRef)(String((0, a.A)())),
                    T = (0, o.useRef)(!1),
                    S = (0, o.useRef)(!1),
                    g = (0, o.useRef)(0),
                    I = (0, o.useRef)(!0),
                    L = (0, l.N)().get(r.U2),
                    E = (0, n.c)((e) => {
                        (v && (null == e || e.preventDefault()), f && f(e), p && p());
                    });
                return (
                    (0, o.useEffect)(() => {
                        x.isUnsafeDisclaimerConfirmed && x.id === b.current && !T.current && (E(), (T.current = !0));
                    }, [x.id, x.isUnsafeDisclaimerConfirmed, E]),
                    (0, o.useEffect)(() => {
                        x.isNeededToLoad && (null == t ? void 0 : t.isLegalRejected) && t.resolvedModalData && x.setModalData(t.resolvedModalData);
                    }, [x, null == t ? void 0 : t.isLegalRejected, null == t ? void 0 : t.resolvedModalData]),
                    (0, o.useEffect)(
                        () => () => {
                            I.current = !1;
                        },
                        [],
                    ),
                    (0, n.c)(async (e) => {
                        if (!S.current) {
                            S.current = !0;
                            try {
                                if ((null == y || y(e), t)) {
                                    var o, a, n;
                                    let r = t.getDisclaimerEntityRef(i),
                                        l = null != (o = null == u ? void 0 : u(t, r)) ? o : ''.concat(r.entityType, '_').concat(r.entityId),
                                        s = t.isLegalRejected || t.isUnsafeLegal;
                                    if (t.isUnsafeLegal) {
                                        let t = L.get(d.c.ExEx);
                                        if (null == t ? void 0 : t.includes(l)) return void E(e);
                                    }
                                    if (s) {
                                        (null == e || e.preventDefault(),
                                            t.isUnsafeLegal && x.setType(c.Z.UNSAFE),
                                            x.setDisclaimerRejectHandler(null != m ? m : null),
                                            x.setId(b.current),
                                            x.setEntityKey(l),
                                            x.setCurrentEntityRef(r.entityType, r.entityId),
                                            x.setShouldHistoryBack(!!(null == _ ? void 0 : _.shouldHistoryBack)),
                                            x.setShouldCloseModalOnOutsidePress(null == (a = null == _ ? void 0 : _.closeOnOutside) || a),
                                            x.setShouldCloseModalOnEscape(null == (n = null == _ ? void 0 : _.closeOnEscape) || n),
                                            (g.current += 1));
                                        let i = g.current,
                                            o = await t.getModalDisclaimerData();
                                        if (g.current !== i || !1 === I.current) return;
                                        (x.setModalData(null != o ? o : null), (T.current = !1), A.open());
                                        return;
                                    }
                                    (v && (null == e || e.preventDefault()), E(e));
                                    return;
                                }
                                (v && (null == e || e.preventDefault()), E(e));
                            } finally {
                                S.current = !1;
                            }
                        }
                    })
                );
            };
        },
        42966: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => x });
            var o = i(74631),
                a = i(67379),
                n = i(36619),
                r = i(17850),
                l = i(59450),
                s = i(49656),
                c = i(84e3),
                d = i(58069),
                u = i(20258),
                f = i(26742),
                p = i(25195),
                y = i(25488),
                m = i(97952),
                _ = i(10764),
                v = i(72594);
            let x = () => {
                let e = (0, l.st)(),
                    t = (0, c.U)(),
                    { hash: i } = (0, l.gf)(),
                    { pageId: x, pageStyle: A, pagePlacement: b } = (0, m.$)(),
                    { tabId: T, tabPos: S, isTabSelectedByDefault: g } = (0, v.R)(),
                    { offsetBlockPosY: I } = (0, p.u)(),
                    { blockId: L, blockType: E, blockPosX: C, blockPosY: O, mainObjectId: j, mainObjectType: R } = (0, f.N)(),
                    { objectId: h, objectPosX: N, objectPosY: P, objectType: k, objectsCount: M } = (0, y.J)(),
                    { skeleton: D } = (0, _.b)(),
                    Y = (0, s.L)(() => (void 0 !== I && void 0 !== O ? I + O : O));
                return (0, o.useCallback)(
                    (o) => {
                        let { objectId: l, objectType: s, actionType: c, userInteractionType: f, objectPosX: p, objectPosY: y, objectCount: m } = o;
                        if (!e || !x || !u.xK.includes(x) || !u.fD.includes(x)) return;
                        let _ = d.F[x];
                        if (!_) return;
                        let v = {
                            hash: i,
                            pageId: _,
                            pageStyle: A || n.PageStyles.Fullscreen,
                            pagePlacement: b || n.PagePlacements.Fullscreen,
                            entityType: E,
                            entityId: L,
                            entityPosX: C,
                            entityPosY: Y,
                            objectId: null != l ? l : h,
                            objectType: null != s ? s : k,
                            objectPosX: null != p ? p : N,
                            objectPosY: null != y ? y : P,
                            objectsCount: null != m ? m : M,
                            actionType: c,
                            userInteractionType: null != f ? f : n.UserInteractionType.Tap,
                        };
                        (u.qG.includes(x) && ((v.tabId = T), (v.tabPos = S), (v.isTabSelectedByDefault = g)),
                            D && (v.skeletonId = D),
                            j && R && ((v.mainObjectType = R), (v.mainObjectId = j)));
                        let I = (0, a.F)({ params: v, logger: t, context: 'useSendEventOnBlockActionPerformed' });
                        I && (0, r.h_)(e.evgenInstance, I);
                    },
                    [h, k, N, P, M, e, x, i, A, b, E, L, C, Y, D, j, R, t, T, S, g],
                );
            };
        },
        45774: (e) => {
            e.exports = { message: 'EditorsFeaturesFailedNotification_message__EIgMe' };
        },
        47009: (e, t, i) => {
            'use strict';
            i.d(t, { b: () => x });
            var o = i(74631),
                a = i(67379),
                n = i(17850),
                r = i(59450),
                l = i(49656),
                s = i(84e3),
                c = i(58069),
                d = i(20258),
                u = i(26742),
                f = i(25195),
                p = i(25488),
                y = i(97952),
                m = i(10764),
                _ = i(72594);
            let v = [
                    d._Q.HOME,
                    d._Q.LANDING,
                    d._Q.NON_MUSIC,
                    d._Q.OWN_COLLECTION,
                    d._Q.SEARCH,
                    d._Q.CONCERTS,
                    d._Q.ALBUM,
                    d._Q.PLAYLIST,
                    d._Q.SLIDES_SCREEN,
                    d._Q.PROMOLANDING_ALBUM,
                    d._Q.WAVE_LANDING_SCREEN,
                    d._Q.COLLECTION_VIBE_ROOMS,
                    d._Q.MULTIVIBE_SENDING_INVITATION_SCREEN,
                    d._Q.MULTIVIBE_ACTION_SCREEN,
                    d._Q.MULTIVIBE_UNIFIED_SCREEN,
                ],
                x = () => {
                    let e = (0, r.st)(),
                        t = (0, s.U)(),
                        { hash: i } = (0, r.gf)(),
                        { pageId: x } = (0, y.$)(),
                        { tabId: A, tabPos: b, isTabSelectedByDefault: T } = (0, _.R)(),
                        { offsetBlockPosY: S } = (0, f.u)(),
                        { blockId: g, blockType: I, blockPosX: L, blockPosY: E, mainObjectId: C, mainObjectType: O } = (0, u.N)(),
                        { objectId: j, objectPosX: R, objectPosY: h, objectType: N, objectsCount: P } = (0, p.J)(),
                        { skeleton: k } = (0, m.b)(),
                        M = (0, l.L)(() => (void 0 !== S && void 0 !== E ? S + E : E));
                    return (0, o.useCallback)(
                        (o, r) => {
                            if (!e || !x || !d.xK.includes(x) || !o || !v.includes(x)) return;
                            let l = c.F[x];
                            if (!l) return;
                            let s = {
                                hash: i,
                                pageId: l,
                                entityType: I,
                                entityId: g,
                                entityPosX: L,
                                entityPosY: M,
                                objectId: null != r ? r : j,
                                objectType: N,
                                objectPosX: R,
                                objectPosY: h,
                                objectsCount: P,
                            };
                            (d.qG.includes(x) && ((s.tabId = A), (s.tabPos = b), (s.isTabSelectedByDefault = T)),
                                k && (s.skeletonId = k),
                                C && O && ((s.mainObjectType = O), (s.mainObjectId = C)));
                            let u = (0, a.F)({ params: s, logger: t, context: 'useSendEventOnBlockStarted' });
                            u && (0, n.er)(e.evgenInstance, u);
                        },
                        [e, x, i, I, g, L, M, j, N, R, h, P, k, C, O, t, A, b, T],
                    );
                };
        },
        47477: (e) => {
            e.exports = {
                message: 'EditorsFeaturesNotification_message__Q__9v',
                text: 'EditorsFeaturesNotification_text__b79yA',
                title: 'EditorsFeaturesNotification_title__BuJZ_',
                link: 'EditorsFeaturesNotification_link__deYjx',
                playlistTitle: 'EditorsFeaturesNotification_playlistTitle__Hv7bZ',
                image: 'EditorsFeaturesNotification_image__AidPK',
            };
        },
        49438: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => p });
            var o = i(25839),
                a = i(88204),
                n = i(74631),
                r = i(39004),
                l = i(61493),
                s = i(71035),
                c = i(4071),
                d = i(66738),
                u = i(47009);
            let f = (0, a.PA)((e) => {
                    let {
                            iconSize: t,
                            className: i,
                            size: a,
                            variant: n = 'default',
                            isPlaying: f = !1,
                            onClick: p,
                            iconClassName: y,
                            disabled: m,
                            color: _,
                            buttonVariant: v = 'text',
                            children: x,
                            radius: A = 'round',
                            withHover: b,
                            withRipple: T = !1,
                            ariaDescribedBy: S,
                            forwardRef: g,
                            tabIndex: I,
                            ariaHidden: L,
                            shouldSendAnalyticsOnPlayClick: E,
                        } = e,
                        C = (0, u.b)(),
                        { formatMessage: O } = (0, r.A)(),
                        j = ''.concat(f ? 'pause' : 'play').concat('filled' === n ? '_filled' : ''),
                        R = f ? l.S7.PAUSE_BUTTON : l.S7.PLAY_BUTTON,
                        h = O(f ? { id: 'player-actions.pause' } : { id: 'player-actions.play' }),
                        N = (0, s.c)((e) => {
                            (e.stopPropagation(), e.preventDefault(), null == p || p(e), E && C(!f));
                        });
                    return (0, o.jsx)(c.$, {
                        className: i,
                        variant: v,
                        color: _,
                        radius: A,
                        size: a,
                        flexIcon: !0,
                        withRipple: T,
                        'aria-label': h,
                        onClick: N,
                        icon: (0, o.jsx)(d.I, { variant: j, size: t, className: y }),
                        disabled: m,
                        withHover: b,
                        'aria-describedby': S,
                        ref: g,
                        tabIndex: I,
                        'aria-hidden': L,
                        'data-test-id': R,
                        children: x,
                    });
                }),
                p = (0, n.forwardRef)((e, t) => (0, o.jsx)(f, { forwardRef: t, ...e }));
        },
        49984: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => o });
            let o = 'onboarding-tooltip';
        },
        50209: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => l });
            var o = i(71035),
                a = i(16886),
                n = i(27954),
                r = i(30296);
            let l = (e) => {
                let { playContextParams: t, entityId: i, playbackId: l, sonataState: s } = e,
                    c = (0, r.e)(),
                    { sonataState: d } = (0, n.g)(),
                    u = s || d,
                    f = !1,
                    p = !1,
                    { contextData: y } = t,
                    {
                        type: m,
                        meta: { id: _ },
                    } = y,
                    v = u.contextId === String(_) && m === u.contextType;
                if (i) {
                    var x;
                    f = i === (null == (x = u.entityMeta) ? void 0 : x.idWithContext);
                } else f = v;
                return (
                    (p = f && u.status === a.MT.PLAYING),
                    {
                        isPlaying: p,
                        isCurrent: f,
                        togglePlay: (0, o.c)(() => {
                            var e;
                            let o = null == (e = u.entityMeta) ? void 0 : e.idWithContext;
                            if (void 0 !== i && i === o) {
                                null == c || c.togglePause(l);
                                return;
                            }
                            null == c || c.playContext(t, l);
                        }),
                        restartPlay: (0, o.c)(() => {
                            null == c || c.setProgress(0, l);
                        }),
                    }
                );
            };
        },
        50390: (e) => {
            e.exports = { notification: 'NotificationAd_notification__DNmdu' };
        },
        56120: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => n });
            var o = i(74631),
                a = i(20790);
            let n = (e) => {
                let t = (0, o.useRef)(!1),
                    i = (0, a.z)();
                (0, o.useEffect)(() => {
                    (e && (null == i || i.disable(), (t.current = !0)), !e && t.current && (null == i || i.enable(), (t.current = !1)));
                }, [e, i]);
            };
        },
        57549: (e, t, i) => {
            'use strict';
            i.d(t, { h: () => d });
            var o = i(25839),
                a = i(82298),
                n = i(69084),
                r = i(4254),
                l = i(51790),
                s = i(23775),
                c = i.n(s);
            let d = (e) => {
                let { error: t, closeToast: i, className: s } = e;
                return (0, o.jsx)(l.$, {
                    className: (0, a.$)(c().root, s),
                    message: (0, o.jsxs)(o.Fragment, {
                        children: [
                            (0, o.jsx)(n.q, { children: (0, o.jsx)('p', { role: 'alert', 'aria-label': t }) }),
                            (0, o.jsx)(r.HL, { className: c().message, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: t }),
                        ],
                    }),
                    closeToast: i,
                });
            };
        },
        59043: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => s });
            var o = i(25839),
                a = i(8487),
                n = i(61493),
                r = i(66738),
                l = i(10820);
            let s = (e) => {
                let { onClick: t, className: i, disabled: s } = e;
                return (0, o.jsx)(l.Dr, {
                    className: i,
                    onClick: t,
                    icon: (0, o.jsx)(r.I, { variant: 'trailer', size: 'xxs' }),
                    disabled: s,
                    'data-test-id': n.S7.CONTEXT_MENU_TRAILER_BUTTON,
                    children: (0, o.jsx)(a.A, { id: 'entity-names.trailer' }),
                });
            };
        },
        64720: (e, t, i) => {
            'use strict';
            i.d(t, { c: () => v });
            var o = i(25839),
                a = i(82298),
                n = i(88204),
                r = i(74631),
                l = i(39004),
                s = i(36619),
                c = i(61493),
                d = i(12913),
                u = i(4071),
                f = i(66738),
                p = i(42966),
                y = i(70992),
                m = i.n(y);
            let _ = (0, n.PA)((e) => {
                    let {
                            className: t,
                            variant: i = 'text',
                            iconSize: n,
                            isLiked: r = !1,
                            onClick: y,
                            iconClassName: _,
                            withRipple: v = !1,
                            size: x = 's',
                            forwardRef: A,
                            children: b,
                            color: T,
                            disabled: S = !1,
                            'aria-label': g,
                        } = e,
                        I = (0, p.m)(),
                        { formatMessage: L } = (0, l.A)(),
                        {
                            scaleAnimation: E,
                            unscaleAnimation: C,
                            handleAnimationEnd: O,
                            handleClick: j,
                        } = (0, d.C)({
                            shouldStartFromUnscale: r,
                            onClick: (e) => {
                                (null == y || y(e), I({ actionType: r ? s.ActionType.Unlike : s.ActionType.Like }));
                            },
                        }),
                        R = r ? 'liked' : 'like';
                    return (0, o.jsx)(u.$, {
                        className: (0, a.$)(m().root, { [m().animation_scaled]: E, [m().animation_unscaled]: C }, t),
                        color: T,
                        onAnimationEnd: O,
                        withRipple: v,
                        variant: i,
                        size: x,
                        radius: 'xxxl',
                        'aria-label': g || L({ id: 'interface-actions.like' }),
                        'aria-pressed': r,
                        onClick: j,
                        icon: (0, o.jsx)(f.I, { size: n, className: (0, a.$)(m().icon, _), variant: R }),
                        ref: A,
                        disabled: S,
                        'data-test-id': c.S7.LIKE_BUTTON,
                        children: b,
                    });
                }),
                v = (0, r.forwardRef)((e, t) => (0, o.jsx)(_, { forwardRef: t, ...e }));
        },
        69084: (e, t, i) => {
            'use strict';
            i.d(t, { q: () => c });
            var o,
                a = i(74631),
                n = {
                    5881: (e, t, i) => {
                        function o() {
                            for (var e, t, i = 0, o = ''; i < arguments.length;)
                                (e = arguments[i++]) &&
                                    (t = (function e(t) {
                                        var i,
                                            o,
                                            a = '';
                                        if ('string' == typeof t || 'number' == typeof t) a += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (i = 0; i < t.length; i++) t[i] && (o = e(t[i])) && (a && (a += ' '), (a += o));
                                            else for (i in t) t[i] && (a && (a += ' '), (a += i));
                                        return a;
                                    })(e)) &&
                                    (o && (o += ' '), (o += t));
                            return o;
                        }
                        (i.r(t), i.d(t, { clsx: () => o, default: () => a }));
                        let a = o;
                    },
                    7319: (e, t, i) => {
                        (i.r(t), i.d(t, { default: () => o }));
                        let o = { root: 'eaYyesBmJL_NbkgoYR1c', focusable: 'uL1dD5rxgI4bPmfyMMe7' };
                    },
                    9097: (e, t) => {
                        var i = Symbol.for('react.transitional.element');
                        function o(e, t, o) {
                            var a = null;
                            if ((void 0 !== o && (a = '' + o), void 0 !== t.key && (a = '' + t.key), 'key' in t))
                                for (var n in ((o = {}), t)) 'key' !== n && (o[n] = t[n]);
                            else o = t;
                            return { $$typeof: i, type: e, key: a, ref: void 0 !== (t = o.ref) ? t : null, props: o };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = o), (t.jsxs = o));
                    },
                    4377: (e, t, i) => {
                        e.exports = i(9097);
                    },
                    5531: function (e, t, i) {
                        var o =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0));
                        let a = i(4377),
                            n = i(5881),
                            r = i(810),
                            l = o(i(7319));
                        t.SROnly = (e) => {
                            let { className: t, focusable: i, children: o, ...s } = e,
                                c = (0, n.clsx)(l.default.root, { [l.default.focusable]: i }, t);
                            return (0, r.isValidElement)(o)
                                ? (0, r.cloneElement)(o, { ...s, className: (0, n.clsx)(c, o.props.className) })
                                : (0, a.jsx)('span', { className: c, ...s, children: o });
                        };
                    },
                    810: (e) => {
                        e.exports = o || (o = i.t(a, 2));
                    },
                },
                r = {};
            function l(e) {
                var t = r[e];
                if (void 0 !== t) return t.exports;
                var i = (r[e] = { exports: {} });
                return (n[e].call(i.exports, i, i.exports, l), i.exports);
            }
            ((l.d = (e, t) => {
                for (var i in t) l.o(t, i) && !l.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
            }),
                (l.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (l.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var s = {};
            (() => {
                (Object.defineProperty(s, '__esModule', { value: !0 }), (s.SROnly = void 0));
                var e = l(5531);
                Object.defineProperty(s, 'SROnly', {
                    enumerable: !0,
                    get: function () {
                        return e.SROnly;
                    },
                });
            })();
            var c = s.SROnly;
            s.__esModule;
        },
        70992: (e) => {
            e.exports = {
                animation_scaled: 'LikeButton_animation_scaled___NgPW',
                scale: 'LikeButton_scale__Gv0fD',
                animation_unscaled: 'LikeButton_animation_unscaled__YdYoQ',
                unscale: 'LikeButton_unscale__4Kprg',
            };
        },
        73810: (e, t, i) => {
            'use strict';
            i.d(t, { P: () => o });
            let o = (0, i(74631).createContext)(null);
        },
        79367: (e, t, i) => {
            'use strict';
            i.d(t, { P: () => y });
            var o = i(25839),
                a = i(71035),
                n = i(8487),
                r = i(4254),
                l = i(51790),
                s = i(50390),
                c = i.n(s);
            let d = () =>
                (0, o.jsx)(l.$, {
                    message: (0, o.jsx)(r.HL, { variant: 'div', size: 'm', className: c().notification, children: (0, o.jsx)(n.A, { id: 'ads.continue-ad' }) }),
                    coverRadius: 's',
                });
            var u = i(91149),
                f = i(92942),
                p = i(27954);
            let y = () => {
                let { notify: e } = (0, f.l)(),
                    { advert: t } = (0, p.g)();
                return (0, a.c)(() => (t.isAdvertShown && e((0, o.jsx)(d, {}), { containerId: u.u.INFO }), !!t.isAdvertShown));
            };
        },
        83014: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => o });
            var o = (function (e) {
                return ((e.ALBUM = 'album'), (e.ARTIST = 'artist'), (e.PLAYLIST = 'playlist'), (e.TRACK = 'track'), (e.UGC_TRACK = 'ugc_track'), e);
            })({});
        },
        85743: (e, t, i) => {
            'use strict';
            i.d(t, { z: () => r });
            var o = i(74631),
                a = i(91879),
                n = i(32953);
            let r = () => {
                let { sendSearchFeedback: e, id: t, type: i, blockPosition: r, position: l } = (0, o.useContext)(n.N) || {};
                if (void 0 === t || void 0 === i || void 0 === r || void 0 === l) return {};
                let s = null == e ? void 0 : e.bind(null, { feedbackType: a.n.LIKE, id: t, type: i, blockPosition: r, position: l });
                return {
                    sendLikeSearchFeedback: s,
                    sendNavigateSearchFeedback: null == e ? void 0 : e.bind(null, { feedbackType: a.n.NAVIGATE, id: t, type: i, blockPosition: r, position: l }),
                    sendPlaySearchFeedback: null == e ? void 0 : e.bind(null, { feedbackType: a.n.PLAY, id: t, type: i, blockPosition: r, position: l }),
                };
            };
        },
        91879: (e, t, i) => {
            'use strict';
            var o, a;
            (i.d(t, { n: () => a, o: () => o }),
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
                })(o || (o = {})),
                (function (e) {
                    ((e.PLAY = 'play'), (e.FRIDGE = 'fridge'), (e.NAVIGATE = 'navigate'), (e.LIKE = 'like'));
                })(a || (a = {})));
        },
        98074: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => a });
            let o = [
                    { queryKey: 'utm_campaign', resultKey: 'utmCampaign' },
                    { queryKey: 'utm_medium', resultKey: 'utmMedium' },
                    { queryKey: 'utm_source', resultKey: 'utmSource' },
                    { queryKey: 'utm_term', resultKey: 'utmTerm' },
                    { queryKey: 'yclid', resultKey: 'yclid' },
                ],
                a = (e) =>
                    o.reduce((t, i) => {
                        let { queryKey: o, resultKey: a } = i;
                        return ('string' == typeof e[o] && (t[a] = e[o]), t);
                    }, {});
        },
    },
]);
