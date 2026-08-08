import { Component, type ReactNode } from 'react'
import { AddonErrorFallback } from './AddonErrorFallback'

type AddonErrorBoundaryProps = {
    addonId: string
    children: ReactNode
    onError?: (error: Error) => void
}

type AddonErrorBoundaryState = {
    error: Error | null
    dismissed: boolean
}

export class AddonErrorBoundary extends Component<AddonErrorBoundaryProps, AddonErrorBoundaryState> {
    state: AddonErrorBoundaryState = { error: null, dismissed: false }

    static getDerivedStateFromError(error: Error): AddonErrorBoundaryState {
        return { error, dismissed: false }
    }

    componentDidCatch(error: Error) {
        if (this.props.onError) this.props.onError(error)
        else console.error(`[PulseSync addon: ${this.props.addonId}] React render failed`, error)
    }

    private readonly retry = () => this.setState({ error: null, dismissed: false })
    private readonly dismiss = () => this.setState({ dismissed: true })

    render() {
        if (this.state.error && !this.state.dismissed) {
            return <AddonErrorFallback addonId={this.props.addonId} error={this.state.error} onRetry={this.retry} onDismiss={this.dismiss} />
        }
        if (this.state.error) return null

        return this.props.children
    }
}
