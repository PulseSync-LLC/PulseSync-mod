export function scopeAddonCss(css: string, addonId: string): string {
    const sheet = new CSSStyleSheet()
    sheet.replaceSync(css)
    const supported = new Set(['CSSStyleRule', 'CSSMediaRule', 'CSSSupportsRule', 'CSSContainerRule', 'CSSScopeRule'])
    const readRules = (rules: CSSRuleList): string =>
        Array.from(rules)
            .map(rule => {
                if (!supported.has(rule.constructor.name))
                    throw new Error(
                        `Scoped addon CSS does not support ${rule.constructor.name}; use component styles or explicitly declare cssScope: global`,
                    )
                if ('cssRules' in rule) readRules((rule as CSSGroupingRule).cssRules)
                return rule.cssText
            })
            .join('\n')
    const rules = readRules(sheet.cssRules)
    return `@scope ([data-pulsesync-addon-scope="${CSS.escape(addonId)}"]) {\n${rules}\n}`
}
