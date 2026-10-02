(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3433],
    {
        419: (e) => {
            e.exports = { body: 'layout_body__c8t_k' };
        },
        56494: (e, s, d) => {
            Promise.resolve().then(d.bind(d, 94107));
        },
        94107: (e, s, d) => {
            'use strict';
            (d.r(s), d.d(s, { default: () => u }));
            var o = d(74631),
                t = d(419),
                n = d.n(t);
            let u = (e) => {
                let { children: s } = e;
                return (
                    (0, o.useEffect)(
                        () => (
                            window.document.body.classList.add(n().body),
                            () => {
                                window.document.body.classList.remove(n().body);
                            }
                        ),
                        [],
                    ),
                    s
                );
            };
        },
    },
    (e) => {
        (e.O(0, [6520, 4475, 5056, 7358], () => e((e.s = 56494))), (_N_E = e.O()));
    },
]);
