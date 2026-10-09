'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [491, 5125],
    {
        32872: (e, t, s) => {
            s.d(t, { config: () => r });
            var c = s(89288),
                n = s(35125),
                l = s(41871);
            // for PulseSync: BEGIN retain mod config flags instead of forcing upstream defaults
            let r = () => (0, n.config)();
            // for PulseSync: END retain mod config flags instead of forcing upstream defaults
        },
        35125: (e, t, s) => {
            s.d(t, { config: () => n });
            var c = s(41871);
            let n = () => {
                let e = new Map();
                // for PulseSync: BEGIN initialize mod developer-tools and override config flags
                return (e.set(c.qV, window.IS_DEVTOOLS_ENABLED ?? !1), e.set(c.yc, !0), e.set(c.W4, !0), e);
                // for PulseSync: END initialize mod developer-tools and override config flags
            };
        },
    },
]);
