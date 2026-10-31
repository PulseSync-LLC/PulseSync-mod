'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3389, 4971],
    {
        43389: (e, t, s) => {
            s.d(t, { config: () => r });
            var c = s(35412),
                n = s(84971),
                l = s(3629);
            // for PulseSync: BEGIN retain mod config flags instead of forcing upstream defaults
            let r = () => (0, n.config)();
            // for PulseSync: END retain mod config flags instead of forcing upstream defaults
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
