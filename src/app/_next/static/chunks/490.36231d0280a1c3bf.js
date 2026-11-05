'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [490, 4971],
    {
        50490: (e, t, s) => {
            s.d(t, { config: () => r });
            var c = s(84971),
                n = s(3629);
            let r = () => {
                let e = (0, c.config)();
                return (e.set(n.qV, !0), e.set(n.yc, !0), e);
            };
        },
        84971: (e, t, s) => {
            s.d(t, { config: () => n });
            var c = s(3629);
            let n = () => {
                let e = new Map();
                // for PulseSync: BEGIN initialize mod developer-tools and override config flags
                return (e.set(c.qV, window.IS_DEVTOOLS_ENABLED ?? !1), e.set(c.yc, !0), e.set(c.W4, !0), e);
                // for PulseSync: END initialize mod developer-tools and override config flags
            };
        },
    },
]);
