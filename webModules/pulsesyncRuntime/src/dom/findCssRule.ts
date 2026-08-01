export function installFindCssRuleHelper() {
    window.findCssRuleByPartialName = (partialName: string) => {
        const found: string[] = [];

        for (const sheet of document.styleSheets) {
            let rules: CSSRuleList | null;
            try {
                rules = sheet.cssRules;
            } catch {
                continue;
            }
            if (!rules) continue;

            for (const rule of rules) {
                const selectorText = (rule as CSSStyleRule).selectorText;
                if (selectorText?.includes(partialName)) found.push(selectorText);
            }
        }

        return found;
    };
}

declare global {
    interface Window {
        findCssRuleByPartialName?: (partialName: string) => string[];
    }
}
