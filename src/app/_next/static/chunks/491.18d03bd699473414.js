'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [491, 5125],
    {
        32872: (e, t, s) => {
            s.d(t, { config: () => r });
            var n = s(89288),
                _ = s(35125),
                c = s(41871);
            // for PulseSync: BEGIN retain mod config flags instead of forcing upstream defaults
            let r = () => (0, _.config)();
            // for PulseSync: END retain mod config flags instead of forcing upstream defaults
        },
        35125: (e, t, s) => {
            s.d(t, { config: () => _ });
            var n = s(41871);
            let _ = () => {
                let e = new Map();
                // for PulseSync: BEGIN initialize mod developer-tools and override config flags
                return (e.set(n.qV, window.IS_DEVTOOLS_ENABLED ?? !1), e.set(n.yc, !0), e.set(n.W4, !0), e);
                // for PulseSync: END initialize mod developer-tools and override config flags
            };
        },
    },
]);
