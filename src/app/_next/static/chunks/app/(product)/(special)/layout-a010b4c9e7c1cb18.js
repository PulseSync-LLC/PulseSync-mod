(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3433],
    {
        53143: (e, s, d) => {
            'use strict';
            d.r(s), d.d(s, { default: () => u });
            var o = d(44020),
                t = d(87187),
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
        78901: (e, s, d) => {
            Promise.resolve().then(d.bind(d, 53143));
        },
        87187: (e) => {
            e.exports = { body: 'layout_body__c8t_k' };
        },
    },
    (e) => {
        e.O(0, [4796, 1009, 4670, 7358], () => e((e.s = 78901))), (_N_E = e.O());
    },
]);
