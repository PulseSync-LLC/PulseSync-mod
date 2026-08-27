import type { WebHostThemeAsset } from '../contracts'

export class CssThemeRuntime {
    private readonly theme: WebHostThemeAsset
    private style?: HTMLStyleElement
    private destroyed = false

    constructor(theme: WebHostThemeAsset) {
        this.theme = theme
    }

    async start() {
        if (this.destroyed) throw new Error('PulseSync CSS theme runtime was destroyed')
        if (!this.theme.css.trim() || this.theme.css.trim() === '{}') throw new Error('PulseSync CSS theme stylesheet is empty')

        const style = document.createElement('style')
        style.dataset.pulsesyncTheme = this.theme.id
        style.textContent = this.theme.css
        ;(document.head || document.documentElement).append(style)
        this.style = style
    }

    destroy() {
        if (this.destroyed) return
        this.destroyed = true
        this.style?.remove()
        this.style = undefined
    }
}
